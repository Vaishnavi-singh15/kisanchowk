import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';
import 'price_transparency_screen.dart';

class DemandForecastScreen extends StatefulWidget {
  const DemandForecastScreen({super.key});

  @override
  State<DemandForecastScreen> createState() => _DemandForecastScreenState();
}

class _DemandForecastScreenState extends State<DemandForecastScreen> {
  static const List<Map<String, dynamic>> days = [
    {'d': 'Mon', 'v': 40, 'hi': false},
    {'d': 'Tue', 'v': 55, 'hi': false},
    {'d': 'Wed', 'v': 35, 'hi': false},
    {'d': 'Thu', 'v': 75, 'hi': true},
    {'d': 'Fri', 'v': 90, 'hi': true},
    {'d': 'Sat', 'v': 65, 'hi': true},
    {'d': 'Sun', 'v': 45, 'hi': false},
  ];

  static const List<Map<String, dynamic>> priceWeeks = [
    {'w': 'Wk 1', 'price': 2300},
    {'w': 'Wk 2', 'price': 2350},
    {'w': 'Wk 3', 'price': 2420},
    {'w': 'Wk 4', 'price': 2450},
  ];

  @override
  Widget build(BuildContext context) {
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
          'AI Demand Insights',
          style: GoogleFonts.montserrat(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: AppTheme.textDark,
          ),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.currency_rupee, color: AppTheme.primary),
            tooltip: 'View Price Transparency',
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(builder: (_) => const PriceTransparencyScreen()),
              );
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Sub-tabs
            Container(
              padding: const EdgeInsets.all(4),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Row(
                children: [
                  Expanded(
                    child: Container(
                      padding: const EdgeInsets.symmetric(vertical: 8),
                      decoration: BoxDecoration(
                        color: AppTheme.primary,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Center(
                        child: Text(
                          '📈 Demand Forecast',
                          style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                  ),
                  Expanded(
                    child: GestureDetector(
                      onTap: () {
                        Navigator.of(context).pushReplacement(
                          MaterialPageRoute(builder: (_) => const PriceTransparencyScreen()),
                        );
                      },
                      child: Container(
                        padding: const EdgeInsets.symmetric(vertical: 8),
                        child: const Center(
                          child: Text(
                            '💰 Price Transparency',
                            style: TextStyle(color: AppTheme.textMuted, fontSize: 11, fontWeight: FontWeight.bold),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),

            // Top Alert Card
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: AppTheme.primary,
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Center(child: Text('📈', style: TextStyle(fontSize: 20))),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Market needs more potatoes next week',
                          style: GoogleFonts.montserrat(
                            fontSize: 13,
                            fontWeight: FontWeight.bold,
                            color: AppTheme.textDark,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          'Demand expected to spike 15% due to unseasonal rain in neighboring supply hubs.',
                          style: GoogleFonts.inter(fontSize: 11, color: AppTheme.textMuted),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),

            // Regional Demand Heatmap Card
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Regional Demand Heatmap',
                    style: GoogleFonts.montserrat(fontSize: 13, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 10),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(14),
                    child: Stack(
                      children: [
                        Image.network(
                          'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70&fit=crop',
                          height: 140,
                          width: double.infinity,
                          fit: BoxFit.cover,
                        ),
                        Container(height: 140, color: Colors.black.withOpacity(0.2)),
                        Positioned(
                          top: 16,
                          left: 24,
                          child: _buildHeatPill('High Demand · Delhi NCR', Colors.red),
                        ),
                        Positioned(
                          top: 50,
                          right: 24,
                          child: _buildHeatPill('Moderate · Ludhiana', Colors.amber),
                        ),
                        Positioned(
                          bottom: 16,
                          left: 60,
                          child: _buildHeatPill('Stable · Chandigarh', AppTheme.primary),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),

            // Trending Products
            Text(
              'TRENDING HARVESTS',
              style: GoogleFonts.inter(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: AppTheme.textMuted,
                letterSpacing: 1,
              ),
            ),
            const SizedBox(height: 8),
            Row(
              children: [
                Expanded(
                  child: _buildTrendingCard(
                    crop: 'Potatoes',
                    trend: '+15%',
                    isPositive: true,
                    desc: 'Short supply detected in NCR',
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: _buildTrendingCard(
                    crop: 'Onions',
                    trend: '-5%',
                    isPositive: false,
                    desc: 'Temporary surplus in Nashik',
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),

            // Weekly Demand Pattern Bar Chart
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Weekly Demand Pattern',
                    style: GoogleFonts.montserrat(fontSize: 13, fontWeight: FontWeight.bold),
                  ),
                  const Text('Thu–Sat is the peak procurement window', style: TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                  const SizedBox(height: 16),
                  SizedBox(
                    height: 110,
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: days.map((d) {
                        final val = d['v'] as int;
                        final isPeak = d['hi'] as bool;
                        return Expanded(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              Container(
                                height: val.toDouble(),
                                width: 22,
                                decoration: BoxDecoration(
                                  color: isPeak ? AppTheme.primary : const Color(0xFFD1FAE5),
                                  borderRadius: BorderRadius.circular(6),
                                ),
                              ),
                              const SizedBox(height: 6),
                              Text(
                                d['d'] as String,
                                style: TextStyle(
                                  fontSize: 10,
                                  fontWeight: isPeak ? FontWeight.bold : FontWeight.normal,
                                  color: isPeak ? AppTheme.primary : AppTheme.textMuted,
                                ),
                              ),
                            ],
                          ),
                        );
                      }).toList(),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),

            // Price Prediction Line Card
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Basmati Rice Price Projection (4 Weeks)',
                    style: GoogleFonts.montserrat(fontSize: 13, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      Text(
                        '₹2,450',
                        style: GoogleFonts.montserrat(
                          fontSize: 22,
                          fontWeight: FontWeight.w900,
                          color: AppTheme.primary,
                        ),
                      ),
                      const Text(' / quintal', style: TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                      const SizedBox(width: 10),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                        decoration: BoxDecoration(
                          color: AppTheme.chipBackground,
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: const Text('↑ Projected Peak', style: TextStyle(color: AppTheme.primary, fontSize: 10, fontWeight: FontWeight.bold)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),

                  // Interactive Stepped Path
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: priceWeeks.map((pw) {
                      return Column(
                        children: [
                          Text('₹${pw['price']}', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 11)),
                          const SizedBox(height: 4),
                          Container(
                            width: 12,
                            height: 12,
                            decoration: const BoxDecoration(
                              color: AppTheme.primary,
                              shape: BoxShape.circle,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(pw['w'] as String, style: const TextStyle(fontSize: 10, color: AppTheme.textMuted)),
                        ],
                      );
                    }).toList(),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }

  Widget _buildHeatPill(String title, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.9),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Text(
        title,
        style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.bold),
      ),
    );
  }

  Widget _buildTrendingCard({
    required String crop,
    required String trend,
    required bool isPositive,
    required String desc,
  }) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: AppTheme.borderColor),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(crop, style: GoogleFonts.montserrat(fontSize: 13, fontWeight: FontWeight.bold)),
              Text(
                trend,
                style: TextStyle(
                  color: isPositive ? AppTheme.primary : AppTheme.error,
                  fontWeight: FontWeight.bold,
                  fontSize: 12,
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Text(desc, style: const TextStyle(fontSize: 10, color: AppTheme.textMuted)),
        ],
      ),
    );
  }
}
