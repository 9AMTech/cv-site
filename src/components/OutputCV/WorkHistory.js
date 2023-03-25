import OutputCSS from '../../css/outputCV.module.css';

export default function WorkHistory({ workHistory, displayComponent, formatDate}) {
	return (
		<section className={OutputCSS.workHistory}>

			<section>
				<p className={OutputCSS.jobName}>{workHistory[0].jobName}</p>
				<p className={OutputCSS.jobPosition}>{workHistory[0].jobPosition}</p>
				<p className={OutputCSS.startDate}>{formatDate(workHistory[0].startDate)}</p>
				<p className={OutputCSS.endDate}>{workHistory[0].currentJob === true ? 'Current' : formatDate(workHistory[0].endDate)}</p>
				<p className={OutputCSS.jobDescription}>{workHistory[0].jobDescription}</p>
			</section>

			{displayComponent.workHistory1 === true
				? <section>
					<p className={OutputCSS.jobName}>{workHistory[1].jobName}</p>
					<p className={OutputCSS.jobPosition}>{workHistory[1].jobPosition}</p>
					<p className={OutputCSS.startDate}>{formatDate(workHistory[1].startDate)}</p>
					<p className={OutputCSS.endDate}>{workHistory[1].currentJob === true ? 'Current' : formatDate(workHistory[1].endDate)}</p>
					<p className={OutputCSS.jobDescription}>{workHistory[1].jobDescription}</p>
				</section>
				: null}

			{displayComponent.workHistory2 === true
				? <section>
					<p className={OutputCSS.jobName}>{workHistory[2].jobName}</p>
					<p className={OutputCSS.jobPosition}>{workHistory[2].jobPosition}</p>
					<p className={OutputCSS.startDate}>{formatDate(workHistory[2].startDate)}</p>
					<p className={OutputCSS.endDate}>{workHistory[2].currentJob === true ? 'Current' : formatDate(workHistory[2].endDate)}</p>
					<p className={OutputCSS.jobDescription}>{workHistory[2].jobDescription}</p>
				</section>
				: null
			}
			
		</section>
	)
}