import { useSelector } from "react-redux"

export function Contact() {
  const username = useSelector((state: any) => state.user.value.username)

  return (
    <div>
      <h1>contact, {username}</h1>
    </div>
  )
}
