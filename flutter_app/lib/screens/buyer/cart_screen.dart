import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';
import '../../services/supabase_service.dart';
import 'order_confirmation_screen.dart';

class CartScreen extends StatefulWidget {
  const CartScreen({super.key});

  @override
  State<CartScreen> createState() => _CartScreenState();
}

class _CartScreenState extends State<CartScreen> {
  String _paymentMethod = 'upi';
  final String _deliveryAddress = 'Plot 42, Sector 22, Near Main Mandi, Chandigarh, 160022';
  final String _deliverySlot = 'Tomorrow, 8:00 AM – 10:00 AM';

  static const List<Map<String, String>> methods = [
    {'id': 'upi', 'label': 'UPI (GPay, PhonePe, Paytm)', 'icon': '📱'},
    {'id': 'card', 'label': 'Credit / Debit Card', 'icon': '💳'},
    {'id': 'netbanking', 'label': 'Net Banking', 'icon': '🏦'},
  ];

  void _handleCheckout() {
    final service = SupabaseService.instance;
    if (service.cartItems.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Your cart is empty. Add fresh produce first!')),
      );
      return;
    }

    final orderId = service.placeOrder(
      address: _deliveryAddress,
      paymentMethod: _paymentMethod,
    );

    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (_) => OrderConfirmationScreen(orderId: orderId),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final service = SupabaseService.instance;
    final items = service.cartItems;
    final itemTotal = service.cartTotal;
    const handlingFee = 15.0;
    final toPay = itemTotal > 0 ? itemTotal + handlingFee : 0.0;

