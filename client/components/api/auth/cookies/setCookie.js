'use client'
import cookieCutter from 'cookie-cutter'

export const setCookie = (token) => {
    try {
        console.log(token)
        cookieCutter.set('sessionJWT', token)
        return true
    }
    catch {
        return false
    }
}