import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';
import '../../services/supabase_service.dart';
import '../farmer/crop_upload_screen.dart';
import '../buyer/marketplace_screen.dart';
import '../common/fpo_hub_screen.dart';

class FarmerLoginScreen extends StatefulWidget {
  const FarmerLoginScreen({super.key});

  @override
  State<FarmerLoginScreen> createState() => _FarmerLoginScreenState();
}

class _FarmerLoginScreenState extends State<FarmerLoginScreen> {
  String _role = 'farmer'; // 'farmer', 'buyer', 'fpo'
  String _selectedLang = 'en';
  final TextEditingController _mobileController = TextEditingController(text: '98765 43210');
  final TextEditingController _pinController = TextEditingController(text: '4321');
  final TextEditingController _aadhaarController = TextEditingController();
  final TextEditingController _otpController = TextEditingController();

  bool _obscurePin = true;
  bool _otpSent = false;
  bool _isSendingOtp = false;
  bool _aadhaarVerified = false;

  static const List<Map<String, String>> langs = [
    {'code': 'en', 'label': 'EN', 'name': 'English'},
    {'code': 'hi', 'label': 'हि', 'name': 'हिंदी'},
    {'code': 'pa', 'label': 'ਪੰ', 'name': 'ਪੰਜਾਬੀ'},
    {'code': 'ta', 'label': 'த', 'name': 'தமிழ்'},
    {'code': 'ml', 'label': 'മ', 'name': 'മലയാളം'},
    {'code': 'kn', 'label': 'ಕ', 'name': 'ಕನ್ನಡ'},
    {'code': 'gu', 'label': 'ગ', 'name': 'ગુજરાતી'},
  ];

