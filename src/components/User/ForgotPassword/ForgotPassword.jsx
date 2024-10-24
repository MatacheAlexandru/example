import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";
import Logo from "../../../../public/Logo.svg";

function InputField({ type, placeholder, value, onChange, label, id }) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          className={styles.customInput}
        />
        <label htmlFor={id} className={styles.customLabel}>
          {label}
        </label>
      </div>
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function ForgotPassword() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.customBackground}>
      <div className={styles.containerForget}>
        <div className={styles.customColImage}>
          <img src={Logo} alt="Logo" className={styles.logoImage} />
        </div>
        <div className={styles.customCard}>
          <div className={styles.customCardBody}>
            <div className={styles.backButtonContainer}>
              <button className={styles.customBackButton} onClick={handleBack}>
                <span className={styles.customBackIcon}></span> Back
              </button>
            </div>

            <div className={styles.customRow}>
              <div className={styles.customColForm}>
                <p className={styles.customTitle}>Forgot Password</p>

                <InputField
                  type="email"
                  placeholder="Enter your email"
                  value=""
                  onChange={() => {}}
                  label="Your Email"
                  id="form1"
                />

                <button className={styles.customSubmitButton}>
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ForgotPassword.propTypes = {
  startAnimation: PropTypes.func,
};

export default ForgotPassword;
