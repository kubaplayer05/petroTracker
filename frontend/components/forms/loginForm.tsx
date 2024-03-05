"use client"

import {FormEvent} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import useInput from "@/hooks/useInput";
import {validatePassword, validateUsername} from "@/lib/validator";
import {useRouter} from "next/navigation";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {useToast} from "@/components/ui/use-toast";

export default function LoginForm() {

    const {
        value: username,
        isValid: isValidUsername,
        setValue: setUsername,
        error: usernameError
    } = useInput(validateUsername)
    const {
        value: password,
        isValid: isValidPassword,
        setValue: setPassword,
        error: passwordError
    } = useInput(validatePassword)

    const router = useRouter()
    const {toast} = useToast()

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

            if (res.status >= 400) {
                return toast({
                    title: "Login Failed",
                    description: data.msg
                })
            }

            return data.user ? router.push("/") : ""

        } catch (err: any) {
            toast({
                variant: "default",
                title: "Login Failed ...",
                description: `Something went wrong`,
            })
        }
    }

    return (
        <form onSubmit={submitHandler} className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-2"}>
                <Label htmlFor={"username"}>
                    Username {usernameError && <span className={"text-red-800"}>| {usernameError}</span>}
                </Label>
                <Input id={"username"} placeholder={"Your wonderfully name"} value={username}
                       className={`${isValidUsername ? "border-green-500" : "border-red-500"}`}
                       onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className={"flex flex-col gap-2"}>
                <Label htmlFor={"password"}>
                    Password {passwordError && <span className={"text-red-800"}>| {passwordError}</span>}
                </Label>
                <Input id={"password"} type={"password"} value={password} placeholder={"Your secret"}
                       className={`${isValidPassword ? "border-green-500" : "border-red-500"}`}
                       onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Link className={"w-full mt-4"} href={"/"}>
                <Button type={"button"}
                        className={"w-full bg-transparent text-fuchsia-800 border-fuchsia-800 border-2 font-semibold hover:bg-slate-50 hover:border-fuchsia-600"}>
                    Back to Home</Button>
            </Link>
            <Button
                className={"bg-fuchsia-800 hover:bg-fuchsia-700 disabled:bg-slate-300 disabled:text-slate-600 font-semibold"}
                disabled={!isFormValid}>Submit</Button>
        </form>
    )
}
