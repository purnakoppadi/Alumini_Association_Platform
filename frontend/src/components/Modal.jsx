import { useState, useEffect, useCallback } from 'react'

function Modal({ id, isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose()
    }
  }

  return (
    <div
      className={`modal-overlay${isOpen ? ' active' : ''}`}
      id={id}
      onClick={handleOverlayClick}
    >
      <div className="modal">
        {children}
      </div>
    </div>
  )
}

export default Modal
