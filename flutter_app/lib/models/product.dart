class Product {
  final int id;
  final String name;
  final String farmer;
  final double price;
  final String unit;
  final String? badge;
  final String img;
  final String? delivery;
  final String farmerType; // 'farm' or 'fpo'

  Product({
    required this.id,
    required this.name,
    required this.farmer,
    required this.price,
    this.unit = 'kg',
    this.badge,
    required this.img,
    this.delivery,
    this.farmerType = 'farm',
  });
}

class CartItem {
  final Product product;
  int qty;

  CartItem({
    required this.product,
    this.qty = 1,
  });

  double get totalPrice => product.price * qty;
}
