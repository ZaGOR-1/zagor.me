# Changes Made

## 1. Fixed Next.js Export Errors

### Issue
The project was configured with `output: 'export'` for static export, but had conflicts with:
- Middleware that cannot work with static export
- Root page using server-side `redirect()` function

### Solution
- **Disabled middleware** by renaming `middleware.ts` to `middleware.ts.disabled`
- **Updated root page** (`app/page.tsx`) to use client-side redirect with `useRouter` and `useEffect`

## 2. Added New Skills

Added the following skills to the portfolio:

### Backend
- **MS SQL** (level: 70%)

### Programming Languages
- **C** (level: 75%)
- **C#** (level: 70%)

Updated file: `components/SkillsSection.tsx`

## 3. Added Sololearn Certificates

Added a certificates section to the Education section with three Sololearn certificates:

### Certificates
1. **C Programming** - Sololearn
2. **C# Programming** - Sololearn  
3. **SQL** - Sololearn

### Files Updated
- `locales/uk/translation.json` - Added certificates in Ukrainian
- `locales/en/translation.json` - Added certificates in English
- `components/EducationSection.tsx` - Added UI to display certificates

## Build Status

✅ Build completed successfully
✅ Static export generated without errors
✅ All locale pages (uk, en) exported properly
✅ No middleware or generateStaticParams errors

