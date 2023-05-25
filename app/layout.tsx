import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'RELEVIUM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-neutral-900'lang="fi">
      <body className='min-h-screen min-w-screen bg-neutral-900'>
        <div className='container max-w-screen-lg px-4'>
          <Navigation />
          {children}
          <Footer />
        </div>
        
      </body>
    </html>
  )
}
