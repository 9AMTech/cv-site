import "../../App.css";
import Button from "../Button";
import PoshGoose from "../../css/images/posh-goose.png";
import IntroductionLogo from "../../css/svgs/introduction.png";
import SummaryLogo from "../../css/svgs/summary.png";
import WorkLogo from "../../css/svgs/work-history.png";
import EducationLogo from "../../css/svgs/education-history.png";
import PreviewLogo from "../../css/svgs/preview.png";
import PrintLogo from "../../css/svgs/print-cv.png";
import GenerateLogo from "../../css/svgs/sample-cv.png";
import ResetLogo from "../../css/svgs/reset-cv.png";
import CoolEmoji from "../../css/images/cool-emoji.png";
import LeftArrow from "../../css/svgs/left-arrow.png";
import RightArrow from "../../css/svgs/right-arrow.png";
import {
  nextTutorialPage,
  previousTutorialPage,
  exitTutorial,
} from "./functions";

export default function Tutorial({
  tutorialController,
  setTutorialController,
}) {
  const tutorialPages = [
    {
      image: PoshGoose,
      altText: "Teacher Goose with Smoke Pipe Image",
      content:
        "Welcome to Simple CV! This short tutorial will explain the icons and how the website works! Anything you type in the first CV, will show up in the tiny little template CV! Hit the next button to continue!",
    },
    {
      image: IntroductionLogo,
      altText: "Introduction Logo Image",
      content:
        "This icon will take you to the Introduction section! This section is all about you! Your name, job title, and contact information gets updated here!",
    },
    {
      image: SummaryLogo,
      altText: "Summary Logo Image",
      content:
        "This icon will take you to the Summary section! This is a section that you can describe a little more about yourself!",
    },
    {
      image: WorkLogo,
      altText: "Work History Logo Image",
      content:
        "This icon will take you to the Work section. This is where you will go in depth and talk about and list the last three jobs you've had!",
    },
    {
      image: EducationLogo,
      altText: "Education History Logo Image",
      content:
        "Finally graduated from a gruelling last semester of school? This is where you will show off your achievements, your last two degrees and certificates will go here in the Education section!",
    },
    {
      image: PreviewLogo,
      altText: "Preview CV Image",
      content:
        "This logo represents the Print Preview section. You will not see this if you are on a bigger screen, but for smaller screens this will take you to the small preview CV to get a glimpse of how your CV is coming along!",
    },
    {
      image: PrintLogo,
      altText: "Print CV Logo Image",
      content:
        "When you are all finished and want to print your CV, the Print button will be there for you. Bright green, it's hard to miss!",
    },
    {
      image: GenerateLogo,
      altText: "Generate Sample CV Logo Image",
      content:
        "If you want to get an idea of some information to put down, or see what the final product will look like, click the orange Generate Logo button! WARNING, THIS WILL ERASE ALL OF YOUR DATA!!!",
    },
    {
      image: ResetLogo,
      altText: "Reset CV Logo Image",
      content:
        "If you really want to get a fresh start and start all over again, hit the bright red Reset Logo Button.  WARNING, THERE IS NO GOING BACK!!!",
    },
    {
      image: CoolEmoji,
      altText: "Cool Emoji with glasses and finger guns Image",
      content:
        "You finally made it to the end of the tutorial! If you want to view this again, hit the first Question Mark Logo! Enjoy Simple-CV!",
    },
  ];

  return (
    <>
      {tutorialController.isHidden ? null : (
        <section className="tutorial-focus place-center">
          <section className="tutorial-wrapper place-center">
            <section className="tutorial-content place-center">
              <img
                className="tutorial-image"
                src={tutorialPages[tutorialController.activePage].image}
                alt={tutorialPages[tutorialController.activePage].altText}
              />
              <p>{tutorialPages[tutorialController.activePage].content}</p>
              <section className="tutorial-buttons">
                <section>
                  {tutorialController.activePage !== 0 ? (
                    <Button
                      buttonText={
                        <img
                          className={"tutorial-button-svgs"}
                          src={LeftArrow}
                          alt="Left Arrow Signifying to go Back"
                        />
                      }
                      onButtonClick={tutorialController =>
                        setTutorialController(
                          previousTutorialPage(tutorialController)
                        )
                      }
                    />
                  ) : (
                    <div className="tutorial-button-placeholder"></div>
                  )}
                </section>
                <section>
                  <Button
                    buttonText={"EXIT"}
                    onButtonClick={tutorialController =>
                      setTutorialController(exitTutorial(tutorialController))
                    }
                  />
                </section>
                <section>
                  {tutorialController.activePage !== 9 ? (
                    <Button
                      buttonText={
                        <img
                          className={"tutorial-button-svgs"}
                          src={RightArrow}
                          alt="Right Arrow Signifying to go Back"
                        />
                      }
                      onButtonClick={tutorialController => 
                        setTutorialController(
                          nextTutorialPage(tutorialController)
                        )
                      }
                    />
                  ) : (
                    <div className="tutorial-button-placeholder"></div>
                  )}
                </section>
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
}
