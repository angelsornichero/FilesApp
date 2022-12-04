import Link from "next/link"
import styles from './Navigation.module.css'
const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
},
{
  label: 'Register',
  route: '/register',
},
{
  label: 'Login',
  route: '/login'
}
]
const linksLoged = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
},
{
  label: 'Dashboard',
  route: '/dashboard',
},
{
  label: 'Logout',
  route: '/login'
}
]

export function Navigation (Loged = false) {
  const setLinks = (loged) => {
    if (Loged === true) {
      linksLoged.map(({label, route}) => {
        return (
          <li key={route}>
            <Link href={route}>
                {label}
            </Link>
          </li>
        )})
    }
    else {
      return (links.map(({label, route}) => {
        return (
          <li key={route}>
            <Link href={route}>
                {label}
            </Link>
          </li>
        )}))
    }
  }
  
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {setLinks()}
        </ul>
      </nav>
  </header>
  )
}