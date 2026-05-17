export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          For Online Educators
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Automatically Adjust Quiz Difficulty Based on Student Performance
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Analyze quiz results, identify questions that are too easy or too hard, and get actionable recommendations — all powered by statistical analysis built for course creators.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Get Started — $14/mo
        </a>
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Difficulty Metrics', desc: 'Calculate p-values and discrimination indices for every question automatically.' },
            { title: 'Instant Insights', desc: 'Spot outlier questions dragging down your course quality in seconds.' },
            { title: 'Smart Recommendations', desc: 'Get specific suggestions to revise, replace, or reorder questions.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-[#58a6ff] font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited quiz analyses',
              'Question difficulty scoring',
              'Discrimination index reports',
              'Actionable revision suggestions',
              'CSV & JSON data import',
              'Email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What data do I need to get started?',
              a: 'Just upload your quiz response data as a CSV or JSON file. The app handles the rest — no coding or statistics knowledge required.'
            },
            {
              q: 'How does the difficulty calibration work?',
              a: 'We calculate the p-value (proportion of correct answers) and point-biserial discrimination index for each question, then flag items outside optimal ranges.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel your subscription at any time from your billing portal with no penalties or hidden fees.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pb-8">
        &copy; {new Date().getFullYear()} Quiz Difficulty Calibrator. All rights reserved.
      </footer>
    </main>
  )
}
