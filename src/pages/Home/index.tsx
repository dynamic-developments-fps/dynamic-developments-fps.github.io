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
		</>
	);
}
