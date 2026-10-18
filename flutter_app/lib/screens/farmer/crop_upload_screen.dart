import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';
import 'ai_analysis_screen.dart';

class CropUploadScreen extends StatefulWidget {
  const CropUploadScreen({super.key});

  @override
  State<CropUploadScreen> createState() => _CropUploadScreenState();
}

class _CropUploadScreenState extends State<CropUploadScreen> {
  String _selectedCrop = 'Tomatoes';
  String _selectedGrade = 'Grade A';
  String _selectedUnit = 'kg';
  final TextEditingController _qtyController = TextEditingController(text: '500');
  bool _photoAdded = true;
  String _selectedLocation = 'Ludhiana, Punjab';

  static const List<String> crops = [
    'Tomatoes',
    'Potatoes',
    'Onions',
    'Wheat',
    'Rice',
    'Maize',
    'Sugarcane',
    'Cotton',
    'Soybean',
  ];

  static const Map<String, String> cropImages = {
    'Tomatoes': 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=85&fit=crop',
    'Potatoes': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=85&fit=crop',
    'Onions': 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&q=85&fit=crop',
    'Wheat': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=85&fit=crop',
    'Rice': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=85&fit=crop',
    'Maize': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=85&fit=crop',
    'Sugarcane': 'https://images.unsplash.com/photo-1621684541892-bf70f4e67dba?w=600&q=85&fit=crop',
    'Cotton': 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=85&fit=crop',
    'Soybean': 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=600&q=85&fit=crop',
  };

