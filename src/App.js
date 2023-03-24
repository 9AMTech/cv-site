import './App.css';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import InputCV from './components/inputCV.js'
import OutputCV from './components/outputCV.js'

export default function App() {

	// ===================================================
	// ==================== States =======================
	// ===================================================

	const [introduction, setIntroduction] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		email: '',
		linkedIn: '',
		website: '',
	})

	const [summary, setSummary] = useState('');

	const [workHistory, setWorkHistory] = useState([
		{
			id: 0,
			jobName: '',
			jobPosition: '',
			startDate: '',
			endDate: '',
			jobDescription: ''
		},
		{
			id: 1,
			jobName: '',
			jobPosition: '',
			startDate: '',
			endDate: '',
			jobDescription: ''
		},
		{
			id: 2,
			jobName: '',
			jobPosition: '',
			startDate: '',
			endDate: '',
			jobDescription: ''
		},
	]);

	const [educationHistory, setEducationHistory] = useState([
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
	]);

	const [displayComponent, setDisplayComponent] = useState([{
		workHistory1: false,
		workHistory2: false,
		educationHistory1: false
	}])

	const [counters, setCounters] = useState({
		workHistory: 1,
		educationHistory: 1,
	})

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
			default:
				throw new Error("There's something wrong with onWorkHistoryChange()");
		}
		setWorkHistory(newWorkHistory);
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

	const onAddWorkButtonClick = () => {
		let newDisplayComponent = Object.assign({}, displayComponent);
		let newCounter = Object.assign({}, counters);

		newCounter.workHistory++;
		if(newCounter.workHistory === 2) {
			newDisplayComponent.workHistory1 = true;
		}
		else if(newCounter.workHistory === 3) {
			newDisplayComponent.workHistory2 = true;
		}
		setDisplayComponent(newDisplayComponent);
		setCounters(newCounter);
	}

	const onRemoveWorkButtonClick = () => {
		let newDisplayComponent = Object.assign({}, displayComponent);
		let newCounter = Object.assign({}, counters);

		if(newCounter.workHistory === 2) {
			newDisplayComponent.workHistory1 = false;
		}
		else if(newCounter.workHistory === 3) {
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
		if(newCounter.educationHistory === 2) {
			newDisplayComponent.educationHistory1 = true;
		}
		setDisplayComponent(newDisplayComponent);
		setCounters(newCounter);
	}

	const onRemoveEducationButtonClick = () => {
		let newDisplayComponent = Object.assign({}, displayComponent);
		let newCounter = Object.assign({}, counters);

		if(newCounter.educationHistory === 2) {
			newDisplayComponent.educationHistory1 = false;
		}
		newCounter.educationHistory--;
		setDisplayComponent(newDisplayComponent);
		setCounters(newCounter);
	}
	
	// ===========================================================
	// Functions for Printing the OutputCV from the InputCV Button
	// ===========================================================
	
	const componentRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: introduction.firstName + ' ' + introduction.lastName + ' - Resume',
	})


	return (
		<div className="App">
			<Header />
			<InputCV
				displayComponent={displayComponent}
				setDisplayComponent={setDisplayComponent}
				
				counters={counters}
				setCounters={setCounters}

				setIntroduction={setIntroduction}
				onIntroductionChange={onIntroductionChange}
				
				onWorkHistoryChange={onWorkHistoryChange}
				onAddWorkButtonClick={onAddWorkButtonClick}
				onRemoveWorkButtonClick={onRemoveWorkButtonClick}
				
				onEducationHistoryChange={onEducationHistoryChange}
				onAddEducationButtonClick={onAddEducationButtonClick}
				onRemoveEducationButtonClick={onRemoveEducationButtonClick}
				
				summary={summary}
				setSummary={setSummary}
				onSummaryChange={onSummaryChange}

				onPrintClick={handlePrint}
			/>
			<OutputCV
				displayComponent={displayComponent}
				introduction={introduction}
				summary={summary}
				workHistory={workHistory}
				educationHistory={educationHistory}
				ref={componentRef}
			/>
		</div>
	);
}

function Header() {
	return (
		<header>
			<h1>Simple-CV</h1>
		</header>
	)
}