import styled from "styled-components";

const PriceTag = styled.span`
  /* transform: rotate(3deg); */
  color: red;
  border-bottom: 10px double ${props => props.theme.red}
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

export default PriceTag;
