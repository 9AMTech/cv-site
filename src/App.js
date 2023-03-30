import './App.css';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import InputCV from './components/InputCV/InputCV';
import OutputCV from './components/OutputCV/OutputCV';
import Toolbar from './components/Toolbar';
import Tutorial from './components/Tutorial';

export default function App() {

	// ===================================================
	// ==================== States =======================
	// ===================================================

	const initialIntroduction = {
		firstName: '',
		lastName: '',
		profession: '',
		phoneNumber: '',
		email: '',
		linkedIn: '',
		website: '',
	}

	const initialSummary = '';

	const initialWorkHistory = [
		{
			id: 0,
			jobName: '',
			jobPosition: '',
			startDate: '',
			endDate: '',
			jobDescription: '',
			currentJob: false
		},
		{
			id: 1,
			jobName: '',
			jobPosition: '',
			startDate: '',
			endDate: '',
			jobDescription: '',
			currentJob: false
		},
		{
			id: 2,
			jobName: '',
			jobPosition: '',
			startDate: '',
			endDate: '',
			jobDescription: '',
			currentJob: false
		},
	];

	const initialEducationHistory = [
		{
			id: 0,
			educationName: '',
			certificateName: '',
			dateAcquired: '',
			educationDescription: ''
		},
		{
			id: 1,
			educationName: '',
			certificateName: '',
			dateAcquired: '',
			educationDescription: ''
		}
	]

	const initialDisplayComponent = [{
		workHistory1: false,
		workHistory2: false,
		educationHistory1: false
	}]

	const initialCounters = {
		workHistory: 1,
		educationHistory: 1,
	}

	const initialTutorialController = {
		activePage: 0,
		isHidden: false,
	};

	const [introduction, setIntroduction] = useState(initialIntroduction)

	const [summary, setSummary] = useState(initialSummary);

	const [workHistory, setWorkHistory] = useState(initialWorkHistory);

	const [educationHistory, setEducationHistory] = useState(initialEducationHistory);

	const [displayComponent, setDisplayComponent] = useState(initialDisplayComponent);

	const [counters, setCounters] = useState(initialCounters)

	const [tutorialController, setTutorialController] = useState(initialTutorialController);

	// ===================================================
	// ============== Helper Functions ===================
	// ===================================================


	const onIntroductionChange = (event, toUpdate) => {
		let newIntroduction = Object.assign({}, introduction);

		switch (toUpdate) {
			case 'firstName':
				newIntroduction.firstName = event.target.value;
				break;
			case 'lastName':
				newIntroduction.lastName = event.target.value;
				break;
			case 'profession':
				newIntroduction.profession = event.target.value;
				break;
			case 'phoneNumber':
				newIntroduction.phoneNumber = event.target.value;
				break;
			case 'email':
				newIntroduction.email = event.target.value;
				break;
			case 'linkedIn':
				newIntroduction.linkedIn = event.target.value;
				break;
			case 'website':
				newIntroduction.website = event.target.value;
				break;
			default:
				throw new Error("There's something wrong with onIntroductionChange()");
		}
		setIntroduction(newIntroduction);
	}

	const onSummaryChange = event => {
		setSummary(event.target.value);
	}

	const onWorkHistoryChange = (event, toUpdate, index) => {
		let newWorkHistory = Object.assign({}, workHistory);

		switch (toUpdate) {
			case 'jobName':
				newWorkHistory[index].jobName = event.target.value;
				break;
			case 'jobPosition':
				newWorkHistory[index].jobPosition = event.target.value;
				break;
			case 'startDate':
				newWorkHistory[index].startDate = event.target.value;
				break;
			case 'endDate':
				newWorkHistory[index].endDate = event.target.value;
				break;
			case 'jobDescription':
				newWorkHistory[index].jobDescription = event.target.value;
				break;
			case 'currentJob':
				newWorkHistory[index].currentJob = event.target.checked;
				break;
			default:
				throw new Error("There's something wrong with onWorkHistoryChange()");
		}
		setWorkHistory(newWorkHistory);
		console.log(workHistory);
	}

	const onEducationHistoryChange = (event, toUpdate, index) => {
		let newEducationHistory = Object.assign({}, educationHistory)
		switch (toUpdate) {
			case 'educationName':
				newEducationHistory[index].educationName = event.target.value;
				break;
			case 'certificateName':
				newEducationHistory[index].certificateName = event.target.value;
				break;
			case 'dateAcquired':
				newEducationHistory[index].dateAcquired = event.target.value;
				break;
			case 'educationDescription':
				newEducationHistory[index].educationDescription = event.target.value;
				break;
			default:
				throw new Error("There's something wrong with onEducationChange()");
		}
		setEducationHistory(newEducationHistory);
	}

	// ===========================================================
	//    					Function for Formatting Data
	// ===========================================================

	const formatDate = (date, needDash) => {
		if (date === '') return;
		const dateParts = date.split('-');
		if (needDash === true) return dateParts[1] + '/' + dateParts[0] + ' - '
		else return dateParts[1] + '/' + dateParts[0];
	}

	// Cool Phone Number Format Function I found online
	let formatPhoneNumber = (str) => {
		//Filter only numbers from the input
		let cleaned = ('' + str).replace(/\D/g, '');

		//Check if the input is of correct length
		let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

		if (match) {
			return '(' + match[1] + ') ' + match[2] + '-' + match[3]
		};

		return null
	};

	// ===========================================================
	//    			Functions for Controlling the Tutorial
	// ===========================================================

	const preventPageScroll = () => {
		document.body.style.overflow = "hidden";
	}

	const enablePageScroll = () => {
		document.body.style.overflow = "auto";
	}

	const nextTutorialPage = () => {
		let newTutorialController = Object.assign({}, tutorialController);
		newTutorialController.activePage++;
		setTutorialController(newTutorialController);
	}

	const previousTutorialPage = () => {
		let newTutorialController = Object.assign({}, tutorialController);
		newTutorialController.activePage--;
		setTutorialController(newTutorialController);
	}

	const enterTutorial = () => {
		let newTutorialController = Object.assign({}, tutorialController);
		preventPageScroll();
		newTutorialController.activePage = 0;
		newTutorialController.isHidden = false;
		setTutorialController(newTutorialController);
	}

	const exitTutorial = () => {
		let newTutorialController = Object.assign({}, tutorialController);
		enablePageScroll();
		newTutorialController.isHidden = true;
		setTutorialController(newTutorialController);
	}
	// ===========================================================
	//    Functions for Adding and Removing Sections of the CV
	// ===========================================================

	const onAddWorkButtonClick = () => {
		let newDisplayComponent = Object.assign({}, displayComponent);
		let newCounter = Object.assign({}, counters);

		newCounter.workHistory++;
		if (newCounter.workHistory === 2) {
			newDisplayComponent.workHistory1 = true;
		}
		else if (newCounter.workHistory === 3) {
			newDisplayComponent.workHistory2 = true;
		}
		setDisplayComponent(newDisplayComponent);
		setCounters(newCounter);
	}

	const onRemoveWorkButtonClick = () => {
		let newDisplayComponent = Object.assign({}, displayComponent);
		let newCounter = Object.assign({}, counters);

		if (newCounter.workHistory === 2) {
			newDisplayComponent.workHistory1 = false;
		}
		else if (newCounter.workHistory === 3) {
			newDisplayComponent.workHistory2 = false;
		}
		newCounter.workHistory--;
		setDisplayComponent(newDisplayComponent);
		setCounters(newCounter);
	}

	const onAddEducationButtonClick = () => {
		let newDisplayComponent = Object.assign({}, displayComponent);
		let newCounter = Object.assign({}, counters);

		newCounter.educationHistory++;
		if (newCounter.educationHistory === 2) {
			newDisplayComponent.educationHistory1 = true;
		}
		setDisplayComponent(newDisplayComponent);
		setCounters(newCounter);
	}

	const onRemoveEducationButtonClick = () => {
		let newDisplayComponent = Object.assign({}, displayComponent);
		let newCounter = Object.assign({}, counters);

		if (newCounter.educationHistory === 2) {
			newDisplayComponent.educationHistory1 = false;
		}
		newCounter.educationHistory--;
		setDisplayComponent(newDisplayComponent);
		setCounters(newCounter);
	}

	// ===========================================================
	//           Function for Resetting the Form Info
	// ===========================================================

	const resetForm = () => {
		let newIntroduction = Object.assign({}, initialIntroduction);
		let newSummary = initialSummary;
		let newWorkHistory = Object.assign({}, initialWorkHistory);
		let newEducationHistory = Object.assign({}, initialEducationHistory);
		let newDisplayComponent = Object.assign({}, initialDisplayComponent);
		let newCounters = Object.assign({}, initialCounters);
		setIntroduction(newIntroduction);
		setSummary(newSummary);
		setWorkHistory(newWorkHistory);
		setEducationHistory(newEducationHistory);
		setDisplayComponent(newDisplayComponent);
		setCounters(newCounters);
	}


	// ===========================================================
	//           Function for Generating a Sample CV
	// ===========================================================

	const generateSampleCV = () => {
		resetForm();
		setIntroduction({
			firstName: 'Kyo',
			lastName: 'Kusanagi',
			profession: 'Martial Artist',
			phoneNumber: '555-555-5555',
			email: 'kkusanagi@kof.com',
			linkedIn: 'www.linkedin.com/in/kkusanagi/',
			website: 'www.kof.com',
		})
		setSummary('Aspiring martial artist and web developer looking to make it in the field!')
		setWorkHistory([
			{
				id: 0,
				jobName: 'Unmemployed',
				jobPosition: 'Martial Artist',
				startDate: '2020-01',
				endDate: '2023-03',
				jobDescription: 'I fight people!',
				currentJob: true,
			},
			{
				id: 1,
				jobName: 'Florida Man Mall',
				jobPosition: 'Mall Cop',
				startDate: '2017-06',
				endDate: '2019-12',
				jobDescription: 'I stop kids from skating on the stairs.'
			},
			{
				id: 2,
				jobName: 'Generic Grocery Store Name',
				jobPosition: 'Bagger',
				startDate: '2010-09',
				endDate: '2015-05',
				jobDescription: 'I fight the urges of eating customers groceries while bagging them.'
			},
		]);
		setEducationHistory([
			{
				id: 0,
				educationName: 'Community College',
				certificateName: 'Associates Degree',
				dateAcquired: '2023-03',
				educationDescription: "The martial arts didn't work out so I had to go back to school."
			},
			{
				id: 1,
				educationName: "Monk's Temple",
				certificateName: 'These hands',
				dateAcquired: '2005-03',
				educationDescription: 'I trained in the moutains for these hands.'
			}
		]);
		setDisplayComponent({
			workHistory1: true,
			workHistory2: true,
			educationHistory1: true
		}
		);

		setCounters({
			workHistory: 3,
			educationHistory: 2,
		})
	}

	// ===========================================================
	//          Functions for Printing the OutputCV
	// ===========================================================

	const componentRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		onBeforePrint: () => console.log("Printing!!!"),
		bodyClass: 'toPrint',
		documentTitle: introduction.firstName + ' ' + introduction.lastName + ' - Resume',
	})


	return (
		<div className="App">
			<Header />
				<Tutorial
					tutorialController={tutorialController}
					nextPage={nextTutorialPage}
					previousPage={previousTutorialPage}
					exitTutorial={exitTutorial}
					/>
			<main>
				<Toolbar
					enterTutorial={enterTutorial} 
					generateSampleCV={generateSampleCV}
					resetForm={resetForm}
					handlePrint={handlePrint}
				/>
				<InputCV
					displayComponent={displayComponent}
					setDisplayComponent={setDisplayComponent}

					counters={counters}
					setCounters={setCounters}

					introduction={introduction}
					setIntroduction={setIntroduction}
					onIntroductionChange={onIntroductionChange}

					workHistory={workHistory}
					onWorkHistoryChange={onWorkHistoryChange}
					onAddWorkButtonClick={onAddWorkButtonClick}
					onRemoveWorkButtonClick={onRemoveWorkButtonClick}

					educationHistory={educationHistory}
					onEducationHistoryChange={onEducationHistoryChange}
					onAddEducationButtonClick={onAddEducationButtonClick}
					onRemoveEducationButtonClick={onRemoveEducationButtonClick}

					summary={summary}
					setSummary={setSummary}
					onSummaryChange={onSummaryChange}

				/>
				<OutputCV
					ref={componentRef}
					displayComponent={displayComponent}
					introduction={introduction}
					summary={summary}
					workHistory={workHistory}
					educationHistory={educationHistory}
					formatDate={formatDate}
					formatPhoneNumber={formatPhoneNumber}
				/>
			</main>
		</div>
	);
}

function Header() {
	return (
		<header>
			<h1 id='title'>Simple-CV</h1>
		</header>
	)
}