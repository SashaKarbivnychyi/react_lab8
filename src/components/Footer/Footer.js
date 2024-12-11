import "./footer.css";

import Menu from "../Menu/Menu";

function Footer(props) {
  return (
    <footer>
      <div className="column">
        <h3>{props.name}</h3>
        <Menu
        view={"horizontal"}
        list={[
          { text: "Telegram", url: "http://telegram.org" },
          { text: "Twitter", url: "http://twitter.com" },
          { text: "Instagram" }
        ]}
      />
      </div>
    </footer>
  );
}

export default Footer;