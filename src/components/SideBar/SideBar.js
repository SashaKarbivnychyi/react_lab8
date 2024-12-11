import "./sidebar.css";

import Menu from "../Menu/Menu";

function SideBar(props) {
  return (
    <aside>
      <h3>{props.name}</h3>
      <Menu
        view={"vertical"}
        list={[
          { text: "Telegram", url: "http://telegram.org" },
          { text: "Twitter", url: "http://twitter.com" },
          { text: "Instagram" }
        ]}

      />
    </aside>
  );
}

export default SideBar;