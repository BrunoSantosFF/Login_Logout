import React from 'react'
import styles from './styles.module.css'

function Login() {
  return (
    <div className={styles.custom_div}>
      <div className={styles.box_input}>
        <form>
          <div className={styles.form}>
            <label htmlFor='email'>Email:</label> 
            <input type='email' placeholder='Enter E-mail' className={styles.input}></input>
          </div>
          <div className={styles.form}>
            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='Enter Password' className={styles.input}></input>
          </div>
          <button className={styles.btn}>Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login