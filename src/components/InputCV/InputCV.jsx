import InputCSS from "../../css/inputCV.module.css";
import Button from "../Button.jsx";
import {
	Introduction,
  Summary,
  EducationHistory,
  WorkHistory,
} from "./Exports.js";
// New Test Code from InputCVController
// import { addWorkHistory, removeWorkHistory } from "./InputCVController";

export default function InputCV(props) {
  // const workHistoryContainer = [<WorkHistory />];

  return (
    <section className={InputCSS.inputCV}>
      <Introduction
        onIntroductionChange={props.onIntroductionChange}
      />
      <div className={InputCSS.fadedSeparator}> &nbsp;</div>
      <Summary
        onSummaryChange={props.onSummaryChange}
      />
      <div className={InputCSS.fadedSeparator}> &nbsp;</div>

      <section id="work-history" className={InputCSS.workHistory}>
				{/* New Test Code */}
        {/* {workHistoryContainer.map((history, index) => (
          <WorkHistory
            workHistory={props.workHistory}
            onWorkHistoryChange={props.onWorkHistoryChange}
            index={index}
            displayComponent={props.displayComponent}
            setDisplayComponent={props.setDisplayComponent}
            counters={props.counters}
            setCounters={props.setCounters}
          />
        ))} */}

        {/* OLD WORKING CODE */}

        <WorkHistory
          onWorkHistoryChange={props.onWorkHistoryChange}
          index={0}
          displayComponent={props.displayComponent}
          setDisplayComponent={props.setDisplayComponent}
          counters={props.counters}
          setCounters={props.setCounters}
        />

        {props.displayComponent.workHistory1 ? (
          <WorkHistory
            onWorkHistoryChange={props.onWorkHistoryChange}
            index={1}
            displayComponent={props.displayComponent}
            setDisplayComponent={props.setDisplayComponent}
            counters={props.counters}
            setCounters={props.setCounters}
          />
        ) : null}

        {props.displayComponent.workHistory2 ? (
          <WorkHistory
            onWorkHistoryChange={props.onWorkHistoryChange}
            index={2}
            displayComponent={props.displayComponent}
            setDisplayComponent={props.setDisplayComponent}
            counters={props.counters}
            setCounters={props.setCounters}
          />
        ) : null}
        {/* END OF OLD WORKING CODE */}
      </section>

      <section className={InputCSS.addRemoveButtons}>
        {props.counters.workHistory < 3 ? (
          <Button
            // working code
            onButtonClick={props.onAddWorkButtonClick}
            // new test code
            // onButtonClick={addWorkHistory}
            buttonText={"Add History"}
          />
        ) : null}
        {props.counters.workHistory > 1 ? (
          <Button
            // working code
            onButtonClick={props.onRemoveWorkButtonClick}
            // new test code
            // onButtonClick={removeWorkHistory}
            buttonText={"Remove History"}
          />
        ) : null}
      </section>
      <div className={InputCSS.fadedSeparator}> &nbsp;</div>

      <section id="education-history" className={InputCSS.educationHistory}>
        <EducationHistory
          onEducationHistoryChange={props.onEducationHistoryChange}
          index={0}
        />

        {props.displayComponent.educationHistory1 ? (
          <EducationHistory
            educationHistory={props.educationHistory}
            onEducationHistoryChange={props.onEducationHistoryChange}
            index={1}
          />
        ) : null}
      </section>
      {/* These buttons work the same as the above, they will conditionally render when the counter */}
      <section className={InputCSS.addRemoveButtons}>
        {props.counters.educationHistory < 2 ? (
          <Button
            onButtonClick={props.onAddEducationButtonClick}
            buttonText={"Add History"}
          />
        ) : null}
        {props.counters.educationHistory > 1 ? (
          <Button
            onButtonClick={props.onRemoveEducationButtonClick}
            buttonText={"Remove History"}
          />
        ) : null}
      </section>
    </section>
  );
}
