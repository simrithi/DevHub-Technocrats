import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'HypeRadar',
  description: 'Meme coin behavioral intelligence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-on-background font-body selection:bg-primary/30 overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}