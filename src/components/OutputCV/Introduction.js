import OutputCSS from '../../css/outputCV.module.css';
import Summary from './Summary'

export default function Introduction({ introduction, summary, formatPhoneNumber }) {
	return (
		<section className={OutputCSS.introduction}>
			<section className={OutputCSS.fullInfo}>
				<p className={OutputCSS.fullName}>{introduction.firstName} {introduction.lastName}</p>
				<p className={OutputCSS.profession} >{introduction.profession}</p>
			</section>
			<section className={OutputCSS.contactInfo + ' place-center'}>
				<p className={OutputCSS.phoneNumber} >{formatPhoneNumber(introduction.phoneNumber)}</p>
				<p className={OutputCSS.email} >{introduction.email}</p>
				<p className={OutputCSS.website} >{introduction.website}</p>
				<p className={OutputCSS.linkedIn} >{introduction.linkedIn}</p>
			</section>
			<Summary summary={summary}/>
		</section>
	)
}