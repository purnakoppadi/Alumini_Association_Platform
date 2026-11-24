import { useToast } from '../context/ToastContext'

function Toast() {
  const { toast } = useToast()

  return (
    <div
      className={`toast${toast.show ? ' show' : ''}`}
      id="toast"
      style={toast.isError ? { borderColor: '#ef4444' } : {}}
    >
      <div
        className="toast-icon"
        style={
          toast.isError
            ? { backgroundColor: 'rgba(239,68,68,0.15)', color: '#ef4444' }
            : { backgroundColor: 'rgba(34,197,94,0.15)', color: '#4ade80' }
        }
      >
        {toast.isError ? '!' : '✓'}
      </div>
      <span id="toastMessage">{toast.message || 'Success!'}</span>
    </div>
  )
}

export default Toast
