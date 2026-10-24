import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  PlayCircle,
  HelpCircle,
  Zap,
  Hand,
  Trophy,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import {
  CURRICULA_DATA,
  CurriculumItem,
  TopicItem,
  calculateQuizScore,
  calculateChallengeProgress,
  Language,
  PageRoute,
  buildUrlPathname,
} from '../utils/platformData';

interface CurriculumDetailViewProps {
  curriculumId: string;
  onNavigate: (page: PageRoute, param?: string) => void;
  lang: Language;
}

export const CurriculumDetailView: React.FC<CurriculumDetailViewProps> = ({
  curriculumId,
  onNavigate,
  lang,
}) => {
  const curriculum: CurriculumItem =
    CURRICULA_DATA.find((c) => c.id === curriculumId || c.slug === curriculumId) ||
    CURRICULA_DATA[1];

  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="py-12 bg-[#F8FAFC] dark:bg-[#0B1120] min-h-[82vh] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-bold">
          <a
            href={buildUrlPathname('curriculum')}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('curriculum');
            }}
            className="hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors"
          >
            {lang === 'ar' ? 'المناهج' : 'Curricula'}
          </a>
          <ArrowIcon className="w-4 h-4 text-slate-400" />
          <span className="font-black text-slate-950 dark:text-white">
            {lang === 'ar' ? curriculum.titleAr : curriculum.titleEn}
          </span>
        </nav>

        {/* Curriculum Banner & Instructions */}
        <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-3xl p-8 sm:p-10 shadow-2xs text-right space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={curriculum.image}
              alt={curriculum.titleAr}
              referrerPolicy="no-referrer"
              className="w-full md:w-72 h-48 object-cover rounded-2xl border border-slate-200 dark:border-slate-700 shrink-0"
            />
            <div className="space-y-4 flex-1">
              <div className="text-xs font-extrabold text-[#0284C7] dark:text-[#38BDF8]">
                <span>{curriculum.ageRange}</span>
                <span aria-hidden="true" className="mx-2">·</span>
                <span>{lang === 'ar' ? curriculum.levelAr : curriculum.levelEn}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white">
                {lang === 'ar' ? curriculum.titleAr : curriculum.titleEn}
              </h1>

              <p className="text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                {lang === 'ar' ? curriculum.descriptionAr : curriculum.descriptionEn}
              </p>

              <div className="pt-2 space-y-1.5 text-sm font-bold text-slate-800 dark:text-slate-200">
                <p>🎬 Watch the Story — شاهد القصة التفاعلية مع طفلك</p>
                <p>⚡ Quick Video — فيديو سريع لتبسيط المفهوم العلمي</p>
                <p>🧪 Try the Activity — جرب النشاط العملي خطوة بخطوة</p>
                <p>🎯 Take the Quiz — اختبر معلوماتك واجمع النقاط</p>
                <p>🏆 7 Days Challenge — تحدي 7 أيام للحصول على الشهادة</p>
              </div>
            </div>
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">
            {lang === 'ar' ? 'الدروس والمغامرات المتاحة' : 'Available Lessons & Adventures'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.topics.map((topic) => (
              <a
                key={topic.id}
                href={buildUrlPathname('topic-detail', topic.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('topic-detail', topic.id);
                }}
                className="group bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all flex flex-col justify-between text-right space-y-4 cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
                      {topic.isFree
                        ? lang === 'ar'
                          ? 'مجاني • مفتوح للتجربة'
                          : 'Free • Open Trial'
                        : lang === 'ar'
                        ? 'ضمن الباقة الكاملة'
                        : 'Full Program'}
                    </span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      5 أنشطة تفاعلية
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors">
                    {lang === 'ar' ? topic.titleAr : topic.titleEn}
                  </h3>

                  <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                    {lang === 'ar' ? topic.summaryAr : topic.summaryEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#0284C7] dark:text-[#38BDF8] group-hover:underline">
                    {lang === 'ar' ? 'ابدأ الدرس الآن 🚀' : 'Start Lesson Now 🚀'}
                  </span>
                  <ArrowIcon className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TopicLessonViewProps {
  topicId: string;
  onNavigate: (page: PageRoute, param?: string) => void;
  lang: Language;
  onEarnPoints: (pts: number) => void;
}

type LessonTab = 'cartoon' | 'quiz' | 'flash' | 'lab' | 'challenge';

export const TopicLessonView: React.FC<TopicLessonViewProps> = ({
  topicId,
  onNavigate,
  lang,
  onEarnPoints,
}) => {
  let foundTopic: TopicItem = CURRICULA_DATA[0].topics[0];
  let parentCurriculum: CurriculumItem = CURRICULA_DATA[1];

  for (const curr of CURRICULA_DATA) {
    const match = curr.topics.find((t) => t.id === topicId);
    if (match) {
      foundTopic = match;
      parentCurriculum = curr;
      break;
    }
  }

  const [activeTab, setActiveTab] = useState<LessonTab>('cartoon');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [completedLabSteps, setCompletedLabSteps] = useState<number[]>([1]);
  const [completedChallengeDays, setCompletedChallengeDays] = useState<number[]>([1, 2]);
  const [studentNameForCert, setStudentNameForCert] = useState('بطل Mind Eyes');

  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const quizResult = calculateQuizScore(foundTopic.quizQuestions, selectedAnswers);
  const challengeProgress = calculateChallengeProgress(
    foundTopic.challengeDays,
    completedChallengeDays
  );

  const toggleLabStep = (stepNumber: number) => {
    if (completedLabSteps.includes(stepNumber)) {
      setCompletedLabSteps(completedLabSteps.filter((s) => s !== stepNumber));
    } else {
      setCompletedLabSteps([...completedLabSteps, stepNumber]);
      onEarnPoints(10);
    }
  };

  const toggleChallengeDay = (day: number, pts: number) => {
    if (completedChallengeDays.includes(day)) {
      setCompletedChallengeDays(completedChallengeDays.filter((d) => d !== day));
    } else {
      setCompletedChallengeDays([...completedChallengeDays, day]);
      onEarnPoints(pts);
    }
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuizSubmitted(true);
    if (quizResult.pointsEarned > 0) {
      onEarnPoints(quizResult.pointsEarned);
    }
  };

  return (
    <div className="py-12 bg-[#F8FAFC] dark:bg-[#0B1120] min-h-[85vh] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-bold">
          <a
            href={buildUrlPathname('curriculum')}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('curriculum');
            }}
            className="hover:text-[#0284C7] dark:hover:text-[#38BDF8]"
          >
            {lang === 'ar' ? 'المناهج' : 'Curricula'}
          </a>
          <ArrowIcon className="w-4 h-4 text-slate-400" />
          <a
            href={buildUrlPathname('curriculum-detail', parentCurriculum.id)}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('curriculum-detail', parentCurriculum.id);
            }}
            className="hover:text-[#0284C7] dark:hover:text-[#38BDF8]"
          >
            {lang === 'ar' ? parentCurriculum.titleAr : parentCurriculum.titleEn}
          </a>
          <ArrowIcon className="w-4 h-4 text-slate-400" />
          <span className="font-black text-slate-950 dark:text-white">
            {lang === 'ar' ? foundTopic.titleAr : foundTopic.titleEn}
          </span>
        </nav>

        {/* Topic Title & Summary */}
        <div className="text-right space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white">
            {lang === 'ar' ? foundTopic.titleAr : foundTopic.titleEn}
          </h1>
          <p className="text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed max-w-4xl">
            {lang === 'ar' ? foundTopic.summaryAr : foundTopic.summaryEn}
          </p>
        </div>

        {/* Certificate Callout Banner */}
        <div className="bg-[#FEFCE8] dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700/80 rounded-2xl p-6 sm:p-7 flex items-start gap-5">
          <div className="w-14 h-14 rounded-full bg-amber-200 dark:bg-amber-900/80 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
            <Award className="w-7 h-7" />
          </div>
          <div className="space-y-2.5 text-right flex-1">
            <h3 className="text-lg font-black text-amber-950 dark:text-amber-200">
              {lang === 'ar'
                ? '🏆 شهادة إتمام في انتظارك!'
                : '🏆 Completion Certificate Waiting for You!'}
            </h3>
            <p className="text-sm font-bold text-amber-900 dark:text-amber-100">
              {lang === 'ar'
                ? 'أكمل جميع تحديات الـ 7 أيام واحصل على شهادة إتمام باسمك! استمر في التعلم 💪'
                : 'Complete all 7-day challenges and claim a personalized certificate in your name! 💪'}
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setActiveTab('challenge')}
                className="px-5 py-2 rounded-full bg-amber-100 dark:bg-amber-900/90 hover:bg-amber-200 dark:hover:bg-amber-800 border border-amber-400 dark:border-amber-600 text-amber-950 dark:text-amber-100 text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {lang === 'ar'
                  ? '🏆 اذهب إلى تبويب "تحدي 7 أيام" بالأسفل ⬇'
                  : '🏆 Go to "7-Day Challenge" Tab Below ⬇'}
              </button>
            </div>
          </div>
        </div>

        {/* 5 Interactive Lesson Tabs Bar */}
        <div
          role="tablist"
          aria-label="أقسام الدرس التفاعلي"
          className="bg-slate-200/90 dark:bg-slate-800/90 p-2 rounded-2xl flex flex-wrap items-center gap-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'cartoon'}
            onClick={() => setActiveTab('cartoon')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'cartoon'
                ? 'bg-[#0284C7] text-white shadow-xs'
                : 'text-slate-800 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-700'
            }`}
          >
            <PlayCircle className="w-4 h-4" />
            <span>{lang === 'ar' ? 'فيديو كرتون' : 'Cartoon Video'}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'quiz'}
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'quiz'
                ? 'bg-[#0284C7] text-white shadow-xs'
                : 'text-slate-800 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-700'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'ar' ? 'الاختبارات' : 'Quizzes'}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'flash'}
            onClick={() => setActiveTab('flash')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'flash'
                ? 'bg-[#0284C7] text-white shadow-xs'
                : 'text-slate-800 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-700'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>{lang === 'ar' ? 'فلاش فيديو' : 'Flash Video'}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'lab'}
            onClick={() => setActiveTab('lab')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'lab'
                ? 'bg-[#0284C7] text-white shadow-xs'
                : 'text-slate-800 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-700'
            }`}
          >
            <Hand className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تجارب المعمل' : 'Lab Experiments'}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'challenge'}
            onClick={() => setActiveTab('challenge')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'challenge'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-amber-900 dark:text-amber-300 border border-amber-400 dark:border-amber-600 hover:bg-amber-50 dark:hover:bg-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تحدي 7 أيام' : '7-Day Challenge'}</span>
          </button>
        </div>

        {/* TAB 1: CARTOON VIDEO */}
        {activeTab === 'cartoon' && (
          <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-6 text-right">
            <div className="space-y-3">
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                {lang === 'ar' ? foundTopic.storyTitleAr : foundTopic.storyTitleEn}
              </h2>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                🚀 Start here with your child 👇 Watch the story together first
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('quiz')}
                  className="text-xs font-extrabold text-[#0284C7] dark:text-[#38BDF8] bg-sky-50 dark:bg-sky-950/70 hover:bg-sky-100 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  🧠 Check Your Thinking (الاختبار)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('lab')}
                  className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 hover:bg-emerald-100 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  🧪 Explore the Activity (المعمل)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('challenge')}
                  className="text-xs font-extrabold text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/70 hover:bg-amber-100 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  🎯 Finish the Challenge (تحدي 7 أيام)
                </button>
                <a
                  href={buildUrlPathname('store')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('store');
                  }}
                  className="text-xs font-extrabold text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/70 hover:bg-purple-100 px-3.5 py-2 rounded-lg transition-colors"
                >
                  🔓 Unlock Full Program (المتجر)
                </a>
              </div>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-inner">
              <iframe
                src={foundTopic.youtubeUrl}
                title={foundTopic.storyTitleAr}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE QUIZ */}
        {activeTab === 'quiz' && (
          <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-6 text-right">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-700 pb-4">
              <div>
                <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                  {lang === 'ar'
                    ? '🎯 الاختبار التفاعلي للدرس'
                    : '🎯 Interactive Lesson Quiz'}
                </h2>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {lang === 'ar'
                    ? 'اختر الإجابة الصحيحة لكل سؤال لتحصل على نقاط المكافآت!'
                    : 'Select the right answer for each question to earn reward points!'}
                </p>
              </div>
              {quizSubmitted && (
                <div className="flex items-center gap-3 bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 px-4 py-2 rounded-xl">
                  <span className="text-sm font-black text-[#0284C7] dark:text-[#38BDF8] tabular-nums">
                    {quizResult.correctCount} / {quizResult.totalCount} ({quizResult.percentage}%)
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-slate-700 dark:text-slate-200 hover:text-slate-950 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'إعادة المحاولة' : 'Retry'}</span>
                  </button>
                </div>
              )}
            </div>

            <form onSubmit={handleQuizSubmit} className="space-y-6">
              {foundTopic.quizQuestions.map((q, qIdx) => {
                const chosen = selectedAnswers[q.id];
                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700 space-y-4"
                  >
                    <h3 className="text-base sm:text-lg font-black text-slate-950 dark:text-white">
                      {qIdx + 1}. {lang === 'ar' ? q.questionAr : q.questionEn}
                    </h3>

                    <div className="space-y-2.5">
                      {(lang === 'ar' ? q.optionsAr : q.optionsEn).map((opt, optIdx) => {
                        const isSelected = chosen === optIdx;
                        const isCorrect = q.correctIndex === optIdx;

                        let btnStyle =
                          'bg-white dark:bg-[#1E293B] border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 font-bold hover:border-[#0284C7]';
                        if (quizSubmitted) {
                          if (isCorrect) {
                            btnStyle =
                              'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-black';
                          } else if (isSelected && !isCorrect) {
                            btnStyle =
                              'bg-red-50 dark:bg-red-950/70 border-red-400 text-red-950 dark:text-red-200 font-bold';
                          }
                        } else if (isSelected) {
                          btnStyle =
                            'bg-sky-50 dark:bg-sky-950/80 border-[#0284C7] dark:border-[#38BDF8] text-[#0284C7] dark:text-[#38BDF8] font-black';
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            disabled={quizSubmitted}
                            onClick={() =>
                              setSelectedAnswers((prev) => ({ ...prev, [q.id]: optIdx }))
                            }
                            className={`w-full text-right px-4 py-3 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && isCorrect && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            )}
                            {quizSubmitted && isSelected && !isCorrect && (
                              <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-bold">
                        💡 {lang === 'ar' ? q.explanationAr : q.explanationEn}
                      </div>
                    )}
                  </div>
                );
              })}

              {!quizSubmitted && (
                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-sm shadow-sm transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'تأكيد الإجابات وعرض النتيجة 🏆' : 'Submit Answers & View Score 🏆'}
                </button>
              )}
            </form>
          </div>
        )}

        {/* TAB 3: FLASH VIDEO */}
        {activeTab === 'flash' && (
          <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-6 text-right">
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">
              {lang === 'ar'
                ? '⚡ فلاش فيديو — ملخص المفهوم العلمي في 60 ثانية'
                : '⚡ Flash Video — 60-Second Science Concept Summary'}
            </h2>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {lang === 'ar'
                ? 'شرح بصري سريع ومكثف يساعد الطفل على تذكر أهم النقاط العلمية في الدرس قبل التجربة العملية.'
                : 'A quick visual recap helping your child remember key scientific takeaways before the lab activity.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {foundTopic.storyStepsAr.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700 text-sm font-extrabold text-slate-900 dark:text-slate-100"
                >
                  {lang === 'ar' ? step : foundTopic.storyStepsEn[idx]}
                </div>
              ))}
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950">
              <iframe
                src={foundTopic.youtubeUrl}
                title="Flash Summary Video"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* TAB 4: LAB EXPERIMENTS */}
        {activeTab === 'lab' && (
          <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-6 text-right">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                  {lang === 'ar'
                    ? '🧪 تجارب المعمل خطوة بخطوة'
                    : '🧪 Step-by-Step Lab Experiments'}
                </h2>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {lang === 'ar'
                    ? 'اضغط على كل خطوة بعد تنفيذها لتحديث عداد الإنجاز والحصول على نقاط المعمل!'
                    : 'Check off each step as you complete it to update your lab progress bar!'}
                </p>
              </div>
              <div className="text-sm font-black text-emerald-700 dark:text-emerald-400 tabular-nums">
                {lang === 'ar' ? 'الإنجاز:' : 'Progress:'} {completedLabSteps.length} /{' '}
                {foundTopic.labSteps.length}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-l from-emerald-500 to-sky-500 transition-all duration-300"
                style={{
                  width: `${Math.round(
                    (completedLabSteps.length / Math.max(foundTopic.labSteps.length, 1)) * 100
                  )}%`,
                }}
              />
            </div>

            <div className="space-y-4">
              {foundTopic.labSteps.map((step) => {
                const done = completedLabSteps.includes(step.stepNumber);
                return (
                  <div
                    key={step.stepNumber}
                    onClick={() => toggleLabStep(step.stepNumber)}
                    className={`p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 cursor-pointer ${
                      done
                        ? 'bg-emerald-50/90 dark:bg-emerald-950/50 border-emerald-400 dark:border-emerald-700'
                        : 'bg-[#F8FAFC] dark:bg-[#0F172A] border-slate-200 dark:border-slate-700 hover:border-sky-400'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 mt-0.5 ${
                          done
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                        }`}
                      >
                        {step.stepNumber}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-black text-slate-950 dark:text-white">
                          {lang === 'ar' ? step.titleAr : step.titleEn}
                        </h3>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          {lang === 'ar' ? step.descAr : step.descEn}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 whitespace-nowrap shrink-0">
                      ⏱ {step.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: 7-DAY CHALLENGE & CERTIFICATE */}
        {activeTab === 'challenge' && (
          <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-6 text-right">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                  {lang === 'ar'
                    ? '🏆 تحدي 7 أيام — مغامرون الطاقة'
                    : '🏆 7-Day Challenge — Energy Adventurers'}
                </h2>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {lang === 'ar'
                    ? 'أكمل مهام الأيام السبعة لفتح شهادة الإتمام الذهبية باسمك!'
                    : 'Complete all 7 daily missions to unlock your golden certificate!'}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-amber-700 dark:text-amber-400 tabular-nums">
                  {challengeProgress.completedCount} / {challengeProgress.totalDays}{' '}
                  {lang === 'ar' ? 'أيام مكتملة' : 'Days Completed'} ({challengeProgress.totalPoints}{' '}
                  {lang === 'ar' ? 'نقطة' : 'pts'})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setCompletedChallengeDays(foundTopic.challengeDays.map((d) => d.day))
                  }
                  className="text-xs font-extrabold text-[#0284C7] dark:text-[#38BDF8] hover:underline cursor-pointer"
                >
                  {lang === 'ar' ? 'إكمال الكل لتجربة الشهادة' : 'Complete All to Preview Certificate'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {foundTopic.challengeDays.map((dayObj) => {
                const isDone = completedChallengeDays.includes(dayObj.day);
                return (
                  <button
                    key={dayObj.day}
                    type="button"
                    onClick={() => toggleChallengeDay(dayObj.day, dayObj.points)}
                    className={`p-5 rounded-2xl border text-right transition-all flex items-start justify-between gap-3 cursor-pointer ${
                      isDone
                        ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-400 dark:border-amber-600 shadow-2xs'
                        : 'bg-[#F8FAFC] dark:bg-[#0F172A] border-slate-200 dark:border-slate-700 hover:border-amber-400'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-extrabold text-amber-800 dark:text-amber-300">
                        {lang === 'ar' ? `اليوم ${dayObj.day}` : `Day ${dayObj.day}`} · +{dayObj.points}{' '}
                        {lang === 'ar' ? 'نقطة' : 'pts'}
                      </div>
                      <h3 className="text-base font-black text-slate-950 dark:text-white">
                        {lang === 'ar' ? dayObj.titleAr : dayObj.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                        {lang === 'ar' ? dayObj.taskAr : dayObj.taskEn}
                      </p>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        isDone
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Personalized Certificate Generator when unlocked */}
            {challengeProgress.isCertificateUnlocked && (
              <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-sky-50 dark:from-amber-950/60 dark:via-[#1E293B] dark:to-sky-950/60 border-2 border-amber-400 text-center space-y-4 shadow-md">
                <Sparkles className="w-10 h-10 text-amber-500 mx-auto" />
                <div className="text-xs font-black text-[#0284C7] dark:text-[#38BDF8] tracking-wide">
                  MIND EYES KIDS • SPARK YOUR VISION
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                  {lang === 'ar' ? 'شهادة إتمام المغامرة العلمية 🏆' : 'Science Adventure Certificate 🏆'}
                </h3>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {lang === 'ar'
                    ? 'تشهد منصة Mind Eyes بأن البطل المبدع:'
                    : 'Mind Eyes Platform proudly certifies that the young explorer:'}
                </p>
                <div className="max-w-xs mx-auto">
                  <input
                    type="text"
                    value={studentNameForCert}
                    onChange={(e) => setStudentNameForCert(e.target.value)}
                    aria-label={lang === 'ar' ? 'اسم الطالب في الشهادة' : 'Student Name on Certificate'}
                    className="w-full text-center text-xl font-black text-[#0284C7] dark:text-[#38BDF8] bg-white dark:bg-[#0F172A] border border-amber-300 dark:border-amber-600 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>
                <p className="text-sm text-slate-800 dark:text-slate-100 font-bold">
                  {lang === 'ar'
                    ? `قد أتم بنجاح جميع تحديات درس "${foundTopic.titleAr}" وحصل على ${challengeProgress.totalPoints} نقطة تميز!`
                    : `Has successfully completed all challenges in "${foundTopic.titleEn}" earning ${challengeProgress.totalPoints} excellence points!`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
