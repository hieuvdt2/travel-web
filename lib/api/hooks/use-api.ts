"use client"

import { useState, useCallback } from "react"
import { ApiError } from "../api-client"

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: ApiError) => void
}

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
}

type ApiFunction<T, P extends any[]> = (...args: P) => Promise<T>

export function useApi<T, P extends any[] = any[]>(apiFunction: ApiFunction<T, P>, options: UseApiOptions<T> = {}) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const execute = useCallback(
    async (...args: P) => {
      setState((prev) => ({ ...prev, loading: true, error: null }))
      try {
        const data = await apiFunction(...args)
        setState({ data, loading: false, error: null })
        options.onSuccess?.(data)
        return data
      } catch (error) {
        const apiError = error instanceof ApiError ? error : new ApiError("Unknown error", 500)
        setState({ data: null, loading: false, error: apiError })
        options.onError?.(apiError)
        throw apiError
      }
    },
    [apiFunction, options],
  )

  return {
    ...state,
    execute,
    reset: useCallback(() => {
      setState({ data: null, loading: false, error: null })
    }, []),
  }
}
