import styled from "styled-components";
import posed from "react-pose";

export default styled(
  posed.button({
    hoverable: true,
    init: { opacity: 0.6 },
    hover: { opacity: 1 }
  })
)`
  width: 3.5em;
  height: 3.5em;
  padding: 0;
  margin: 0.5rem;
  border: #666 solid 1px;
`;
