import "./sidebar.css";

function SideBar(props) {
  return (
    <aside>
      <h3>{props.name}</h3>
      <a href={"https://telegram.org"}>telegram</a>
      <a href={"https://twitter.com"}>twitter</a>
      <a href={"https://instagram.com"}>instagram</a>
    </aside>
  );
}

export default SideBar;