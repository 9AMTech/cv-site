import OutputCSS from '../../css/outputCV.module.css';

export default function Summary({ summary }) {
	return (
		<section className={OutputCSS.summary}>
			<p className={OutputCSS.summaryTextArea}>{summary}</p>
		</section>
	)
}