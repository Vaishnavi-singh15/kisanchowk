class CropQualityAnalysis {
  final int colorScore;
  final int moistureScore;
  final int defectRate;
  final int freshnessScore;
  final String grade;
  final String gradeLabel;
  final String recommendation;

  CropQualityAnalysis({
    required this.colorScore,
    required this.moistureScore,
    required this.defectRate,
    required this.freshnessScore,
    required this.grade,
    required this.gradeLabel,
    required this.recommendation,
  });
}

class AIService {
  static final Map<String, CropQualityAnalysis> _qualityPresets = {
    'Tomatoes': CropQualityAnalysis(
      colorScore: 94,
      moistureScore: 92,
      defectRate: 3,
      freshnessScore: 96,
      grade: 'A',
      gradeLabel: 'Export Quality — Premium',
      recommendation: 'Your Tomatoes qualify for premium export markets. List ₹10–15 above standard mandi rate.',
    ),
    'Potatoes': CropQualityAnalysis(
      colorScore: 88,
      moistureScore: 78,
      defectRate: 5,
      freshnessScore: 90,
      grade: 'A',
      gradeLabel: 'Processing Grade — High Starch',
      recommendation: 'Excellent starch content. Ideal for wholesale chips and commercial food processing units.',
    ),
    'Onions': CropQualityAnalysis(
      colorScore: 91,
      moistureScore: 72,
      defectRate: 4,
      freshnessScore: 93,
      grade: 'A',
      gradeLabel: 'Grade A — Long Shelf Life',
      recommendation: 'Outer skin uniformity is high. Premium grade suited for retail packaging and long-distance transport.',
    ),
    'Wheat': CropQualityAnalysis(
      colorScore: 85,
      moistureScore: 12,
      defectRate: 2,
      freshnessScore: 97,
      grade: 'A',
      gradeLabel: 'Grade A — Low Moisture',
      recommendation: 'Optimal 12% moisture ensures long shelf life without fungus. Ideal for flour mills and MSP procurement.',
    ),
    'Rice': CropQualityAnalysis(
      colorScore: 90,
      moistureScore: 14,
      defectRate: 3,
      freshnessScore: 95,
      grade: 'A',
      gradeLabel: 'Export Grade Basmati',
      recommendation: 'Head rice ratio is strong (>90%). Excellent for premium retail packaging and export clearance.',
    ),
  };

  static CropQualityAnalysis analyzeCrop(String cropType) {
    return _qualityPresets[cropType] ?? _qualityPresets['Tomatoes']!;
  }

  static double getRecommendedPrice(String cropType) {
    switch (cropType) {
      case 'Tomatoes':
        return 42.0;
      case 'Potatoes':
        return 18.0;
      case 'Onions':
        return 25.0;
      case 'Wheat':
        return 24.5;
      case 'Rice':
        return 85.0;
      case 'Spinach':
        return 20.0;
      case 'Mangoes':
        return 220.0;
      default:
        return 35.0;
    }
  }

  static List<String> getPriceDrivers(String cropType) {
    return [
      'Demand up 15% this week in northern regional hubs',
      'Recent unseasonal showers reduced nearby open-market supply by 8%',
      '3 bulk institutional buyers currently seeking active supply within 50 km',
      'AI certified Grade A quality commands a verified 8% premium',
    ];
  }

  static String getChatResponse(String query) {
    final q = query.toLowerCase();
    if (q.contains('msp') || q.contains('wheat') || q.contains('price')) {
      return 'The Government Minimum Support Price (MSP) for Wheat (Rabi season) is ₹2,275 per quintal. On KisanChowk, premium quality is currently trading between ₹2,350 to ₹2,450 directly to private flour mills!';
    } else if (q.contains('blight') || q.contains('tomato') || q.contains('disease')) {
      return 'For early tomato blight, avoid overhead sprinkler watering, ensure proper crop spacing for air circulation, and apply copper-based fungicide or Trichoderma viride bio-fungicide in early stages.';
    } else if (q.contains('scheme') || q.contains('pm-kisan')) {
      return 'Under PM-KISAN, eligible farmer families receive ₹6,000 annually in three equal installments of ₹2,000 directly via DBT. You can check your e-KYC status at pmkisan.gov.in.';
    } else if (q.contains('onion') || q.contains('sell')) {
      return 'Onion demand is forecasted to rise in the next 10-14 days due to depleted buffer stocks in southern mandis. If you have ventilated storage, staggered selling next week will yield ₹2-3 more per kg.';
    } else {
      return 'Namaste! KisanChowk AI monitors mandi rates, weather patterns, and logistics corridors across 20+ states to ensure you get the fairest farmgate return. How can I help your harvest today?';
    }
  }
}
