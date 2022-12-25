'use client'
import Link from "next/link"
import styles from './Navigation.module.css'
import cookie from 'cookie-cutter'
import JWT from 'jsonwebtoken'
import { removeCookie } from "../api/auth/cookies/removeCookie"
import { useRouter } from "next/navigation"

const links = [{
  label: 'Home',
  route: '/',
  type: 'link'
},
{
  label: 'About',
  route: '/about',
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
  route: '/',
  type: 'link'
},
{
  label: 'About',
  route: '/about',
  type: 'link'
},
{
  label: 'Dashboard',
  route: '/dashboard',
  type: 'link'
},
{
  label: 'Logout',
  route: '/logout',
  type: 'button'
}
]

const isAuth = () => {
  const cookieJWT = cookie.get('sessionJWT')
  console.log(cookie.get('sessionJWT'))
  try {
    const jwt = JWT.verify(cookieJWT, process.env.JWT_SECRET)
    if (!jwt) return null
  }
  catch {
    return null
  }
  return true
}


export function Navigation () {
  const handleLogout = () => {
    const remove = removeCookie()
    const router = useRouter()
    if (remove === true) router.push('/')
    router.push('/')
  }
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {
            isAuth()
            ? (
              linksLoged.map(({label, route, type}) => {
              if (type === 'link'){
                return (
                    <li key={route}>
                      <Link href={route}>
                          {label}
                      </Link>
                    </li>
                )
              }
              if (type === 'button') {
                return (
                  <li key={route}>
                      <button onClick={handleLogout} className={styles.Logout}>
                          {label}
                      </button>
                    </li>
                )
              }
              }
            ))
            : (links.map(({label, route}) => {
              return (
                <li key={route}>
                  <Link href={route}>
                      {label}
                  </Link>
                </li>
              )}))
          }

        </ul>
      </nav>
  </header>
  )
}