  void _handleLogin() {
    final service = SupabaseService.instance;
    service.login(role: _role, phone: _mobileController.text);

    if (_role == 'farmer') {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (_) => const CropUploadScreen()),
      );
    } else if (_role == 'fpo') {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (_) => const FPOHubScreen()),
      );
    } else {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (_) => const MarketplaceScreen()),
      );
    }
  }

  void _sendAadhaarOtp() {
    if (_aadhaarController.text.length < 12) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please enter valid 12-digit Aadhaar number')),
      );
      return;
    }

    setState(() => _isSendingOtp = true);
    Future.delayed(const Duration(seconds: 1), () {
      if (mounted) {
        setState(() {
          _isSendingOtp = false;
          _otpSent = true;
          _otpController.text = '582914';
        });
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('OTP sent successfully to UIDAI registered mobile!')),
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF0E8A0),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero Top Section
            Stack(
              children: [
                Container(
                  height: 220,
                  width: double.infinity,
                  decoration: const BoxDecoration(
                    image: DecorationImage(
                      image: NetworkImage(
                        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&q=85&fit=crop',
                      ),
                      fit: BoxFit.cover,
                    ),
                  ),
                  child: Container(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [
                          Colors.black.withOpacity(0.3),
                          Colors.black.withOpacity(0.75),
                        ],
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                      ),
                    ),
                  ),
                ),
                SafeArea(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        IconButton(
                          icon: const Icon(Icons.arrow_back, color: Colors.white),
                          onPressed: () => Navigator.of(context).pop(),
                          style: IconButton.styleFrom(
                            backgroundColor: Colors.white.withOpacity(0.2),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                          ),
                        ),
                        // Language Chips
                        SizedBox(
                          height: 32,
                          child: ListView.separated(
                            scrollDirection: Axis.horizontal,
                            shrinkWrap: true,
                            itemCount: langs.length,
                            separatorBuilder: (_, __) => const SizedBox(width: 4),
                            itemBuilder: (context, i) {
                              final l = langs[i];
                              final isSel = _selectedLang == l['code'];
                              return GestureDetector(
                                onTap: () {
                                  setState(() => _selectedLang = l['code']!);
                                  SupabaseService.instance.setLanguage(l['code']!);
                                },
                                child: Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                                  decoration: BoxDecoration(
                                    color: isSel ? Colors.white : Colors.white.withOpacity(0.25),
                                    borderRadius: BorderRadius.circular(8),
                                  ),
                                  child: Center(
                                    child: Text(
                                      l['label']!,
                                      style: TextStyle(
                                        color: isSel ? AppTheme.deepGreen : Colors.white,
                                        fontWeight: FontWeight.bold,
                                        fontSize: 11,
                                      ),
                                    ),
                                  ),
                                ),
                              );
                            },
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Positioned(
                  bottom: 16,
                  left: 20,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Welcome back',
                        style: GoogleFonts.montserrat(
                          fontSize: 24,
                          fontWeight: FontWeight.w900,
                          color: AppTheme.gold,
                        ),
                      ),
                      Text(
                        'Sign in to KisanChowk',
                        style: GoogleFonts.inter(
                          fontSize: 14,
                          color: Colors.white.withOpacity(0.8),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),

            // Form Area
            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Role Toggle
                  Container(
                    padding: const EdgeInsets.all(4),
                    decoration: BoxDecoration(
                      color: const Color(0xFFE8DD8A),
                      borderRadius: BorderRadius.circular(18),
                    ),
                    child: Row(
                      children: [
                        _buildRoleTab('farmer', '🌱 Farmer'),
                        _buildRoleTab('buyer', '🛒 Buyer'),
                        _buildRoleTab('fpo', '🌿 FPO'),
                      ],
                    ),
                  ),
                  const SizedBox(height: 16),

                  // Info Note
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFEF3A0),
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: const Color(0xFFD4C040)),
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('ℹ️ ', style: TextStyle(fontSize: 16)),
                        Expanded(
                          child: Text(
                            _role == 'fpo'
                                ? 'FPO Hub requires UIDAI Aadhaar verification to ensure pooled cluster authenticity.'
                                : 'Enter your registered mobile number and PIN to access your verified profile.',
                            style: GoogleFonts.inter(
                              fontSize: 11,
                              color: const Color(0xFF92400E),
                              height: 1.3,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 20),

                  // Standard Farmer / Buyer Login
                  if (_role != 'fpo') ...[
                    Text(
                      'Mobile Number',
                      style: GoogleFonts.inter(
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                        color: AppTheme.textDark,
                      ),
                    ),
                    const SizedBox(height: 6),
                    TextField(
                      controller: _mobileController,
                      keyboardType: TextInputType.phone,
                      decoration: const InputDecoration(
                        prefixIcon: Icon(Icons.phone_android, color: AppTheme.primary),
                        hintText: 'Enter 10-digit mobile number',
                      ),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      'Security PIN',
                      style: GoogleFonts.inter(
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                        color: AppTheme.textDark,
                      ),
                    ),
                    const SizedBox(height: 6),
                    TextField(
                      controller: _pinController,
                      obscureText: _obscurePin,
                      keyboardType: TextInputType.number,
                      decoration: InputDecoration(
                        prefixIcon: const Icon(Icons.lock_outline, color: AppTheme.primary),
                        suffixIcon: IconButton(
                          icon: Icon(
                            _obscurePin ? Icons.visibility_off : Icons.visibility,
                            color: AppTheme.textMuted,
                          ),
                          onPressed: () => setState(() => _obscurePin = !_obscurePin),
                        ),
                        hintText: '4-digit security PIN',
                      ),
                    ),
                    const SizedBox(height: 16),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: AppTheme.borderColor),
                      ),
                      child: Row(
                        children: [
                          const Text('🌾 ', style: TextStyle(fontSize: 16)),
                          Text(
                            _role == 'farmer'
                                ? 'Punjab Farmer • Verified ✓'
                                : 'Direct Institutional Buyer • Verified ✓',
                            style: const TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w600,
                              color: AppTheme.primary,
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 24),
                    SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                        onPressed: _handleLogin,
                        child: Text(
                          _role == 'farmer' ? 'Sign In as Farmer →' : 'Sign In as Buyer →',
                        ),
                      ),
                    ),
                  ],

                  // FPO Aadhaar Login
                  if (_role == 'fpo') ...[
                    Text(
                      'Aadhaar Number',
                      style: GoogleFonts.inter(
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                        color: AppTheme.textDark,
                      ),
                    ),
                    const SizedBox(height: 6),
                    TextField(
                      controller: _aadhaarController,
                      keyboardType: TextInputType.number,
                      maxLength: 14,
                      decoration: const InputDecoration(
                        prefixIcon: Icon(Icons.badge_outlined, color: AppTheme.primary),
                        hintText: 'XXXX-XXXX-XXXX',
                        counterText: '',
                      ),
                    ),
                    const SizedBox(height: 14),
                    if (!_otpSent)
                      SizedBox(
                        width: double.infinity,
                        child: OutlinedButton(
                          onPressed: _isSendingOtp ? null : _sendAadhaarOtp,
                          style: OutlinedButton.styleFrom(
                            backgroundColor: Colors.white,
                            side: const BorderSide(color: AppTheme.primary),
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                          ),
                          child: _isSendingOtp
                              ? const SizedBox(
                                  width: 20,
                                  height: 20,
                                  child: CircularProgressIndicator(strokeWidth: 2),
                                )
                              : const Text('Send OTP via UIDAI'),
                        ),
                      ),
                    if (_otpSent) ...[
                      Text(
                        'UIDAI 6-Digit OTP',
                        style: GoogleFonts.inter(
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                          color: AppTheme.textDark,
                        ),
                      ),
                      const SizedBox(height: 6),
                      TextField(
                        controller: _otpController,
                        keyboardType: TextInputType.number,
                        decoration: const InputDecoration(
                          prefixIcon: Icon(Icons.key, color: AppTheme.primary),
                          hintText: 'Enter 6-digit OTP',
                        ),
                      ),
                      const SizedBox(height: 24),
                      SizedBox(
                        width: double.infinity,
                        child: ElevatedButton(
                          onPressed: () {
                            setState(() => _aadhaarVerified = true);
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text('Aadhaar Verified! Entering FPO Hub.')),
                            );
                            Future.delayed(const Duration(milliseconds: 600), _handleLogin);
                          },
                          child: const Text('Verify & Enter FPO Hub →'),
                        ),
                      ),
                    ],
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildRoleTab(String r, String label) {
    final isSel = _role == r;
    return Expanded(
      child: GestureDetector(
        onTap: () {
          setState(() {
            _role = r;
            _otpSent = false;
            _aadhaarVerified = false;
          });
        },
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: BoxDecoration(
            color: isSel ? AppTheme.deepGreen : Colors.transparent,
            borderRadius: BorderRadius.circular(14),
          ),
          child: Center(
            child: Text(
              label,
              style: GoogleFonts.montserrat(
                fontSize: 12,
                fontWeight: FontWeight.bold,
                color: isSel ? Colors.white : AppTheme.textDark,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
