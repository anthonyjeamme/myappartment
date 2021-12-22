import { useState } from "react"

export const useModal = () => {
  const [state, setState] = useState({
    isOpen: false,
    payload: null,
  })

  const open = (payload?: any) => {
    setState({
      isOpen: true,
      payload,
    })
  }
  const close = () => {
    setState({
      isOpen: false,
      payload: null,
    })
  }

  return {
    payload: state.payload,
    isOpen: state.isOpen,
    open,
    close,
  }
}
