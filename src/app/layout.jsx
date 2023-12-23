import '@/styles/tailwind.css'

import localFont from '@next/font/local'

const anjoman = localFont({
  src: [
    {
      path: '../fonts/Anjoman/woff/AnjomanMax-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Anjoman/woff/AnjomanMax-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-anjoman",
})

export const metadata = {
  title: {
    template: '%s | رادیو باتن',
    default:
      'رادیو باتن | تنفس در دنیای دیجیتال',
  },
  description:
    'رادیو باتن | تنفس در دنیای دیجیتال',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="h-full bg-white antialiased">
      <body className={`flex min-h-full ${anjoman.className}`}>
        <div className="w-full cursor-default">{children}</div>
      </body>
    </html>
  )
}
