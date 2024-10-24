import React from "react";
import PropTypes from "prop-types";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../public/Logo.svg";

function Register() {
  const navigate = useNavigate();

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
              <div>
                <p className={styles.customTitle}>Register</p>

                <div className={styles.inputWrapper}>
                  <input
                    placeholder=" "
                    type="text"
                    className={styles.customInput}
                  />
                  <label htmlFor="form1" className={styles.customLabel}>
                    Your Name
                  </label>
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    placeholder=" "
                    type="email"
                    className={styles.customInput}
                  />
                  <label htmlFor="form1" className={styles.customLabel}>
                    Your Email
                  </label>
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    placeholder=" "
                    type="password"
                    className={styles.customInput}
                  />
                  <label htmlFor="form1" className={styles.customLabel}>
                    Password
                  </label>
                  <span className={styles.passwordToggleIcon}></span>
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    placeholder=" "
                    type="password"
                    className={styles.customInput}
                  />
                  <label htmlFor="form1" className={styles.customLabel}>
                    Repeat your password
                  </label>
                  <span className={styles.passwordToggleIcon}></span>
                </div>

                <div className={styles.customLabel2}>
                  <input type="checkbox" id="flexCheckDefault" />
                  <label htmlFor="flexCheckDefault">
                    I agree all statements in Terms of service
                  </label>
                </div>

                <button className={styles.customSubmitButton}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  startAnimation: PropTypes.func,
};

export default Register;
