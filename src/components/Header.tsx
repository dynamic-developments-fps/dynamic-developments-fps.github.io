import { useLocation } from 'preact-iso';
import './Header.css';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a
					href='/'
					className={`link-nav stroke-lite ${url == '/' && 'active-nav'}`}>
					Home
				</a>
				<span className='right'>
					<a
						href='https://www.youtube.com/@DynamicDevelopmentsFPS'
						style={{ textDecoration: 'none', color: 'red' }}
						target='_blank'
						rel='noopener noreferrer'
						className='stroke'>
						Youtube
					</a>
					<a
						href='https://github.com/dynamic-developments-fps'
						style={{ textDecoration: 'none', color: 'white' }}
						target='_blank'
						rel='noopener noreferrer'
						className='stroke'>
						Github
					</a>
				</span>
			</nav>
		</header>
	);
}
