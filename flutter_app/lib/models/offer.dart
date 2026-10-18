class BuyerOffer {
  final String id;
  final String buyer;
  final String initials;
  final int colorHex;
  final double offer;
  final double qty;
  final double rating;
  final String badge;
  final String status; // 'pending', 'countered', 'accepted', 'rejected'

  BuyerOffer({
    required this.id,
    required this.buyer,
    required this.initials,
    required this.colorHex,
    required this.offer,
    required this.qty,
    required this.rating,
    required this.badge,
    this.status = 'pending',
  });

  double get total => offer * qty;

  BuyerOffer copyWith({
    String? status,
    double? offer,
  }) {
    return BuyerOffer(
      id: id,
      buyer: buyer,
      initials: initials,
      colorHex: colorHex,
      offer: offer ?? this.offer,
      qty: qty,
      rating: rating,
      badge: badge,
      status: status ?? this.status,
    );
  }
}
