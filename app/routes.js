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

    res.redirect('#');
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


//ITERATION - 2 

//DOB

router.post("/ppc/iteration_2/buy/dob", function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var example_day = req.session.data['example_day']
  var example_month = req.session.data['example_month']
  var example_year = req.session.data['example_year']

    res.redirect('../buy/name')

})


router.post("/ppc/iteration_2/buy/name", function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var firstname = req.session.data['firstname']
  var lastname = req.session.data['lastname']

    res.redirect('../buy/postcode_v2')

})

router.post("/ppc/iteration_2/buy/postcode_v2", function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var addresshousenumber = req.session.data['addresshousenumber']
  var addresspostcode = req.session.data['addresspostcode']

  // Check whether the variable matches a condition
  
    res.redirect('../buy/address-lookup_v2')
  
})


router.post("/ppc/iteration_2/buy/address-lookup_v2", function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var selectaddress = req.session.data['selectaddress']

  // Check whether the variable matches a condition
  if (selectaddress === "address"){
    // Send user to next page
    res.redirect('../buy/nhs-number_v2')
  }
  else if (selectaddress === "none") {
      res.redirect('../buy/address-manual')
    }
  else {
    // Send user to ineligible page
    res.redirect('../buy/address-lookup_v2')
  }

})

router.post("/ppc/iteration_2/buy/address-manual", function (req, res) {
  
    res.redirect('../buy/nhs-number_v2')
  
})


router.post("/ppc/iteration_2/buy/nhs-number_v2", function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsnumber = req.session.data['nhsnumber'] 
 
  if (nhsnumber === "yes" || nhsnumber == 'no'){
      // Send user to next page
      res.redirect('../buy/PPC-last')
    }
    res.redirect('../buy/nhs-number_v2')
  
})

router.post("/ppc/iteration_2/buy/PPC-last", function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var ppcduration = req.session.data['ppcduration']

  // Check whether the variable matches a condition
  if (ppcduration === "12months"){
    // Send user to next page
    res.redirect('../buy/12months-payment')
  }
  else if (ppcduration === "3months") {
      res.redirect('../buy/V2-PPC-startdate_newuser')
    }
  else {
    // Send user to ineligible page
    res.redirect('../buy/PPC-last')
  }

})



router.post("/ppc/iteration_2/buy/12months-payment", function (req, res) {


  var payment = req.session.data['payment']

  // Check whether the variable matches a condition
  if (payment === "dd"){
    // Send user to next page
    res.redirect('../buy/V2-PPC-startdate_newuser')
  }
  else if (payment === "single") {
      res.redirect('../buy/V2-PPC-startdate_newuser')
    }
  else {
    // Send user to ineligible page
    res.redirect('../buy/12months-payment')
  }

})



router.get("/ppc/iteration_2/buy/PPC-startdate_v2", function (req, res) {
  var today = new Date();
  var date = new Date(req.query.year,req.query.month,req.query.day,0,0,0);

  res.redirect('../buy/email-print_v2');
});






router.post("/ppc/iteration_2/buy/email-print_v2", function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var email_print = req.session.data['email_print']

  // Check whether the variable matches a condition
  if (email_print === "email"){
    // Send user to next page
    res.redirect('../buy/email-address')
  }
  else if (email_print === "print") {
      res.redirect('../buy/check-your-answers')
    }
  else {
    // Send user to ineligible page
    res.redirect('../buy/email-print_v2')
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
  
  res.redirect('../buy/email-print_v2');
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
        res.redirect('../version-1/check-details-email-dd')
      }
    
    })
    


var payment = req.session.data['payment']

// Check whether the variable matches a condition
if (payment === "dd"){
  // Send user to next page
  res.redirect('../buy/V2-PPC-startdate_newuser')
}
else if (payment === "single") {
    res.redirect('../buy/V2-PPC-startdate_newuser')
  }
else {
  // Send user to ineligible page
  res.redirect('../buy/12months-payment')
}

})



//UPDATED FULL JOURNEY - VERSION 2

router.get("/ppc/updated-full-journey/version-2/where-you-collect", function (req, res) {
  if (req.query.location === "england") {
   res.redirect('../version-2/dob');
 } else if 
  (req.query.location === "scotland") {
    res.redirect('../version-2/continue');
 } else if 
  (req.query.location === "wales") {
    res.redirect('../version-2/continue');
} else if 
  (req.query.location === "northern") {
    res.redirect('../version-2/continue');
  }
});

