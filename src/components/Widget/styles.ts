import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 25%;
  height: 100vh;
  margin-left: auto;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.color.lightGreyBg};
  overflow: hidden;
`;
