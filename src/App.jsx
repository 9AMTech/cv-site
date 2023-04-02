import "./App.css";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import InputCV from "./components/InputCV/InputCV";
import OutputCV from "./components/OutputCV/OutputCV";
import Toolbar from "./components/Toolbar";
import Tutorial from "./components/Tutorial";

export default function App() {
  // ===================================================
  // ==================== States =======================
  // ===================================================

  // const initialCV = {
  //   introduction: {
  //     firstName: "",
  //     lastName: "",
  //     profession: "",
  //     phoneNumber: "",
  //     email: "",
  //     linkedIn: "",
  //     website: "",
  //   },
  //   summary: "",
  //   workHistory: [
  //     {
  //       id: 0,
  //       jobName: "",
  //       jobPosition: "",
  //       startDate: "",
  //       endDate: "",
  //       jobDescription: "",
  //       currentJob: false,
  //     },
  //     {
  //       id: 1,
  //       jobName: "",
  //       jobPosition: "",
  //       startDate: "",
  //       endDate: "",
  //       jobDescription: "",
  //       currentJob: false,
  //     },
  //     {
  //       id: 2,
  //       jobName: "",
  //       jobPosition: "",
  //       startDate: "",
  //       endDate: "",
  //       jobDescription: "",
  //       currentJob: false,
  //     },
  //   ],
  //   educationHistory: [
  //     {
  //       id: 0,
  //       educationName: "",
  //       certificateName: "",
  //       dateAcquired: "",
  //       educationDescription: "",
  //     },
  //     {
  //       id: 1,
  //       educationName: "",
  //       certificateName: "",
  //       dateAcquired: "",
  //       educationDescription: "",
  //     },
  //   ],
  // };

  const initialIntroduction = {
    firstName: "",
    lastName: "",
    profession: "",
    phoneNumber: "",
    email: "",
    linkedIn: "",
    website: "",
  };

  const initialSummary = "";

  const initialWorkHistory = [
    {
      id: 0,
      jobName: "",
      jobPosition: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      currentJob: false,
    },
    {
      id: 1,
      jobName: "",
      jobPosition: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      currentJob: false,
    },
    {
      id: 2,
      jobName: "",
      jobPosition: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      currentJob: false,
    },
  ];

  const initialEducationHistory = [
    {
      id: 0,
      educationName: "",
      certificateName: "",
      dateAcquired: "",
      educationDescription: "",
    },
    {
      id: 1,
      educationName: "",
      certificateName: "",
      dateAcquired: "",
      educationDescription: "",
    },
  ];

  const initialDisplayComponent = [
    {
      workHistory1: false,
      workHistory2: false,
      educationHistory1: false,
    },
  ];

  const initialCounters = {
    workHistory: 1,
    educationHistory: 1,
  };

  const initialTutorialController = {
    activePage: 0,
    isHidden: false,
  };

  const [introduction, setIntroduction] = useState(initialIntroduction);

  const [summary, setSummary] = useState(initialSummary);

  const [workHistory, setWorkHistory] = useState(initialWorkHistory);

  const [educationHistory, setEducationHistory] = useState(
    initialEducationHistory
  );

  const [displayComponent, setDisplayComponent] = useState(
    initialDisplayComponent
  );

  const [counters, setCounters] = useState(initialCounters);

  const [tutorialController, setTutorialController] = useState(
    initialTutorialController
  );

  // ===================================================
  // ============== Helper Functions ===================
  // ===================================================

  const onIntroductionChange = (event) => {
    let newIntroduction = Object.assign({}, introduction);
    newIntroduction[event.target.name] = event.target.value;
    setIntroduction(newIntroduction);
  };

  const onSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const onWorkHistoryChange = (event, index) => {
    let newWorkHistory = Object.assign({}, workHistory);
    if (event.target.name === "currentJob") {
      newWorkHistory[index][event.target.name] = event.target.checked;
    } else {
      newWorkHistory[index][event.target.name] = event.target.value;
    }
    setWorkHistory(newWorkHistory);
  };

  const onEducationHistoryChange = (event, index) => {
    let newEducation = Object.assign({}, educationHistory);
    newEducation[index][event.target.name] = event.target.value;
    setEducationHistory(newEducation);
  };

  // ===========================================================
  //    					Function for Formatting Data
  // ===========================================================

  const formatDate = (date, needDash) => {
    if (date === "") return;
    const dateParts = date.split("-");
    if (needDash) return dateParts[1] + "/" + dateParts[0] + " - ";
    else return dateParts[1] + "/" + dateParts[0];
  };

  // Cool Phone Number Format Function I found online
  let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ("" + str).replace(/\D/g, "");

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    return null;
  };

  // ===========================================================
  //    			Functions for Controlling the Tutorial
  // ===========================================================

  const preventPageScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enablePageScroll = () => {
    document.body.style.overflow = "auto";
  };

  const nextTutorialPage = () => {
    let newTutorialController = Object.assign({}, tutorialController);
    newTutorialController.activePage++;
    setTutorialController(newTutorialController);
  };

  const previousTutorialPage = () => {
    let newTutorialController = Object.assign({}, tutorialController);
    newTutorialController.activePage--;
    setTutorialController(newTutorialController);
  };

  const enterTutorial = () => {
    let newTutorialController = Object.assign({}, tutorialController);
    preventPageScroll();
    newTutorialController.activePage = 0;
    newTutorialController.isHidden = false;
    setTutorialController(newTutorialController);
  };

  const exitTutorial = () => {
    let newTutorialController = Object.assign({}, tutorialController);
    enablePageScroll();
    newTutorialController.isHidden = true;
    setTutorialController(newTutorialController);
  };
  // ===========================================================
  //    Functions for Adding and Removing Sections of the CV
  // ===========================================================

  const onAddWorkButtonClick = () => {
    let newDisplayComponent = Object.assign({}, displayComponent);
    let newCounter = Object.assign({}, counters);

    newCounter.workHistory++;
    if (newCounter.workHistory === 2) {
      newDisplayComponent.workHistory1 = true;
    } else if (newCounter.workHistory === 3) {
      newDisplayComponent.workHistory2 = true;
    }
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounter);
  };

  const onRemoveWorkButtonClick = () => {
    let newDisplayComponent = Object.assign({}, displayComponent);
    let newCounter = Object.assign({}, counters);

    if (newCounter.workHistory === 2) {
      newDisplayComponent.workHistory1 = false;
    } else if (newCounter.workHistory === 3) {
      newDisplayComponent.workHistory2 = false;
    }
    newCounter.workHistory--;
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounter);
  };

  const onAddEducationButtonClick = () => {
    let newDisplayComponent = Object.assign({}, displayComponent);
    let newCounter = Object.assign({}, counters);

    newCounter.educationHistory++;
    if (newCounter.educationHistory === 2) {
      newDisplayComponent.educationHistory1 = true;
    }
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounter);
  };

  const onRemoveEducationButtonClick = () => {
    let newDisplayComponent = Object.assign({}, displayComponent);
    let newCounter = Object.assign({}, counters);

    if (newCounter.educationHistory === 2) {
      newDisplayComponent.educationHistory1 = false;
    }
    newCounter.educationHistory--;
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounter);
  };

  // ===========================================================
  //           Function for Resetting the Form Info
  // ===========================================================

  const resetForm = () => {
    let newIntroduction = Object.assign({}, initialIntroduction);
    let newSummary = initialSummary;
    let newWorkHistory = Object.assign({}, initialWorkHistory);
    let newEducationHistory = Object.assign({}, initialEducationHistory);
    let newDisplayComponent = Object.assign({}, initialDisplayComponent);
    let newCounters = Object.assign({}, initialCounters);
    setIntroduction(newIntroduction);
    setSummary(newSummary);
    setWorkHistory(newWorkHistory);
    setEducationHistory(newEducationHistory);
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounters);
  };

  // ===========================================================
  //           Function for Generating a Sample CV
  // ===========================================================

  const generateSampleCV = () => {
    resetForm();
    setIntroduction({
      firstName: "John",
      lastName: "Doe",
      profession: "Web Developer",
      phoneNumber: "555-555-5555",
      email: "coolwebdevname@web.dev",
      linkedIn: "www.linkedin.com/in/webdevguyman/",
      website: "www.dev.com",
    });
    setSummary("Aspiring web developer looking to make it in the field!");
    setWorkHistory([
      {
        id: 0,
        jobName: "FAANG Company",
        jobPosition: "Front-end Developer",
        startDate: "2020-01",
        endDate: "2023-03",
        jobDescription:
          "I work at a FAANG company! Or would it be MAANG now because Facebook turned to Meta? Who knows? I made it!",
        currentJob: true,
      },
      {
        id: 1,
        jobName: "Florida Man Mall",
        jobPosition: "Mall Cop",
        startDate: "2017-06",
        endDate: "2019-12",
        jobDescription:
          "I stopped kids from skating on the stairs. I was really good at it",
      },
      {
        id: 2,
        jobName: "Generic Grocery Store Name",
        jobPosition: "Bagger",
        startDate: "2010-09",
        endDate: "2015-05",
        jobDescription:
          "I fight the urges of eating customers groceries while bagging them. Vigorously!",
      },
    ]);
    setEducationHistory([
      {
        id: 0,
        educationName: "Community College",
        certificateName: "Associates Degree",
        dateAcquired: "2023-03",
        educationDescription: "I got another piece of paper here!",
      },
      {
        id: 1,
        educationName: "High School",
        certificateName: "Diploma",
        dateAcquired: "2005-03",
        educationDescription: "I got a piece of paper here!",
      },
    ]);
    setDisplayComponent({
      workHistory1: true,
      workHistory2: true,
      educationHistory1: true,
    });

    setCounters({
      workHistory: 3,
      educationHistory: 2,
    });
  };

  // ===========================================================
  //          Functions for Printing the OutputCV
  // ===========================================================

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => console.log("Printing!!!"),
    bodyClass: "toPrint",
    documentTitle:
      introduction.firstName + " " + introduction.lastName + " - Resume",
  });

  return (
    <div className="App">
      <Tutorial
        tutorialController={tutorialController}
        nextPage={nextTutorialPage}
        previousPage={previousTutorialPage}
        exitTutorial={exitTutorial}
      />
      <Header />
      <main>
        <Toolbar
          enterTutorial={enterTutorial}
          generateSampleCV={generateSampleCV}
          resetForm={resetForm}
          handlePrint={handlePrint}
        />
        <InputCV
          displayComponent={displayComponent}
          setDisplayComponent={setDisplayComponent}
          counters={counters}
          setCounters={setCounters}
          introduction={introduction}
          setIntroduction={setIntroduction}
          onIntroductionChange={onIntroductionChange}
          workHistory={workHistory}
          onWorkHistoryChange={onWorkHistoryChange}
          onAddWorkButtonClick={onAddWorkButtonClick}
          onRemoveWorkButtonClick={onRemoveWorkButtonClick}
          educationHistory={educationHistory}
          onEducationHistoryChange={onEducationHistoryChange}
          onAddEducationButtonClick={onAddEducationButtonClick}
          onRemoveEducationButtonClick={onRemoveEducationButtonClick}
          summary={summary}
          setSummary={setSummary}
          onSummaryChange={onSummaryChange}
        />
        <OutputCV
          ref={componentRef}
          displayComponent={displayComponent}
          introduction={introduction}
          summary={summary}
          workHistory={workHistory}
          educationHistory={educationHistory}
          formatDate={formatDate}
          formatPhoneNumber={formatPhoneNumber}
        />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1 id="title">Simple-CV</h1>
    </header>
  );
}
