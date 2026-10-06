import type {Metadata} from 'next';import './globals.css';import {Navbar,Footer} from '@/components/site';
export const metadata:Metadata={title:'Bangladesh Odyssey — Travel Beyond the Expected',description:'An immersive travel guide to Bangladesh for curious travellers.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/>{children}<Footer/></body></html>}
