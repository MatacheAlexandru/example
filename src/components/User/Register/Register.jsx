import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import Logo from "../../../../public/Logo.svg";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(12, "Password must be less than 12 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values) => {
      try {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = existingUsers.some(
          (user) => user.email === values.email
        );

        if (userExists) {
          setError("Email is already registered");
        } else {
          const newUser = {
            name: values.name,
            email: values.email,
            password: values.password,
          };
          localStorage.setItem(
            "users",
            JSON.stringify([...existingUsers, newUser])
          );
          navigate("/login");
        }
      } catch (error) {
        setError("Something went wrong. Please try again.");
      }
    },
  });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.customBackground}>
      <div className={styles.containerRegister}>
        <img src={Logo} alt="Logo" className={styles.logoImage} />
        <div className={styles.customCard}>
          <div className={styles.customCardBody}>
            <div>
              <button className={styles.customBackButton} onClick={handleBack}>
                <span className={styles.customBackIcon}></span> Back
              </button>
            </div>

            <div className={styles.rowPosition}>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <p className={styles.customTitle}>Register</p>

                  <div className={styles.inputWrapper}>
                    <input
                      placeholder=" "
                      type="text"
                      className={styles.customInput}
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <label htmlFor="form1" className={styles.customLabel}>
                      Your Name
                    </label>
                    {formik.touched.name && formik.errors.name && (
                      <div className={styles.error}>{formik.errors.name}</div>
                    )}
                  </div>

                  <div className={styles.inputWrapper}>
                    <input
                      placeholder=" "
                      type="email"
                      className={styles.customInput}
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <label htmlFor="form1" className={styles.customLabel}>
                      Your Email
                    </label>
                    {formik.touched.email && formik.errors.email && (
                      <div className={styles.error}>{formik.errors.email}</div>
                    )}
                  </div>

                  <div className={styles.inputWrapper}>
                    <input
                      placeholder=" "
                      type="password"
                      className={styles.customInput}
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <label htmlFor="form1" className={styles.customLabel}>
                      Password
                    </label>
                    {formik.touched.password && formik.errors.password && (
                      <div className={styles.error}>
                        {formik.errors.password}
                      </div>
                    )}
                  </div>

                  <div className={styles.inputWrapper}>
                    <input
                      placeholder=" "
                      type="password"
                      className={styles.customInput}
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                    />
                    <label htmlFor="form1" className={styles.customLabel}>
                      Repeat your password
                    </label>
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <div className={styles.error}>
                          {formik.errors.confirmPassword}
                        </div>
                      )}
                  </div>

                  <div className={styles.customLabel2}>
                    <input type="checkbox" id="flexCheckDefault" />
                    <label htmlFor="flexCheckDefault">
                      I agree to all statements in the Terms of service
                    </label>
                  </div>

                  {error && <p className={styles.error}>{error}</p>}

                  <button type="submit" className={styles.customSubmitButton}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
