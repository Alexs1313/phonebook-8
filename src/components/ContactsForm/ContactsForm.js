import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

import { Button, List, TextField } from '@mui/material';
import Contact from 'components/Contact/Contact';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },

    onSubmit: (values, actions) => {
      dispatch(addContact({ name: values.name, number: values.number }));
      actions.resetForm();
    },
  });

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div>
      <div>
        <form onSubmit={formik.handleSubmit} style={{ width: 500 }}>
          <TextField
            id="standard-basic"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            label="Name"
            variant="standard"
            required
            margin="dense"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          />

          <TextField
            type="number"
            id="standard-basic"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            label="Number"
            variant="standard"
            required
            margin="dense"
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          />
          <Button
            style={{
              width: 150,
              margin: '0 auto',
              display: ' block',
              marginBottom: 30,
            }}
            type="submit"
            variant="contained"
            size="small"
          >
            Add contact
          </Button>
        </form>
      </div>
      <List
        sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}
        aria-label="contacts"
      >
        {contacts.map(({ name, number, id }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </List>
    </div>
  );
};

export default ContactsForm;
