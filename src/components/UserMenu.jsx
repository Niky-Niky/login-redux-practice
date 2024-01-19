import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/slices";

export const UserMenu = () => {
    const user = useSelector((state => state.authUser.user))
    const dispatch = useDispatch();

    const handleLogout = (event) => {
        dispatch(logout())
    }

    return(
       <>
       <h2>Hello, {user}</h2>
       <button onClick={handleLogout}>Log Out</button>
       </>
        
    )
};