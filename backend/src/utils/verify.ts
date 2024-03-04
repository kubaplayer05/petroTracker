interface VerifyResponse {
    valid: boolean,
    msg: string
}

export function verifyUsername(username: string): VerifyResponse {
    const minLength = 4

    if (username?.length < minLength) {
        return {
            valid: false,
            msg: "username must contain at least 4 characters"
        }
    }

    return {
        valid: true,
        msg: ""
    }
}

export function verifyPassword(password: string): VerifyResponse {
    const minLength = 6

    if (password?.length < minLength) {
        return {
            valid: false,
            msg: "password must contain at least 6 characters"
        }
    }

    return {
        valid: true,
        msg: ""
    }
}
