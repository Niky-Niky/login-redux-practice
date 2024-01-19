import { NavLink, Outlet } from "react-router-dom"

export const App = () => {
  return(
    <>
      <NavLink to='/login'>Log in</NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <Outlet/>
    </>
  )
}