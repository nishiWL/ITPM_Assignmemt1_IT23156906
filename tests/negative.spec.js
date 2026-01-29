const { test, expect } = require('@playwright/test');

test('NEG_FUN_001_Long_Missing_Person_Description_With_Multiple_Attributes', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'vayasa avurudhu 18k pamana vana kondaya kotata kaepu, kalu kes sahitha tharuNayek eeye sita athurudhahan vii aetha. usin adi 5k pamana vana ohu adhuru samak aththeku vea. avasan varata dakina vita aedha sitiye nil paata kamisayak, dhiga kalisamak saha kalu sereppu kuttamaki.';
  const expected = 'වයස අවුරුදු 18ක් පමන වන කොණ්ඩය කොණ්ඩය කොටට කැපු, කලු කෙස් සහිත තරුණයෙක් ඊයෙ සිට අතුරුදහන් වී ඇත. උසින් අඩි 5ක් පමණ පමණ වන ඔහු අදුරු සමක් අත්තෙකු වේ. අවසන් වරට දකින විට ඇද සිටියෙ නිල් පාට කමිසයක්, දිග කලිසමක් සහ කලු සෙරෙප්පු කුට්ටමකි.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_002_Invalid_Joined_Word_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'thaaththaapaththareegenallathiyanavaa ';
  const expected = 'තාත්තා පත්තරේ ගෙනල්ලා තියනවා.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_003_Mixed_Case_Spacing_Variation_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'akkaa heta GEDHARA yAnnavaa!!!';
  const expected = 'අක්කා හෙට ගෙදර යනවා!!!';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_004_Unit_Measurement_With_Lowercase_Symbol', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'siini 50g pamana mishranayata dhamanna.';
  const expected = 'සීනි 50g පමණ මිශ්‍රණයට දමන්න.';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_005_Mixed_Case_Time_And_Lecture_Status_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'adha 10yata HCI lecture eka cancel velaa';
  const expected = 'අද 10ට HCI lecture එක cancel වෙලා';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_006_Random_Character_Sequence_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'nQQgii malkadanavaa';
  const expected = 'නංගී මල් කඩනවා';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_007_Broken_Unit_Spacing_Measurement_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'oya bottle ekee water 500 m l thiyenavaa';
  const expected = 'ඔය bottle එකේ water 500 ml තියෙනවා';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_008_Slang_Heavy_Informal_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'ado siraavata, munta pissu nee';
  const expected = 'අඩෝ සිරාවට, මුන්ට පිස්සු නේ';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_009_Excessive_Spacing_Mixed_Language_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'ammaa  heta  parents     meeting  enne      naeelu';
  const expected = 'අම්මා හෙට parents meeting එන්නෙ නෑලු';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_010_Mixed_Language_Social_Media_Request_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'Lamayi Whatsapp groupekee meeting Linkeka mata forward karanna please';
  const expected = 'ළමයි Whatsapp group එකේ meeting Link එක මට forward කරන්න please';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

test('NEG_FUN_011_Partial_Word_Spelling_Variation_Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = 'api next monthrata yanna inne';
  const expected = 'අපි next month රට යන්න ඉන්නේ';

  const inputField  = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300');

  await inputField.click();
  await inputField.pressSequentially(input, { delay: 50 });

  await page.waitForTimeout(3000);  

  const actual = (await outputField.innerText()).trim();
  expect(actual).toBe(expected);
});

