import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div
      className="border border-secondary rounded-3 col col-12 col-md-9 col-lg-6"
      style={{ padding: '2em' }}
    >
      <h4>Log In</h4> <br />
      <form onSubmit={() => alert('submit!')}>
        {/* <label htmlFor="email">Email </label> */}
        <input
          className="form-control form-control-lg"
          placeholder="Email"
          type="email"
          // value={'email'}
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        {/* <label htmlFor="password">Password </label> */}
        <input
          className="form-control form-control-lg"
          placeholder="Password"
          id="password"
          type="password"
          // value={'password'}
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <Button type="submit">Submit</Button>
      </form>
      <br />
      Don't have an account yet? &nbsp;<Link to="/signup">Sign Up!</Link>
    </div>
  )
}

export default Login
