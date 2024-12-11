import "./logo.css";

export default function Logo() {
	return (
		<a className={"logo-wrapper"} href={"/"}>
			<img src={"/logo.webp"} alt="Logo"/>
		</a>
	)
}