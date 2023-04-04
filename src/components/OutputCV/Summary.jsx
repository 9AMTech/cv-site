import OutputCSS from '../../css/outputCV.module.css';
import { useContext } from "react";
import { CVContext } from "../../Context";

export default function Summary() {
	const cv = useContext(CVContext);
	return (
		<section className={OutputCSS.summary}>
			<p className={OutputCSS.summaryTextArea}>{cv.summary}</p>
		</section>
	)
}