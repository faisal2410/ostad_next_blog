import TopNav from '@/components/TopNav'
import './globals.css'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'


export const metadata = {
  title: 'Blog app with next13',
  description: 'Latest blogs on web development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       <TopNav></TopNav>
        {children}</body>
    </html>
  )
}
