import { useState, useCallback } from 'react'

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState(false)

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      try {
        setIsLoading(true)

        const form = new FormData()

        if (body) {
          for (let key in body) {
            form.append(key, body[key])
          }
        }

        const options = {
          method,
          body: form,
          headers,
        }

        const response = await fetch(url, options)
        const data = await response.json()

        if (!response.ok) {
          setErrors(data.errors)
          throw new Error(data.message || 'Произошла ошибка!')
        }

        setIsLoading(false)

        return data
      } catch (e) {
        setIsLoading(false)
        throw e
      }
    },
    []
  )

  return { request, isLoading, errors }
}
