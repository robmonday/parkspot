const Login = () => {
  return (
    <div>
      <p>This is the login form</p>
      <form onSubmit={() => alert('submit!')}>
        <label forHtml="email">Email </label>{' '}
        <input
          placeholder="your@email.com"
          // value={'email'}
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <label forHtml="password">Password </label>{' '}
        <input
          id="password"
          type="password"
          // value={'password'}
          onChange={(e) => console.log(e.target.value)}
        />
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  )
}

export default Login
