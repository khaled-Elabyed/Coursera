import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firebaseerror, setfirebaseerror] = useState();
  const [loading, setloading] = useState(false);
  const [succesmsg, setsuccesmsg] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 character or less")
        .required("required"),
      email: Yup.string().email("invalid Email Address").required("required"),
      password: Yup.string()
        .min(6, "Must be at least 6 character")
        .required("required"),
      repassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "password must be match"
      ),
    }),

    onSubmit: (values, { resetForm }) => {
      const { name, email, password } = values;
      setloading(true);

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, { displayName: name }).then(() => {
            setsuccesmsg("Account Created Successfully!");
            setTimeout(() => {
              navigate("/Home");
            }, 2000);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setloading(false);
          if (errorCode.includes("auth/email-already-in-use")) {
            setfirebaseerror("Email already in use, try another one.");
          } else {
            setfirebaseerror("An error occurred. Please try again.");
          }
          resetForm();
        });
    },
  });

  return (
    <div className="bg-gray-300 flex justify-center items-center min-h-screen">
      <div className="bg-white w-[400px] h-[450px] rounded-md shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-purple-700 mb-6">
          Sign Up
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-5 items-center ">
            <div className="relative w-full">
              <input
                className="border-2 border-gray-300 rounded-md w-full p-2 pr-10 focus:outline-none focus:border-purple-500"
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="on"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <>
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors.name}
                  </p>
                  <FaExclamationCircle
                    color="red"
                    className="absolute right-2 top-3"
                  />
                </>
              ) : (
                formik.touched.name &&
                !formik.errors.name && (
                  <>
                    <FaCheckCircle
                      color="green"
                      className="absolute right-2 top-3"
                    />
                  </>
                )
              )}
            </div>
            <div className="relative w-full">
              <input
                className="border-2 border-gray-300 rounded-md w-full p-2 pr-10 focus:outline-none focus:border-purple-500"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="on"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <>
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors.email}
                  </p>
                  <FaExclamationCircle
                    color="red"
                    className="absolute right-2 top-3"
                  />
                </>
              ) : (
                formik.touched.email &&
                !formik.errors.email && (
                  <>
                    <FaCheckCircle
                      color="green"
                      className="absolute right-2 top-3"
                    />
                  </>
                )
              )}
            </div>
            <div className="relative w-full">
              <input
                className="border-2 border-gray-300 rounded-md w-full p-2 pr-10 focus:outline-none focus:border-purple-500"
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="on"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <>
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors.password}
                  </p>
                  <FaExclamationCircle
                    color="red"
                    className="absolute right-2 top-3"
                  />
                </>
              ) : (
                formik.touched.password &&
                !formik.errors.password && (
                  <>
                    <FaCheckCircle
                      color="green"
                      className="absolute right-2 top-3"
                    />
                  </>
                )
              )}
            </div>
            <div className="relative w-full">
              <input
                className="border-2 border-gray-300 rounded-md w-full p-2 pr-10 focus:outline-none focus:border-purple-500"
                type="password"
                name="repassword"
                placeholder="Enter your repassword"
                autoComplete="on"
                onChange={formik.handleChange}
                value={formik.values.repassword}
                onBlur={formik.handleBlur}
              />
              {formik.touched.repassword && formik.errors.repassword ? (
                <>
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors.repassword}
                  </p>
                  <FaExclamationCircle
                    color="red"
                    className="absolute right-2 top-3"
                  />
                </>
              ) : (
                formik.touched.repassword &&
                !formik.errors.repassword && (
                  <>
                    <FaCheckCircle
                      color="green"
                      className="absolute right-2 top-3"
                    />
                  </>
                )
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 transition-all duration-200"
            >
              {loading ? "processing..." : "register account"}
            </button>
            {succesmsg && <p>{succesmsg}</p>}
            {firebaseerror && <p>{firebaseerror}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
