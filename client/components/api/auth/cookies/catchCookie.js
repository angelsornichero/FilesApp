'use client'
import cookieCutter from 'cookie-cutter'

export const catchCookie = (token) => {
    try {
        const jwt = cookieCutter.get('sessionJWT')
        return jwt
    }
    catch {
        return null
    }
}