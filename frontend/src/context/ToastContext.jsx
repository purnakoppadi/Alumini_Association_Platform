import { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext()

export function useToast() {
  return useContext(ToastContext)
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ show: false, message: '', isError: false })

  const showToast = useCallback((message, isError = false) => {
    setToast({ show: true, message, isError })
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }))
    }, 3500)
  }, [])

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  )
}
