'use client';

import Container from '@/components/Container'
import './globals.scss'
import { Inter } from 'next/font/google'
import { createContext, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PickFood',
  description: '',
}

export const AuthContext = createContext({});

export default function RootLayout({ children }) {

  const [usuario, setUsuario] = useState({});

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Container>
          <AuthContext.Provider value={{usuario, definirUsuario: setUsuario}}>
            { children }
          </AuthContext.Provider>
        </Container>
      </body>
    </html>
  )
}
