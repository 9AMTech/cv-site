import './App.css';
import Button from './Button';
import PoshGoose from '../css/images/posh-goose.png'
import TutorialLogo from '../css/svgs/tutorial-help.png';
import IntroductionLogo from '../css/svgs/introduction.png';
import SummaryLogo from '../css/svgs/summary.png';
import WorkLogo from '../css/svgs/work-history.png';
import EducationLogo from '../css/svgs/education-history.png';
import PreviewLogo from '../css/svgs/preview.png';
import PrintLogo from '../css/svgs/print-cv.png';
import GenerateLogo from '../css/svgs/sample-cv.png';
import ResetLogo from '../css/svgs/reset-cv.png';
import CoolEmoji from '../css/images/cool-emoji.png';

export default function Tutorial(props) {
	const tutorialPages = [
		{
			pageID: 0,
			image: PoshGoose,
			content: 'Hello! Welcome to Simple CV! This short tutorial will explain the icons and how the website works! Anything you type in the first CV, will show up in the tiny little template CV! Hit the next button to continue!',
		},
		{
			pageID: 1,
			image: IntroductionLogo,
			content: 'This icon will take you to the Introduction section! This section is all about you! Your name, job title, and contact information gets updated here!'
		},
		{
			pageID: 2,
			image: SummaryLogo,
			content: 'This icon will take you to the Summary section! This is a section that you can describe a little more about yourself!'
		},
		{
			pageID: 3,
			image: WorkLogo,
			content: "This icon will take you to the Work section. This is where you will go in depth and talk about and list the last three jobs you've had!"
		},
		{
			pageID: 4,
			image: EducationLogo,
			content: "Finally graduated from a gruelling last semester of school? This is where you will show off your achievements, your last two degrees and certificates will go here in the Education section!"
		},
		{
			pageID: 5,
			image: PreviewLogo,
			content: 'This logo represents the Print Preview section. You will not see this if you are on a bigger screen, but for smaller screens this will take you to the small preview CV to get a glimpse of how your CV is coming along!'
		},
		{
			pageID: 6,
			image: PrintLogo,
			content: "When you are all finished and want to print your CV, the Print button will be there for you. Bright green, it's hard to miss!"
		},
		{
			pageID: 7,
			image: GenerateLogo,
			content: "If you want to get an idea of some information to put down, or see what the final product will look like, click the orange Generate Logo button! WARNING, THIS WILL ERASE ALL OF YOUR DATA!!!"
		},
		{
			pageID: 8,
			image: ResetLogo,
			content: "If you really want to get a fresh start and start all over again, hit the bright red Reset Logo Button.  WARNING, THERE IS NO GOING BACK!!!"
		},
		{
			pageID: 9,
			image: CoolEmoji,
			content: "You finally made it to the end of the tutorial! Enjoy Simple-CV!"
		},
	]

	return (
		<section className='tutorial-focus'>
			<section className='tutorial-wrapper'>
				<section className='tutorial-content'>
					<img src=''></img>
					<p></p>
					<Button buttonText={'Back'}/>
					<Button buttonText={'Forward'}/>
				</section>
			</section>
		</section>
	)
}