'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props) {
  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-pink-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ms-2.5">درباره ما</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
        )}
      >
        این پادکست از دل گفت‌وگوهای روزمره ما درباره محصولات، رویدادها و آدم‌های فعال در حوزه‌ی IT شکل گرفته. در فصل اول سراغ افرادی می‌ریم که در زمینه کاری‌شون موفق بودن و درباره روزهایی گپ می‌زنیم که بینش و شخصیت کاری‌شون در حال شکل‌گیری بوده. از اولین مواجهه با کامپیوتر تا روزی که اولین پیشنهاد کاری رو دریافت کردند.
      </p>
    </section>
  )
}
