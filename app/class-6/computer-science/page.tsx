import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import data from '@/content/class-6-computer-science.json';

export const metadata = { title: 'Class 6 Computer Science — Units | Study Platform', description: 'Class 6 Computer Science chapters with summaries, concepts, Q&A, and exercises.' };

export default function SubjectPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Browse Materials', href: '/browse' }, { label: 'Class 6', href: '/class-6' }, { label: 'Computer Science' }]} />
      <section aria-label="Class 6 Computer Science" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24 pt-6">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-3">Class 6 Computer Science</h1>
          <p className="text-stone text-lg max-w-2xl mx-auto">Essentials of Computer Science — 15 chapters with verified summaries and exercise solutions.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.units.map((unit) => (
            <Link key={unit.id} href={`/class-6/computer-science/unit-1`} className="group relative rounded-3xl bg-white border border-slate-100 p-6 shadow-lg shadow-slate-200/20 hover:shadow-2xl hover:-translate-y-1 transition-all" aria-label={`${unit.chapter}: ${unit.title}`}>
              <div className="flex items-start gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber to-amber-deep text-white flex items-center justify-center text-xs font-extrabold shadow-md shadow-amber/20 shrink-0">{unit.chapter.replace('Chapter ','')}</div>
                <h3 className="font-bold text-ink text-lg leading-snug group-hover:text-amber-deep transition">{unit.title}</h3>
              </div>
              <p className="text-sm text-stone leading-relaxed mb-4">{unit.overview}</p>
              <div className="flex items-center gap-3 text-xs font-semibold text-stone">
                <span className="inline-flex items-center gap-1 bg-amber/10 text-amber-deep px-2 py-0.5 rounded-full"><BookOpen size={12}/> Summary</span>
                <span className="inline-flex items-center gap-1 bg-emeraldLight text-emerald px-2 py-0.5 rounded-full"><CheckCircle2 size={12}/> Q&A</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-ink group-hover:text-amber-deep transition">Open Chapter <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
