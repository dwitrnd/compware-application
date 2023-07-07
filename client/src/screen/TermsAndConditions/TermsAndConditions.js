import { Container, Typography } from "@material-ui/core";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <Container maxWidth="lg">
        <section style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h3"
            color="primary"
            className="gradient-text"
            style={{ fontWeight: "bold" }}
          >
            Terms and Conditions
          </Typography>
        </section>
        <Typography variant="body1" gutterBottom>
          By enrolling in our training program, you (referred to as "Student")
          agree to the following terms and conditions:
        </Typography>
        <ol>
          <li>
            Payment:{" "}
            <ul>
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
            <ul>
              <li>
                The Student must bring their own laptop and ensure its
                availability throughout the duration of the class.
              </li>
            </ul>
          </li>
          <li>
            Attendance and Project Submission:
            <ul>
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
            <ul>
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
            <ul>
              <li>
                The Student must always wear the provided training ID-Card while
                entering Deerwalk Compware premises.
              </li>
            </ul>
          </li>
          <li>
            Canteen Facilities:
            <ul>
              <li>
                If the Student wishes to use the canteen facilities, an advance
                payment of Rs. 1000 must be made. This amount is non-refundable.
              </li>
              <li>The canteen operates from 9 AM to 4 PM.</li>
            </ul>
          </li>
          <li>
            Internet Access:
            <ul>
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
            <ul>
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
            <ul>
              <li>
                The paid amount for the course will not be refundable under any
                circumstances.
              </li>
            </ul>
          </li>
          <li>
            Termination of Enrollment:
            <ul>
              <li>
                Deerwalk Compware reserves the right to terminate a Student from
                the class if they fail to comply with the guidelines mentioned
                above.
              </li>
            </ul>
          </li>
        </ol>
        <Typography>
          By enrolling in our training program, you acknowledge that you have
          read, understood, and agreed to the above terms and conditions.
        </Typography>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
