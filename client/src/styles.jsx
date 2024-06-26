// styles.jsx
import styled from '@emotion/styled';
import { AppBar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  border-radius: 15px;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledHeading = styled(Typography)`
  color: rgba(0, 183, 255, 1);
`;

export const StyledImage = styled('img')`
  margin-left: 15px;
`;
