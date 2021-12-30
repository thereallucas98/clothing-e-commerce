import { useState, FormEvent } from "react";

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
        <input name="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Email</label>

        <input name="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <label>Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default SignIn;
