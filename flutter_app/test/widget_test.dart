import 'package:flutter_test/flutter_test.dart';
import 'package:kisanchowk/main.dart';

void main() {
  testWidgets('KisanChowk app smoke test and branding check', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const KisanChowkApp());

    // Verify splash screen branding renders correctly
    expect(find.text('KisanChowk'), findsOneWidget);
    expect(find.text('From Farm to Market, Directly.'), findsOneWidget);
  });
}
