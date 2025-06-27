import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faFileLines,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const InformationSection = () => {
  return (
    <>
      <div className="info-container">
        <div className="sidebar">
          <a href="#" className="odd">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="info-icon"
              style={{ color: "#721d1d", fontSize: "26px" }}
            />
            <p>Anti-Ragging Cell</p>
          </a>
          <a href="#" className="even">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="info-icon"
              style={{ color: "#721d1d", fontSize: "26px" }}
            />
            <p>IQAC</p>
          </a>
          <a href="#" className="odd">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="info-icon"
              style={{ color: "#721d1d", fontSize: "26px" }}
            />
            <p>Grievance Cell</p>
          </a>
          <a href="#" className="even">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="info-icon"
              style={{ color: "#721d1d", fontSize: "26px" }}
            />
            <p>News & Media</p>
          </a>
          <a href="#" className="odd">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="info-icon"
              style={{ color: "#721d1d", fontSize: "26px" }}
            />
            <p>Fee Structure</p>
          </a>
          <a href="#" className="even">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="info-icon"
              style={{ color: "#721d1d", fontSize: "26px" }}
            />
            <p>Online Journals</p>
          </a>
          <a href="#" className="odd">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="info-icon"
              style={{ color: "#721d1d", fontSize: "26px" }}
            />
            <p>Institute Memoir</p>
          </a>
          <a href="#" className="even">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="info-icon"
              style={{ color: "#721d1d", fontSize: "26px" }}
            />
            <p>Institute Brochure</p>
          </a>
          <a href="#" className="odd">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="info-icon"
              style={{ color: "#721d1d", fontSize: "26px" }}
            />
            <p>Online Feedback</p>
          </a>
        </div>
        
        <div className="info-section exam-cell">
          <div
            className="info-header"
            style={{ background: "#721d1d", color: "white" }}
          >
            <FontAwesomeIcon
              className="pdf-icon"
              icon={faFileLines}
              style={{ color: "#ffffff" }}
            />
            <p>EXAM CELL</p>
          </div>
          <div className="content-wrapper">
            <div className="content">
              <div>
                {" "}
                <a href="">
                  III B.Tech II Semester (R20) Mid-I Jan/Feb 2025 Time Table
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  JNTU-GV Results of IV B.Tech I Sem (R20) Regular End Exams
                  Nov-2024
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  JNTU-GV Results of IV B.Tech I Sem (R19) Regular & Supply
                  Exams Nov-2024
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  NTU-GV Results of IV B.Tech I Sem (R16) Regular End Exams
                  Nov-2024
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  III B.Tech II Semester (R20) Mid-I Jan/Feb 2025 Time Table
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  JNTU-GV Results of IV B.Tech I Sem (R20) Regular End Exams
                  Nov-2024
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  JNTU-GV Results of IV B.Tech I Sem (R19) Regular & Supply
                  Exams Nov-2024
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  JNTU-GV Results of IV B.Tech I Sem (R16) Regular End Exams
                  Nov-2024
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  III B.Tech II Semester (R20) Mid-I Jan/Feb 2025 Time Table
                </a>
              </div>
              <div>
                <a href="">
                  {" "}
                  JNTU-GV Results of IV B.Tech I Sem (R20) Regular End Exams
                  Nov-2024
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="info-section placements">
          <div
            className="info-header"
            style={{ background: "black", color: "white" }}
          >
            <FontAwesomeIcon
              className="pdf-icon"
              icon={faUserTie}
              style={{ color: "#ffffff" }}
            />
            <p>PLACEMENTS INFO</p>
          </div>
          <div className="content-wrapper">
            <div className="content">
              <div>
                {" "}
                <a href="">
                  MEDHA SERVO DRIVES PVT LMT
                  <br />G Naveen Kumar (EEE), S Vamsi Krishna (EEE)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Pilgrimp Pathways Tourism Pvt. Ltd
                  <br />
                  Indukuri Satyanand (CSE)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Amazon
                  <br />
                  Yelamanchili Karthik (CSE), Annavarapu Pravallika (CIVIL)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  MEDHA SERVO DRIVES PVT LMT
                  <br />G Naveen Kumar (EEE), S Vamsi Krishna (EEE)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Pilgrimp Pathways Tourism Pvt. Ltd
                  <br />
                  Indukuri Satyanand (CSE)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Amazon
                  <br />
                  Yelamanchili Karthik (CSE), Annavarapu Pravallika (CIVIL)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  MEDHA SERVO DRIVES PVT LMT
                  <br />G Naveen Kumar (EEE), S Vamsi Krishna (EEE)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Pilgrimp Pathways Tourism Pvt. Ltd
                  <br />
                  Indukuri Satyanand (CSE)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Amazon
                  <br />
                  Yelamanchili Karthik (CSE), Annavarapu Pravallika (CIVIL)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  MEDHA SERVO DRIVES PVT LMT
                  <br />G Naveen Kumar (EEE), S Vamsi Krishna (EEE)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Pilgrimp Pathways Tourism Pvt. Ltd
                  <br />
                  Indukuri Satyanand (CSE)
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Amazon
                  <br />
                  Yelamanchili Karthik (CSE), Annavarapu Pravallika (CIVIL)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationSection;
