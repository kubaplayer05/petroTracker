"use client"

import {useEffect, useState} from "react";

export default function useInput(validFn: any) {

    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {

        const {isValid, error} = validFn(value)

        setIsValid(isValid)
        setError(error)
    }, [value]);

    return {value, isValid, error, setValue}
}