  void _proceedToAI() {
    final qty = double.tryParse(_qtyController.text) ?? 500.0;
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (_) => AIAnalysisScreen(
          cropType: _selectedCrop,
          cropQty: qty,
          unit: _selectedUnit,
          location: _selectedLocation,
          cropImage: cropImages[_selectedCrop] ?? cropImages['Tomatoes']!,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final currentImg = cropImages[_selectedCrop] ?? cropImages['Tomatoes']!;

    return Scaffold(
      backgroundColor: AppTheme.background,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: AppTheme.textDark),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text(
          'List Your Crop',
          style: GoogleFonts.montserrat(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: AppTheme.textDark,
          ),
        ),
        actions: const [
          Center(
            child: Padding(
              padding: EdgeInsets.only(right: 16),
              child: Text(
                '1 of 3',
                style: TextStyle(color: AppTheme.textMuted, fontWeight: FontWeight.w600),
              ),
            ),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Progress Bar
              Row(
                children: [
                  Expanded(
                    child: Container(
                      height: 6,
                      decoration: BoxDecoration(
                        color: AppTheme.primary,
                        borderRadius: BorderRadius.circular(3),
                      ),
                    ),
                  ),
                  const SizedBox(width: 6),
                  Expanded(
                    child: Container(
                      height: 6,
                      decoration: BoxDecoration(
                        color: AppTheme.borderColor,
                        borderRadius: BorderRadius.circular(3),
                      ),
                    ),
                  ),
                  const SizedBox(width: 6),
                  Expanded(
                    child: Container(
                      height: 6,
                      decoration: BoxDecoration(
                        color: AppTheme.borderColor,
                        borderRadius: BorderRadius.circular(3),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),

              // Photo Section
              Text(
                'CROP PHOTO',
                style: GoogleFonts.inter(
                  fontSize: 11,
                  fontWeight: FontWeight.bold,
                  color: AppTheme.textMuted,
                  letterSpacing: 1,
                ),
              ),
              const SizedBox(height: 8),
              if (_photoAdded)
                Stack(
                  children: [
                    Container(
                      height: 190,
                      width: double.infinity,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        image: DecorationImage(
                          image: NetworkImage(currentImg),
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    Container(
                      height: 190,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        gradient: LinearGradient(
                          colors: [Colors.black.withOpacity(0.4), Colors.transparent],
                          begin: Alignment.bottomCenter,
                          end: Alignment.topCenter,
                        ),
                      ),
                    ),
                    Positioned(
                      top: 12,
                      right: 12,
                      child: GestureDetector(
                        onTap: () => setState(() => _photoAdded = false),
                        child: CircleAvatar(
                          radius: 14,
                          backgroundColor: Colors.black.withOpacity(0.5),
                          child: const Icon(Icons.close, color: Colors.white, size: 16),
                        ),
                      ),
                    ),
                    Positioned(
                      bottom: 12,
                      left: 12,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.black.withOpacity(0.4),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Text(
                          '✓ $_selectedCrop photo verified',
                          style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w600),
                        ),
                      ),
                    ),
                  ],
                )
              else
                GestureDetector(
                  onTap: () => setState(() => _photoAdded = true),
                  child: Container(
                    height: 180,
                    width: double.infinity,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: AppTheme.primary.withOpacity(0.4), width: 2),
                    ),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Container(
                          width: 50,
                          height: 50,
                          decoration: BoxDecoration(
                            color: AppTheme.chipBackground,
                            borderRadius: BorderRadius.circular(16),
                          ),
                          child: const Center(
                            child: Text('📷', style: TextStyle(fontSize: 24)),
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Tap to add crop photo',
                          style: GoogleFonts.montserrat(
                            fontSize: 14,
                            fontWeight: FontWeight.bold,
                            color: AppTheme.primary,
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          'Good lighting = higher AI quality score',
                          style: GoogleFonts.inter(fontSize: 11, color: AppTheme.textMuted),
                        ),
                      ],
                    ),
                  ),
                ),
              const SizedBox(height: 20),

              // Crop Selection Chips
              Text(
                'CROP TYPE',
                style: GoogleFonts.inter(
                  fontSize: 11,
                  fontWeight: FontWeight.bold,
                  color: AppTheme.textMuted,
                  letterSpacing: 1,
                ),
              ),
              const SizedBox(height: 8),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: crops.map((crop) {
                  final isSel = _selectedCrop == crop;
                  return ChoiceChip(
                    label: Text(crop),
                    selected: isSel,
                    onSelected: (selected) {
                      if (selected) setState(() => _selectedCrop = crop);
                    },
                    selectedColor: AppTheme.primary,
                    labelStyle: TextStyle(
                      color: isSel ? Colors.white : AppTheme.textDark,
                      fontWeight: FontWeight.bold,
                      fontSize: 12,
                    ),
                    backgroundColor: Colors.white,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                  );
                }).toList(),
              ),
              const SizedBox(height: 20),

              // Quantity & Unit
              Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'HARVEST QUANTITY',
                          style: GoogleFonts.inter(
                            fontSize: 11,
                            fontWeight: FontWeight.bold,
                            color: AppTheme.textMuted,
                            letterSpacing: 1,
                          ),
                        ),
                        const SizedBox(height: 8),
                        TextField(
                          controller: _qtyController,
                          keyboardType: TextInputType.number,
                          decoration: const InputDecoration(
                            hintText: '500',
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    flex: 1,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'UNIT',
                          style: GoogleFonts.inter(
                            fontSize: 11,
                            fontWeight: FontWeight.bold,
                            color: AppTheme.textMuted,
                            letterSpacing: 1,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: AppTheme.borderColor),
                          ),
                          child: DropdownButtonHideUnderline(
                            child: DropdownButton<String>(
                              isExpanded: true,
                              value: _selectedUnit,
                              items: ['kg', 'quintal', 'tonne', 'bunch'].map((u) {
                                return DropdownMenuItem(value: u, child: Text(u));
                              }).toList(),
                              onChanged: (val) {
                                if (val != null) setState(() => _selectedUnit = val);
                              },
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),

              // Farm Location
              Text(
                'FARM LOCATION',
                style: GoogleFonts.inter(
                  fontSize: 11,
                  fontWeight: FontWeight.bold,
                  color: AppTheme.textMuted,
                  letterSpacing: 1,
                ),
              ),
              const SizedBox(height: 8),
              Container(
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(18),
                  border: Border.all(color: AppTheme.borderColor),
                ),
                child: Row(
                  children: [
                    const Icon(Icons.location_on, color: AppTheme.primary, size: 22),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        _selectedLocation,
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13),
                      ),
                    ),
                    TextButton.icon(
                      onPressed: () {
                        setState(() => _selectedLocation = 'Amritsar, Punjab');
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text('GPS Auto-detected: Amritsar, Punjab')),
                        );
                      },
                      icon: const Icon(Icons.my_location, size: 16, color: AppTheme.primary),
                      label: const Text('Detect', style: TextStyle(color: AppTheme.primary, fontSize: 11)),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 30),

              // Next CTA
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: _proceedToAI,
                  child: const Text('Continue to AI Analysis →'),
                ),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
