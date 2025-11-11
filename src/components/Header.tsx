import { useLocation } from 'preact-iso';
import "./Header.css"

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" className={"link-nav " + (url == '/' && 'active-nav')}>
					Home
				</a>
				<a href="/404" className={"link-nav " + (url == '/404' && 'active-nav')}>
					404
				</a>
				<span className="right">
					<a href="https://www.youtube.com/@DynamicDevelopmentsFPS" style={{
						textDecoration: "none",
						color: "red"
					}}
						target="_blank"
						rel="noopener noreferrer">
						Youtube
					</a>
					<a href="https://github.com/dynamic-developments-fps" style={{
						textDecoration: "none",
						color: "black"
					}}
						target="_blank"
						rel="noopener noreferrer">
						Github
					</a>
				</span>
			</nav>
		</header>
	);
}
