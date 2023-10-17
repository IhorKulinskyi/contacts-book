import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserMenu from 'components/UserMenu';

const AppHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'tomato' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
