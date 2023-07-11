import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filterSlice';
import authReducer from './auth/slice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    auth: authReducer,
  },
});
