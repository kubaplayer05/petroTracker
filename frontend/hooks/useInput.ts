"use client"

import {useEffect, useState} from "react";

export default function useInput(validFn: any) {

    const [value, setValue] = useState("")
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        setIsValid(validFn(value))
    }, [value]);

    return {value, isValid, setValue}
}