    return Scaffold(
      backgroundColor: const Color(0xFFF0E8A0), // Brand warm checkout gold
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: AppTheme.textDark),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text(
          'Secure Checkout',
          style: GoogleFonts.montserrat(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: AppTheme.textDark,
          ),
        ),
        actions: const [
          Padding(
            padding: EdgeInsets.only(right: 16),
            child: Icon(Icons.lock, color: AppTheme.primary, size: 20),
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Checkout 3-step timeline
            Row(
              children: [
                _buildStep(num: '✓', label: 'Cart', isDone: true),
                _buildStepLine(),
                _buildStep(num: '✓', label: 'Address', isDone: true),
                _buildStepLine(),
                _buildStep(num: '3', label: 'Payment', isCurrent: true),
              ],
            ),
            const SizedBox(height: 20),

            // Delivery Address Card
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.95),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          const Text('📍 ', style: TextStyle(fontSize: 16)),
                          Text(
                            'Delivery Address',
                            style: GoogleFonts.montserrat(fontSize: 13, fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                      const Text(
                        'Change',
                        style: TextStyle(color: AppTheme.primary, fontSize: 11, fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Ramesh Kumar (Farm Hub)\n$_deliveryAddress',
                    style: GoogleFonts.inter(fontSize: 11, color: AppTheme.textMuted, height: 1.3),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 12),

            // Delivery Slot Card
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.95),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Row(
                children: [
                  const Text('⏰ ', style: TextStyle(fontSize: 18)),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Delivery Slot', style: GoogleFonts.montserrat(fontSize: 13, fontWeight: FontWeight.bold)),
                        Text(_deliverySlot, style: const TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                      ],
                    ),
                  ),
                  const Text(
                    'Change',
                    style: TextStyle(color: AppTheme.primary, fontSize: 11, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),

            // Order Review Card
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.95),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('Order Review', style: GoogleFonts.montserrat(fontSize: 14, fontWeight: FontWeight.bold)),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: AppTheme.chipBackground,
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          '${items.length} items',
                          style: const TextStyle(color: AppTheme.primary, fontSize: 10, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  if (items.isEmpty)
                    const Padding(
                      padding: EdgeInsets.symmetric(vertical: 20),
                      child: Center(
                        child: Text('Your cart is empty', style: TextStyle(color: AppTheme.textMuted)),
                      ),
                    )
                  else
                    ...items.map((item) {
                      return Padding(
                        padding: const EdgeInsets.only(bottom: 12),
                        child: Row(
                          children: [
                            ClipRRect(
                              borderRadius: BorderRadius.circular(12),
                              child: Image.network(
                                item.product.img,
                                width: 48,
                                height: 48,
                                fit: BoxFit.cover,
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    item.product.name,
                                    style: GoogleFonts.montserrat(fontSize: 13, fontWeight: FontWeight.bold),
                                  ),
                                  Text(
                                    '${item.qty} ${item.product.unit} • Grade A',
                                    style: const TextStyle(fontSize: 11, color: AppTheme.textMuted),
                                  ),
                                ],
                              ),
                            ),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.end,
                              children: [
                                Text(
                                  '₹${item.totalPrice.toInt()}',
                                  style: GoogleFonts.montserrat(fontSize: 13, fontWeight: FontWeight.bold),
                                ),
                                Row(
                                  children: [
                                    GestureDetector(
                                      onTap: () {
                                        service.updateCartQty(item.product.id, item.qty - 1);
                                        setState(() {});
                                      },
                                      child: Container(
                                        width: 22,
                                        height: 22,
                                        decoration: BoxDecoration(
                                          color: const Color(0xFFF3F4F6),
                                          borderRadius: BorderRadius.circular(6),
                                        ),
                                        child: const Center(child: Text('−', style: TextStyle(fontWeight: FontWeight.bold))),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.symmetric(horizontal: 8),
                                      child: Text('${item.qty}', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
                                    ),
                                    GestureDetector(
                                      onTap: () {
                                        service.updateCartQty(item.product.id, item.qty + 1);
                                        setState(() {});
                                      },
                                      child: Container(
                                        width: 22,
                                        height: 22,
                                        decoration: BoxDecoration(
                                          color: AppTheme.chipBackground,
                                          borderRadius: BorderRadius.circular(6),
                                        ),
                                        child: const Center(child: Text('+', style: TextStyle(color: AppTheme.primary, fontWeight: FontWeight.bold))),
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ],
                        ),
                      );
                    }),
                ],
              ),
            ),
            const SizedBox(height: 16),

            // Payment Methods
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.95),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Payment Method', style: GoogleFonts.montserrat(fontSize: 14, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 12),
                  ...methods.map((m) {
                    final isSel = _paymentMethod == m['id'];
                    return GestureDetector(
                      onTap: () => setState(() => _paymentMethod = m['id']!),
                      child: Container(
                        margin: const EdgeInsets.only(bottom: 8),
                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                        decoration: BoxDecoration(
                          color: isSel ? const Color(0xFFF0FDF4) : Colors.white,
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(
                            color: isSel ? AppTheme.primary : AppTheme.borderColor,
                            width: isSel ? 2 : 1,
                          ),
                        ),
                        child: Row(
                          children: [
                            Icon(
                              isSel ? Icons.radio_button_checked : Icons.radio_button_off,
                              color: isSel ? AppTheme.primary : AppTheme.textMuted,
                              size: 18,
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Text(
                                m['label']!,
                                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600),
                              ),
                            ),
                            Text(m['icon']!, style: const TextStyle(fontSize: 16)),
                          ],
                        ),
                      ),
                    );
                  }),
                ],
              ),
            ),
            const SizedBox(height: 16),

            // Price Breakdown
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.95),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text('Items Total', style: TextStyle(fontSize: 12, color: AppTheme.textMuted)),
                      Text('₹${itemTotal.toInt()}', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: const [
                      Text('Logistics & Packaging', style: TextStyle(fontSize: 12, color: AppTheme.textMuted)),
                      Text('₹15', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                    ],
                  ),
                  const Divider(height: 20, color: AppTheme.borderColor),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('Total to Pay', style: GoogleFonts.montserrat(fontSize: 14, fontWeight: FontWeight.bold)),
                      Text(
                        '₹${toPay.toInt()}',
                        style: GoogleFonts.montserrat(fontSize: 18, fontWeight: FontWeight.w900, color: AppTheme.primary),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            // Checkout CTA
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: items.isEmpty ? null : _handleCheckout,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Icon(Icons.lock, size: 16),
                    const SizedBox(width: 8),
                    Text('Place Order (₹${toPay.toInt()}) →'),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }

  Widget _buildStep({required String num, required String label, bool isDone = false, bool isCurrent = false}) {
    return Column(
      children: [
        Container(
          width: 26,
          height: 26,
          decoration: BoxDecoration(
            color: isDone ? AppTheme.primary : isCurrent ? Colors.white : Colors.white.withOpacity(0.4),
            shape: BoxShape.circle,
            border: Border.all(color: AppTheme.primary, width: 2),
          ),
          child: Center(
            child: Text(
              num,
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: isDone ? Colors.white : AppTheme.primary,
              ),
            ),
          ),
        ),
        const SizedBox(height: 4),
        Text(
          label,
          style: TextStyle(
            fontSize: 10,
            fontWeight: FontWeight.bold,
            color: isCurrent || isDone ? AppTheme.primary : AppTheme.textMuted,
          ),
        ),
      ],
    );
  }

  Widget _buildStepLine() {
    return Expanded(
      child: Container(
        height: 2,
        margin: const EdgeInsets.symmetric(horizontal: 4),
        color: AppTheme.primary,
      ),
    );
  }
}
