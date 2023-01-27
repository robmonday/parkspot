import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Login = ({ handleLogin }) => {
  return (
    <div
      className="border border-secondary rounded-3 col col-12 col-md-9 col-lg-6"
      style={{ padding: '2em' }}
    >
      <h4>Log In</h4> <br />
      <form onSubmit={handleLogin}>
        {/* <label htmlFor="email">Email </label> */}
        <input
          className="form-control form-control-lg"
          placeholder="Email"
          type="email"
          // value={'email'}
          // onChange={(e) => console.log(e.target.value)}
        />
        <br />
        {/* <label htmlFor="password">Password </label> */}
        <input
          className="form-control form-control-lg"
          placeholder="Password"
          id="password"
          type="password"
          // value={'password'}
          // onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <Button type="submit">Submit</Button> &nbsp;&nbsp;
        <Button href="/" variant="outline-primary">
          Cancel
        </Button>{' '}
        &nbsp;&nbsp;
        <Link to={'/forgot'}>Forgot password?</Link>
      </form>
      <br />
      Don&apos;t have an account yet? &nbsp;<Link to="/signup">Sign Up!</Link>
    </div>
  )
}

export default Login
