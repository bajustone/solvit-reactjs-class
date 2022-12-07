import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

type DataDef = {
   
}
const Login = () => {
    return <div>
         <Header/>
        <form action="">
            <input placeholder="username" />
            <br />
            <input placeholder="password" />
            <br />
            <button>Login</button>
        
            <Link to="/signup" >Create account</Link>

        </form>
    </div>
}
export default Login;