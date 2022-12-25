import { Navigation } from "../components/Navigation/Navigation.jsx"

import '../styles/globals.css'


export default function RootLayout({ children }) {
  
  return (
    <html>
      <script src="https://kit.fontawesome.com/6cd40e32be.js" crossorigin="anonymous"></script>
      <body>
        <Navigation />
        {children}
        
      </body>
    </html>
  )
}
