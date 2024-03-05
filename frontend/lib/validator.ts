interface ValidateResponse {
    isValid: boolean,
    error: string
}

export function validatePassword(password: string): ValidateResponse {
    const minLength = 6

    if (password.length >= minLength) return {isValid: true, error: ""}

    return {isValid: false, error: `password must be min. ${minLength} characters long`}
}

export function validateUsername(username: string): ValidateResponse {
    const minLength = 3

    if (username.length >= minLength) return {isValid: true, error: ""}

    return {isValid: false, error: `username must be min. ${minLength} characters long `}
}
