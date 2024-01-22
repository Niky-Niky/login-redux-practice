import { FormComponent } from '../Form'
import { useSelector } from "react-redux"
import { UserMenu } from "../../components/UserMenu"

export const LoginPage = () => {
    const isLoggedIn = useSelector((state => state.authUser.isLoggedIn))
    
    return(
        <>
        {isLoggedIn ? (
            <UserMenu/>
        ) : (
            <FormComponent/>
        )}
        </>
    )
}