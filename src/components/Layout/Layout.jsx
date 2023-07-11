import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import { selectIsLoggenIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectToken } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';

export default function Layout() {
  const isLoggendIn = useSelector(selectIsLoggenIn);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const handleChange = event => {
    if (isLoggendIn) {
      dispatch(logOut(token));
    } else {
      console.log('logIn');
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contacts
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={isLoggendIn}
                    onChange={handleChange}
                    aria-label="login switch"
                    color="info"
                  />
                }
                label={isLoggendIn ? 'Logout' : 'Login'}
              />
            </FormGroup>
            {isLoggendIn && (
              <>
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                <UserMenu />
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
