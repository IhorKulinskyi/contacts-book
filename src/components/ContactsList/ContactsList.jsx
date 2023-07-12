import { List, ListItem, ListBtn } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { deleteContact } from 'redux/contacts/operations';
import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';

const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };
  return (
    <List>
      {isLoading && <div>Is loading...</div>}
      {error && <div>{error}</div>}
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <ListBtn type="button" id={id} onClick={handleDelete}>
              Delete
            </ListBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactsList;
