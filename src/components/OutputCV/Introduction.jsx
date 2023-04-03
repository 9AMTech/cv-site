import OutputCSS from "../../css/outputCV.module.css";
import Summary from "./Summary";
import { formatPhoneNumber } from "./functions";
import { useContext } from "react";
import { CVContext } from "../../Context";

export default function Introduction() {
	const cv = useContext(CVContext);

  return (
    <section className={OutputCSS.introduction}>
      <section className={OutputCSS.fullInfo}>
        <p className={OutputCSS.fullName}>
          {cv.introduction.firstName} {cv.introduction.lastName}
        </p>
        <p className={OutputCSS.profession}>{cv.introduction.profession}</p>
      </section>
      <section className={OutputCSS.contactInfo + " place-center"}>
        <p className={OutputCSS.phoneNumber}>
          {formatPhoneNumber(cv.introduction.phoneNumber)}
        </p>
        <p className={OutputCSS.email}>{cv.introduction.email}</p>
        <p className={OutputCSS.website}>{cv.introduction.website}</p>
        <p className={OutputCSS.linkedIn}>{cv.introduction.linkedIn}</p>
      </section>
      <Summary summary={cv.summary} />
    </section>
  );
}
