import { forwardRef } from 'react';
import OutputCSS from '../css/outputCV.module.css';


const OutputCV = forwardRef((props, ref) => {
	return (
		<section className="output-cv" ref={ref}>
			<Introduction introduction={props.introduction} />
			<Summary summary={props.summary} />
			<WorkHistory workHistory={props.workHistory} displayComponent={props.displayComponent} />
			<EducationHistory educationHistory={props.educationHistory} displayComponent={props.displayComponent} />
		</section>
	)
})

function Introduction({ introduction }) {
	return (
		<section className={OutputCSS.introduction}>
			<p className={OutputCSS.firstName}>{introduction.firstName}</p>
			<p className={OutputCSS.lastName} >{introduction.lastName}</p>
			<p className={OutputCSS.phoneNumber} >{introduction.phoneNumber}</p>
			<p className={OutputCSS.email} >{introduction.email}</p>
			<p className={OutputCSS.linkedIn} >{introduction.linkedIn}</p>
			<p className={OutputCSS.website} >{introduction.website}</p>
		</section>
	)
}

function Summary({ summary }) {
	return (
		<section className={OutputCSS.summary}>
			<p className={OutputCSS.summaryTextArea}>{summary}</p>
		</section>
	)
}

function WorkHistory({ workHistory, displayComponent }) {
	return (
		<section className={OutputCSS.workHistory}>
			<section>
				<p className={OutputCSS.jobName}>{workHistory[0].jobName}</p>
				<p className={OutputCSS.jobPosition}>{workHistory[0].jobPosition}</p>
				<p className={OutputCSS.startDate}>{workHistory[0].startDate}</p>
				<p className={OutputCSS.endDate}>{workHistory[0].endDate}</p>
				<p className={OutputCSS.jobDescription}>{workHistory[0].jobDescription}</p>
			</section>
			{displayComponent.workHistory1 === true
				? <section>
					<p className={OutputCSS.jobName}>{workHistory[1].jobName}</p>
					<p className={OutputCSS.jobPosition}>{workHistory[1].jobPosition}</p>
					<p className={OutputCSS.startDate}>{workHistory[1].startDate}</p>
					<p className={OutputCSS.endDate}>{workHistory[1].endDate}</p>
					<p className={OutputCSS.jobDescription}>{workHistory[1].jobDescription}</p>
				</section>
				: null}
			{displayComponent.workHistory2 === true
				? <section>
					<p className={OutputCSS.jobName}>{workHistory[2].jobName}</p>
					<p className={OutputCSS.jobPosition}>{workHistory[2].jobPosition}</p>
					<p className={OutputCSS.startDate}>{workHistory[2].startDate}</p>
					<p className={OutputCSS.endDate}>{workHistory[2].endDate}</p>
					<p className={OutputCSS.jobDescription}>{workHistory[2].jobDescription}</p>
				</section>
				: null
			}
		</section>
	)
}

function EducationHistory({ educationHistory, displayComponent }) {
	return (
		<section className={OutputCSS.educationHistory}>
			<section>
				<p className={OutputCSS.educationName}>{educationHistory[0].educationName}</p>
				<p className={OutputCSS.certificateName}>{educationHistory[0].certificateName}</p>
				<p className={OutputCSS.dateAcquired}>{educationHistory[0].dateAcquired}</p>
				<p className={OutputCSS.educationDescription}>{educationHistory[0].educationDescription}</p>
			</section>
			{displayComponent.educationHistory1 === true
				? <section>
					<p className={OutputCSS.educationName}>{educationHistory[1].educationName}</p>
					<p className={OutputCSS.certificateName}>{educationHistory[1].certificateName}</p>
					<p className={OutputCSS.dateAcquired}>{educationHistory[1].dateAcquired}</p>
					<p className={OutputCSS.educationDescription}>{educationHistory[1].educationDescription}</p>
				</section>
				: null
			}
		</section>

	)
}

export default OutputCV;
