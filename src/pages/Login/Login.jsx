import { Field, Form, Formik } from "formik";
import s from './Login.module.css'
import { useAuth } from "../../store/hooks";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const {login, isLoggedIn} = useAuth()
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = values => login(values);

  if(isLoggedIn){
    return <Navigate to='/'/>
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label htmlFor="email" className={s.label}>
            <span>Email</span>
            <Field
              type="email"
              name="email"
            />
          </label>
          <label htmlFor="password" className={s.label}>
            <span>Password</span>
            <Field
              type="password"
              name="password"
            />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
