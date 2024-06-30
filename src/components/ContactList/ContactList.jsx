import { Contact } from "components";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import s from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
      {contacts.length !== 0 && filteredContacts.length === 0 && (
        <div>
          Not find contact with <span className={s.empty}>{filter}</span>
        </div>
      )}
    </>
  );
};
