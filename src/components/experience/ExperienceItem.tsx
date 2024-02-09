import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ExperienceItemProps {
	timeline: String;
	company: String;
	description: String;
}

const ExperienceItem = ({
	timeline,
	company,
	description,
}: ExperienceItemProps) => (
	<Box sx={{ marginY: 3 }}>
		<Typography>{timeline}</Typography>
		<div>
			<Typography variant='h6' component='span'>
				{company}
			</Typography>
			<Typography>{description}</Typography>
		</div>
	</Box>
);

export default ExperienceItem;
