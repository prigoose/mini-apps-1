var exampleData = {
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
};

// Will hold any functions from client side. For example, on click, run post request
var App = {};

// initialization
App.init = function() {
	$( document ).ready(function() {
		$("#btn").click(function(e) {
			e.preventDefault();
			console.log("You have clicked!");
			$.ajax('/csv', {
			  method: "POST",
			  contentType: 'application/json',
			  data: JSON.stringify(exampleData),
			  success: null, // can call 'get' to give back data
			  error: null
			});
		})	
	})
}

App.init();
