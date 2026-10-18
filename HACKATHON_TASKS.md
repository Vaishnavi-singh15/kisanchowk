# 🌾 KisanChowk — Hackathon Team Contribution Tasks

Yeh document team ke 4 members ke genuine, independent contributions track karne ke liye banaya gaya hai. 

Har member ka alag task aur alag file area hai taaki **merge conflicts na hon** aur har teammate ka genuine commit GitHub history mein visible ho.

---

## 👥 Team Workflow & Git Instructions (Sabhi Teammates ke Liye)

### Initial Setup (Lead Developer / Repo Owner Karega):
1. GitHub par nayi repository banayein (e.g., `kisanchowk-app`).
2. Local project ko initial commit karke `main` branch par push karein.
3. GitHub Repo **Settings** > **Collaborators** mein jakar baaki 3 teammates ko invite karein.

---

### Har Teammate ke Liye Step-by-Step Guide:

#### 1. Repository Clone Karein (Apne Laptop Par)
```bash
git clone <GITHUB_REPOSITORY_URL>
cd "KisanChowk App Development"
```

#### 2. Apni Git Identity Configure Karein (Yeh zaroori hai taaki commit aapke naam se bane)
```bash
git config user.name "Aapka Pura Naam"
git config user.email "aapka-github-registered-email@example.com"
```

#### 3. Apne Task ke Liye Dedicated Branch Banayein
```bash
git checkout -b <recommended-branch-name>
```

#### 4. Sirf Apna Task Implement Karein (Neeche diye gaye task details follow karein)

#### 5. Change Verify Karein & Test Karein
Apne change ko browser ya app mein run karke check karein.

#### 6. Commit Karein & Push Karein
```bash
git add <exact-file-name>
git commit -m "feat/docs: concise message describing your change"
git push -u origin <recommended-branch-name>
```

#### 7. GitHub Par Pull Request (PR) Open Karein
- GitHub repository page par jayein.
- **"Compare & pull request"** button par click karein.
- Ek chhota description likhein aur PR create karein.
- Review ke baad PR ko `main` branch mein **Merge** karein.

---

## 📋 Teammate Tasks (3 Independent Tasks)

---

### 🔹 Task 1 (Teammate 2 — Web Frontend)
**Area:** Web App Marketplace Search Empty State  
**Recommended Branch:** `feature/web-search-empty-state`  
**Exact File:**  
`KisanChowk App Development/src/screens/Marketplace.tsx`

#### 📌 Kya useful change karna hai:
Abhi marketplace search bar mein agar koi aisi cheez search karein jo catalog mein nahi hai (jaise "pineapple" ya "xyz"), toh screen par product grid blank ho jati hai bina kisi helpful message ke.
- Products filter hone ke baad check karein ki filtered list empty (`length === 0`) hai ya nahi.
- Agar koi match na mile, toh ek clean aur helpful empty state card dikhayein:
  - Icon: 🔍 ya 🌾
  - Heading: "No produce found" (Koi fasal nahi mili)
  - Message: "Try searching for Tomatoes, Potatoes, Onions, Rice, or Wheat."
  - Ek chhota **"Clear Search"** button jo search input ko reset (`setSearch("")`) kar de.

#### ✅ Kaise verify karenge ki change kaam karta hai:
1. Terminal mein web project directory mein jayein:
   ```bash
   cd "KisanChowk App Development"
   npm run dev
   ```
2. Browser mein app open karein aur **Marketplace** screen par jayein.
3. Search bar mein kuch aisa likhein jo exist nahi karta (e.g. `xyz123`).
4. Verify karein ki:
   - Blank screen ki jagah user-friendly message aur icon dikh raha hai.
   - "Clear Search" button par click karne par search input clear ho jata hai aur saari faslein wapas dikhne lagti hain.

---

### 🔹 Task 2 (Teammate 3 — Flutter Mobile App)
**Area:** Crop Upload Form Validation & Feedback  
**Recommended Branch:** `feature/flutter-crop-validation`  
**Exact File:**  
`flutter_app/lib/screens/farmer/crop_upload_screen.dart`

