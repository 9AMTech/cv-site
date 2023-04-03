import OutputCSS from "../../css/outputCV.module.css";
import { formatDate } from "./functions";
import { useContext } from "react";
import { CVContext } from "../../Context";

export default function WorkHistory({ displayComponent }) {
  const cv = useContext(CVContext);
  return (
    <section className={OutputCSS.workHistory + " preview-padding"}>
      <h2>Work Experience</h2>
      <section>
        <p className={OutputCSS.jobName}>{cv.workHistory[0].jobName}</p>
        <p className={OutputCSS.jobPosition}>{cv.workHistory[0].jobPosition}</p>
        <p className={OutputCSS.dates}>
          {formatDate(cv.workHistory[0].startDate, true)}{" "}
          {cv.workHistory[0].currentJob
            ? "Current"
            : formatDate(cv.workHistory[0].endDate, false)}
        </p>
        <p className={OutputCSS.jobDescription}>
          {cv.workHistory[0].jobDescription}
        </p>
      </section>

      {displayComponent.workHistory1 ? (
        <section>
          <p className={OutputCSS.jobName}>{cv.workHistory[1].jobName}</p>
          <p className={OutputCSS.jobPosition}>
            {cv.workHistory[1].jobPosition}
          </p>
          <p className={OutputCSS.dates}>
            {formatDate(cv.workHistory[1].startDate, true)}{" "}
            {cv.workHistory[1].currentJob
              ? "Current"
              : formatDate(cv.workHistory[1].endDate, false)}
          </p>
          <p className={OutputCSS.jobDescription}>
            {cv.workHistory[1].jobDescription}
          </p>
        </section>
      ) : null}

      {displayComponent.workHistory2 ? (
        <section>
          <p className={OutputCSS.jobName}>{cv.workHistory[2].jobName}</p>
          <p className={OutputCSS.jobPosition}>
            {cv.workHistory[2].jobPosition}
          </p>
          <p className={OutputCSS.dates}>
            {formatDate(cv.workHistory[2].startDate, true)} -{" "}
            {cv.workHistory[2].currentJob
              ? "Current"
              : formatDate(cv.workHistory[2].endDate, false)}
          </p>
          <p className={OutputCSS.jobDescription}>
            {cv.workHistory[2].jobDescription}
          </p>
        </section>
      ) : null}
    </section>
  );
}
