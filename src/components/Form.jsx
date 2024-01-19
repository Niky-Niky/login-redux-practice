import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices";

export const Form = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(event.currentTarget.elements.name.value))
        navigate('/dashboard', {replace: true})
    }
    
    return(
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='name'
                />
                <button type="submit">Log In</button>
            </form>
            
        </>
    )
}