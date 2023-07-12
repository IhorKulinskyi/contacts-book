import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserMenu from 'components/UserMenu';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Contacts</Link>
          </Typography>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
