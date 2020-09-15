// External dependencies
const express = require('express');
const router = express.Router();

//Global variables

var benificiary = {
    firstname : "Molly",
    lastname : "Smith",
    thirdParty : false,
    dobDay : "0",
    dobMonth : "0",
    dobYear : "0",
}
// Add your routes here - above the module.exports line


//DOB

router.post("/ppc/dob", function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var example_day = req.session.data['example_day']
    var example_month = req.session.data['example_month']
    var example_year = req.session.data['example_year']
  
      res.redirect('name')

  })


//Name

router.post("/ppc/name", function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var firstname = req.session.data['firstname']
    var lastname = req.session.data['lastname']
  
      res.redirect('postcode_v2')

  })


//Postcode_v2

router.post("/ppc/postcode_v2", function (req, res) {

   // Make a variable and give it the value from 'know-nhs-number'
   var addresshousenumber = req.session.data['addresshousenumber']
   var addresspostcode = req.session.data['addresspostcode']

   // Check whether the variable matches a condition
   
     res.redirect('address-lookup_v2')
   
 })

//NHS-Number

router.post("/ppc/nhs-number", function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var nhsnumber = req.session.data['nhsnumber'] 
   
    if (nhsnumber === "yes" || nhsnumber == 'no'){
        // Send user to next page
        res.redirect('PPC-last')
      }
      res.redirect('nhs-number')
    
  })






router.get("/ppc/PPC-startdate_v2", function (req, res) {
    var today = new Date();
    var date = new Date(req.query.year,req.query.month,req.query.day,0,0,0);

    res.redirect('email-print');
  });




// Address lookup_v2
router.post("/ppc/address-lookup_v2", function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var selectaddress = req.session.data['selectaddress']
  
    // Check whether the variable matches a condition
    if (selectaddress === "address"){
      // Send user to next page
      res.redirect('nhs-number')
    }
    else if (selectaddress === "none") {
        res.redirect('address-manual')
      }
    else {
      // Send user to ineligible page
      res.redirect('address-lookup_v2')
    }
  
  })


// PPC Duration (PPC-last)
router.post("/ppc/PPC-last", function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var ppcduration = req.session.data['ppcduration']
  
    // Check whether the variable matches a condition
    if (ppcduration === "12months"){
      // Send user to next page
      res.redirect('12months-payment')
    }
    else if (ppcduration === "3months") {
        res.redirect('V2-PPC-startdate_newuser')
      }
    else {
      // Send user to ineligible page
      res.redirect('PPC-last')
    }
  
  })

// 12 months payment
router.post("/ppc/12months-payment", function (req, res) {


  var payment = req.session.data['payment']

  // Check whether the variable matches a condition
  if (payment === "dd"){
    // Send user to next page
    res.redirect('V2-PPC-startdate_newuser')
  }
  else if (payment === "single") {
      res.redirect('V2-PPC-startdate_newuser')
    }
  else {
    // Send user to ineligible page
    res.redirect('12months-payment')
  }

})







//PPC-startdate_v2

router.get("/ppc/PPC-startdate_v2", function (req, res) {
    var today = new Date();
    var date = new Date(req.query.year,req.query.month,req.query.day,0,0,0);

    res.redirect('email-print');
  });

  
//E-mail or print
  router.post("/ppc/email-print", function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var email_print = req.session.data['email_print']
  
    // Check whether the variable matches a condition
    if (email_print === "email"){
      // Send user to next page
      res.redirect('email-address')
    }
    else if (email_print === "print") {
        res.redirect('check-your-answers')
      }
    else {
      // Send user to ineligible page
      res.redirect('email-print')
    }
  
  })









module.exports = router;
