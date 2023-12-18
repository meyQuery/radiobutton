import '@/styles/tailwind.css'

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
      <body className="flex min-h-full">
        <div className="w-full cursor-default">{children}</div>
      </body>
    </html>
  )
}
