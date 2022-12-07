import { Link } from "react-router-dom";

import "./style.css";
type Props = {
    visible: boolean
    
}
const SideNav = ({visible}: Props) => {
    const visibleClass = visible ? "visible" : "";
   
    return <nav className={`side-nav ${visibleClass}`}>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/inspiration">Inspiration</Link>
        <Link className="link" to="/findwork">Find work</Link>
        <Link className="link" to="/learn-design">Learn design</Link>
        <Link className="link" to="/go-pro">Go pro</Link>

    </nav>
}
export default SideNav;