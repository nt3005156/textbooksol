import Link from 'next/link';
import { ArrowLeft, BookOpen, Lightbulb, PenTool, CheckCircle2, Beaker, Layers } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import data from '@/content/class-6-computer-science.json';

export const metadata = { title: 'Class 6 Computer Science — Unit 1 Overview | Study Platform', description: 'Unit 1 summary, concepts, Q&A, and diagrams.' };

export default function UnitPage() {
  const unit = data.units[0];
  return (
    <>
      <Breadcrumbs items={[{ label: 'Browse Materials', href: '/browse' }, { label: 'Class 6', href: '/class-6' }, { label: 'Computer Science', href: '/class-6/computer-science' }, { label: unit.title }] } />
      <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-24 pt-6" aria-label={`${unit.chapter} ${unit.title}`}>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-deep bg-amber/10 w-fit px-2.5 py-1 rounded-full mb-3">{unit.chapter} • Pages {unit.pages}</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.1] mb-4">{unit.title}</h1>
          <p className="text-lg text-stone leading-relaxed max-w-3xl">{unit.overview}</p>
        </header>

        <section id="overview" className="mb-12" aria-labelledby="ov-heading">
          <div className="rounded-3xl bg-white border border-slate-100 p-7 sm:p-9 shadow-xl shadow-slate-200/20">
            <h2 id="ov-heading" className="flex items-center gap-3 font-serif text-2xl font-bold text-ink mb-4"><BookOpen className="text-amber" size={24}/> Unit Overview</h2>
            <p className="text-stone leading-relaxed mb-2"><strong>Title:</strong> {unit.title}</p>
            <p className="text-stone leading-relaxed mb-2"><strong>Introduction:</strong> {unit.overview}</p>
            <h3 className="font-bold text-ink mb-2 mt-4">Learning Objectives</h3>
            <ul className="list-disc pl-5 space-y-1 text-stone"><li>Understand what a computer is and how it works.</li><li>Identify characteristics and limitations.</li><li>Recognize practical applications.</li></ul>
          </div>
        </section>

        <section id="summary" className="mb-12" aria-labelledby="sum-heading">
          <div className="rounded-3xl bg-cream border border-amber/20 p-7 sm:p-9 shadow-xl shadow-amber/10">
            <h2 id="sum-heading" className="flex items-center gap-3 font-serif text-2xl font-bold text-ink mb-5"><Layers className="text-amber-deep" size={24}/> Complete Summary</h2>
            <div className="prose-custom text-base leading-relaxed text-slate-700 space-y-4">
              <p><strong>Definition.</strong> A computer is an electronic device that accepts input, processes data according to instructions, and produces output.</p>
              <p><strong>How it works.</strong> User gives input → CPU processes using memory → output shown.</p>
              <p><strong>Characteristics.</strong> Speed, accuracy, storage, automation, diligence, versatility.</p>
              <p><strong>Limitations.</strong> No own intelligence; needs instructions; requires electricity.</p>
              <p><strong>Applications.</strong> Education, business, healthcare, communication, entertainment.</p>
            </div>
          </div>
        </section>

        <section id="concepts" className="mb-12" aria-labelledby="conc-heading">
          <h2 id="conc-heading" className="flex items-center gap-3 font-serif text-2xl font-bold text-ink mb-6"><Lightbulb className="text-amber" size={24}/> Important Concepts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(unit.concepts || [{type:"definition",term:"Computer",text:"Electronic machine accepting data, processing instructions, producing output."},{type:"keypoint",term:"Characteristics",text:"Speed, accuracy, storage, automation, diligence, versatility."},{type:"remember",term:"Capabilities vs Limitations",text:"Capabilities: speed/accuracy/storage. Limitations: needs human instructions, no common sense."},{type:"example",term:"Application",text:"Education, business, health, communication."}]).map((c,i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-lg shadow-slate-200/10 hover:-translate-y-0.5 transition-all">
                <span className={`inline-block text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md mb-3 ${c.type==='definition'?'bg-amber/10 text-amber-deep':c.type==='keypoint'?'bg-emeraldLight text-emerald':c.type==='remember'?'bg-rose/10 text-rose':'bg-skyLight text-sky'}`}>{c.type}</span>
                <h3 className="font-bold text-ink mb-2">{c.term}</h3>
                <p className="text-sm text-stone leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="questions" className="mb-12" aria-labelledby="qa-heading">
          <h2 id="qa-heading" className="flex items-center gap-3 font-serif text-2xl font-bold text-ink mb-6"><PenTool className="text-amber" size={24}/> Questions & Answers</h2>
          <div className="space-y-6">
            <div className="rounded-3xl bg-white border border-slate-100 p-7 shadow-lg shadow-slate-200/10">
              <h3 className="font-bold text-lg text-ink mb-4">Very Short Questions</h3>
              <div className="space-y-3">
                {(unit.questions?.very_short || [{q:"What is a computer?",a:"Electronic device that processes data according to instructions."}]).map((q,i) => (
                  <div key={i} className="rounded-xl bg-paper border border-slate-100 p-4"><p className="font-semibold text-ink mb-1">Q{i+1}. {q.q}</p><p className="text-sm text-stone"><strong>Answer:</strong> {q.a}</p></div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white border border-slate-100 p-7 shadow-lg shadow-slate-200/10">
              <h3 className="font-bold text-lg text-ink mb-4">Short Questions</h3>
              <div className="space-y-3">
                {(unit.questions?.short || [{q:"Explain characteristics.",a:"Speed, accuracy, storage, automation, diligence, versatility."}]).map((q,i) => (
                  <div key={i} className="rounded-xl bg-paper border border-slate-100 p-4"><p className="font-semibold text-ink mb-2">Q{i+1}. {q.q}</p><p className="text-sm text-stone leading-relaxed"><strong>Answer:</strong> {q.a}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="study" className="mb-12" aria-labelledby="study-heading">
          <div className="rounded-3xl bg-gradient-to-br from-ink to-slate p-8 sm:p-10 text-white shadow-2xl shadow-ink/25">
            <h2 id="study-heading" className="font-serif text-3xl font-bold tracking-tight mb-6">Quick Revision</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white/10 border border-white/10 p-5"><h3 className="font-bold text-amber mb-2">Quick Revision</h3><p className="text-sm text-slate-200">Summary: input → process → output. Remember capabilities and limitations.</p></div>
              <div className="rounded-2xl bg-white/10 border border-white/10 p-5"><h3 className="font-bold text-amber mb-2">Key Definitions</h3><p className="text-sm text-slate-200">Computer, CPU, Input/Output, Memory, Software, OS.</p></div>
              <div className="rounded-2xl bg-white/10 border border-white/10 p-5"><h3 className="font-bold text-amber mb-2">Remember</h3><p className="text-sm text-slate-200">No own intelligence. Needs instructions. Uses electricity.</p></div>
            </div>
          </div>
        </section>

        <nav aria-label="Navigation" className="flex items-center justify-between gap-4 pt-10 border-t border-slate-100">
          <Link href="/class-6/computer-science" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-ink font-semibold shadow hover:border-amber transition" aria-label="Back"><ArrowLeft size={18}/> All Chapters</Link>
        </nav>
      </article>
    </>
  );
}
