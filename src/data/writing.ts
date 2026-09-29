/**
 * Articles written for outside publications, shown in the Writing section
 * on the home page. To add one: paste a new object into the array below.
 */

export interface Article {
	title: string;
	publication: string;
	link: string;
}

export const writing: Article[] = [
	{
		title: 'Pushing a $7 Linux Board to the Limit',
		publication: 'Medium',
		link: 'https://medium.com/@niroshanyi/pushing-a-7-linux-board-to-the-limit-a840ef04d1d1',
	},
	{
		title: 'Why Do Microcontrollers Get Distracted?',
		publication: 'RoboticGen Labs',
		link: 'https://blog.roboticgenlabs.com/why-do-microcontrollers-get-distracted-a24502951c1e',
	},
	{
		title: 'Blinking into the Heart of Arduino',
		publication: 'Stackademic',
		link: 'https://blog.stackademic.com/blinking-into-the-heart-of-arduino-8b552976592c',
	},
	{
		title: 'Building a Library Management System using Django',
		publication: 'Python in Plain English',
		link: 'https://python.plainenglish.io/building-a-library-management-system-lms-using-django-85a3dd4d9a49',
	},
	{
		title: '3 Steps to Build a Telegram Bot with Django & Python',
		publication: 'Towards Data Engineering',
		link: 'https://medium.com/towards-data-engineering/3-steps-to-build-a-telegram-bot-with-django-python-a87e5cc1226c',
	},
	{
		title: 'FastAPI with SQL',
		publication: 'Towards Data Engineering',
		link: 'https://medium.com/towards-data-engineering/fastapi-with-sql-1c7852ccbf21',
	},
];
