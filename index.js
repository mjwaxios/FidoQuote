/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
        http://aws.amazon.com/apache2.0/
    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

var APP_ID = "amzn1.echo-sdk-ams.app.6d6d69d2-1d76-46a5-9180-3ae3c6d0eb59";
var VERSION = "7/19/2016 - 1:30 pm";

var qu = require('./quotes');

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * Fido Quote is a child of AlexaSkill.
 */
var Quote = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Quote.prototype = Object.create(AlexaSkill.prototype);
Quote.prototype.constructor = Quote;
Quote.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {};
Quote.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {  handleNewQuoteRequest(response); };
Quote.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {};

Quote.prototype.intentHandlers = {
    "GetNewQuoteIntent": function (intent, session, response) {
        handleNewQuoteRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say tell me a quote, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new quote from the list and returns to the user.
 */
function handleNewQuoteRequest(response) {
    var randomQuote = qu.getRandomQuote();
    
    var speechOutput = { 
      speech: "<speak><s>Fido Says:</s> " + randomQuote+ "</speak>",
      type: AlexaSkill.speechOutputType.SSML
    };
    var cardTitle = "Fido BBS Quote";
    var cardquote = qu.stripQuote(randomQuote);
    
    response.tellWithCard(speechOutput, cardTitle, cardquote);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    if (event.session == null) {
      console.log("<index.handler> Called without a session.  Version: " + VERSION);
      return;
    }

    var quote = new Quote();
    quote.execute(event, context);
};

