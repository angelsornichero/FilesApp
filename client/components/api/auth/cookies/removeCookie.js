'use client'
import { deleteCookie } from 'cookies-next'

export const removeCookie = () => {
    try {
        deleteCookie('sessionJWT')
        return true
    }
    catch (error) {
        return false
    }
}