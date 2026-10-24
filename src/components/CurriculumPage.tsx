import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  CURRICULA_DATA,
  CurriculumItem,
  filterCurriculaByCategory,
  getCategoryCounts,
  Language,
  PageRoute,
  buildUrlPathname,
} from '../utils/platformData';

interface CurriculumPageProps {
  onNavigate: (page: PageRoute, param?: string) => void;
  lang: Language;
}

export const CurriculumPage: React.FC<CurriculumPageProps> = ({ onNavigate, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const counts = getCategoryCounts(CURRICULA_DATA);
  const filteredCurricula = filterCurriculaByCategory(CURRICULA_DATA, selectedCategory);

  const categories: {
    key: CurriculumItem['categoryKey'];
    labelAr: string;
    labelEn: string;
    count: number;
    curriculumId: string;
  }[] = [
    {
      key: 'science',
      labelAr: 'علوم',
      labelEn: 'علوم (Science)',
      count: counts.science,
      curriculumId: 'dcf2a469-197d-4354-9568-4843048d6e17',
    },
    {
      key: 'free-trial',
      labelAr: 'تجربه مجانيه',
      labelEn: 'تجربه مجانيه (Free Trial)',
      count: counts['free-trial'],
      curriculumId: 'e1d88007-75b9-4bda-be9d-ad7558b8ff41',
    },
    {
      key: 'values-city',
      labelAr: 'مدينة القيم',
      labelEn: 'مدينة القيم (Values City)',
      count: counts['values-city'],
      curriculumId: '6e7955f0-afef-4e23-8797-5d7e30ef0968',
    },
    {
      key: 'german-science',
      labelAr: 'sciece (german school)',
      labelEn: 'sciece (german school)',
      count: counts['german-science'],
      curriculumId: '4073c798-d9b8-4ab0-994c-9bda2dd64d15',
    },
  ];

  const handleCategoryClick = (key: string) => {
    if (selectedCategory === key) {
      setSelectedCategory(null);
      setExpandedCategory(null);
    } else {
      setSelectedCategory(key);
      setExpandedCategory(key);
    }
  };

  return (
    <div className="py-14 bg-[#F8FAFC] dark:bg-[#0B1120] min-h-[82vh] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white">
            {lang === 'ar' ? 'المناهج التعليمية' : 'Educational Curricula'}
          </h1>
          <p className="text-base text-slate-700 dark:text-slate-200 font-medium">
            {lang === 'ar'
              ? 'اكتشف مناهجنا التعليمية المصممة خصيصاً لتعزيز مهاراتك وتنمية معارفك'
              : 'Discover our educational curricula specially designed to boost your child’s skills and knowledge'}
          </p>
        </div>

        {/* Layout: Sidebar Index (Right in RTL) + 2-Column Grid (Left in RTL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Complementary Sidebar: فهرس المناهج */}
          <aside className="lg:col-span-3 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 text-slate-950 dark:text-white font-black text-base">
                <BookOpen className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                <h2>{lang === 'ar' ? 'فهرس المناهج' : 'Curriculum Index'}</h2>
              </div>
              {selectedCategory && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory(null);
                    setExpandedCategory(null);
                  }}
                  className="text-xs font-extrabold text-[#0284C7] dark:text-[#38BDF8] hover:underline cursor-pointer"
                >
                  {lang === 'ar' ? 'عرض الكل' : 'Show All'}
                </button>
              )}
            </div>

            <div className="space-y-2.5">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.key;
                const isExpanded = expandedCategory === cat.key;
                const currObj = CURRICULA_DATA.find((c) => c.id === cat.curriculumId);

                return (
                  <div key={cat.key} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => handleCategoryClick(cat.key)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-extrabold transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#0284C7] text-white shadow-2xs'
                          : 'bg-slate-200/85 dark:bg-slate-800 hover:bg-slate-300/80 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100'
                      }`}
                    >
                      <span className="truncate">{lang === 'ar' ? cat.labelAr : cat.labelEn}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span
                          className={`w-5 h-5 rounded-full text-xs font-black flex items-center justify-center tabular-nums ${
                            isSelected
                              ? 'bg-white/25 text-white'
                              : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100'
                          }`}
                        >
                          {cat.count}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>

                    {isExpanded && currObj && (
                      <div className="pr-3 pl-1 py-1.5 space-y-1 text-xs">
                        {currObj.topics.map((topic) => (
                          <a
                            key={topic.id}
                            href={buildUrlPathname('topic-detail', topic.id)}
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate('topic-detail', topic.id);
                            }}
                            className="w-full text-right px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:bg-sky-50 dark:hover:bg-slate-800 font-bold block truncate"
                          >
                            • {lang === 'ar' ? topic.titleAr : topic.titleEn}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Main Grid: 2 Columns of Curriculum Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCurricula.map((curr) => (
              <a
                key={curr.id}
                href={buildUrlPathname('curriculum-detail', curr.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('curriculum-detail', curr.id);
                }}
                className="group bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all flex flex-col cursor-pointer"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={curr.image}
                    alt={lang === 'ar' ? curr.titleAr : curr.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between text-right space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                      <span>{curr.ageRange}</span>
                      <span aria-hidden="true">·</span>
                      <span>{lang === 'ar' ? curr.levelAr : curr.levelEn}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-950 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors">
                      {lang === 'ar' ? curr.titleAr : curr.titleEn}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-200 font-medium line-clamp-2 leading-relaxed">
                      {lang === 'ar' ? curr.descriptionAr : curr.descriptionEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#0284C7] dark:text-[#38BDF8] group-hover:gap-2 transition-all">
                      <span>{lang === 'ar' ? 'استكشف المنهج' : 'Explore Curriculum'}</span>
                      {lang === 'ar' ? (
                        <ChevronLeft className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tabular-nums">
                      {curr.lessonsCount} {lang === 'ar' ? 'دروس' : 'Lessons'}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
