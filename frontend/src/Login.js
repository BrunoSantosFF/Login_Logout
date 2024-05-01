import React from 'react'

function Login() {
  return (
    <div>
      <div>
        <form>
          <div>
            <label htmlFor='email'>Email</label> 
            <input type='email' placeholder='Enter E-mail'></input>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password'></input>
          </div>
          <button className=''>Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login