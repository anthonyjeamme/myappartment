import React from "react"

import { XCircle } from "phosphor-react"

import "./Modal.scss"

const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null

  return (
    <div className="Modal">
      <div
        className="overlay"
        onClick={() => {
          close()
        }}
      />
      <button
        className="close-button"
        onClick={() => {
          close()
        }}
      >
        <XCircle size={48} />
      </button>

      <div className="content">{children}</div>
    </div>
  )
}
export default Modal
