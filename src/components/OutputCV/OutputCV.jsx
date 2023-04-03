import OutputCSS from "../../css/outputCV.module.css";
import { forwardRef } from "react";
import { Introduction, EducationHistory, WorkHistory } from "./Exports.js";

const OutputCV = forwardRef((props, ref) => {
  return (
    <section id="preview" className={OutputCSS.outputCV} ref={ref}>
      <Introduction
        summary={props.summary}
      />
      <WorkHistory
        displayComponent={props.displayComponent}
      />
      <EducationHistory
        displayComponent={props.displayComponent}
      />
    </section>
  );
});

export default OutputCV;
