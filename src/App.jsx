import { ContactForm, SearchBox, ContactList } from "components";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "./redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import "./styles/reset.css";
import s from "./App.module.css";
import { Loader } from "./components/Loader/Loader";

function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      {loading && !error && <Loader />}
      {contacts.length > 0 && !error && <SearchBox />}
      {contacts.length > 0 && !error && <ContactList />}
      {!contacts.length && !error && !loading && (
        <div>There is no contacts</div>
      )}
      {error && !loading && <div>{error}</div>}
    </div>
  );
}

export default App;
