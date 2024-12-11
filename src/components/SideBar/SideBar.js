import "./sidebar.css";

import Menu from "../Menu/Menu";

import { useSelector } from "react-redux";

function SideBar(props) {
  const menuItems = useSelector(state => state.menu);
  return (
    <aside>
      <h3>{props.name}</h3>
      <Menu
        view={"vertical"}
        list={menuItems}
      />
    </aside>
  );
}

export default SideBar;