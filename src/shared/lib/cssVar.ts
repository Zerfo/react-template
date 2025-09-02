const style = getComputedStyle(document.documentElement)

export const cssVar = style.getPropertyValue.bind(style)
