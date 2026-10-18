import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../models/crop_listing.dart';
import '../models/offer.dart';
import '../models/order_model.dart';
import '../models/product.dart';
import '../models/user_profile.dart';

class SupabaseService extends ChangeNotifier {
  static final SupabaseService instance = SupabaseService._internal();
  SupabaseService._internal();

  // Supabase Configuration
  // Note: For production or your hackathon Supabase project, populate these.
  // Never hardcode service-role keys here; only the anon key is safe for client apps.
  static const String supabaseUrl = String.fromEnvironment('SUPABASE_URL', defaultValue: '');
  static const String supabaseAnonKey = String.fromEnvironment('SUPABASE_ANON_KEY', defaultValue: '');

  bool _isInitialized = false;
  bool get isConnectedToSupabase => _isInitialized && supabaseUrl.isNotEmpty;

  // Current State
  UserProfile _currentUser = UserProfile(
    id: 'farmer-ramesh-1',
    role: 'farmer',
    name: 'Ramesh Kumar',
    phone: '98765 43210',
    state: 'Punjab',
    district: 'Ludhiana',
    isVerified: true,
  );
  UserProfile get currentUser => _currentUser;

  List<CropListing> _listings = [];
  List<CropListing> get listings => _listings;

  List<BuyerOffer> _offers = [];
  List<BuyerOffer> get offers => _offers;

  List<Product> _products = [];
  List<Product> get products => _products;

  final List<CartItem> _cartItems = [];
  List<CartItem> get cartItems => List.unmodifiable(_cartItems);

  final List<OrderModel> _orders = [];
  List<OrderModel> get orders => List.unmodifiable(_orders);

  String _currentLanguage = 'en';
  String get currentLanguage => _currentLanguage;

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  String? _errorMessage;
  String? get errorMessage => _errorMessage;

