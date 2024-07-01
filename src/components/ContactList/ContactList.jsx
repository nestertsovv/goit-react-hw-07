import { Contact } from "components";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import s from "./ContactList.module.css";

export const ContactList = () => {
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
      {!filteredContacts.length && <div>Contact not found</div>}
    </>
  );
};
