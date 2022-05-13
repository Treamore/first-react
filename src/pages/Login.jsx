import { useContext } from "react";
import { AuthContext } from "../components/context";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/Input/MyInput"

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = event=>{
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth','true')
}
    return (
        <div style={{marginLeft:"auto", marginRight:"auto", maxWidth:"500px"}}> 
            <h1 style={{marginTop:"10px", marginBottom:"10px", textAlign:"center"}}>Login Page</h1>
            <form> 
                <MyInput type="text" placeholder="Login"></MyInput>
                <MyInput type="password" placeholder="Password"></MyInput>
                <MyButton onClick={login}>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;