#### 📌 Kya useful change karna hai:
Abhi crop upload screen par bina quantity dale ya 0 / negative number dalne par bhi button dabane par app agle screen par chala jata hai.
- `_proceedToAI()` method ke andar input validation add karein:
  1. Check karein ki `_qtyController.text.trim()` empty toh nahi hai.
  2. Check karein ki entered value ek valid number hai aur `> 0` hai.
  3. Agar invalid ho, toh user ko aage navigate na hone dein aur ek clear `SnackBar` message dikhayein:
     ```dart
     ScaffoldMessenger.of(context).showSnackBar(
       const SnackBar(
         content: Text('Please enter a valid harvest quantity greater than 0 kg'),
         backgroundColor: Colors.redAccent,
       ),
     );
     ```
  4. Jab valid quantity ho (e.g. 50 ya 500), tabhi `AIAnalysisScreen` par proceed karein.

#### ✅ Kaise verify karenge ki change kaam karta hai:
1. Flutter project mein code check karein ya app run karein:
   ```bash
   cd flutter_app
   flutter run
   ```
2. **List Your Crop** screen par jayein.
3. Quantity field ko khali chhodein ya `0` likhein aur **"Continue to AI Analysis →"** button dabayein.
4. Verify karein ki:
   - Screen aage nahi badhti.
   - Screen ke bottom par red SnackBar error message aati hai.
5. Fir `500` enter karke button dabayein aur verify karein ki normal AI analysis screen par safely chala jata hai.

---

### 🔹 Task 3 (Teammate 4 — Top-Level Documentation & Dev Guide)
**Area:** Project Root Documentation  
**Recommended Branch:** `docs/root-project-guide`  
**Exact File:**  
`README.md` *(Repository ke sabse upar / root level par)*

#### 📌 Kya useful change karna hai:
Project root par ek clear, professional `README.md` create ya enhance karein jo hackathon judges aur developers ko poora project 1 minute mein explain kare:
1. **Project Title & Tagline**: KisanChowk — From Farm to Market, Directly.
2. **Problem Statement**: Middlemen commission aur mandi exploitation ko khatam karna.
3. **Repository Architecture**:
   - `KisanChowk App Development/`: React + Vite + Tailwind CSS Web Application.
   - `flutter_app/`: Native Flutter/Dart Android Mobile Application.
   - `flutter_app/supabase/schema.sql`: PostgreSQL database schema with Row Level Security.
4. **How to Run Web App**: Exact commands (`npm install`, `npm run dev`).
5. **How to Run Flutter App**: Exact commands (`flutter pub get`, `flutter run`).
6. **Core Tech Stack Badge Table**: React 19, Flutter 3, Supabase, Dart, TypeScript.

#### ✅ Kaise verify karenge ki change kaam karta hai:
1. VS Code / Antigravity IDE mein `README.md` open karein aur Markdown Preview dekhein (`Ctrl + Shift + V`).
2. Verify karein ki:
   - Saari headings, bullet points, aur code blocks clean format mein hain.
   - Dono projects (Web aur Flutter) ke commands bilkul accurate hain.
   - Koi broken markdown links ya formatting issues nahi hain.

---

## 🚫 Critical Reminders for Team

1. **Koi Fake Commits Nahi**: Empty commits ya sirf spaces/newlines badal kar commit mat karein. Upar diye gaye 3 tasks actual, useful improvements hain jo judge code review mein bhi impress karenge.
2. **No Overlapping Edits**:
   - Teammate 2 sirf web marketplace file edit karega.
   - Teammate 3 sirf Flutter crop upload file edit karega.
   - Teammate 4 sirf root `README.md` file banayega/edit karega.
   Isse 0 merge conflicts aayenge!
3. **Independent Pull Requests**: Har teammate apni alag branch banaye, push kare, aur GitHub par PR create karke merge kare taaki sabhi 4 contributors ka graph green aur active dikhe.
