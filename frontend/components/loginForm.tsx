"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormEvent} from "react";
import useInput from "@/hooks/useInput";
import {validatePassword, validateUsername} from "@/lib/validator";

export default function LoginForm() {

    const {value: username, isValid: isValidUsername, setValue: setUsername} = useInput(validateUsername)
    const {value: password, isValid: isValidPassword, setValue: setPassword} = useInput(validatePassword)

    const isFormValid = isValidPassword && isValidUsername

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const apiUrl = process.env.NEXT_PUBLIC_API_URL

        const formData = {
            username: username,
            password: password
        }

        try {

            const res = await fetch(`${apiUrl}/login`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const data = await res.json()



        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={submitHandler} className={"flex flex-col gap-4"}>
            <Input placeholder={"username"} value={username}
                   className={`${isValidUsername ? "border-green-500" : "border-red-500"}`}
                   onChange={(e) => setUsername(e.target.value)}/>
            <Input type={"password"} value={password} placeholder={"password"}
                   className={`${isValidPassword ? "border-green-500" : "border-red-500"}`}
                   onChange={(e) => setPassword(e.target.value)}/>
            <Button className={"bg-fuchsia-800 hover:bg-fuchsia-700 disabled:bg-slate-300 disabled:text-slate-600"}
                    disabled={!isFormValid}>Submit</Button>
        </form>
    )
}
