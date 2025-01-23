import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const fetchContactsFulfilled = (state, action) => {
  state.contacts = action.payload;
  state.isLoading = false;
  state.error = null;
};

const addContactFulfilled = (state, action) => {
  state.contacts.push(action.payload);
  state.isLoading = false;
  state.error = null;
};

const deleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
};

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, addContactFulfilled)
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.fulfilled, deleteContactFulfilled)
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const contactsReducer = ContactsSlice.reducer;
