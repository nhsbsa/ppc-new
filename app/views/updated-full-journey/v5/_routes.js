// External dependencies
const express = require('express');
const router = express.Router();


//Updated Full Journey

//where-you-collect
router.post(/where-you-collect/, (req, res) => {

  const UserLocation= req.session.data["prescriptionCountryName"]

  if (UserLocation == "england") {
    res.redirect('date-of-birth');

  } else if (UserLocation== "scotland") {
    res.redirect('continue')

  } else if (UserLocation== "wales") {
    res.redirect('continue')

  } else if (UserLocation== "northern") {
    res.redirect('continue')
  }
})


//continue
router.post(/continue/,  function (req, res) {
  // creating a variable named contact - assigning the variable the value of the radio button selected
  var TestContinue = req.session.data["continue"]
  if (TestContinue == "yes"){
    res.redirect('date-of-birth')
  }
  else {
    res.redirect('chosen-not-to-buy')
  }
})


//fulfilment
router.post(/fulfilment/,  function (req, res) {
  // creating a variable named contact - assigning the variable the value of the radio button selected
  var TestFulfilment = req.session.data["fulfilment"]
  if (TestFulfilment == "email"){
    res.redirect('email')
  }
  else {
    res.redirect('check-details-print-dd')
  }
})

//email address
router.post(/contact-email/, (req, res) => {

  const UserEmail= req.session.data["email"]

  if (UserEmail == "directdebit.test@gmail.com") {
    res.redirect('check-details-email-dd');

  } else if (UserEmail== "12month.test@gmail.com") {
    res.redirect('check-details-email-12-months')

  } else if (UserEmail== "3month.test@gmail.com") {
    res.redirect('check-details-email-3-months')

  } else {
    res.redirect('email');
  }
})



module.exports = router;
