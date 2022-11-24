import { useTheme } from 'next-themes';
import { Moon, Sun } from '../utils/Icons';

const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();
	const ToggleTheme = () => {
		if (theme == 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};
	return (
		<button className="dark:text-white" onClick={() => ToggleTheme()}>
			{theme == 'dark' ? <Moon /> : <Sun />}
		</button>
	);
};

export default ThemeSwitch;
