const Request = require("../models/Request");
const nodemailer = require("nodemailer");

class requestController {
  static post = async (req, res) => {
    try {
      const {
        fullName,
        email,
        contactNumber,
        course,
        courseTrainer,
        endTime,
        startTime,
      } = req.body;

      const request = new Request({
        fullName,
        email,
        contactNumber,
        course,
        courseTrainer,
        endTime,
        startTime,
      });

      const result = await request.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      if (
        err.code === 11000 &&
        err.keyPattern &&
        err.keyPattern.contactNumber === 1
      ) {
        // Duplicate key error for the contactNumber field
        res.status(400).json({
          status: false,
          msg: "Duplicate contact number. Please provide a unique contact number.",
        });
      } else {
        // Other errors
        res.status(500).json({
          status: false,
          msg: err.message,
        });
      }
    }
  };

  static get = async (req, res) => {
    try {
      const result = await Request.find({});
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };

  static patch = async (req, res) => {
    try {
      const {
        fullName,
        email,
        contactNumber,
        course,
        courseTrainer,
        endTime,
        startTime,
      } = req.body;
      const requestId = req.params.id;
      const result = await Request.findByIdAndUpdate(
        requestId,
        {
          fullName,
          email,
          contactNumber,
          course,
          courseTrainer,
          endTime,
          startTime,
        },
        { new: true }
      );
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        msg: "Id not found",
      });
    }
  };

  static patchState = async (req, res) => {
    try {
      const { email, status } = req.body;

      const requestId = req.params.id;

      const request = await Request.findByIdAndUpdate(requestId, status, {
        new: true,
      });
      if (status == "created") {
        console.log("hi");

        var from = "donotreplythisback@gmail.com";
        var to = email;
        var subject = "Enrollment Status:";

        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "donotreplythisback@gmail.com",
            pass: "sajjhjleycfzonhx",
          },
        });

        var mailOptions = {
          from: from,
          to: to,
          subject: subject,

          headers: {
            "X-Laziness-level": 1000,
            charset: "UTF-8",
            "Content-Type": "text/html; charset=UTF-8",
            "Content-Transfer-Encoding": "8bit",
            "MIME-Version": "1.0",
          },

          html: `
        
        <div><p style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font color="#000000" face="verdana, sans-serif">Good Morning,</font></p><p style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><br></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">Thank you for your interest in Deerwalk Training Center.</font></span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">&nbsp;</font></span></p><p class="MsoNormal" style="margin:0in 0in 0.0001pt;line-height:normal;background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-origin:initial;background-clip:initial"><font face="verdana, sans-serif">The&nbsp;<b>Full&nbsp;Stack&nbsp;Web Development-<span>MERN</span>&nbsp;Stack&nbsp;course</b>&nbsp;<wbr>will commence soon.</font></p><p class="MsoNormal" style="margin:0in 0in 0.0001pt;line-height:normal;background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-origin:initial;background-clip:initial"><font face="verdana, sans-serif"><br></font></p><p class="MsoNormal" style="margin:0in 0in 0.0001pt;line-height:normal;background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-origin:initial;background-clip:initial"><font face="verdana, sans-serif">Limited seats are now available, please get the admission earliest possible.</font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><br></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">&nbsp;</font></span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">COURSE DETAILS</span></font></p><p dir="ltr" style="line-height:1.8;text-align:center;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">&nbsp;</font></span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Course Name:&nbsp;</span>Full&nbsp;Stack&nbsp;Web Development –&nbsp;<span>MERN</span>&nbsp;Stack</font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><font color="#000000"><b>Course outline:</b>&nbsp;<a href="https://deerwalktrainingcenter.com/course-detail/64cb90ffb95bf7d97adfab08" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://deerwalktrainingcenter.com/course-detail/64cb90ffb95bf7d97adfab08&amp;source=gmail&amp;ust=1694515662902000&amp;usg=AOvVaw06X44JgDup6VkbPoJ7B0TT">Link</a></font></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Course Duration</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: Two and half&nbsp; months</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Morning Shift</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: 7:00 to 9:00 AM</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Afternoon Shift</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: 3:00 to 5:00 PM</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Evening Shift</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: 6:00 to 8:00 PM</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Regular class</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: Monday to Friday</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><br></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Course Fees</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: NRs. 24,000 only.</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Discount Applicable</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">:&nbsp;</span></font>&nbsp;<span style="font-family:verdana,sans-serif">8%off (Total Fee = NRs.22,080)</span>&nbsp;<font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">if&nbsp;</span><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">paid all at once.</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">&nbsp;</font></span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">For Online Payment:</font></span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><br></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Name</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: Deerwalk Compware Ltd.</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(32,33,36);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Bank Name</span><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: Nepal Investment Mega Bank Ltd</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(32,33,36);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Bank A/c Number</span><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: 01201020262095</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(32,33,36);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Branch Name</span><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">: Putalisadak, Kathmandu Nepal</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">&nbsp;</font></span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">OR</font></span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">&nbsp;</font></span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">You can find us on&nbsp;</span><span style="color:rgb(32,33,36);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">eSewa</span><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">&nbsp;by searching for&nbsp;</span><span style="color:rgb(32,33,36);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">Deerwalk Compware Ltd,</span><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">&nbsp;Putalisadak to&nbsp;</span><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">seamlessly</span><span style="color:rgb(32,33,36);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">&nbsp;register</span><span style="color:rgb(32,33,36);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">&nbsp;for the course.</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline"><font face="verdana, sans-serif">&nbsp;</font></span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">If/once</span><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">&nbsp;</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">the</span><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">&nbsp;admission fees</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">&nbsp;have been paid, kindly email us the</span><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">&nbsp;scanned copy of the voucher&nbsp;</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">or&nbsp;</span><span style="color:rgb(0,0,0);background-color:transparent;font-weight:700;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">screenshot of the Bank Statement</span><span style="color:rgb(0,0,0);background-color:transparent;font-variant-numeric:normal;font-variant-east-asian:normal;vertical-align:baseline">&nbsp;(for online payment).</span></font></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font face="verdana, sans-serif"><br></font></p><p style="margin:0px;font-stretch:normal;line-height:normal"><font face="verdana, sans-serif">To reserve your spot, you might pay the fees in whole or in installments basis (two installments).</font></p><p style="margin:0px;font-stretch:normal;line-height:normal"><font face="verdana, sans-serif"><br></font></p><p style="margin:0px;font-stretch:normal;line-height:normal"><font face="verdana, sans-serif">For further details, do not&nbsp;hesitate to contact us.&nbsp;</font></p><div><br></div><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font color="#888888" face="verdana, sans-serif"></font></p><div><font face="verdana, sans-serif">Thank You.</font></div><br></div>
        `,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            res.status(400).json({
              success: false,
              message: "Email not sent",
            });
          } else {
            console.log("Email sent: " + info.res);
            // response.end();
            res.status(200).json({
              success: true,
              message: "Email sent",
            });
          }
        });
      } else {
        res.status(200).json({
          status: true,
          msg: "Status changed to not approved.",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: false,
        msg: error,
      });
    }
  };

  static getOne = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await Request.findOne({ _id: Id });

      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        msg: "No such id",
      });
    }
  };

  static delete = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await Request.deleteOne({ _id: Id });
      console.log(result);
      res.status(200).json({
        status: true,
        msg: "Deletion Successful!",
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        msg: "Id does not exist!",
      });
    }
  };
}

module.exports = requestController;
