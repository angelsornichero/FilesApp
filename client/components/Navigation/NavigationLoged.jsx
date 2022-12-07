import Link from "next/link"
import styles from './Navigation.module.css'

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

export function NavigationLoged () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {linksLoged.map(({label, route}) => {
          return (
            <li key={route}>
              <Link href={route}>
                  {label}
              </Link>
            </li>
          )})}
        </ul>
      </nav>
  </header>
  )
}