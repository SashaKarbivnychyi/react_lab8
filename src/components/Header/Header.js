import "./header.css";

import Logo from "../Logo/Logo";
import DateTime from "../DateTime/DateTime";

function Header(props) {
    return (
      <header>
        <div className={"container"}>
        <Logo />
      </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li><DateTime/></li>
        </ul>
      </header>
    );
  }
  
  export default Header;