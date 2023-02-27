import './globals.css'

export const metadata = {
  title: 'Giovanny Arias',
  description: 'Personal page of Giovanny Arias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
