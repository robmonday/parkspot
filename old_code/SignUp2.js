import { useState } from 'react'
import { Button } from 'react-bootstrap'

const SignUp2 = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const userSignupObject = {
      first: inputs.firstName,
      last: inputs.lastName,
      phone: inputs.phone,
      email: inputs.email,
      password1: inputs.password1,
      password2: inputs.password2,
    }
    alert('submitting \n' + JSON.stringify(userSignupObject))
  }

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    console.log(inputs)
  }

  return (
    <div
      className="border border-secondary rounded-3 col col-12 col-md-9 col-lg-6"
      style={{ padding: '2em' }}
    >
      <h4>Sign Up</h4> <br />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={inputs.firstName}
          onChange={onChange}
        />
        <br />
        <input
          className="form-control"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={inputs.lastName}
          onChange={onChange}
        />
        <br />
        <input
          className="form-control"
          type="text"
          name="phone"
          placeholder="Phone"
          value={inputs.phone}
          onChange={onChange}
        />
        <br />
        <input
          className="form-control"
          type="text"
          name="email"
          placeholder="Email"
          value={inputs.email}
          onChange={onChange}
        />
        <br />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={onChange}
        />
        <br />
        <input
          className="form-control"
          type="password2"
          name="password2"
          placeholder="Confirm Password"
          value={inputs.password2}
          onChange={onChange}
        />
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default SignUp2
