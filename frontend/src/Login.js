import React, { useState } from 'react'
import styles from './styles.module.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.custom_div}>
      <div className={styles.box_input}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <label htmlFor='email'>Email:</label> 
            <input type='email' placeholder='Enter E-mail' className={styles.input}
            onChange={ e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form}>
            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='Enter Password' className={styles.input}
            onChange={ e => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.btn}>Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login