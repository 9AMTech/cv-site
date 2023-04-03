import InputCSS from "../../css/inputCV.module.css";
import { useContext } from "react";
import { CVContext, SetCVContext } from "../../Context";
import { onSummaryChange } from "./functions";

export default function Summary() {
  const cv = useContext(CVContext);
  const setCV = useContext(SetCVContext);

  return (
    <section id="summary" className={InputCSS.summary}>
      <h1>Summary</h1>
      <textarea
        value={cv.summary}
        maxLength={120}
        placeholder="Write a brief description about yourself here!"
        onChange={(event) => setCV(onSummaryChange(event, cv))}
      />
    </section>
  );
}
