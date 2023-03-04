import CvNavbar from '@/components/CvNavbar/CvNavbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CvNavbar />
        {children}
      </body>
    </html>
  )
}
