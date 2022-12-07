import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

type DataDef = {
   
}
const Signup = () => {
    return <div>
        <form action="">
            <input type="text" placeholder="Firstname" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="text" placeholder="password" />
            <br />
            <button>Create acccount</button>
            <Link to="/login" >Login</Link>
        </form>
    </div>
}
export default Signup;