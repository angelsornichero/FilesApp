'use client'
import { useEffect, useState } from "react";

export function useRegister ({name, username, password, repeatPassword, email}) {
    const userInfo = {
        name: name,
        username: username,
        password: password,
        repeat_password: repeatPassword,
        email: email
    }
    const [register, setRegister] = useState({})


    useEffect(() => {
        fetch('localhost:5000/api/register', {
            method: 'POST',
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json)
            .then(data =>{
                setRegister(data)
            })
    })

    return <div>{register}</div>


}