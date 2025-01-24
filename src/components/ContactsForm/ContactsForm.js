import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

import { Button, TextField } from '@mui/material';

const ContactsForm = () => {
  const dispatch = useDispatch();
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
        {/* <div>
          <TextField
            style={{ width: 460, marginBottom: 20 }}
            id="standard-basic"
            label="Find contact by name"
            variant="standard"
            onChange={e => setFilter(e.target.value)}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ContactsForm;
