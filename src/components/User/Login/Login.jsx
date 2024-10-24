import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Login.module.css";
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const localUser = "admin@example";
  const localPassword = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === localUser && password === localPassword) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className={styles.customBackground}>
      <div className={styles.containerLogin}>
        <div className={styles.logoTitle}>
          <img src={Logo} alt="Logo" className={styles.logoImage} />
        </div>

        <form onSubmit={handleLogin}>
          <div>
            <div className={styles.inputFieldSize}>
              <InputField
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email address"
                id="form1"
              />
            </div>

            <div className={styles.inputFieldSize}>
              <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                id="form2"
              />
            </div>
          </div>

          {/* Afișează eroarea în caz de autentificare greșită */}
          {error && <p className={styles.error}>{error}</p>}

          <div>
            <div className={styles.boxCheck}>
              <input type="checkbox" id="flexCheckDefault" />
              <label htmlFor="flexCheckDefault">Remember me</label>
            </div>
            <div>
              <Link to="/forgot" className={styles.darkBlueLink}>
                Forgot password?
              </Link>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign in
          </button>
        </form>

        <div className="text-center">
          <p className={styles.notAMemberText}>
            Not a member?{" "}
            <Link to="/signup" className={styles.registerLink}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

Login.propTypes = {
  startAnimation: PropTypes.func,
};

export default Login;
