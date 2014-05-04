'use strict';

/* (function (){ */
	
// You'll need a single TembooSession object in your code, eg:
var tsession = require("temboo/core/temboosession");
var session = new tsession.TembooSession("appTHEList", "#OnMyBucketList Stream", "aNPqVfiKcbXgzM0dddPti6Nii");

var Twitter = require("temboo/Library/Twitter/Search");

var tweetsChoreo = new Twitter.Tweets(session);

// Instantiate and populate the input set for the choreo
var tweetsInputs = tweetsChoreo.newInputSet();

// Set inputs
tweetsInputs.set_AccessToken("2467151592-AN5SfkF8ToGuAi5x6HUnoOzXx1GnsRUOvNGeu9N");
tweetsInputs.set_Query("#OnMyBucketList");
tweetsInputs.set_AccessTokenSecret("syTIxpg3VZIteBwPz8YlLQlWqwuO5Zv5UBh3guMv4JMlv");
tweetsInputs.set_ConsumerSecret("iaZ438c9Via2nCrueHtjAXo5XHItY91QhkDELDXDCIOGaOPCCZ");
tweetsInputs.set_ConsumerKey("aNPqVfiKcbXgzM0dddPti6Nii");

// Run the choreo, specifying success and error callback handlers
tweetsChoreo.execute(
    tweetsInputs,
    function(results){console.log(results.get_Response());},
    function(error){console.log(error.type); console.log(error.message);}
);
	
/* })(); */





/*
Self Executing function
(function (){
	
})();
*/

/*
(function ($) {
    var getEntries,
        parseEntries,
        displayEntries,
        makeMap,
        likesArr = [];

    getEntries = function getEntriesF() {
        var req,
        	form = $('#search');
        	
        form.on('submit', function (e) {
	       e.preventDefault();
	       
	       var value = $('#search-field').val();
			
		   req = $.ajax({
	            url: 'http://api.dribbble.com/players/' + value + '/shots',
	            dataType: 'jsonp',
	            type: 'GET'
	        });
	
	        req.done(parseEntries);
	        
	        req.error(function (data, error){
		        alert(error);
	        });	       
	        
        });

    };

    parseEntries = function parseEntriesF(data) {
        var i = 0,
            shots = data.shots;


        for (i = shots.length; i--;) {
            likesArr.push({
                value: shots[i].likes_count,
                color: '#ccc'
            });
        }

        displayEntries();
    };

    displayEntries = function displayEntriesF() {
        var ctx = document.getElementById('myChart').getContext('2d'),
            polarChart = new Chart(ctx).Doughnut(likesArr);

    };

    getEntries();

})(jQuery);
*/
