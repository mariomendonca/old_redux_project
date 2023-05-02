import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store"

export function Login() {
  const [newUsername, setNewUsername] = useState<string>('')
  const dispatch = useDispatch()

  const username = useSelector((state: any) => state.user.value.username)
  return (
    <div>
      <h1>Login</h1>
      {username}
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewUsername(e.target.value)} />
      <button
        onClick={() => dispatch(login({ username: newUsername }))}
      >
        Submit login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}
