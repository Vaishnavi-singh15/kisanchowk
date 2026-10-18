import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../services/supabase_service.dart';

class AppDrawer extends StatelessWidget {
  final ValueChanged<String> onNavigate;
  final VoidCallback onSignOut;

  const AppDrawer({
    super.key,
    required this.onNavigate,
    required this.onSignOut,
  });

  static const List<Map<String, String>> languages = [
    {'code': 'en', 'label': 'English', 'native': 'EN'},
    {'code': 'hi', 'label': 'हिंदी', 'native': 'हि'},
    {'code': 'pa', 'label': 'ਪੰਜਾਬੀ', 'native': 'ਪੰ'},
    {'code': 'ta', 'label': 'தமிழ்', 'native': 'த'},
    {'code': 'te', 'label': 'తెలుగు', 'native': 'తె'},
  ];

  @override
  Widget build(BuildContext context) {
    final service = SupabaseService.instance;
    final user = service.currentUser;

    return Drawer(
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          topRight: Radius.circular(32),
          bottomRight: Radius.circular(32),
        ),
      ),
      child: Column(
        children: [
          // Header Card
          Container(
            padding: EdgeInsets.only(
              top: MediaQuery.of(context).padding.top + 20,
              left: 20,
              right: 20,
              bottom: 24,
            ),
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                colors: [AppTheme.primary, Color(0xFF2D8A52)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.only(
                topRight: Radius.circular(32),
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.2),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: const Center(
                        child: Text('🌾', style: TextStyle(fontSize: 24)),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'KisanChowk',
                          style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          'Farm to Market, Directly.',
                          style: TextStyle(
                            color: Colors.white.withOpacity(0.7),
                            fontSize: 11,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.15),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Row(
                    children: [
                      CircleAvatar(
                        radius: 18,
                        backgroundColor: Colors.white,
                        child: Text(
                          user.name.split(' ').map((e) => e.isNotEmpty ? e[0] : '').take(2).join(),
                          style: const TextStyle(
                            color: AppTheme.primary,
                            fontWeight: FontWeight.bold,
                            fontSize: 12,
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              user.name,
                              style: const TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                                fontSize: 13,
                              ),
                            ),
                            Text(
                              '✅ Verified ${user.role.toUpperCase()} · ${user.state}',
                              style: TextStyle(
                                color: Colors.white.withOpacity(0.8),
                                fontSize: 10,
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

          // Language Selector
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              decoration: BoxDecoration(
                color: AppTheme.background,
                borderRadius: BorderRadius.circular(16),
              ),
              child: DropdownButtonHideUnderline(
                child: DropdownButton<String>(
                  isExpanded: true,
                  value: service.currentLanguage,
                  icon: const Icon(Icons.arrow_drop_down, color: AppTheme.textMuted),
                  items: languages.map((lang) {
                    return DropdownMenuItem<String>(
                      value: lang['code'],
                      child: Row(
                        children: [
                          const Text('🌐 ', style: TextStyle(fontSize: 14)),
                          Text(
                            lang['label']!,
                            style: const TextStyle(
                              fontSize: 13,
                              fontWeight: FontWeight.w600,
                              color: AppTheme.textDark,
                            ),
                          ),
                        ],
                      ),
                    );
                  }).toList(),
                  onChanged: (val) {
                    if (val != null) {
                      service.setLanguage(val);
                    }
                  },
                ),
              ),
            ),
          ),

          // Navigation Links
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
              children: [
                _buildNavItem(
                  context,
                  icon: '🛒',
                  title: 'Marketplace',
                  onTap: () => onNavigate('marketplace'),
                ),
                _buildNavItem(
                  context,
                  icon: '📈',
                  title: 'Demand Forecast',
                  onTap: () => onNavigate('forecast'),
                ),
                _buildNavItem(
                  context,
                  icon: '💰',
                  title: 'Price Transparency',
                  onTap: () => onNavigate('price'),
                ),
                _buildNavItem(
                  context,
                  icon: '🚚',
                  title: 'Smart Logistics',
                  onTap: () => onNavigate('logistics'),
                ),
                _buildNavItem(
                  context,
                  icon: '🏢',
                  title: 'Bulk Buyer Portal',
                  onTap: () => onNavigate('bulk'),
                ),
                _buildNavItem(
                  context,
                  icon: '🌿',
                  title: 'FPO Hub (Pooled Supply)',
                  onTap: () => onNavigate('fpohub'),
                ),
                _buildNavItem(
                  context,
                  icon: '🤖',
                  title: 'KisanChowk AI Chat',
                  onTap: () => onNavigate('aichat'),
                ),
                const Divider(height: 24, color: AppTheme.borderColor),
                _buildNavItem(
                  context,
                  icon: '🚪',
                  title: 'Sign Out / Switch Role',
                  onTap: onSignOut,
                  textColor: AppTheme.error,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNavItem(
    BuildContext context, {
    required String icon,
    required String title,
    required VoidCallback onTap,
    Color? textColor,
  }) {
    return ListTile(
      dense: true,
      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 2),
      leading: Container(
        width: 36,
        height: 36,
        decoration: BoxDecoration(
          color: AppTheme.background,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Center(
          child: Text(icon, style: const TextStyle(fontSize: 18)),
        ),
      ),
      title: Text(
        title,
        style: TextStyle(
          fontSize: 13,
          fontWeight: FontWeight.w600,
          color: textColor ?? AppTheme.textDark,
        ),
      ),
      onTap: () {
        Navigator.of(context).pop();
        onTap();
      },
    );
  }
}
