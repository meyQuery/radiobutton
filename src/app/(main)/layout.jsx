import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AboutSection } from '@/components/AboutSection'
import { AudioProvider } from '@/components/AudioProvider'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'
import { Waveform } from '@/components/Waveform'
import posterImage from '@/images/poster.png'

function YoutubeIcon(props) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" role="img" {...props}>
      <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
    </svg>
  )
}

function ApplePodcastIcon(props) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" role="img" {...props}>
      <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z" />
    </svg>
  )
}

function GooglePodcastsIcon(props) {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" role="img" {...props}>
      <path d="M2 12.906c-1.104 0-2 0.896-2 2v2.172c0 2.667 4 2.667 4 0v-2.172c0-1.104-0.896-2-2-2zM30 12.906c-1.104 0-2 0.896-2 2v2.172c0 2.667 4 2.667 4 0v-2.172c0-1.104-0.896-2-2-2zM8.906 19.453c-1.104 0-2 0.896-2 2v2.172c0 2.667 4 2.667 4 0v-2.156c0-1.109-0.891-2-2-2zM8.906 6.359c-1.104 0-2 0.896-2 2v7.146c0 2.667 4 2.667 4 0v-7.156c0-1.109-0.891-2-2-2zM23.094 6.359c-1.109 0-2 0.896-2 2v2.188c0 2.667 4 2.667 4 0v-2.188c0-1.104-0.896-2-2-2zM16 0c-1.104 0-2 0.896-2 2v2.172c0 2.667 4 2.667 4 0v-2.172c0-1.104-0.896-2-2-2zM16 25.813c-1.104 0-2 0.896-2 2v2.188c-0.010 2.667 3.99 2.682 4 0.016v-2.188c0-1.094-0.896-2-2-2zM23.094 14.531c-1.109 0-2 0.906-2 2v7.109c0 2.667 4 2.667 4 0v-7.109c0-1.104-0.896-2-2-2zM16 8.172c-1.104 0-2 0.906-2 2v11.641c0 2.667 4 2.667 4 0v-11.625c0-1.109-0.896-2-2-2z" />
    </svg>
  )
}

function CastboxIcon(props) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" role="img" {...props}>
      <path d="M12 0c-.29 0-.58.068-.812.206L2.417 5.392c-.46.272-.804.875-.804 1.408v10.4c0 .533.344 1.135.804 1.407l8.77 5.187c.465.275 1.162.275 1.626 0l8.77-5.187c.46-.272.804-.874.804-1.407V6.8c0-.533-.344-1.136-.804-1.408L12.813.206A1.618 1.618 0 0 0 12 0zm-.85 8.304c.394 0 .714.303.714.676v2.224c0 .207.191.375.427.375s.428-.168.428-.375V9.57c0-.373.32-.675.713-.675.394 0 .712.302.712.675v4.713c0 .374-.318.676-.712.676-.394 0-.713-.302-.713-.676v-1.31c0-.206-.192-.374-.428-.374s-.427.168-.427.374v1.226c0 .374-.32.676-.713.676-.394 0-.713-.302-.713-.676v-1.667c0-.207-.192-.375-.428-.375-.235 0-.427.168-.427.375v3.31c0 .373-.319.676-.712.676-.394 0-.713-.303-.713-.676v-2.427c0-.206-.191-.374-.428-.374-.235 0-.427.168-.427.374v.178a.71.71 0 0 1-.712.708.71.71 0 0 1-.713-.708V11.47a.71.71 0 0 1 .713-.708.71.71 0 0 1 .712.708v.178c0 .206.192.373.427.373.237 0 .428-.167.428-.373v-1.53c0-.374.32-.676.713-.676.393 0 .712.303.712.676v.646c0 .206.192.374.427.374.236 0 .428-.168.428-.374V8.98c0-.373.319-.676.713-.676zm4.562 2.416c.393 0 .713.302.713.676v2.691c0 .374-.32.676-.713.676-.394 0-.712-.303-.712-.676v-2.691c0-.374.319-.676.712-.676zm2.28 1.368c.395 0 .713.303.713.676v.67c0 .374-.318.676-.712.676-.394 0-.713-.302-.713-.675v-.67c0-.374.32-.677.713-.677z" />
    </svg>
  )
}

function PersonIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 11 12" {...props}>
      <path d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z" />
    </svg>
  )
}

export default function MainLayout({ children }) {
  let hosts = ['Eric Gordon', 'Wes Mantooth']

  return (
    <AudioProvider>
      <header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:start-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
        <div dir="ltr" className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
          <span className="text-slate-500">Hosted by</span>
          <span className="mt-6 flex gap-6 font-bold text-slate-900">
            <a href="https://bento.me/meyquery" target='_blank' className='hover:text-pink-700 active:text-pink-900'>
              Meysam Karimi
            </a>
            <span aria-hidden="true" className="text-slate-400">
              /
            </span>
            <a href="https://mnakhli.ir/" target='_blank' className='hover:text-pink-700 active:text-pink-900'>
              Mohammad Ali Nakhli
            </a>
          </span>
        </div>
        <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
          <Link
            href="/"
            className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
            aria-label="Homepage"
          >
            <Image
              className="w-full"
              src={posterImage}
              alt=""
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              priority
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
          </Link>
          <div className="mt-10 text-center lg:mt-12 lg:text-start">
            <p className="text-xl font-bold text-slate-900">
              <Link href="/">رادیو باتن</Link>
            </p>
            <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
              تنفس در دنیای دیجیتال
            </p>
          </div>
          <AboutSection className="mt-12 hidden lg:block" />
          <section className="mt-10 lg:mt-12">
            <ul
              role="list"
              className="flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
            >
              {[
                ['Castbox', CastboxIcon, 'https://castbox.fm/channel/id5417701'],
                ['Apple Podcast', ApplePodcastIcon, 'https://podcasts.apple.com/us/podcast/id1721689534'],
                ['Youtube', YoutubeIcon, 'https://www.youtube.com/@RadioButton_ir'],
                ['Google Podcasts', GooglePodcastsIcon, 'https://podcasts.google.com/feed/aHR0cDovL3Jzcy5jYXN0Ym94LmZtL2V2ZXJlc3QvYjEwZmZlYjYwNGI0NGEyOWIyOGZjZWI2MDNiZDI5MDgueG1s?sa=X&ved=2ahUKEwjqz9P-3KWDAxVEYPEDHeneBG4Q9sEGegQIARAD'],
              ].map(([label, Icon, href]) => (
                <li key={label} className="flex">
                  <Link
                    href={href}
                    className="group flex items-center"
                    aria-label={label}
                    target='_blank'
                  >
                    <div className='flex justify-center w-8'>
                      <Icon className="fill-slate-400 group-hover:fill-slate-600" />
                    </div>
                    <span className="hidden sm:ms-3 sm:block">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </header>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ms-112 lg:border-t-0 xl:ms-120">
        <Waveform className="absolute start-0 top-0 h-20 w-full" />
        <div className="relative">{children}</div>
      </main>
      <footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
          <AboutSection />
          <h2 dir='ltr' className="mt-8 flex items-center text-sm font-medium leading-7 text-slate-900">
            <PersonIcon className="h-3 w-auto fill-slate-300" />
            <span className="ms-2.5">Hosted by</span>
          </h2>
          <div dir='ltr' className="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
            <a href="https://bento.me/meyquery" target='_blank'>
              Meysam Karimi
            </a>
            <span aria-hidden="true" className="text-slate-400">
              /
            </span>
            <a href="https://mnakhli.ir/" target='_blank'>
              Mohammad Ali Nakhli
            </a>
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:start-112 xl:start-120">
        <AudioPlayer />
      </div>
    </AudioProvider>
  )
}
