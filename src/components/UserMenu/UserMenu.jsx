import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const userEmail = useSelector(selectUser).email;
  return <p>{userEmail}</p>;
};

export default UserMenu;
