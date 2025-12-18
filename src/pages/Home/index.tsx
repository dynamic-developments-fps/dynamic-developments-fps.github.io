import IconExpand from '@/components/IconExpand';
import './Home.css';

export function Home() {
	return (
		<>
			<h1>
				<span className='dynamic-text-underline'>Dynamic</span>{' '}
				<span className='devel-cursor'>Developments</span>{' '}
				<span className='fps-cursor'>FPS</span>
			</h1>
			<IconExpand />
			<h1>Upcoming games:</h1>
			<ul>
				<li>The Last Route</li>
				<li>Steel and Scales</li>
				<li>Steel and Scales - Boxy's Version</li>
				<li>Battles in Time: Eras Collide</li>
			</ul>
		</>
	);
}
