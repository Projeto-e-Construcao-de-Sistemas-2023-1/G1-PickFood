import './globals.scss'
import Container from '@/components/Container'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PickFood',
  description: '',
}

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Container>
            { children }
        </Container>
      </body>
    </html>
  )
}
