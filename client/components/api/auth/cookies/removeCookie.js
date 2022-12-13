'use client'
import cookieCutter from 'cookie-cutter'

export const removeCookie = () => {
    try {
        cookieCutter.set('sessionJWT', '', { expires: new Date(0) })
        return true
    }
    catch (error) {
        return false
    }
}