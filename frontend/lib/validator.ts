export function validatePassword(password: string) {
    if (password.length >= 6) return true

    return false
}

export function validateUsername(username: string) {
    if (username.length >= 3) return true

    return false
}
