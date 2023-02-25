import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/21022/pexels-photo.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse">
        <div className="text-center lg:text-left  text-neutral-content">
          <h1 className="text-5xl font-bold">Log In to your account</h1>
          <p className="py-6">
            Log in with your existing account or <a href="https://accounts.google.com/signin"><u>Sign Up with Google.</u></a>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Formik
              initialValues={{
                username: "",
                password: ""
              }}
              validate={(values) => {
                const errors = {};
                if (!values.username) 
                    errors.username = "Username is required, bro.";

                if (!values.password)
                  errors.password = "Password is required too, bro.";
                  
                else if (values.password.length < 4)
                  errors.password = "Password must be 4 characters long.";
                
                return errors;
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                if(values.username == "Om" && values.password == "homie")
                {
                    setSubmitting(false);
                    navigate("/");
                }
                if(values.username == "Aryan" && values.password == "ayan")
                {
                    setSubmitting(false);
                    navigate("/");
                }
                if(values.username == "Pratik" && values.password == "euuu")
                {
                    setSubmitting(false);
                    navigate("/");
                }
                if(values.username == "Tejas" && values.password == "iluvgym")
                {
                    setSubmitting(false);
                    navigate("/");
                }
                else
                {
                  errors.message = "Wrong Username/Password!";
                }
                
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Username</span>
                    </label>
                    <Field
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Funky Cool Username ;)"
                      className="input input-bordered"
                    />
                    <ErrorMessage
                      name="username"
                      className="label text-sm text-red-500"
                      component={"div"}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <Field
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Password Harder than The Rock"
                      className="input input-bordered"
                    />
                    <ErrorMessage
                      name="password"
                      className="label text-sm text-red-500"
                      component={"div"}
                    />
                  </div>
                  <div className="form-control mt-6 items-center justify-center">
                    <button
                      type="submit"
                      className={`btn btn-primary ${
                        isSubmitting && "loading"
                        } w-full`}
                    >
                        {!isSubmitting && "Login"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
