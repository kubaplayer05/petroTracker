"use client"

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {DialogClose} from "@/components/ui/dialog";
import {FormEvent, useRef} from "react";
import useInput from "@/hooks/useInput";
import {validateName} from "@/lib/validator";
import {useRouter} from "next/navigation";

export default function UserCollectionForm() {

    const {value: name, isValid: isValidName, setValue: setName, error: nameError} = useInput(validateName)
    const {value: color, setValue: setColor} = useInput(false)
    const {value: type, setValue: setType} = useInput(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const isValidForm = isValidName

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        const apiUrl = process.env.NEXT_PUBLIC_API_URL

        const formData = new FormData()

        formData.append("name", name)
        formData.append("color", color)
        formData.append("type", type)

        if (fileInputRef.current && fileInputRef.current.files) {
            const file = fileInputRef.current?.files[0]
            formData.append("stone", file)
        }

        try {

            const res = await fetch(`${apiUrl}/collection/add`, {
                method: "POST",
                credentials: "include",
                body: formData,
            })

            const data = await res.json()

            router.refresh()

        } catch (err) {
            console.error()
        }
    }

    return (
        <form onSubmit={submitHandler} className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-2"}>
                <Label htmlFor={"name"}>Name for your stone</Label>
                <Input value={name} id={"name"} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={"flex flex-col gap-2"}>
                <Label htmlFor={"color"}>Enter dominating color</Label>
                <Input value={color} id={"color"} onChange={(e) => setColor(e.target.value)}/>
            </div>
            <div className={"flex flex-col gap-2"}>
                <Label htmlFor={"type"}>Enter type of stone</Label>
                <Input value={type} id={"type"} onChange={(e) => setType(e.target.value)}/>
            </div>
            <div>
                <Label>Attach image</Label>
                <Input ref={fileInputRef} type={"file"}/>
            </div>
            <div className={"flex gap-4 justify-end"}>
                <DialogClose className={"w-1/3"}>
                    <Button variant={"outline"} type={"button"}
                            className={"w-full border-fuchsia-500 border-2 font-semibold"}>Close</Button>
                </DialogClose>
                <Button disabled={!isValidForm}
                        className={"w-1/3 bg-fuchsia-700 hover:bg-fuchsia-800 font-semibold"}>Submit</Button>
            </div>
        </form>
    )
}
