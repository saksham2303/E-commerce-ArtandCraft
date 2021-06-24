import styled from 'styled-components'
import posed from 'react-pose'

export default styled(posed.div({}))`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2em auto;
  align-items: center;

  .container__form {
    padding: 4rem;
    overflow: hidden;
  }

  .container__form--one {
    grid-column: 1 / span 1;
    grid-row: 1;
  }

  .container__form--two {
    grid-column: 2 / span 1;
    grid-row: 1;
  }

  .overlay {
    grid-column: 1;
    grid-row: 1;
  }
`
