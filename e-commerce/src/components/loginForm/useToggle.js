import { useState } from 'react'

export const STATE_LOG_IN = 'STATE_LOG_IN'
export const STATE_SIGN_UP = 'STATE_SIGN_UP'

const useToggle = initialState => {
  const [mode, setMode] = useState(initialState)
  const toggleMode = () =>
    setMode(mode === STATE_LOG_IN ? STATE_SIGN_UP : STATE_LOG_IN)
  return [mode, toggleMode]
}

export default useToggle
