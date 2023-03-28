import OutputCSS from '../../css/outputCV.module.css';

export default function EducationHistory({ educationHistory, displayComponent, formatDate }) {
	return (
		<section className={OutputCSS.educationHistory + ' preview-padding'}>
			<h2>Education</h2>
			<section>
				<p className={OutputCSS.educationName}>{educationHistory[0].educationName}</p>
				<p className={OutputCSS.certificateName}>{educationHistory[0].certificateName}</p>
				<p className={OutputCSS.dateAcquired}>{formatDate(educationHistory[0].dateAcquired, false)}</p>
				<p className={OutputCSS.educationDescription}>{educationHistory[0].educationDescription}</p>
			</section>

			{displayComponent.educationHistory1 === true
				? <section>
					<p className={OutputCSS.educationName}>{educationHistory[1].educationName}</p>
					<p className={OutputCSS.certificateName}>{educationHistory[1].certificateName}</p>
					<p className={OutputCSS.dateAcquired}>{formatDate(educationHistory[1].dateAcquired, false)}</p>
					<p className={OutputCSS.educationDescription}>{educationHistory[1].educationDescription}</p>
				</section>
				: null
			}

		</section>

	)
}