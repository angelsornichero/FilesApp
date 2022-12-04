import { Navigation } from '../../components/Navigation/Navigation'
import './../../styles/globals.css'



export default function LogedLayout({ children }) {
  return (
    <body>
        <Navigation Loged={true} />
        {children}
    </body>
  )
}