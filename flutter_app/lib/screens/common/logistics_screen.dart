import 'dart:async';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';

class LogisticsScreen extends StatefulWidget {
  const LogisticsScreen({super.key});

  @override
  State<LogisticsScreen> createState() => _LogisticsScreenState();
}

class _LogisticsScreenState extends State<LogisticsScreen> with SingleTickerProviderStateMixin {
  double _truckProgress = 0.45; // 0.0 to 1.0
  bool _isMoving = false;
  Timer? _timer;

  static const List<Map<String, dynamic>> routeNodes = [
    {'name': 'Ludhiana Farm', 'icon': '🌾', 'pos': 0.0},
    {'name': 'Ambala Hub', 'icon': '🏭', 'pos': 0.3},
    {'name': 'Panipat Checkpoint', 'icon': '📦', 'pos': 0.65},
    {'name': 'Delhi Buyer Mandi', 'icon': '🏪', 'pos': 1.0},
  ];

  static const List<Map<String, dynamic>> shipments = [
    {'id': 'KD-8924', 'product': '50kg Organic Wheat', 'eta': '2:30 PM Today', 'progress': 2},
    {'id': 'KD-8925', 'product': '300kg Grade A Tomatoes', 'eta': '4:15 PM Today', 'progress': 1},
  ];

