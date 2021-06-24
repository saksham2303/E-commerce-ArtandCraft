import styled from 'styled-components'
import posed from 'react-pose'

export const transition = {
  type: 'tween',
  duration: 400
}

export const InnerSignup = posed.div({
  signup: {
    transition,
    x: 0,
    opacity: 1
  },
  login: {
    transition,
    x: '-100%'
  }
})

export const InnerLogin = posed.div({
  login: {
    transition,
    x: 0,
    opacity: 1
  },
  signup: {
    transition,
    x: '100%'
  }
})

export default styled(
  posed.div({
    signup: {
      x: 0,
      transition
    },
    login: {
      x: '100%',
      transition
    }
  })
)`
  z-index: 1;
  background: ${({ theme }) => theme.gradient};
  align-self: stretch;
  color: white;
  display: grid;
  align-content: center;
  justify-items: center;
  overflow: hidden;

  p {
    padding: 0 2rem 1rem;
  }

  .inner {
    grid-row: 1;
    grid-column: 1;
  }
`
