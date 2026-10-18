class OrderModel {
  final String orderId;
  final String date;
  final String deliveryTime;
  final String address;
  final double totalAmount;
  final String status;
  final List<String> items;

  OrderModel({
    required this.orderId,
    required this.date,
    this.deliveryTime = '8:00 AM – 10:00 AM',
    required this.address,
    required this.totalAmount,
    this.status = 'Confirmed',
    required this.items,
  });
}
