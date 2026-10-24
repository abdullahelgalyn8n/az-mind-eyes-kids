import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CURRICULA_DATA,
  STORE_PRODUCTS,
  filterCurriculaByCategory,
  filterStoreProducts,
  getCategoryCounts,
  calculateQuizScore,
  calculateChallengeProgress,
  validateContactForm,
  validateAuthForm,
  parseUrlPathname,
  buildUrlPathname,
} from './platformData';

test('parseUrlPathname and buildUrlPathname map every page to a dedicated URL path', () => {
  assert.deepEqual(parseUrlPathname('/'), { page: 'home' });
  assert.deepEqual(parseUrlPathname('/curriculum'), { page: 'curriculum' });
  assert.deepEqual(parseUrlPathname('/curriculum/science'), {
    page: 'curriculum-detail',
    param: 'science',
  });
  assert.deepEqual(parseUrlPathname('/topics/c0a9478b-0937-493e-81c3-1a338a1eb427'), {
    page: 'topic-detail',
    param: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
  });
  assert.deepEqual(parseUrlPathname('/store'), { page: 'store' });
  assert.deepEqual(parseUrlPathname('/store/prod-stem-science-kit'), {
    page: 'product-detail',
    param: 'prod-stem-science-kit',
  });
  assert.deepEqual(parseUrlPathname('/about'), { page: 'about' });
  assert.deepEqual(parseUrlPathname('/contact'), { page: 'contact' });
  assert.deepEqual(parseUrlPathname('/auth'), { page: 'auth' });

  assert.equal(buildUrlPathname('store'), '/store');
  assert.equal(buildUrlPathname('product-detail', 'prod-stem-science-kit'), '/store/prod-stem-science-kit');
  assert.equal(buildUrlPathname('curriculum-detail', 'science'), '/curriculum/science');
});

test('STORE_PRODUCTS contains 8 rich products and filterStoreProducts filters accurately', () => {
  assert.equal(STORE_PRODUCTS.length, 8);
  const freeItems = filterStoreProducts(STORE_PRODUCTS, 'free');
  assert.equal(freeItems.length, 2);
  const kitItems = filterStoreProducts(STORE_PRODUCTS, 'kit');
  assert.equal(kitItems.length, 4);
  const digitalItems = filterStoreProducts(STORE_PRODUCTS, 'digital');
  assert.equal(digitalItems.length, 4);
  const searchMagnet = filterStoreProducts(STORE_PRODUCTS, 'all', 'المغناطيس');
  assert.ok(searchMagnet.length >= 1);
});

test('filterCurriculaByCategory returns all items when category is null or all', () => {
  const all = filterCurriculaByCategory(CURRICULA_DATA, null);
  assert.equal(all.length, 4);
  const allExplicit = filterCurriculaByCategory(CURRICULA_DATA, 'all');
  assert.equal(allExplicit.length, 4);
});

test('filterCurriculaByCategory filters by specific categoryKey', () => {
  const freeTrial = filterCurriculaByCategory(CURRICULA_DATA, 'free-trial');
  assert.equal(freeTrial.length, 1);
  assert.equal(freeTrial[0].titleAr, 'تجربه مجانيه');

  const valuesCity = filterCurriculaByCategory(CURRICULA_DATA, 'values-city');
  assert.equal(valuesCity.length, 1);
  assert.equal(valuesCity[0].titleAr, 'مدينة القيم');
});

test('getCategoryCounts matches reference index counts (4, 1, 2, 1)', () => {
  const counts = getCategoryCounts(CURRICULA_DATA);
  assert.equal(counts.science, 4);
  assert.equal(counts['free-trial'], 1);
  assert.equal(counts['values-city'], 2);
  assert.equal(counts['german-science'], 1);
});

test('calculateQuizScore computes accuracy, pass status, and points', () => {
  const questions = CURRICULA_DATA[0].topics[0].quizQuestions;
  const perfectResult = calculateQuizScore(questions, {
    q1: 0,
    q2: 0,
    q3: 0,
  });
  assert.equal(perfectResult.correctCount, 3);
  assert.equal(perfectResult.percentage, 100);
  assert.equal(perfectResult.passed, true);
  assert.equal(perfectResult.pointsEarned, 45);
});

test('calculateChallengeProgress tracks 7-day challenge completion and unlocks certificate', () => {
  const days = CURRICULA_DATA[0].topics[0].challengeDays;
  const full = calculateChallengeProgress(days, [1, 2, 3, 4, 5, 6, 7]);
  assert.equal(full.completedCount, 7);
  assert.equal(full.percentage, 100);
  assert.equal(full.isCertificateUnlocked, true);
  assert.equal(full.totalPoints, 190);
});

test('validateContactForm and validateAuthForm enforce input rules', () => {
  const invalid = validateContactForm({
    name: '',
    email: 'invalid-email',
    phone: '123',
    subject: 'Hi',
    message: 'Short',
  });
  assert.equal(invalid.valid, false);

  const goodLogin = validateAuthForm({
    mode: 'login',
    email: 'student@mindeyeskids.com',
    password: 'password123',
  });
  assert.equal(goodLogin.valid, true);
});
