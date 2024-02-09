import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<Box sx={{ margin: 1, padding: 1 }}>
				<Typography variant='body2' color='textSecondary'>
					© {new Date().getFullYear()} Vikas Pandey
				</Typography>

				<Typography variant='body2' color='textSecondary'>
					<Link color='inherit' href='https://www.github.com/vikasxpandey'>
						GitHub
					</Link>{' '}
					<Link color='inherit' href='https://www.linkedin.com/in/vikasxpandey'>
						LinkedIn
					</Link>
				</Typography>
			</Box>
		</footer>
	);
};

export default Footer;
