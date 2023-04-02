// import '../App.css'
import Button from './Button';
import TutorialLogo from '../css/svgs/tutorial-help.png';
import IntroductionLogo from '../css/svgs/introduction.png';
import SummaryLogo from '../css/svgs/summary.png';
import WorkLogo from '../css/svgs/work-history.png';
import EducationLogo from '../css/svgs/education-history.png';
import PreviewLogo from '../css/svgs/preview.png';
import PrintLogo from '../css/svgs/print-cv.png';
import GenerateLogo from '../css/svgs/sample-cv.png';
import ResetLogo from '../css/svgs/reset-cv.png';

export default function Toolbar({enterTutorial, handlePrint, generateSampleCV, resetForm}) {

	return (
		<aside className='toolbar'>
			<Button classedAs='toolbar-button' onButtonClick={enterTutorial} buttonText={<img src={TutorialLogo}  alt='Tutorial Button'/>}/>
			<a href='#introduction'><Button classedAs='toolbar-button' buttonText={<img src={IntroductionLogo} alt='Introduction Button'/>}/></a>
			<a href='#summary'><Button classedAs='toolbar-button' buttonText={<img src={SummaryLogo} alt='Summary Button'/>}/></a>
			<a href='#work-history'><Button classedAs='toolbar-button' buttonText={<img src={WorkLogo} alt='Work History Button'/>}/></a>
			<a href='#education-history'><Button classedAs='toolbar-button' buttonText={<img src={EducationLogo} alt='Education History Button'/>}/></a>
			<a href='#preview'><Button classedAs='toolbar-button print-preview-button' buttonText={<img src={PreviewLogo} alt='Preview CV Button'/>}/> </a>
			<Button classedAs='toolbar-button print-button' buttonText={<img src={PrintLogo} alt='Print CV Button'/>} onButtonClick={handlePrint}/>
			<Button classedAs='toolbar-button generate-sample-button' buttonText={<img src={GenerateLogo} alt='Generate Sample Button'/>} onButtonClick={generateSampleCV}/>
			<Button classedAs='toolbar-button reset-button' buttonText={<img src={ResetLogo} alt='Reset CV Button'/>} onButtonClick={resetForm}/>
		</aside>
	)
}