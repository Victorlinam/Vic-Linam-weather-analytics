'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const metrics = [
  { name: 'Data Providers Online', value: '4/4', detail: 'OpenWeatherMap, Open-Meteo, WeatherAPI, Tomorrow.io' },
  { name: 'Forecast Confidence', value: '93.7%', detail: 'Hybrid ML + statistical confidence envelope' },
  { name: 'Streaming Latency', value: '180ms', detail: 'WebSocket weather pipeline (p95)' },
  { name: 'Anomaly Risk Index', value: '0.22', detail: 'Low-to-moderate region risk profile' },
];

const frames = [
  [56, 77, 69, 81, 72, 88, 79, 91, 74, 68, 83, 95],
  [62, 69, 73, 78, 80, 84, 82, 87, 79, 71, 86, 92],
  [58, 74, 67, 85, 76, 90, 81, 89, 75, 70, 84, 96],
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [frame, setFrame] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState(metrics[0]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 1300);
    return () => clearInterval(id);
  }, []);

  const bars = useMemo(() => frames[frame], [frame]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight">Vic-Linam Weather Analytics</h1>
          <p className="mt-2 max-w-3xl text-base" style={{ color: 'var(--muted)' }}>
            Enterprise-grade interactive weather intelligence demo with dynamic analytics, AI insights, and robust animated telemetry.
          </p>
        </div>
        <button onClick={() => setDark((v) => !v)} className="rounded-full border px-4 py-2 text-sm font-semibold" style={{ background: 'var(--card)' }}>
          {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </motion.header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item, index) => (
          <motion.button
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.99 }}
            transition={{ delay: index * 0.07 }}
            onClick={() => setSelectedMetric(item)}
            className="rounded-2xl border p-4 text-left shadow-xl backdrop-blur"
            style={{ background: 'var(--card)' }}
          >
            <p className="text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--muted)' }}>{item.name}</p>
            <h2 className="mt-2 text-3xl font-bold" style={{ color: 'var(--accent)' }}>{item.value}</h2>
            <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{item.detail}</p>
          </motion.button>
        ))}
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl border p-5 lg:col-span-2" style={{ background: 'var(--card)' }}>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">Forecast Pulse (Live Demo Animation)</h3>
            <motion.span key={frame} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
              Frame {frame + 1} / {frames.length}
            </motion.span>
          </div>
          <p className="mb-4 text-sm" style={{ color: 'var(--muted)' }}>12-hour weighted forecast confidence trend with live animated updates.</p>
          <div className="flex h-52 items-end gap-2 rounded-xl p-3" style={{ background: 'rgba(100,100,100,0.10)' }}>
            {bars.map((v, i) => (
              <motion.div
                key={`${frame}-${i}`}
                initial={{ height: 0, opacity: 0.2 }}
                animate={{ height: `${v}%`, opacity: 1 }}
                transition={{ duration: 0.75, ease: 'easeInOut' }}
                className="flex-1 rounded-t-md"
                style={{ background: i % 2 ? '#c0392b' : '#e67e22' }}
              />
            ))}
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} className="rounded-2xl border p-5" style={{ background: 'var(--card)' }}>
          <h3 className="text-xl font-bold">Interactive Metric Detail</h3>
          <AnimatePresence mode="wait">
            <motion.div key={selectedMetric.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-4">
              <p className="text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>{selectedMetric.name}</p>
              <p className="mt-2 text-3xl font-bold" style={{ color: 'var(--accent)' }}>{selectedMetric.value}</p>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{selectedMetric.detail}</p>
            </motion.div>
          </AnimatePresence>
          <motion.div className="mt-6 h-1 rounded" style={{ background: 'linear-gradient(90deg,#e67e22,#c0392b)' }} animate={{ scaleX: [0.25, 1, 0.25] }} transition={{ duration: 2.2, repeat: Infinity }} />
        </motion.aside>
      </section>

      <footer className="mt-12 border-t pt-8 text-center text-sm" style={{ color: 'var(--muted)' }}>
        <p>© 2021 Victor Linam.</p>
        <p className="mt-1">For demonstration purposes only.</p>
        <a href="https://github.com/Victorlinam/Vic-Linam-weather-analytics" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 font-semibold" style={{ color: 'var(--text)' }}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.05-1.61-4.05-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.51 1 .11-.78.42-1.31.76-1.62-2.66-.3-5.46-1.32-5.46-5.89 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.29-1.54 3.29-1.22 3.29-1.22.66 1.65.25 2.87.12 3.17.77.84 1.23 1.9 1.23 3.2 0 4.58-2.8 5.58-5.47 5.88.43.37.82 1.1.82 2.21v3.28c0 .33.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>
          View Source Code
        </a>
      </footer>
    </main>
  );
}
