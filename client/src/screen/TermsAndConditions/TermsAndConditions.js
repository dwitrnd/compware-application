import { Container, Typography } from "@material-ui/core";
import React from "react";
import Paper from "@mui/material/Paper";

const TermsAndConditions = () => {
  return (
    <div
      style={{
        marginTop: "3rem",
        marginBottom: "3rem",
        paddingLeft: "6rem",
        paddingRight: "6rem",
      }}
    >
      <Paper elevation={8}>
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
              style={{ fontWeight: "bold", paddingTop: "1rem" }}
            >
              Terms and Conditions
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "1rem", marginBottom: "2rem" }}
              gutterBottom
            >
              By enrolling in our training program, you (referred to as
              "Student") agree to the following terms and conditions:
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                color: "gray",
              }}
            >
              <Typography variant="body1">Last Updated: 13/07/2023</Typography>
            </div>
          </section>

          <ol className="conditions" style={{ paddingBottom: "1rem" }}>
            <li>
              Payment:{" "}
              <ul className="condition-list">
                <li>
                  Any amount above Nrs. 500 accepted as a admission deposit.
                </li>
                <li>
                  You must pay a minimum of 70% of the total fees at the time of
                  class start.
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
                  You must bring your own laptop and ensure its availability
                  throughout the duration of the class.
                </li>
              </ul>
            </li>
            <li>
              Attendance and Project Submission:
              <ul className="condition-list">
                <li>
                  You must maintain a minimum attendance of 90% throughout the
                  course.
                </li>
                <li>
                  You must submit the assigned project before the end of the
                  course.
                </li>
              </ul>
            </li>
            <li>
              Punctuality and Classroom Maintenance:
              <ul className="condition-list">
                <li>
                  You must be punctual for all classes and actively participate.
                </li>
                <li>
                  You are responsible for maintaining cleanliness and
                  orderliness in the classroom or computer lab during the
                  training period.
                </li>
              </ul>
            </li>
            <li>
              ID-Card Requirement:
              <ul className="condition-list">
                <li>
                  You must always wear the provided training ID-Card while
                  entering Deerwalk Compware premises.
                </li>
              </ul>
            </li>
            <li>
              Canteen Facilities:
              <ul className="condition-list">
                <li>
                  If you wish to use the canteen facilities, an advance payment
                  of Rs. 1000 must be made. This amount is non-refundable.
                </li>
                <li>The canteen operates from 9 AM to 4 PM.</li>
              </ul>
            </li>
            <li>
              Internet Access:
              <ul className="condition-list">
                <li>
                  You must have internet access during the training period.
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
                  The paid amount for the course will not be refundable under
                  any circumstances.
                </li>
              </ul>
            </li>
            <li>
              Termination of Enrollment:
              <ul className="condition-list">
                <li>
                  Deerwalk Compware reserves the right to terminate a Student
                  from the class if they fail to comply with the guidelines
                  mentioned above.
                </li>
              </ul>
            </li>
          </ol>
        </Container>
      </Paper>
    </div>
  );
};

export default TermsAndConditions;
