// External dependencies
const express = require('express');
const router = express.Router();

//Global variables

var benificiary = {
    firstname : "Jane",
    lastname : "Doe",
    thirdParty : false,
    dobDay : "0",
    dobMonth : "0",
    dobYear : "0",
}
// Add your routes here - above the module.exports line


//UPDATED FULL JOURNEY - VERSION 1

//DOB

router.post("/ppc/updated-full-journey/version-1/dob", function (req, res) {

// Make a variable and give it the value from 'know-nhs-number'
var example_day = req.session.data['example_day']
var example_month = req.session.data['example_month']
var example_year = req.session.data['example_year']

  res.redirect('../version-1/name')

})


router.post("/ppc/updated-full-journey/version-1/name", function (req, res) {

// Make a variable and give it the value from 'know-nhs-number'
var firstname = req.session.data['firstname']
var lastname = req.session.data['lastname']

  res.redirect('../version-1/postcode')

})

router.post("/ppc/updated-full-journey/version-1/find-address", function (req, res) {

// Make a variable and give it the value from 'know-nhs-number'
var addresspostcode = req.session.data['addresspostcode']

// Check whether the variable matches a condition

  res.redirect('../version-1/select-address-radios')

})


router.post("/ppc/updated-full-journey/version-1/select-address-radios", function (req, res) {

// Make a variable and give it the value from 'know-nhs-number'
var selectaddress = req.session.data['selectaddress']

// Check whether the variable matches a condition
if (selectaddress === "address"){
  // Send user to next page
  res.redirect('../version-1/nhs-number')
}
else if (selectaddress === "none") {
    res.redirect('../version-1/enter-address')
  }
else {
  // Send user to ineligible page
  res.redirect('../version-1/find-address')
}

})

router.post("/ppc/updated-full-journey/version-1/enter-address", function (req, res) {

  res.redirect('../version-1/nhs-number')

})


router.post("/ppc/updated-full-journey/version-1/nhs-number", function (req, res) {

// Make a variable and give it the value from 'know-nhs-number'
var nhsnumber = req.session.data['nhsnumber'] 

if (nhsnumber === "yes" || nhsnumber == 'no'){
    // Send user to next page
    res.redirect('../version-1/duration')
  }
  res.redirect('../version-1/duration')

})

router.post("/ppc/updated-full-journey/version-1/duration", function (req, res) {

// Make a variable and give it the value from 'know-nhs-number'
var ppcduration = req.session.data['ppcduration']

// Check whether the variable matches a condition
if (ppcduration === "twelvemonthdd"){
  // Send user to next page
  res.redirect('../version-1/start-date')
}
else if (ppcduration === "twelvemonth") {
    res.redirect('../version-1/start-date')
  }
else if (ppcduration === "threemonth") {
    res.redirect('../version-1/start-date')
  }

})

router.get("/ppc/updated-full-journey/version-1/start-date", function (req, res) {
  var today = new Date();
  var backdate = new Date(req.query.year,req.query.month,req.query.day,0,0,0);
  
  res.redirect('../version-1/fulfilment');
  });


router.post("/ppc/updated-full-journey/version-1/fulfilment", function (req, res) {

  router.post("/ppc/updated-full-journey/version-1/fulfilment", function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var fulfilment = req.session.data['fulfilment']
    
    // Check whether the variable matches a condition
    if (fulfilment === "email"){
      // Send user to next page
      res.redirect('../version-1/email')
    }
    else if (fulfilment === "print") {
        res.redirect('../version-1/check-details-print-dd')
      }
    
    })
    


var payment = req.session.data['payment']

// Check whether the variable matches a condition
if (payment === "twelvemonthdd"){
  // Send user to next page
  res.redirect('../updated-full-journey/version-1/direct-debit')
}
else if (payment === "twelvemonth") {
    res.redirect('../updated-full-journey/version-1/gov-pay-12-months')
  }
else if (payment === "threemonth") {
  res.redirect('../updated-full-journey/version-1/gov-pay-3-months')
}

})


module.exports = router;
