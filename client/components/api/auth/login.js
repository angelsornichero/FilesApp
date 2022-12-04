'use client'

import axios from "axios"

const api = axios.create({baseURL: 'http://localhost:4000'})

export async function LoginApi (user) {
    const {username, password} = user

    console.log(user)
    const request = api.post('/api/login', {
        username: username,
        password: password
    })
        .then((response) => {console.log(response.data); return response.data}, (error) => {console.log(error); return error})
    return request
}