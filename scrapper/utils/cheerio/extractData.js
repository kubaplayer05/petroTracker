export function getTextFromTd(children) {
    for (let i = 0; i < children.length; i++) {
        if (children[i].name === "td") {
            return getTextFromEl2(children[i])
        }
    }
}

export function getTextFromEl2(el) {
    if (el.type && el.type === "text") {
        return el.data
    }

    return getTextFromEl2(el.children[0])
}

export function getTextFromEl(el) {
    if (Object.hasOwn(el, "name") && el.name === "br") return ""

    const length = Object.hasOwn(el, "children") ? el.children.length : 0

    if (length === 0 && !Object.hasOwn(el, "type")) return ""

    if (el.type && el.type === "text") {
        return el.data
    }

    return getTextFromEl(el.children[0])
}
