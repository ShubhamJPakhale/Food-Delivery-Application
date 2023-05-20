import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { json, Link } from "react-router-dom";
import useLocalstorage from "../utils/useLocalstorage";

const initialvaluesform = {
  email: "",
  password: "",
  company: "",
};

const validateinput = Yup.object().shape({
  email: Yup.string()
    .min(0, "Email is required")
    .email("Invalid Email Address"),

  password: Yup.string()
    .required("Password is required")
    .min(4, "Minimum 4 Character password is required")
    .max(8, "Maximum 8 Character Password is valid"),
});

const Login = () => {
  // const [username, setUsername] =useState(()=>{
  //   const savedItem = localStorage.getItem("Username");
  //   const parsedItem = JSON.parse(savedItem);
  //   return parsedItem || ""
  // });

  // //(values) => {console.log(values);

  // useEffect(()=>{
  //   localStorage.setItem("Username",JSON.stringify(username));

  // },[username])

  const [initialValues, setInitialValues] = React.useState({
    Email: "",
    Company: "",
  });

  const [formValues, setFormValues] = useState([]);

  const submitForm = () => {
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
  };

  useEffect(() => {
    localStorage.setItem("UserData", JSON.stringify(formValues));
  }, [formValues]);

  return (
    <Formik
      initialValues={initialvaluesform}
      validationSchema={validateinput}
      onSubmit={(e) => e.preventDefault()}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="lg:rounded shadow-slate-200 width-full pt-[40px] md:pb-[40px] bg-slate-100">
            <div className="relative z-1 rounded max-w-[400px] m-6 p-4 bg-blue-100 self-center md:mx-[490px] ">
              <h1 className="text-2xl font-bold mb-4">Sign in to continue</h1>
              <Form>
                <div className="flex justify-center  flex-col mb-4">
                  <label
                    className="text-black-200 font-medium text-base"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className={
                      errors.email && touched.email
                        ? "border-2 border-red-500 text-red-500"
                        : null
                    }
                    value={initialValues.Email}
                    onChange={(e) =>
                      setInitialValues({
                        ...initialValues,
                        Email: e.target.value,
                      })
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-500 font-normal m-3 text-center"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="text-black-200 font-medium text-base"
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <Field
                    type="Company"
                    name="Company"
                    id="Company"
                    value={initialValues.Company}
                    onChange={(e) =>
                      setInitialValues({
                        ...initialValues,
                        Company: e.target.value,
                      })
                    }
                  />
                  <ErrorMessage
                    name="comany"
                    component="span"
                    className="text-red-500 font-normal m-3 text-center"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="text-black-200 font-medium text-base"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className={
                      errors.password && touched.password
                        ? "border-2 border-red-500 text-red-500"
                        : null
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-500 font-normal m-3 text-center"
                  />
                </div>
                <Link to="/">
                  <button
                    type="submit"
                    className="bg-blue-200 text-lg p-1 font-medium rounded-lg ml-[150px]"
                    //!(dirty && isValid) ? "disabled-btn" :
                    //disabled={!(dirty && isValid)}
                    onClick={submitForm}
                  >
                    Sign In
                  </button>
                </Link>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
