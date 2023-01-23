import { useState } from 'react'
import { Button } from 'react-bootstrap'

// custom react hook for form fields
const useField = (placeholder, type) => {
  const [value, setValue] = useState('')
  console.log(value)
  const onChange = (event) => setValue(event.target.value)
  return { placeholder, type, value, onChange }
}

const SignUp = () => {
  const firstName = useField('First Name', 'text')
  const lastName = useField('Last Name', 'text')
  const username = useField('Username', 'text')
  const password1 = useField('Password', 'password')
  const password2 = useField('Confirm Password', 'password')
  const email = useField('Email Address', 'email')
  const phone = useField('Mobile Phone', 'text')

  const handleSubmit = (e) => {
    e.preventDefault()
    const userSignupObject = {
      first: firstName.value,
      last: lastName.value,
      email: email.value,
      phone: phone.value,
      username: username.value,
      password1: password1.value,
      password2: password2.value,
    }
    alert('submitting \n' + JSON.stringify(userSignupObject))
  }

  return (
    <div
      className="border border-secondary rounded-3 col col-12 col-md-9 col-lg-6"
      style={{ padding: '2em' }}
    >
      <h4>Sign Up</h4> <br />
      <form onSubmit={handleSubmit}>
        <input className="form-control" {...firstName} /> <br />
        <input className="form-control" {...lastName} /> <br />
        <input className="form-control" {...email} /> <br />
        <input className="form-control" {...phone} /> <br />
        <input className="form-control" {...username} /> <br />
        <input className="form-control" {...password1} /> <br />
        <input className="form-control" {...password2} /> <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default SignUp
