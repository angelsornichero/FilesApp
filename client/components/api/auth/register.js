'use client'
import axios from 'axios'


const api = axios.create({baseURL: process.env.baseURL})

export async function RegisterApi (user) {
    const {name, username, password, repeat_password, email} = user

    console.log(user)
    const request = api.post('/api/register', {
        name: name,
        username: username,
        password: password,
        repeat_password: repeat_password,
        email: email
    })
        .then((response) => {console.log(response.data); return response.data}, (error) => {console.log(error); return error})
    return request
}