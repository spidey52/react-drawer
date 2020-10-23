import React from 'react'
import './PasswordList.css'

const passwordList = [1, 2, 3, 4, 5, 6, 7, 8]

const PasswordList = props => {
  return (
    <div>
      {passwordList.map(pass => (<div className="password-list"> {pass}</div>))}
    </div>
  )
}

export default PasswordList