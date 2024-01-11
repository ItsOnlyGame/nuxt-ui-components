export interface Toast {
  id?: string | number
  title?: string
  description?: string
  type?: 'default' | 'success' | 'info' | 'error' | 'warn'
  timeout?: number,

  timeoutFunction?: NodeJS.Timeout
}

export const useToast = () => {
  const toastState = useState<Toast[]>('toast-data', () => [])

  const add = (toast: Toast) => {
    if (!toast.id) toast.id = crypto.randomUUID()
    toastState.value.push(toast)


    if (toast.timeout) {
      toast.timeoutFunction = setTimeout(() => {
        const index = toastState.value.indexOf(toast)
        toastState.value.splice(index, 1)
      }, toast.timeout)
    }
  }

  const close = (id: Toast['id']) => {
    const index = toastState.value.findIndex(toast => toast.id === id)
    clearTimeout(toastState.value[index].timeoutFunction)
    toastState.value.splice(index, 1)

  }

  return { add, close }
}
