'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Provider } from 'react-redux';
import store from './redux/store'
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={inter.className} >
      <Provider  store={store}>
        <Header />
        {children}
        </Provider>
        </body>
    </html>
  )
}
