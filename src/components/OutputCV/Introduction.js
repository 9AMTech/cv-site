import OutputCSS from '../../css/outputCV.module.css';

export default function Introduction({ introduction, formatPhoneNumber}) {
	return (
		<section className={OutputCSS.introduction}>
			<p className={OutputCSS.firstName}>{introduction.firstName}</p>
			<p className={OutputCSS.lastName} >{introduction.lastName}</p>
			<p className={OutputCSS.phoneNumber} >{formatPhoneNumber(introduction.phoneNumber)}</p>
			<p className={OutputCSS.email} >{introduction.email}</p>
			<p className={OutputCSS.linkedIn} >{introduction.linkedIn}</p>
			<p className={OutputCSS.website} >{introduction.website}</p>
		</section>
	)
}