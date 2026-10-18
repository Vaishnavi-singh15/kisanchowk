import 'package:flutter/material.dart';

class KisanLogo extends StatelessWidget {
  final double size;
  final Color backgroundColor;
  final Color stalkColor;

  const KisanLogo({
    super.key,
    this.size = 72,
    this.backgroundColor = const Color(0xFF2A5216),
    this.stalkColor = const Color(0xFFD4A017),
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(size * 0.28),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.25),
            blurRadius: 16,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: Center(
        child: CustomPaint(
          size: Size(size * 0.7, size * 0.7),
          painter: _WheatStalkPainter(color: stalkColor),
        ),
      ),
    );
  }
}

class _WheatStalkPainter extends CustomPainter {
  final Color color;
  _WheatStalkPainter({required this.color});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..strokeWidth = 3.0
      ..strokeCap = StrokeCap.round
      ..style = PaintingStyle.stroke;

    final fillPaint = Paint()
      ..color = color
      ..style = PaintingStyle.fill;

    final w = size.width;
    final h = size.height;

    // Center vertical stem
    canvas.drawLine(Offset(w * 0.5, h * 0.9), Offset(w * 0.5, h * 0.25), paint);

    // Left curved stem
    final leftPath = Path()
      ..moveTo(w * 0.4, h * 0.9)
      ..quadraticBezierTo(w * 0.35, h * 0.55, w * 0.25, h * 0.3);
    canvas.drawPath(leftPath, paint);

    // Right curved stem
    final rightPath = Path()
      ..moveTo(w * 0.6, h * 0.9)
      ..quadraticBezierTo(w * 0.65, h * 0.55, w * 0.75, h * 0.3);
    canvas.drawPath(rightPath, paint);

    // Grains (ellipses)
    // Center grains
    canvas.drawOval(Rect.fromCenter(center: Offset(w * 0.5, h * 0.18), width: w * 0.14, height: h * 0.22), fillPaint);
    canvas.drawOval(Rect.fromCenter(center: Offset(w * 0.5, h * 0.36), width: w * 0.13, height: h * 0.18), fillPaint);
    canvas.drawOval(Rect.fromCenter(center: Offset(w * 0.5, h * 0.54), width: w * 0.11, height: h * 0.16), fillPaint);

    // Left grains
    canvas.drawOval(Rect.fromCenter(center: Offset(w * 0.25, h * 0.25), width: w * 0.12, height: h * 0.18), fillPaint);
    canvas.drawOval(Rect.fromCenter(center: Offset(w * 0.31, h * 0.42), width: w * 0.11, height: h * 0.16), fillPaint);
    canvas.drawOval(Rect.fromCenter(center: Offset(w * 0.35, h * 0.58), width: w * 0.10, height: h * 0.14), fillPaint);

    // Right grains
    canvas.drawOval(Rect.fromCenter(center: Offset(w * 0.75, h * 0.25), width: w * 0.12, height: h * 0.18), fillPaint);
    canvas.drawOval(Rect.fromCenter(center: Offset(w * 0.69, h * 0.42), width: w * 0.11, height: h * 0.16), fillPaint);
    canvas.drawOval(Rect.fromCenter(center: Offset(w * 0.65, h * 0.58), width: w * 0.10, height: h * 0.14), fillPaint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
