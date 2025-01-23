import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import ContactsForm from 'components/ContactsForm';

const Button = styled.button`
  color: green;
  border: 1px solid yellow;
`;

// const CustomInput = styled(TextField)`
//   color: red;
// `;

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Button>hello</Button>
      <TextField
        fullWidth
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
      <ContactsForm />
    </>
  );
};

export default Contacts;
