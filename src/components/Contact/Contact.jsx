import { TiUser, TiPhone } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import s from "./Contact.module.css";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <span>
          <TiUser />
          {name}
        </span>
        <span>
          <TiPhone />
          {number}
        </span>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};
