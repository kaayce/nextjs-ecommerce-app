import styled from "styled-components";

const Product = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  :hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
  p {
    font-size: 10px;
    line-height: 1.5;
    font-weight: 250;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightGrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.lightGrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default Product;
