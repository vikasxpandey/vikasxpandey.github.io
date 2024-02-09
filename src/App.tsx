import './App.css';

import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Experience from './components/experience';
import Skills from './components/skills';
import Certifications from './components/certifications';

const App: React.FunctionComponent = () => {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		setIsDark(isDark ? false : true);
	};

	const darkTheme = createTheme({
		palette: {
			mode: isDark ? 'dark' : 'light',
			primary: {
				main: '#6AEF8B',
				light: '#B3F2C3',
				dark: '#53705A',
			},
			secondary: {
				main: '#A3272D',
				light: '#F08187',
				dark: '#701B1F',
			},
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<div className='App'>
				<Header toggleTheme={toggleTheme} />
				<body>
					<Hero />
					<Experience />
					<Skills />
					<Certifications />
				</body>
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default App;
