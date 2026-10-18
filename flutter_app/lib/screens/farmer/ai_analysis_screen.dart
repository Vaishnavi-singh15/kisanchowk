import 'dart:async';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';
import '../../services/ai_service.dart';
import 'ai_pricing_screen.dart';

class AIAnalysisScreen extends StatefulWidget {
  final String cropType;
  final double cropQty;
  final String unit;
  final String location;
  final String cropImage;

  const AIAnalysisScreen({
    super.key,
    required this.cropType,
    required this.cropQty,
    required this.unit,
    required this.location,
    required this.cropImage,
  });

  @override
  State<AIAnalysisScreen> createState() => _AIAnalysisScreenState();
}

class _AIAnalysisScreenState extends State<AIAnalysisScreen> with SingleTickerProviderStateMixin {
  int _currentStep = 0;
  bool _isDone = false;
  late AnimationController _rotationController;
  late CropQualityAnalysis _analysis;

  final List<Map<String, String>> _steps = [
    {'label': 'Scanning crop image quality', 'icon': '📷'},
    {'label': 'Detecting color uniformity', 'icon': '🎨'},
    {'label': 'Checking moisture & defect ratios', 'icon': '💧'},
    {'label': 'Assigning official quality grade', 'icon': '🏆'},
  ];

  @override
  void initState() {
    super.initState();
    _analysis = AIService.analyzeCrop(widget.cropType);

    _rotationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 3),
    )..repeat();

    // Staggered step animation
    for (int i = 0; i < _steps.length; i++) {
      Timer(Duration(milliseconds: 700 * (i + 1)), () {
        if (mounted) {
          setState(() {
            _currentStep = i + 1;
          });
        }
      });
    }

    Timer(Duration(milliseconds: 700 * (_steps.length + 1)), () {
      if (mounted) {
        setState(() {
          _isDone = true;
        });
      }
    });
  }

  @override
  void dispose() {
    _rotationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme.primary,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
          child: Column(
            children: [
              // Animated AI Scanner Orb
              Center(
                child: Stack(
                  alignment: Alignment.center,
                  children: [
                    if (!_isDone)
                      RotationTransition(
                        turns: _rotationController,
                        child: Container(
                          width: 120,
                          height: 120,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            border: Border.all(
                              color: Colors.white.withOpacity(0.3),
                              width: 3,
                            ),
                          ),
                        ),
                      ),
                    AnimatedContainer(
                      duration: const Duration(milliseconds: 600),
                      width: _isDone ? 110 : 96,
                      height: _isDone ? 110 : 96,
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.18),
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: Colors.white.withOpacity(_isDone ? 0.25 : 0.1),
                            blurRadius: 24,
                            spreadRadius: 6,
                          ),
                        ],
                      ),
                      child: Center(
                        child: Text(
                          _isDone ? '✓' : '🤖',
                          style: TextStyle(
                            fontSize: 44,
                            color: _isDone ? const Color(0xFF86EFAC) : Colors.white,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),

              Text(
                _isDone ? 'Analysis Complete!' : 'KisanChowk AI',
                style: GoogleFonts.montserrat(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                _isDone
                    ? '${widget.cropType} · ${widget.cropQty.toInt()} ${widget.unit} analyzed'
                    : 'Analyzing your crop photo with computer vision…',
                style: GoogleFonts.inter(
                  fontSize: 13,
                  color: Colors.white.withOpacity(0.7),
                ),
              ),
              const SizedBox(height: 24),

              // Scanning Steps List
              Column(
                children: List.generate(_steps.length, (i) {
                  final step = _steps[i];
                  final isCompleted = i < _currentStep;
                  final isCurrent = i == _currentStep && !_isDone;

                  return Container(
                    margin: const EdgeInsets.only(bottom: 10),
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    decoration: BoxDecoration(
                      color: isCompleted
                          ? Colors.white.withOpacity(0.18)
                          : isCurrent
                              ? Colors.white.withOpacity(0.10)
                              : Colors.white.withOpacity(0.05),
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Row(
                      children: [
                        Container(
                          width: 32,
                          height: 32,
                          decoration: BoxDecoration(
                            color: isCompleted
                                ? Colors.white.withOpacity(0.2)
                                : Colors.white.withOpacity(0.1),
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Center(
                            child: Text(
                              isCompleted ? '✓' : step['icon']!,
                              style: TextStyle(
                                fontSize: 16,
                                color: isCompleted ? const Color(0xFF86EFAC) : Colors.white,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(
                            step['label']!,
                            style: GoogleFonts.inter(
                              fontSize: 13,
                              color: isCompleted ? Colors.white : Colors.white.withOpacity(0.6),
                              fontWeight: isCompleted ? FontWeight.w600 : FontWeight.normal,
                            ),
                          ),
                        ),
                        if (isCompleted)
                          const Text(
                            'Done',
                            style: TextStyle(
                              color: Color(0xFF86EFAC),
                              fontSize: 11,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                      ],
                    ),
                  );
                }),
              ),
              const SizedBox(height: 16),

              // Results Card
              if (_isDone) ...[
                Container(
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(24),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.15),
                        blurRadius: 20,
                        offset: const Offset(0, 10),
                      ),
                    ],
                  ),
                  child: Column(
                    children: [
                      // Grade Header Banner
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 16),
                        decoration: BoxDecoration(
                          color: AppTheme.chipBackground,
                          borderRadius: const BorderRadius.only(
                            topLeft: Radius.circular(24),
                            topRight: Radius.circular(24),
                          ),
                        ),
                        child: Column(
                          children: [
                            Text(
                              'Grade ${_analysis.grade}',
                              style: GoogleFonts.montserrat(
                                fontSize: 36,
                                fontWeight: FontWeight.w900,
                                color: AppTheme.primary,
                              ),
                            ),
                            const SizedBox(height: 2),
                            Text(
                              _analysis.gradeLabel,
                              style: GoogleFonts.inter(
                                fontSize: 13,
                                fontWeight: FontWeight.bold,
                                color: AppTheme.primary,
                              ),
                            ),
                          ],
                        ),
                      ),

                      // Metrics 2x2 Grid
                      Padding(
                        padding: const EdgeInsets.all(16),
                        child: Column(
                          children: [
                            Row(
                              children: [
                                _buildMetricBox(
                                  icon: '🎨',
                                  label: 'Color Uniformity',
                                  value: '${_analysis.colorScore}%',
                                  tag: 'Excellent',
                                  isGood: true,
                                ),
                                const SizedBox(width: 12),
                                _buildMetricBox(
                                  icon: '✨',
                                  label: 'Freshness Score',
                                  value: '${_analysis.freshnessScore}%',
                                  tag: 'Peak Fresh',
                                  isGood: true,
                                ),
                              ],
                            ),
                            const SizedBox(height: 12),
                            Row(
                              children: [
                                _buildMetricBox(
                                  icon: '🔍',
                                  label: 'Defect Rate',
                                  value: '${_analysis.defectRate}%',
                                  tag: 'Low Defect',
                                  isGood: true,
                                ),
                                const SizedBox(width: 12),
                                _buildMetricBox(
                                  icon: '💧',
                                  label: 'Moisture Level',
                                  value: '${_analysis.moistureScore}%',
                                  tag: 'Optimal',
                                  isGood: true,
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),

                      // Recommendation Box
                      Container(
                        margin: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          color: AppTheme.background,
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text('💡 ', style: TextStyle(fontSize: 18)),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'AI Recommendation',
                                    style: GoogleFonts.montserrat(
                                      fontSize: 12,
                                      fontWeight: FontWeight.bold,
                                      color: AppTheme.primary,
                                    ),
                                  ),
                                  const SizedBox(height: 2),
                                  Text(
                                    _analysis.recommendation,
                                    style: GoogleFonts.inter(
                                      fontSize: 11,
                                      color: AppTheme.textDark,
                                      height: 1.3,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 24),

                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (_) => AIPricingScreen(
                            cropType: widget.cropType,
                            cropQty: widget.cropQty,
                            unit: widget.unit,
                            location: widget.location,
                            cropImage: widget.cropImage,
                            analysis: _analysis,
                          ),
                        ),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: AppTheme.primary,
                      padding: const EdgeInsets.symmetric(vertical: 16),
                    ),
                    child: Text(
                      'Get AI Price Guidance →',
                      style: GoogleFonts.montserrat(
                        fontSize: 15,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildMetricBox({
    required String icon,
    required String label,
    required String value,
    required String tag,
    required bool isGood,
  }) {
    return Expanded(
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: const Color(0xFFF9FAFB),
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: AppTheme.borderColor),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(icon, style: const TextStyle(fontSize: 16)),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                  decoration: BoxDecoration(
                    color: isGood ? AppTheme.chipBackground : const Color(0xFFFEF3C7),
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: Text(
                    tag,
                    style: TextStyle(
                      color: isGood ? AppTheme.primary : AppTheme.amber,
                      fontSize: 9,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 6),
            Text(
              value,
              style: GoogleFonts.montserrat(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: AppTheme.textDark,
              ),
            ),
            Text(
              label,
              style: GoogleFonts.inter(
                fontSize: 10,
                color: AppTheme.textMuted,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
