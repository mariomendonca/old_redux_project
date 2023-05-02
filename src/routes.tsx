import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"

export function Routes() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <p>|</p>
      <Link to='/login'>Login</Link>
      <p>|</p>
      <Link to='/contact'>Contact</Link>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Switch>
    </Router>
  )
}