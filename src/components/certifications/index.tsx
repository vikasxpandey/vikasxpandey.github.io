import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';

interface Certification {
	name: string;
	issuer: string;
}

const certifications: Certification[] = [
	{
		name: 'Microsoft Certified - Azure Data Engineer Associate',
		issuer: 'Microsoft',
	},
	{
		name: 'Microsoft Certified - Azure Data Fundamentals',
		issuer: 'Microsoft',
	},
	{ name: 'Microsoft Certified - Azure Fundamentals', issuer: 'Microsoft' },
	{
		name: 'Sinequa Certified Professional - Design Specialist',
		issuer: 'Sinequa',
	},
];

const CertificationList: React.FC = () => {
	return (
		<Box
			sx={{
				margin: 1,
				padding: 1,
			}}
			id='Certifications'
		>
			<Typography variant='h3'>CERTIFICATIONS</Typography>
			<List>
				{certifications.map((cert: Certification, index: number) => (
					<div key={index}>
						<ListItem>
							<ListItemIcon>
								<CheckCircleOutline />
							</ListItemIcon>
							<ListItemText primary={cert.name} secondary={cert.issuer} />
						</ListItem>
						{index !== certifications.length - 1 && <Divider />}
					</div>
				))}
			</List>
		</Box>
	);
};

export default CertificationList;
