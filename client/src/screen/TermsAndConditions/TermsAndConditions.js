import { Container, Typography } from "@material-ui/core";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <Container maxWidth="lg">
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            style={{ fontWeight: "bold" }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            variant="body1"
            style={{ marginTop: "1rem", marginBottom: "2rem" }}
            gutterBottom
          >
            By enrolling in our training program, you (referred to as "Student")
            agree to the following terms and conditions:
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Typography variant="body1">Last Updated: 13/07/2023</Typography>
          </div>
        </section>

        <ol className="conditions">
          <li>
            Payment:{" "}
            <ul className="condition-list">
              <li>
                The Student must pay a minimum of 50% of the total fees at the
                time of admission.
              </li>
              <li>
                The remaining dues must be paid within two weeks of the
                commencement of the class.
              </li>
            </ul>
          </li>
          <li>
            Laptop Requirement:
            <ul className="condition-list">
              <li>
                The Student must bring their own laptop and ensure its
                availability throughout the duration of the class.
              </li>
            </ul>
          </li>
          <li>
            Attendance and Project Submission:
            <ul className="condition-list">
              <li>
                The Student must maintain a minimum attendance of 90% throughout
                the course.
              </li>
              <li>
                The Student must submit the assigned project before the end of
                the course.
              </li>
            </ul>
          </li>
          <li>
            Punctuality and Classroom Maintenance:
            <ul className="condition-list">
              <li>
                The Student must be punctual for all classes and actively
                participate.
              </li>
              <li>
                The Student is responsible for maintaining cleanliness and
                orderliness in the classroom or computer lab during the training
                period.
              </li>
            </ul>
          </li>
          <li>
            ID-Card Requirement:
            <ul className="condition-list">
              <li>
                The Student must always wear the provided training ID-Card while
                entering Deerwalk Compware premises.
              </li>
            </ul>
          </li>
          <li>
            Canteen Facilities:
            <ul className="condition-list">
              <li>
                If the Student wishes to use the canteen facilities, an advance
                payment of Rs. 1000 must be made. This amount is non-refundable.
              </li>
              <li>The canteen operates from 9 AM to 4 PM.</li>
            </ul>
          </li>
          <li>
            Internet Access:
            <ul className="condition-list">
              <li>
                The Student must have internet access during the training
                period.
              </li>
              <li>
                Internet access will be terminated after the completion of the
                course.
              </li>
            </ul>
          </li>
          <li>
            ID Card Loss or Misuse:
            <ul className="condition-list">
              <li>An ID card will be provided to all students.</li>
              <li>
                If the ID card is lost, a fine of Rs. 1000 will be imposed.
              </li>
              <li>
                Misuse of the ID card may result in legal measures being taken
                against the person responsible.
              </li>
            </ul>
          </li>
          <li>
            Refund Policy:
            <ul className="condition-list">
              <li>
                The paid amount for the course will not be refundable under any
                circumstances.
              </li>
            </ul>
          </li>
          <li>
            Termination of Enrollment:
            <ul className="condition-list">
              <li>
                Deerwalk Compware reserves the right to terminate a Student from
                the class if they fail to comply with the guidelines mentioned
                above.
              </li>
            </ul>
          </li>
        </ol>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
