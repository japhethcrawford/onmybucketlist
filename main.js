// You'll need a single TembooSession object in your code, eg:
var tsession = require("node_modules/temboo/core/temboosession");
var session = new tsession.TembooSession("japhethcrawford", "onMyBucketList", "3ff0e63ebb2e4c499fa9e52b7d4da4ef");

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