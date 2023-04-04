import OutputCSS from "../../css/outputCV.module.css";
import { formatDate } from "./functions";
import { useContext } from "react";
import { CVContext } from "../../Context";

export default function WorkHistory() {
  const cv = useContext(CVContext);

  const outputs = [
    {
      jobName: "jobName",
      jobPosition: "jobPosition",
      startDate: "startDate",
      endDate: "endDate",
      currentJob: "currentJob",
      jobDescription: "jobDescription",
    },
    {
      jobName: "jobName",
      jobPosition: "jobPosition",
      startDate: "startDate",
      endDate: "endDate",
      currentJob: "currentJob",
      jobDescription: "jobDescription",
    },
    {
      jobName: "jobName",
      jobPosition: "jobPosition",
      startDate: "startDate",
      endDate: "endDate",
      currentJob: "currentJob",
      jobDescription: "jobDescription",
    },
  ];

  return (
    <section className={OutputCSS.workHistory + " preview-padding"}>
      <h2>Work Experience</h2>

      {outputs.map((output, index) => (
        <section>
          <p className={OutputCSS[output.jobName]}>{cv.workHistory[index][output.jobName]}</p>
          <p className={OutputCSS[output.jobPosition]}>
            {cv.workHistory[index][output.jobPosition]}
          </p>
          <p className={OutputCSS.dates}>
            {formatDate(cv.workHistory[index][output.startDate], true)}{" "}
            {cv.workHistory[index][output.currentJob]
              ? "Current"
              : formatDate(cv.workHistory[index][output.endDate], false)}
          </p>
          <p className={OutputCSS[output.jobDescription]}>
            {cv.workHistory[index][output.jobDescription]}
          </p>
        </section>
      ))}
    </section>
  );
}
