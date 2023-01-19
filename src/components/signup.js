const SignUp = () => {
  return (
    <div>
      <p>This is the signup form</p>
      <form onSubmit={() => alert('submit!')}>
        <label>First Name </label>{' '}
        <input
          value={'first name'}
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <label>Last Name </label>{' '}
        <input
          value={'last name'}
          onChange={(e) => console.log(e.target.value)}
        />
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  )
}

export default SignUp
