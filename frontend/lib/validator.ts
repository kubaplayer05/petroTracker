interface ValidateResponse {
    isValid: boolean,
    error: string
}

export function validatePassword(password: string): ValidateResponse {
    const minLength = 6

    if (password.length >= minLength) return {isValid: true, error: ""}

    return {isValid: false, error: `min. ${minLength} characters long`}
}

export function validateName(name: string): ValidateResponse {
    const minLength = 3

    if (name.length >= minLength) return {isValid: true, error: ""}

    return {isValid: false, error: `min. ${minLength} characters long `}
}
