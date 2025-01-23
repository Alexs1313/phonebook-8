import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/operations';

import Contact from './Contact';
import { TextField } from '@mui/material';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);

  // const initialValue = {
  //   name: '',
  //   number: '',
  // };

  // const onSubmit = (values, actions) => {
  //   dispatch(addContact({ name: values.name, number: values.number }));
  //   actions.resetForm();
  // };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },

    onSubmit: (values, actions) => {
      console.log(values);
      dispatch(addContact({ name: values.name, number: values.number }));
      console.log(values.name);
      actions.resetForm();
    },
  });

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div>
      {/* <Formik
          initialValues={initialValue}
          onSubmit={onSubmit}
          validationSchema={schema}
        > */}
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <TextField
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <label htmlFor="number">Number</label>
          <TextField
            id="number"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsForm;
