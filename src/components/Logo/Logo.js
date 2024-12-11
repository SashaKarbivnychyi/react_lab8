import { useSelector } from "react-redux";
import "./logo.css";

export default function Logo() {
	const logo = useSelector(state => state.logo);
	return (
		<a className={"logo-wrapper"} href={"/"}>
			<img src={logo} alt="Logo"/>
		</a>
	)
}