# SwiftTranslator Singlish → Sinhala UI & Transliteration Testing

Automated Playwright tests for https://www.swifttranslator.com/

## Project purpose

This repository contains **Playwright** end-to-end tests created for the ITPM Assignment 1 (Option 1).  
The tests evaluate:

- accuracy of Singlish → Sinhala real-time transliteration  
- basic UI stability and usability (clear button, real-time update behaviour, edge cases)

**Scope limitations** (as per assignment instructions):  
No backend API calls, no performance testing, no security testing.

## Quick start

```bash
# 1. Clone this repository
git clone https://github.com/YOUR-USERNAME/swifttranslator-playwright-tests.git
cd swifttranslator-playwright-tests

# 2. Install dependencies & browsers
npm install

# 3. Run all tests (headless)
npx playwright test

# — or run with browser visible 
npx playwright test --headed

# — or open interactive test runner
npx playwright test --ui
