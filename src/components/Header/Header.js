import "./header.css";

function Header(props) {
    return (
      <header>
        <p className="logo">{props.name}</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
    );
  }
  
  export default Header;