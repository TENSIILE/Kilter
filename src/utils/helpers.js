export const convertStringToCapitalize = string => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

export const generateId = () => {
  return Math.abs((Date.now() * Math.random()) >> 0)
}

export const debounce = (fn, ms) => {
  let timeout
  return function (...args) {
    const fnCall = () => fn.apply(this, args)

    clearTimeout(timeout)

    timeout = setTimeout(fnCall, ms)
  }
}
