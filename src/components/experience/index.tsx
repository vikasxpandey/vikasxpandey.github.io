import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ExperienceItem from './ExperienceItem';

import './index.css';

const experienceData = [
	{
		company: 'Tata Consultancy Services',
		timeline: '2021 - Present',
		description: `Orchestrated the successful migration of an organisation to the Azure cloud platform.
		Oversaw the management of a scalable Azure infrastructure comprising VMs, databases, load balancers, and storage accounts.
		Established pipelines for seamless continuous code deployment.
		Maintained secure access to various tools and services through effective utilisation of security groups.
		Leveraged relational database tools to build a robust and scalable database service.
		Developed high-quality UI and backend code following best practices and ensuring reusability.
		Acquired in-depth knowledge of Agile methodologies and the application development/maintenance process.`,
	},
	{
		company: 'Freelance',
		timeline: '2020 - 2021',
		description: `Collaborated with clients to define software requirements, establish budgets, and negotiate maintenance agreements.
		Orchestrated the entire software development process, from initial planning to post-deployment maintenance and support.
		Designed and implemented a mobile application that captures real-time transportation vehicle location and tracks progress.
		Created multiple e-commerce websites for clients across diverse industries, including art, fashion, and skincare.
		Developed automated Python scripts for data crawling to streamline data processing workflows.
		Contributed to the development and enhancement of ERP software solutions for transportation companies.
		Constructed and maintained multiple REST APIs to enable cross-platform application development.`,
	},
	{
		company: 'Revolo infotech',
		timeline: '2019 - 2020',
		description: `Contributed to the development and enhancement of websites for the company's diverse clientele.
		Identified and implemented new tools and frameworks to streamline development processes and improve the quality of resulting software.
		Brainstormed innovative ideas and solutions to optimise software delivery using Agile methodologies. One of my key contributions was the 
		identification and integration of cutting-edge tools and frameworks into our development pipeline. By staying abreast of emerging 
		technologies, I ensured that our team remained at the forefront of industry standards. These innovations not only expedited our 
		workflows but also bolstered the robustness and scalability of our software solutions.`,
	},
];

const Experience = () => (
	<Box
		sx={{
			margin: 1,
			padding: 1,
		}}
		className='experiencePaper'
		id='Experience'
	>
		<Typography variant='h3'>WORK EXPERIENCE</Typography>
		<Box>
			{experienceData.map((item) => (
				<ExperienceItem
					timeline={item.timeline}
					company={item.company}
					description={item.description}
				/>
			))}
		</Box>
	</Box>
);

export default Experience;
