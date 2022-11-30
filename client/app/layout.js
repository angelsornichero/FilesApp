import { Navigation } from "../components/Navigation/Navigation.jsx"
import '../styles/globals.css'



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
