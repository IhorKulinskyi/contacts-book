import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import {
  selectIsLoggedIn,
  selectToken,
  selectUser,
} from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const isLoggendIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = () => {
    if (isLoggendIn) {
      dispatch(logOut(token));
    } else {
      navigate('/login');
    }
  };
  return (
    <>
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
          <p>{user.email}</p>
        </>
      )}
    </>
  );
};

export default UserMenu;
