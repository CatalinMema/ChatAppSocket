import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Typography variant="h5" component="h4">
          Chat app
        </Typography>
      </HeaderLeft>
      <HeaderRight>
        <HeaderAvatar />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #1c1e21;
  color: white;
  border-bottom: 1px solid white;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderRight = styled.div`
  flex: 0.1;
`;
