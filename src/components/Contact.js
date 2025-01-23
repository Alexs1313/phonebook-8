import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      {' '}
      <li>
        {name} : {number}
        <button
          onClick={() => dispatch(deleteContact(id))}
          disabled={isLoading}
        >
          delete
        </button>
      </li>
    </>
  );
};

export default Contact;
