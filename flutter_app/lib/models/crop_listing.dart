class CropListing {
  final String id;
  final String farmerName;
  final String cropName;
  final String category;
  final double quantity;
  final String unit;
  final String grade;
  final double askingPrice;
  final String city;
  final String state;
  final String photoUrl;
  final int colorScore;
  final int moistureScore;
  final int defectRate;
  final int freshnessScore;
  final String aiRecommendation;
  final String status;
  final int viewsCount;

  CropListing({
    required this.id,
    required this.farmerName,
    required this.cropName,
    required this.category,
    required this.quantity,
    this.unit = 'kg',
    this.grade = 'Grade A',
    required this.askingPrice,
    required this.city,
    required this.state,
    required this.photoUrl,
    this.colorScore = 94,
    this.moistureScore = 88,
    this.defectRate = 3,
    this.freshnessScore = 96,
    this.aiRecommendation = '',
    this.status = 'active',
    this.viewsCount = 142,
  });

  factory CropListing.fromJson(Map<String, dynamic> json) {
    return CropListing(
      id: json['id']?.toString() ?? '',
      farmerName: json['farmer_name'] ?? 'Ramesh Kumar',
      cropName: json['crop_name'] ?? 'Tomatoes',
      category: json['category'] ?? 'Vegetables',
      quantity: (json['quantity'] as num?)?.toDouble() ?? 500.0,
      unit: json['unit'] ?? 'kg',
      grade: json['grade'] ?? 'Grade A',
      askingPrice: (json['asking_price'] as num?)?.toDouble() ?? 42.0,
      city: json['city'] ?? 'Ludhiana',
      state: json['state'] ?? 'Punjab',
      photoUrl: json['photo_url'] ?? '',
      colorScore: json['color_score'] ?? 94,
      moistureScore: json['moisture_score'] ?? 92,
      defectRate: json['defect_rate'] ?? 3,
      freshnessScore: json['freshness_score'] ?? 96,
      aiRecommendation: json['ai_recommendation'] ?? '',
      status: json['status'] ?? 'active',
      viewsCount: json['views_count'] ?? 142,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'farmer_name': farmerName,
      'crop_name': cropName,
      'category': category,
      'quantity': quantity,
      'unit': unit,
      'grade': grade,
      'asking_price': askingPrice,
      'city': city,
      'state': state,
      'photo_url': photoUrl,
      'color_score': colorScore,
      'moisture_score': moistureScore,
      'defect_rate': defectRate,
      'freshness_score': freshnessScore,
      'ai_recommendation': aiRecommendation,
      'status': status,
    };
  }
}