//CONTINUE

router.get(/medicine-continue/, function (req, res) {
  if (req.query.continue === "yes")  {
   res.redirect('../version-2/dob');
 } else (req.query.continue === "no");  {
  res.redirect('../version-2/chosen-not-to-buy');
 }
});


//DOB

router.post("/ppc/updated-full-journey/version-2/dob", function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var example_day = req.session.data['example_day']
  var example_month = req.session.data['example_month']
  var example_year = req.session.data['example_year']
  
    res.redirect('../version-2/name')
  
  })
  

 //NAME

  router.post("/ppc/updated-full-journey/version-2/name", function (req, res) {
  
  // Make a variable and give it the value from 'know-nhs-number'
  var firstname = req.session.data['firstname']
  var lastname = req.session.data['lastname']
  
    res.redirect('../version-2/postcode')
  
  })
  

  //FIND ADDRESS

  router.post("/ppc/updated-full-journey/version-2/find-address", function (req, res) {
  
  // Make a variable and give it the value from 'know-nhs-number'
  var addresspostcode = req.session.data['addresspostcode']
  
  // Check whether the variable matches a condition
  
    res.redirect('../version-2/select-address-radios')
  
  })
  
  
  //SELECT ADDRESS
  router.post("/ppc/updated-full-journey/version-2/select-address", function (req, res) {
  
  // Make a variable and give it the value from 'know-nhs-number'
  var selectaddress = req.session.data['selectaddress']
  
  // Check whether the variable matches a condition
  if (selectaddress === "address"){
    // Send user to next page
    res.redirect('../version-2/nhs-number')
  }
  else if (selectaddress === "none") {
      res.redirect('../version-2/enter-address')
    }
  else {
    // Send user to ineligible page
    res.redirect('../version-2/find-address')
  }
  
  })
  

  //ENTER ADDRESS

  router.post("/ppc/updated-full-journey/version-2/enter-address", function (req, res) {
  
    res.redirect('../version-2/nhs-number')
  
  })
  

  //NHS NUMBER

  router.post("/ppc/updated-full-journey/version-2/nhs-number", function (req, res) {
  
  // Make a variable and give it the value from 'know-nhs-number'
  var nhsnumber = req.session.data['nhsnumber'] 
  
  if (nhsnumber === "yes" || nhsnumber == 'no'){
      // Send user to next page
      res.redirect('../version-2/duration')
    }
    res.redirect('../version-2/duration')
  
  })
  

  //PPC DURATION

  router.post("/ppc/updated-full-journey/version-2/duration", function (req, res) {
  
  // Make a variable and give it the value from 'know-nhs-number'
  var ppcduration = req.session.data['ppcduration']
  
  // Check whether the variable matches a condition
  if (ppcduration === "twelvemonthdd"){
    // Send user to next page
    res.redirect('../version-2/start-date')
  }
  else if (ppcduration === "twelvemonth") {
      res.redirect('../version-2/start-date')
    }
  else if (ppcduration === "threemonth") {
      res.redirect('../version-2/start-date')
    }
  
  })
  

  //PPC START DATE

  router.get("/ppc/updated-full-journey/version-2/start-date", function (req, res) {
    var today = new Date();
    var backdate = new Date(req.query.year,req.query.month,req.query.day,0,0,0);
    
    res.redirect('../version-2/fulfilment');
    });
  
  
  //PPC EMAIL OR PRINT

  router.post("/ppc/updated-full-journey/version-2/fulfilment", function (req, res) {
  
    router.post("/ppc/updated-full-journey/version-2/fulfilment", function (req, res) {
  
      // Make a variable and give it the value from 'know-nhs-number'
      var fulfilment = req.session.data['fulfilment']
      
      // Check whether the variable matches a condition
      if (fulfilment === "email"){
        // Send user to next page
        res.redirect('../version-2/email')
      }
      else if (fulfilment === "print") {
          res.redirect('../version-2/check-details-email-dd')
        }
      
      })
      
  
  //PAYMENT

  var payment = req.session.data['payment']
  
  // Check whether the variable matches a condition
  if (payment === "dd"){
    // Send user to next page
    res.redirect('../buy/V2-PPC-startdate_newuser')
  }
  else if (payment === "single") {
      res.redirect('../buy/V2-PPC-startdate_newuser')
    }
  else {
    // Send user to ineligible page
    res.redirect('../buy/12months-payment')
  }
  
  })





















module.exports = router;
