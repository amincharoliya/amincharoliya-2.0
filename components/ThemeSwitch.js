import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Moon, Sun } from '../utils/Icons';

const ThemeSwitch = ({ classes }) => {
	const { theme, setTheme } = useTheme();
	const [animation, setAnimation] = useState(false);
	const ToggleTheme = () => {
		if (theme == 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
		setAnimation(true);
		setTimeout(() => {
			setAnimation(false);
		}, 300);
	};

	return (
		<button className={classes} onClick={() => ToggleTheme()}>
			{theme == 'dark' ? (
				<Moon classes={clsx(animation && 'animate-ping')} />
			) : (
				<Sun classes={clsx(animation && 'animate-ping')} />
			)}
		</button>
	);
};

export default ThemeSwitch;
