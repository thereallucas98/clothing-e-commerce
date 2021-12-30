import { useState, FormEvent } from "react";
import FormInput from "../FormInput";

import "./sign-in.styles.scss";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className="sign-in">
      <h2 className="">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={email} label="Email" onChange={e => setEmail(e.target.value)} required />

        <FormInput name="password" type="password" value={password} label="Password" onChange={e => setPassword(e.target.value)} required />

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default SignIn;
