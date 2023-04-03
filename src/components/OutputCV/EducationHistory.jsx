import OutputCSS from "../../css/outputCV.module.css";
import { formatDate } from "./functions";
import { useContext } from "react";
import { CVContext } from "../../Context";

export default function EducationHistory({ displayComponent }) {
  const cv = useContext(CVContext);
  return (
    <section className={OutputCSS.educationHistory + " preview-padding"}>
      <h2>Education</h2>
      <section>
        <p className={OutputCSS.educationName}>
          {cv.educationHistory[0].educationName}
        </p>
        <p className={OutputCSS.certificateName}>
          {cv.educationHistory[0].certificateName}
        </p>
        <p className={OutputCSS.dateAcquired}>
          {formatDate(cv.educationHistory[0].dateAcquired, false)}
        </p>
        <p className={OutputCSS.educationDescription}>
          {cv.educationHistory[0].educationDescription}
        </p>
      </section>

      {displayComponent.educationHistory1 ? (
        <section>
          <p className={OutputCSS.educationName}>
            {cv.educationHistory[1].educationName}
          </p>
          <p className={OutputCSS.certificateName}>
            {cv.educationHistory[1].certificateName}
          </p>
          <p className={OutputCSS.dateAcquired}>
            {formatDate(cv.educationHistory[1].dateAcquired, false)}
          </p>
          <p className={OutputCSS.educationDescription}>
            {cv.educationHistory[1].educationDescription}
          </p>
        </section>
      ) : null}
    </section>
  );
}
