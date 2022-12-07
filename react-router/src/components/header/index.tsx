import { useState } from "react";
import SideNav from "../sid-nav";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    
    return  <header className="header">
    <button onClick={()=>{
        setShowNav(!showNav);
    }} className="material-symbols-outlined">   
        menu 
    </button>
    <SideNav visible={showNav} />
   </header>
}
export default Header;