import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [firebaseerror, setfirebaseerror] = useState();
  const [loading, setloading] = useState(false);
  const [succesmsg, setsuccesmsg] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid Email Address").required("required"),
      password: Yup.string()
        .min(6, "Must be at least 6 character")
        .required("required"),
    }),

    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      setloading(true);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setsuccesmsg("logged in successfully! welcome you");
          setloading(false);
          setTimeout(() => navigate("/Home"), 2000);
        })
        .catch((error) => {
          setloading(false);
          if (error.code.includes("auth/wrong-password")) {
            setfirebaseerror("wrong password. please try again.");
          } else if (error.code.includes("auth/user-not-found")) {
            setfirebaseerror("No user found with this email.");
          } else {
            setfirebaseerror("an error occurred. please try again");
          }
          resetForm();
        });
    },
  });
  return (
    <div className="bg-gray-300 flex justify-center items-center min-h-screen">
      <div className="bg-white w-[400px] h-[300px] rounded-md shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-purple-700 mb-6">
          Login
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-5 items-center">
            <div className="relative w-full">
              <input
                className="border-2 border-gray-300 rounded-md w-full p-2 pr-10 focus:outline-none focus:border-purple-500"
                type="text"
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
                </>
              ) : (
                formik.touched.email && !formik.errors.email && <></>
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
                </>
              ) : (
                formik.touched.password &&
                !formik.errors.password && (
                  <>
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

export default Login;
