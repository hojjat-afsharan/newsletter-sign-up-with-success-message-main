import Styles from "./signup-form.module.scss";

const SignupForm = () => {
  return (
    <div className={Styles.form}>
      <h1 className={Styles.header}>Stay Updated!</h1>
      <div>
        <div>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>

        <div>
          <ul className={Styles.list}>
            <li className={Styles.item}>
              Product discovery and building what matters
            </li>
            <li className={Styles.item}>
              Measuring to ensure updates are a success
            </li>
            <li className={Styles.item}>And much more!</li>
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          Email Address
          <input
            type="email"
            className={Styles.input}
            placeholder="email@company.com"
          />
          <button type="submit" className={Styles.button}>
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
