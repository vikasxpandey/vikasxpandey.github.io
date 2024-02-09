import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import './index.css';

const heights = [150, 80, 90, 70, 110, 150, 130, 80, 60, 90];

const skills = [
	'Azure',
	'Javascript',
	'NodeJS',
	'ReactJS',
	'VueJS',
	'React Native',
	'Python',
	'Relational Databases',
	'Non-relational Databases',
	'Git',
];

const lowerLimit = 50,
	upperLimit = 150;

const heights2 = Array.from(
	{ length: skills.length },
	() => Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit
);

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(0.5),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Skills = () => (
	<Box sx={{ margin: 1, padding: 1 }} className='skillsPaper' id='Skills'>
		<Typography variant='h3'>SKILLS</Typography>
		<Box>
			<Masonry columns={3} spacing={2}>
				{heights2.map((height, index) => (
					<Item key={index} sx={{ height }}>
						{skills[index]}
					</Item>
				))}
			</Masonry>
		</Box>
	</Box>
);

export default Skills;
