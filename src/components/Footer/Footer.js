import "./footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="column">
        <h3>{props.name}</h3>
      </div>
    </footer>
  );
}

export default Footer;