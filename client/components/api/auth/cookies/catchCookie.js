'use client'
import cookieCutter from 'cookie-cutter'

export const catchCookie = () => {
    try {
        const jwt = cookieCutter.get('sessionJWT')
        return jwt
    }
    catch {
        return null
    }
}