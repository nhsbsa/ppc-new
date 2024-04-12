// External dependencies
const express = require('express');
const router = express.Router();


//Updated Full Journey

//where-you-collect
router.post(/where-you-collect/, (req, res) => {

  const UserLocation = req.session.data["prescriptionCountryName"]

  if (UserLocation == "england") {
    res.redirect('date-of-birth');

  } else if (UserLocation == "scotland") {
    res.redirect('continue')

  } else if (UserLocation == "wales") {
    res.redirect('continue')

  } else if (UserLocation == "northern") {
    res.redirect('continue')
  }
})


//continue
router.post(/continue/, function (req, res) {
  // creating a variable named contact - assigning the variable the value of the radio button selected
  var TestContinue = req.session.data["continue"]
  if (TestContinue == "yes") {
    res.redirect('date-of-birth')
  }
  else {
    res.redirect('chosen-not-to-buy')
  }
})

//fulfilment
router.post(/fulfilment/, function (req, res) {
  // creating a variable named contact - assigning the variable the value of the radio button selected
  var TestFulfilment = req.session.data["fulfilment"]
  if (TestFulfilment == "email") {
    res.redirect('email')
  }

  else {
    res.redirect('check-details')
  }
})

//email address
router.post(/contact-email/, (req, res) => {
  res.redirect('check-details');
})

//duration-and-payment-choice
router.post(/duration-and-payment-choice/, (req, res) => {
  res.redirect('start-date');
})

//name
router.post(/name/, (req, res) => {
  res.redirect('find-address');
})

//date-of-birth
router.post(/date-of-birth/, (req, res) => {
  res.redirect('name');
})

//start-date
router.post(/start-date/, (req, res) => {
  res.redirect('fulfilment');
})

//nhs-number
router.post(/nhs-number/, (req, res) => {
  res.redirect('duration');
})

//find-address
router.post(/find-address/, (req, res) => {
  res.redirect('select-address');
})

//select-address
router.post(/select-address/, (req, res) => {
  // An address was selected, so remove any data from line-1 in Enter Address screen (otherwise this can break how CYA displays address)
  req.session.data["address-line-1"] = null;

  res.redirect('nhs-number');
})
//enter-address
router.post(/enter-address/, (req, res) => {
  res.redirect('nhs-number');
})

module.exports = router;
