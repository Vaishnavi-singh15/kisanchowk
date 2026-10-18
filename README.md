# KisanChowk

### From farm to market, directly.

KisanChowk is a farmer-first marketplace concept connecting Indian farmers with buyers, FPOs, and logistics partners. Our mission is to eliminate middlemen and mandi exploitation by giving farmers more direct access to buyers, clearer price information, and a fairer share of the value of their produce.

## Project at a glance

This repository contains two client applications for the KisanChowk experience:

| Application | Location | Technology | Purpose |
| --- | --- | --- | --- |
| Web app | [`KisanChowk App Development/`](KisanChowk%20App%20Development/) | React, TypeScript, Vite, Tailwind CSS | Browser-based marketplace and dashboards for farmers and buyers |
| Android app | [`flutter_app/`](flutter_app/) | Flutter, Dart | Native mobile experience for farmers, buyers, and FPOs |

The Flutter project also includes a Supabase SQL schema at [`flutter_app/supabase/schema.sql`](flutter_app/supabase/schema.sql), including PostgreSQL tables and Row Level Security policies.

## Architecture

### Web: `KisanChowk App Development/`

A single-page application built with React 19 and TypeScript, served and bundled by Vite. Tailwind CSS supplies utility-first styling. The app is organized into screens and reusable components, with flows for marketplace browsing, crop listings, offers, price transparency, logistics, and demand forecasting.

### Android: `flutter_app/`

A native Android application built with Flutter and Dart. Its screen-oriented structure supports farmer onboarding and crop listings, buyer marketplace and checkout, and shared tools such as AI guidance, FPO services, and logistics. The app uses `supabase_flutter` for optional Supabase connectivity; its database schema and setup notes are in the Flutter project.

## Tech stack

[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![Flutter](https://img.shields.io/badge/Flutter-3-02569B?logo=flutter&logoColor=white)](https://flutter.dev/) [![Dart](https://img.shields.io/badge/Dart-3-0175C2?logo=dart&logoColor=white)](https://dart.dev/) [![Supabase](https://img.shields.io/badge/Supabase-Backend-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com/)

## Run the web app

**Prerequisites:** Node.js and npm installed.

1. Open a terminal at the repository root.
2. Change into the web project and install its dependencies:

   ```bash
   cd "KisanChowk App Development"
   npm install
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite in your browser.

## Run the Flutter Android app

**Prerequisites:** Flutter SDK, Android Studio with the Android SDK (or a configured Android device), and accepted Android SDK licenses. Run `flutter doctor` if you need to check your setup.

1. From the repository root, enter the Flutter project and fetch packages:

   ```bash
   cd flutter_app
   flutter pub get
   ```

2. Start an Android emulator or connect a device with USB debugging enabled.
3. Launch the app:

   ```bash
   flutter run
   ```

To connect a Supabase project, apply [`supabase/schema.sql`](flutter_app/supabase/schema.sql) in its SQL Editor and follow the configuration instructions in [`flutter_app/README.md`](flutter_app/README.md).

## Team acknowledgement

Built by the KisanChowk hackathon team. Thank you to every teammate who contributed to the web experience, Flutter app, and project documentation, and to the farmers and buyers whose needs inspire the work.