import OutputCSS from '../css/outputCV.module.css';

export default function OutputCV(props) {
	return (
		<section className="output-cv">
			<Introduction introduction={props.introduction} />
			<Summary summary={props.summary}/>
			<WorkHistory workHistory={props.workHistory}/>
			<EducationHistory educationHistory={props.educationHistory}/>
		</section>
	)
}

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

function Summary({summary}) {
	return (
		<section className={OutputCSS.summary}>
			<p className={OutputCSS.summaryTextArea}>{summary}</p>
		</section>
	)
}

function WorkHistory({workHistory}) {
	return (
		<section className={OutputCSS.workHistory}>
			<p className={OutputCSS.jobName}>{workHistory[0].jobName}</p>
			<p className={OutputCSS.jobPosition}>{workHistory[0].jobPosition}</p>
			<p className={OutputCSS.startDate}>{workHistory[0].startDate}</p>
			<p className={OutputCSS.endDate}>{workHistory[0].endDate}</p>
			<p className={OutputCSS.jobDescription}>{workHistory[0].jobDescription}</p>
		</section>
	)
}

function EducationHistory({educationHistory}) {
	return (
		<section className={OutputCSS.educationHistory}>
			<p className={OutputCSS.educationName}>{educationHistory[0].educationName}</p>
			<p className={OutputCSS.certificateName}>{educationHistory[0].certificateName}</p>
			<p className={OutputCSS.dateAcquired}>{educationHistory[0].dateAcquired}</p>
			<p className={OutputCSS.educationDescription}>{educationHistory[0].educationDescription}</p>
		</section>
	)
}