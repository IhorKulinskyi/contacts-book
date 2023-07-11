import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

const Contacts = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
