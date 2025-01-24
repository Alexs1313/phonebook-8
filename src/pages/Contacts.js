import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import ContactsForm from 'components/ContactsForm/ContactsForm';

import ContactsList from 'components/ContactsList/ContactsList';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsForm />
      <ContactsList />
    </>
  );
};

export default Contacts;
