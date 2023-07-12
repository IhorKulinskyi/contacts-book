import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import Wrapper from 'components/Wrapper';

const Contacts = () => {
  return (
    <Wrapper>
      <Wrapper>
        <h1>Phonebook</h1>
        <Form />
      </Wrapper>

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Wrapper>
  );
};

export default Contacts;
