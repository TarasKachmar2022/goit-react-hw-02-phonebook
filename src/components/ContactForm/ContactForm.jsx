import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

// const PATTERN_FOR_NAME =
//   "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = yup.object().shape({
  // Приклад:
  // name: yup
  //   .string()
  //   .matches(
  //     PATTERN_FOR_NAME,
  //     "Заповніть коректно поле! Допустимі символи [a-zA-Zа-яА-Я] та ['][ ][-] але лише всередині тексту!"
  //   )
  //   .required("Поле обов'язкове для заповнення!"),
  name: yup.string().required(),
});

const ContactForm = ({ onSave }) => {
  const initialValues = {
    name: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    onSave({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <button type={'submit'}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
