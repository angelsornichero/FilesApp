'use client'


import { setCookie } from 'cookies-next';

export const putCookie = (token) => {
    try {
        console.log(token)
        setCookie('sessionJWT', token)
        return true
    }
    catch {
        return false
    }
}