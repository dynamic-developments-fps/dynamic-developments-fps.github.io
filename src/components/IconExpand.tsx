import { useState } from 'preact/hooks';
import './IconExpand.css';

export default function IconExpand() {
	const [icon, setIcon] = useState<string>('/icon.png');
	const [width, setWidth] = useState<number>(400);
	const [rolling, setRolling] = useState<boolean>(false);

	const ANIMATION_DURATION_MS = 500;

	return (
		<div className='center'>
			<span className={`icon-expand  ${rolling ? 'animate' : ''}`}>
				<img
					src={icon}
					alt='Icon'
					width={width}
					height={400}
					onMouseEnter={() => {
						setIcon('/banner.png');
						setWidth(720);
					}}
					onMouseLeave={() => {
						setIcon('/icon.png');
						setWidth(400);
					}}
					onPointerDown={() => {
						if (rolling) return;
						setRolling(true);

						// When the pointer is released (even if released outside),
						// wait one animation duration so the roll doesn't stop immediately.
						const onPointerUp = () => {
							window.removeEventListener('pointerup', onPointerUp);
							window.removeEventListener('pointercancel', onPointerUp);
							setTimeout(() => setRolling(false), ANIMATION_DURATION_MS);
						};
						window.addEventListener('pointerup', onPointerUp);
						window.addEventListener('pointercancel', onPointerUp);
					}}
				/>
			</span>
		</div>
	);
}
