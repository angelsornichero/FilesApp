import { Navigation } from "../components/Navigation.jsx"
import '../styles/globals.css'
// import { Images } from '../components/Images'


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
