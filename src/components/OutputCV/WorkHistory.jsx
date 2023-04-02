import OutputCSS from '../../css/outputCV.module.css';

export default function WorkHistory({ workHistory, displayComponent, formatDate}) {
	return (
		<section className={OutputCSS.workHistory + ' preview-padding'}>
			<h2>Work Experience</h2>
			<section>
				
				<p className={OutputCSS.jobName}>{workHistory[0].jobName}</p>
				<p className={OutputCSS.jobPosition}>{workHistory[0].jobPosition}</p>
				<p className={OutputCSS.dates}>{formatDate(workHistory[0].startDate, true)} {workHistory[0].currentJob ? 'Current' : formatDate(workHistory[0].endDate, false)}</p>
				<p className={OutputCSS.jobDescription}>{workHistory[0].jobDescription}</p>
			</section>

			{displayComponent.workHistory1
				? <section>
					<p className={OutputCSS.jobName}>{workHistory[1].jobName}</p>
					<p className={OutputCSS.jobPosition}>{workHistory[1].jobPosition}</p>
					<p className={OutputCSS.dates}>{formatDate(workHistory[1].startDate, true)} {workHistory[1].currentJob ? 'Current' : formatDate(workHistory[1].endDate, false)}</p>
					<p className={OutputCSS.jobDescription}>{workHistory[1].jobDescription}</p>
				</section>
				: null}

			{displayComponent.workHistory2
				? <section>
					<p className={OutputCSS.jobName}>{workHistory[2].jobName}</p>
					<p className={OutputCSS.jobPosition}>{workHistory[2].jobPosition}</p>
					<p className={OutputCSS.dates}>{formatDate(workHistory[2].startDate, true)} - {workHistory[2].currentJob ? 'Current' : formatDate(workHistory[2].endDate, false)}</p>
					<p className={OutputCSS.jobDescription}>{workHistory[2].jobDescription}</p>
				</section>
				: null
			}
			
		</section>
	)
}