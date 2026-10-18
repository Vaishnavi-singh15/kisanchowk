class UserProfile {
  final String id;
  final String role; // 'farmer', 'buyer', 'fpo'
  final String name;
  final String phone;
  final String state;
  final String district;
  final bool isVerified;
  final String language;

  UserProfile({
    required this.id,
    required this.role,
    required this.name,
    required this.phone,
    this.state = 'Punjab',
    this.district = 'Ludhiana',
    this.isVerified = true,
    this.language = 'en',
  });

  UserProfile copyWith({
    String? role,
    String? name,
    String? phone,
    String? state,
    String? district,
    bool? isVerified,
    String? language,
  }) {
    return UserProfile(
      id: id,
      role: role ?? this.role,
      name: name ?? this.name,
      phone: phone ?? this.phone,
      state: state ?? this.state,
      district: district ?? this.district,
      isVerified: isVerified ?? this.isVerified,
      language: language ?? this.language,
    );
  }
}
