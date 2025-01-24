import { List, TextField } from '@mui/material';
import Contact from 'components/Contact/Contact';

import { useState } from 'react';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {contacts.length > 0 && (
        <TextField
          style={{ width: 460, marginBottom: 20 }}
          id="standard-basic"
          label="Find contact by name"
          variant="standard"
          onChange={e => setFilter(e.target.value)}
        />
      )}

      <List
        sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}
        aria-label="contacts"
      >
        {filteredContacts.map(({ name, number, id }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </List>
    </div>
  );
};

export default ContactsList;