  void _toggleDeliverySimulation() {
    if (_isMoving) {
      _timer?.cancel();
      setState(() => _isMoving = false);
    } else {
      setState(() => _isMoving = true);
      _timer = Timer.periodic(const Duration(milliseconds: 100), (t) {
        if (!mounted) {
          t.cancel();
          return;
        }
        setState(() {
          _truckProgress += 0.015;
          if (_truckProgress >= 1.0) {
            _truckProgress = 1.0;
            _isMoving = false;
            t.cancel();
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Shipment successfully delivered! Payment released to farmer.')),
            );
          }
        });
      });
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final pctDone = (_truckProgress * 100).toInt();

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
          'Smart Logistics & Tracking',
          style: GoogleFonts.montserrat(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: AppTheme.textDark,
          ),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Live Route Map Visualizer
            Container(
              height: 220,
              width: double.infinity,
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFF163009),
                borderRadius: BorderRadius.circular(24),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.15),
                    blurRadius: 16,
                    offset: const Offset(0, 6),
                  ),
                ],
              ),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: const [
                          Icon(Icons.radar, color: Color(0xFF86EFAC), size: 16),
                          SizedBox(width: 6),
                          Text(
                            'LIVE GPS TRANSIT CORRIDOR',
                            style: TextStyle(color: Color(0xFF86EFAC), fontSize: 10, fontWeight: FontWeight.bold, letterSpacing: 0.8),
                          ),
                        ],
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.15),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          '$pctDone% Completed',
                          style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ],
                  ),
                  const Spacer(),

                  // Route Line with animated Truck
                  Stack(
                    alignment: Alignment.centerLeft,
                    children: [
                      Container(
                        height: 6,
                        width: double.infinity,
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.2),
                          borderRadius: BorderRadius.circular(3),
                        ),
                      ),
                      FractionallySizedBox(
                        widthFactor: _truckProgress.clamp(0.05, 1.0),
                        child: Container(
                          height: 6,
                          decoration: BoxDecoration(
                            color: const Color(0xFF86EFAC),
                            borderRadius: BorderRadius.circular(3),
                          ),
                        ),
                      ),
                      Align(
                        alignment: Alignment(-1.0 + (_truckProgress * 2.0), 0),
                        child: Container(
                          width: 36,
                          height: 36,
                          decoration: BoxDecoration(
                            color: const Color(0xFFF59E0B),
                            shape: BoxShape.circle,
                            border: Border.all(color: Colors.white, width: 2),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.3),
                                blurRadius: 8,
                              ),
                            ],
                          ),
                          child: const Center(
                            child: Text('🚚', style: TextStyle(fontSize: 16)),
                          ),
                        ),
                      ),
                    ],
                  ),
                  const Spacer(),

                  // Corridor Stops
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: routeNodes.map((node) {
                      return Column(
                        children: [
                          Text(node['icon'] as String, style: const TextStyle(fontSize: 16)),
                          const SizedBox(height: 2),
                          Text(
                            node['name'] as String,
                            style: TextStyle(
                              color: Colors.white.withOpacity(0.7),
                              fontSize: 9,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        ],
                      );
                    }).toList(),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 14),

            // Simulation Trigger Button for Demo
            SizedBox(
              width: double.infinity,
              child: OutlinedButton.icon(
                onPressed: _toggleDeliverySimulation,
                icon: Icon(_isMoving ? Icons.pause : Icons.play_arrow, color: AppTheme.primary),
                label: Text(
                  _isMoving ? 'Pause Live Movement Simulation' : '▶ Simulate Live Truck Movement',
                  style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12),
                ),
                style: OutlinedButton.styleFrom(
                  backgroundColor: Colors.white,
                  side: const BorderSide(color: AppTheme.primary),
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
              ),
            ),
            const SizedBox(height: 20),

            // Active Shipments Card
            Text(
              'ACTIVE SHIPMENTS',
              style: GoogleFonts.inter(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: AppTheme.textMuted,
                letterSpacing: 1,
              ),
            ),
            const SizedBox(height: 8),
            ...shipments.map((s) {
              return Container(
                margin: const EdgeInsets.only(bottom: 12),
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: AppTheme.borderColor),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          s['id'] as String,
                          style: GoogleFonts.montserrat(fontSize: 14, fontWeight: FontWeight.bold, color: AppTheme.textDark),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(
                            color: AppTheme.chipBackground,
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: Text(
                            'ETA: ${s['eta']}',
                            style: const TextStyle(color: AppTheme.primary, fontSize: 10, fontWeight: FontWeight.bold),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 6),
                    Text(
                      s['product'] as String,
                      style: GoogleFonts.inter(fontSize: 12, color: AppTheme.textDark, fontWeight: FontWeight.w500),
                    ),
                    const SizedBox(height: 12),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        _buildStagePill('Farm', isDone: true),
                        _buildStagePill('Sorting', isDone: true),
                        _buildStagePill('Transit', isDone: true, isCurrent: true),
                        _buildStagePill('Delivered', isDone: false),
                      ],
                    ),
                  ],
                ),
              );
            }),
            const SizedBox(height: 16),

            // Driver Information Card
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Row(
                children: [
                  CircleAvatar(
                    radius: 22,
                    backgroundColor: AppTheme.chipBackground,
                    child: const Text('GS', style: TextStyle(color: AppTheme.primary, fontWeight: FontWeight.bold)),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Gurpreet Singh (Assigned Driver)',
                          style: GoogleFonts.montserrat(fontSize: 13, fontWeight: FontWeight.bold),
                        ),
                        const Text(
                          'Tata 407 · PB 10 AB 4821',
                          style: TextStyle(fontSize: 11, color: AppTheme.textMuted),
                        ),
                      ],
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.call, color: AppTheme.primary),
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Dialing Driver: +91 98140 23456')),
                      );
                    },
                    style: IconButton.styleFrom(
                      backgroundColor: AppTheme.chipBackground,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
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

  Widget _buildStagePill(String name, {bool isDone = false, bool isCurrent = false}) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: isCurrent
            ? const Color(0xFFFEF3C7)
            : isDone
                ? AppTheme.chipBackground
                : const Color(0xFFF3F4F6),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Text(
        name,
        style: TextStyle(
          fontSize: 10,
          fontWeight: FontWeight.bold,
          color: isCurrent
              ? const Color(0xFFB45309)
              : isDone
                  ? AppTheme.primary
                  : AppTheme.textMuted,
        ),
      ),
    );
  }
}
