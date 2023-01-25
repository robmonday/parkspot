import { useRef } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from 'react-bootstrap'

let renderCount = 0

const SignUp3 = () => {
  renderCount++
  console.log('Render Count:', renderCount)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const normalizePhone = (value) => {
    const digitOnlyValue = value.replace(/\D/, '')
    return digitOnlyValue.substring(0, 10) || ''
  }

  const password = useRef({})
  password.current = watch('password', '')

  const email = useRef({})
  email.current = watch('email', '')

  const onSubmit = (data) => {
    delete data.emailConfirm
    delete data.passwordConfirm
    alert(JSON.stringify(data))
  }

  const errorMessageStyle = {
    color: 'red',
    fontSize: '.8em',
    paddingLeft: '.8em',
  }

  return (
    <div
      className="border border-secondary rounded-3 col col-12 col-md-9 col-lg-6"
      style={{ padding: '2em' }}
    >
      <h4>Sign Up</h4> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <span style={errorMessageStyle}>{errors.firstName?.message}</span>
        <input
          className="form-control"
          {...register('firstName', {
            required: 'Required',
            minLength: { value: 2, message: 'Too short' },
          })}
        />
        <label htmlFor="lastName">Last Name</label>
        <span style={errorMessageStyle}>{errors.lastName?.message}</span>
        <input
          className="form-control"
          {...register('lastName', {
            required: 'Required',
            minLength: { value: 2, message: 'Too short' },
          })}
        />
        <label htmlFor="phone">Phone</label>
        <span style={errorMessageStyle}>{errors.phone?.message}</span>
        <input
          className="form-control"
          {...register('phone', {
            required: 'Required',
            minLength: { value: 10, message: 'Too short' },
            pattern: {
              value: /^[(]?\d{3}[-)\s]?[\s]?\d{3}[-\s]?\d{4}$/,
              message: 'Must be US phone number with area code',
            },
          })}
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          onChange={(event) => {
            const { value } = event.target
            event.target.value = normalizePhone(value)
          }}
        />
        <label htmlFor="email">Email</label>
        <span style={errorMessageStyle}>{errors.email?.message}</span>
        <input
          className="form-control"
          type="email"
          {...register('email', {
            required: 'Required',
            minLength: { value: 7, message: 'Too short' },
          })}
        />
        <label htmlFor="emailConfirm">Confirm Email</label>
        <span style={errorMessageStyle}>{errors.emailConfirm?.message}</span>
        <input
          className="form-control"
          type="email"
          {...register('emailConfirm', {
            required: 'Required',
            minLength: { value: 7, message: 'Too short' },
            validate: (value) =>
              value === email.current || 'Email addresses do not match',
          })}
        />
        <label htmlFor="password">Password</label>
        <span style={errorMessageStyle}>{errors.password?.message}</span>
        <input
          className="form-control"
          type="password"
          autoComplete="off"
          {...register('password', {
            pattern: {
              value: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message: 'Must include uppercase, lowercase, number, and symbol',
            },
            required: 'Required',
            // minLength: { value: 8, message: 'Too short' },
          })}
        />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <span style={errorMessageStyle}>{errors.passwordConfirm?.message}</span>
        <input
          className="form-control"
          type="password"
          autoComplete="off"
          {...register('passwordConfirm', {
            required: 'Required',
            minLength: { value: 8, message: 'Too short' },
            validate: (value) =>
              value === password.current || 'Passwords do not match',
          })}
        />
        <br />
        <Button type="submit">Submit</Button> &nbsp;
        <Button href="/" variant="outline-primary">
          Cancel
        </Button>
      </form>
    </div>
  )
}

export default SignUp3
