import "./footer.css";

import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";

function Footer(props) {
  const menuItems = useSelector(state => state.menu);
  return (
    <footer>
      <div className="column">
        <h3>{props.name}</h3>
        <Menu
        view={"horizontal"}
        list={menuItems}
      />
      </div>
    </footer>
  );
}

export default Footer;