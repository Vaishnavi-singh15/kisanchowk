import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'theme/app_theme.dart';
import 'services/supabase_service.dart';
import 'screens/splash_screen.dart';
import 'screens/landing_screen.dart';
import 'screens/auth/farmer_login_screen.dart';
import 'screens/farmer/crop_upload_screen.dart';
import 'screens/buyer/marketplace_screen.dart';
import 'screens/buyer/cart_screen.dart';
import 'screens/common/logistics_screen.dart';
import 'screens/common/demand_forecast_screen.dart';
import 'screens/common/price_transparency_screen.dart';
import 'screens/common/ai_chat_screen.dart';
import 'screens/common/bulk_buyer_screen.dart';
import 'screens/common/fpo_hub_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Set system UI overlay style
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.dark,
      systemNavigationBarColor: Colors.white,
      systemNavigationBarIconBrightness: Brightness.dark,
    ),
  );

  // Initialize Supabase & state services
  await SupabaseService.instance.initialize();

  runApp(const KisanChowkApp());
}

class KisanChowkApp extends StatelessWidget {
  const KisanChowkApp({super.key});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: SupabaseService.instance,
      builder: (context, _) {
        return MaterialApp(
          title: 'KisanChowk',
          debugShowCheckedModeBanner: false,
          theme: AppTheme.lightTheme,
          home: const SplashScreen(),
          routes: {
            '/landing': (_) => const LandingScreen(),
            '/login': (_) => const FarmerLoginScreen(),
            '/crop-upload': (_) => const CropUploadScreen(),
            '/marketplace': (_) => const MarketplaceScreen(),
            '/cart': (_) => const CartScreen(),
            '/logistics': (_) => const LogisticsScreen(),
            '/forecast': (_) => const DemandForecastScreen(),
            '/price': (_) => const PriceTransparencyScreen(),
            '/aichat': (_) => const AIChatScreen(),
            '/bulk': (_) => const BulkBuyerScreen(),
            '/fpo': (_) => const FPOHubScreen(),
          },
        );
      },
    );
  }
}