  // Initialize service
  Future<void> initialize() async {
    _isLoading = true;
    notifyListeners();

    try {
      if (supabaseUrl.isNotEmpty && supabaseAnonKey.isNotEmpty) {
        await Supabase.initialize(
          url: supabaseUrl,
          anonKey: supabaseAnonKey,
        );
        _isInitialized = true;
        await _fetchFromSupabase();
      } else {
        // Load high-fidelity local state
        _loadDefaultState();
      }
    } catch (e) {
      debugPrint('Supabase connection warning: $e. Falling back to local state.');
      _loadDefaultState();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void _loadDefaultState() {
    _products = [
      Product(
        id: 1,
        name: 'Organic Tomatoes',
        farmer: 'Ramesh K, Punjab',
        price: 40,
        unit: 'kg',
        badge: 'Grade A',
        img: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=85&fit=crop',
        farmerType: 'farm',
      ),
      Product(
        id: 2,
        name: 'Basmati Rice',
        farmer: 'Green FPO, Haryana',
        price: 85,
        unit: 'kg',
        badge: 'Premium',
        img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=85&fit=crop',
        farmerType: 'fpo',
      ),
      Product(
        id: 3,
        name: 'Fresh Spinach',
        farmer: 'Sun Farms, UP',
        price: 20,
        unit: 'bunch',
        delivery: 'Next Day',
        img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=85&fit=crop',
        farmerType: 'farm',
      ),
      Product(
        id: 4,
        name: 'Red Onions',
        farmer: 'Sharma Farms, MH',
        price: 25,
        unit: 'kg',
        img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&q=85&fit=crop',
        farmerType: 'farm',
      ),
      Product(
        id: 5,
        name: 'Baby Potatoes',
        farmer: 'Kumar Farms, UP',
        price: 18,
        unit: 'kg',
        badge: 'Organic',
        img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=85&fit=crop',
        farmerType: 'farm',
      ),
      Product(
        id: 6,
        name: 'Alphonso Mangoes',
        farmer: 'Ratnagiri FPO, MH',
        price: 220,
        unit: 'dozen',
        badge: 'Seasonal',
        img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=85&fit=crop',
        farmerType: 'fpo',
      ),
    ];

    _listings = [
      CropListing(
        id: 'L001',
        farmerName: 'Ramesh Kumar',
        cropName: 'Tomatoes',
        category: 'Vegetables',
        quantity: 500,
        unit: 'kg',
        grade: 'Grade A',
        askingPrice: 42,
        city: 'Ludhiana',
        state: 'Punjab',
        photoUrl: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=85&fit=crop',
        colorScore: 94,
        moistureScore: 92,
        defectRate: 3,
        freshnessScore: 96,
        aiRecommendation: 'Your Tomatoes qualify for premium export markets. List ₹10–15 above standard rate.',
        status: 'active',
        viewsCount: 142,
      ),
    ];

    _offers = [
      BuyerOffer(
        id: 'A',
        buyer: 'FreshMart Delhi',
        initials: 'FM',
        colorHex: 0xFF0EA5E9,
        offer: 40,
        qty: 300,
        rating: 4.8,
        badge: 'Top Buyer',
      ),
      BuyerOffer(
        id: 'B',
        buyer: 'Reliance Fresh',
        initials: 'RF',
        colorHex: 0xFF8B5CF6,
        offer: 38,
        qty: 500,
        rating: 4.6,
        badge: 'Bulk Order',
      ),
      BuyerOffer(
        id: 'C',
        buyer: 'Local Mandi',
        initials: 'LM',
        colorHex: 0xFFF97316,
        offer: 35,
        qty: 200,
        rating: 4.2,
        badge: 'Quick Pay',
      ),
    ];

    _orders.add(
      OrderModel(
        orderId: 'KD-8924',
        date: 'Today',
        address: 'Plot 42, Sector 22, Chandigarh',
        totalAmount: 12000,
        status: 'In Transit',
        items: ['Tomatoes 300kg'],
      ),
    );
  }

  Future<void> _fetchFromSupabase() async {
    try {
      final response = await Supabase.instance.client
          .from('crop_listings')
          .select()
          .order('created_at', ascending: false);

      if (response.isNotEmpty) {
        _listings = (response as List).map((item) => CropListing.fromJson(item)).toList();
      }
    } catch (e) {
      debugPrint('Error reading Supabase listings: $e');
    }
  }

  // Auth & Roles
  void setRole(String role) {
    _currentUser = _currentUser.copyWith(role: role);
    notifyListeners();
  }

  void setLanguage(String lang) {
    _currentLanguage = lang;
    _currentUser = _currentUser.copyWith(language: lang);
    notifyListeners();
  }

  void login({required String role, required String phone, String name = 'Ramesh Kumar'}) {
    _currentUser = UserProfile(
      id: 'usr-${DateTime.now().millisecondsSinceEpoch}',
      role: role,
      name: role == 'buyer' ? 'Delhi Wholesale Buyer' : role == 'fpo' ? 'Maha Agri FPO Member' : name,
      phone: phone,
      isVerified: true,
      language: _currentLanguage,
    );
    notifyListeners();
  }

  // Crop Listing Methods
  Future<void> addListing(CropListing listing) async {
    _isLoading = true;
    notifyListeners();

    try {
      if (isConnectedToSupabase) {
        await Supabase.instance.client.from('crop_listings').insert(listing.toJson());
      }
      _listings.insert(0, listing);
    } catch (e) {
      debugPrint('Supabase insert listing error: $e');
      _listings.insert(0, listing);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  // Offers Negotiation Methods
  void acceptOffer(String offerId) {
    final index = _offers.indexWhere((o) => o.id == offerId);
    if (index != -1) {
      _offers[index] = _offers[index].copyWith(status: 'accepted');
      notifyListeners();
    }
  }

  void counterOffer(String offerId, double newPrice) {
    final index = _offers.indexWhere((o) => o.id == offerId);
    if (index != -1) {
      _offers[index] = _offers[index].copyWith(
        offer: newPrice,
        status: 'countered',
      );
      notifyListeners();
    }
  }

  // Cart Methods
  void addToCart(Product product) {
    final existingIndex = _cartItems.indexWhere((item) => item.product.id == product.id);
    if (existingIndex >= 0) {
      _cartItems[existingIndex].qty += 1;
    } else {
      _cartItems.add(CartItem(product: product, qty: 1));
    }
    notifyListeners();
  }

  void updateCartQty(int productId, int qty) {
    if (qty <= 0) {
      _cartItems.removeWhere((item) => item.product.id == productId);
    } else {
      final index = _cartItems.indexWhere((item) => item.product.id == productId);
      if (index >= 0) {
        _cartItems[index].qty = qty;
      }
    }
    notifyListeners();
  }

  void clearCart() {
    _cartItems.clear();
    notifyListeners();
  }

  int get cartCount => _cartItems.fold(0, (sum, item) => sum + item.qty);
  double get cartTotal => _cartItems.fold(0.0, (sum, item) => sum + item.totalPrice);

  // Orders
  String placeOrder({
    required String address,
    required String paymentMethod,
  }) {
    final orderId = 'KD-${10000 + DateTime.now().millisecond % 90000}';
    final newOrder = OrderModel(
      orderId: orderId,
      date: 'Today',
      address: address,
      totalAmount: cartTotal + 15.0, // handling fee ₹15
      status: 'Confirmed',
      items: _cartItems.map((c) => '${c.product.name} x ${c.qty}${c.product.unit}').toList(),
    );
    _orders.insert(0, newOrder);
    clearCart();
    notifyListeners();
    return orderId;
  }
}
