// tests/positive.spec.js
const { test, expect } = require('@playwright/test');

test('POS_FUN_001_Simple_Daily_Action', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'api raeeta kaeema kanavaa.';
  const expected = 'අපි රෑට කෑම කනවා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_002_Simple_Activity', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mama adha gamee yanavaa.';
  const expected = 'මම අද ගමේ යනවා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_003_Simple_Hobby', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mama cricket sellam karanavaa.';
  const expected = 'මම cricket සෙල්ලම් කරනවා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_004_Household_Task', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'ammaa kaeema uyanavaa.';
  const expected = 'අම්මා කෑම උයනවා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_005_Compound_Leisure_Plan', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'api shopping yamu, ivara velaa passe coffee bonna yamu.';
  const expected = 'අපි shopping යමු, ඉවර වෙලා පස්සෙ coffee බොන්න යමු.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_006_Symbol_Interference', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mama enna hithuve, namuth vaessa vahinna patan gaththaa.';
  const expected = 'මම එන්න හිතුවෙ, නමුත් වැස්ස වහින්න පටන් ගත්තා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_007_Compound_Past_Event', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mama market ekata giyaa, eeth siini ganna amathaka vunaa.';
  const expected = 'මම market එකට ගියා, ඒත් සීනි ගන්න අමතක වුනා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_008_Conditional_Response', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'oya call karoth mama ikmanata enavaa.';
  const expected = 'ඔය call කරොත් මම ඉක්මනට එනවා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_009_Cause_Effect_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'traffic thiyena nisaa api poddak late vunaa.';
  const expected = 'traffic තියෙන නිසා අපි පොඩ්ඩක් late වුනා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_010_Question_Daily_Routine', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'oyaa adha office yanne kohomadha ?';
  const expected = 'ඔයා අද office යන්නෙ කොහොමද ?';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_011_Question_System_Status', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mee computer eka hariyata vaeda karanavaadha?';
  const expected = 'මේ computer එක හරියට වැඩ කරනවාද?';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_012_Future_Question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mama oyaata heta call karannadha ?';
  const expected = 'මම ඔයාට හෙට call කරන්නද ?';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_013_Command_File_Action', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mee file eka mata email karanna.';
  const expected = 'මේ file එක මට email කරන්න.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_014_Command_Form_Action', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mee form eka hariyata fill karanna.';
  const expected = 'මේ form එක හරියට fill කරන්න.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_015_Greeting_With_Question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'suba dhavasak, oyaa saniipen innavadha?';
  const expected = 'සුබ දවසක්, ඔයා සනීපෙන් ඉන්නවද?';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_016_Present_Continuous_Action', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mama dhaen bus ekee inne.';
  const expected = 'මම දැන් bus එකේ ඉන්නේ.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_017_Future_Plan', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'api raeeta podi gamanak yamu.';
  const expected = 'අපි රෑට පොඩි ගමනක් යමු.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_018_Past_Tense_Event', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'api iiyee cinema giyaa.';
  const expected = 'අපි ඊයේ cinema ගියා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_019_Present_Daily_Action', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mama dhaen atha sodhanavaa.';
  const expected = 'මම දැන් අත සොදනවා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_020_Future_Medical_Action', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'api heta beheth gamu.';
  const expected = 'අපි හෙට බෙහෙත් ගමු.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_021_Polite_Request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'karuNaakarala magee document eka evanna puLuvandha?';
  const expected = 'කරුණාකරල මගේ document එක එවන්න පුළුවන්ද?';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_022_Official_Document_Requirement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'oyaage NIC saha campus ID eka exam ekata arn enna oona.';
  const expected = 'ඔයාගෙ NIC සහ campus ID එක exam එකට අර්න් එන්න ඕන.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_023_Time_Format_Usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'api 7.30 AM venakota office enavaa.';
  const expected = 'අපි 7.30 AM වෙනකොට office එනවා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('POS_FUN_024_Technical_Status_Check', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'mee room ekee WiFi hariyata vaeda karanavaa.';
  const expected = 'මේ room එකේ WiFi හරියට වැඩ කරනවා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  // ← increase if conversion is slow

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

