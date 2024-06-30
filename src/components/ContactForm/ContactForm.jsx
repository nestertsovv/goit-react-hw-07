import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: yup
    .string()
    .matches(/((\d{3})(-\d{3})(-\d{4}))$/, "Format is 000-000-0000")
    .required("Required!"),
});

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const onSubmit = ({ name, number }, actions) => {
    const contactObj = {
      name,
      number,
    };

    dispatch(addContact(contactObj));
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={contactsSchema}
      >
        <Form className={s.form}>
          <div className={s.row}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" id={nameFieldId} />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>

          <div className={s.row}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field name="number" id={numberFieldId} />
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
