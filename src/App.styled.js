import styled from "styled-components";

export const ParentContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Heading = styled.div`
  color: #ffffff;
  display: inline-block;
  font-size: 2rem;
  position: absolute;
  top: 2.5%;
  left: 3%;
  cursor: pointer;
`;
export const NavBar = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 10%;
  background: #0a6973;
`;

export const Input = styled.input`
  position: absolute;
  right: 5%;
  top: 3%;
  width: 14%;
  height: 25px;
  text-align: center;
  border-radius: 10px;
  outline: none;
  border: none;
`;

export const PageButton = styled.button`
  border: 2px solid #086972;
  color: #086972;
  width: 120px;
  height: 30px;
  position: absolute;
  top: 3%;
  left: 35%;
  margin-right: 40px;
  cursor: pointer;
  border-radius: 15px;

  &:hover {
    color: #000000;
  }
`;

export const RemButtons = styled(PageButton)`
  left: 45%;
`;

export const Rem2Buttons = styled(PageButton)`
  left: 55%;
`;

export const WatchContainer = styled.div`
  width: 29%;
  position: absolute;
  left: 0;
  height: 100vh;
  padding-top: 30px;
`;

export const GridContainer = styled.div`
  width: 70%;
  padding-left: 12px;
  padding-top: 30px;
  position: absolute;
  left: 15%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 20%);

  grid-column-gap: 60px;
  grid-row-gap: 30px;
`;

export const CardContainer = styled.div`
  transition: all 0.6s ease-in-out;

  .card-img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  &:hover {
    transform: scale(1.1);
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
`;
