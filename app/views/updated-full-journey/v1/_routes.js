// External dependencies
const express = require('express');
const router = express.Router();


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
