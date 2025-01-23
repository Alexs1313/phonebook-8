import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <ListItem disablePadding>
        <ListItemIcon>
          <StarIcon color="success" />
        </ListItemIcon>
        <ListItemText>
          {name} : {number}
        </ListItemText>

        {/* <button
          onClick={() => dispatch(deleteContact(id))}
          disabled={isLoading}
        >
          delete
        </button> */}
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(deleteContact(id))}
          disabled={isLoading}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
};

export default Contact;
