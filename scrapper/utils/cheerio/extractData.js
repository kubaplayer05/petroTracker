export function getTextFromTd(children) {
    for (let i = 0; i < children.length; i++) {
        if (children[i].name === "td") {
            return getTextFromEl(children[i])
        }
    }
}

export function getTextFromEl(el) {
    if (el.type && el.type === "text") {
        return el.data
    }

    return getTextFromEl(el.children[0])
}
