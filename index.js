/* -----------------------------------------------------------

    MJML4-Lambda
    
    - A simple lambda that accepts mjml + options and returns the generated markup

    example:
    {
        "body": {
            "mjml":"<mj-text>hi</mj-text>",
            "options":""
        }
    }

----------------------------------------------------------- */

const os = require('os');
const mjml2html   = require('mjml');
const isString = function(val) {
    return typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call(val) === '[object String]');
}


exports.handler = async (event, context, callback) => {

    // Log the event details so that they're viewable in the CloudWatch Logs
    process.stdout.write(JSON.stringify(event));

    // console.log('DATA:', event.body);
    const data = isString(event.body) ? JSON.parse(event.body) : event.body;
    const htmlOutput = mjml2html(data.mjml, data.options);
    

    // onError
    if(htmlOutput.errors.length){
        let errorList = JSON.stringify(htmlOutput.errors);
        process.stderr.write(errorList);
        return callback( errorList, sendRes(500, htmlOutput.html) );
    }

    // success 
    return callback(null, sendRes(htmlOutput.errors.length ? 500 : 200, htmlOutput.html) );
};



const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    headers: {
        "Access-Control-Allow-Origin":"*",
        "Content-Type":"application/json"
    },    
    body: body
  };
  return response;
};




/* -----------------------------------------------------------

    For Local testing only (darwin=mac || win32=windows)
    $>  node index.js
    
----------------------------------------------------------- */
if (os.platform() === "darwin" || os.platform() === "win32") {
    console.log("~~ TEST MODE ~~");

    let mockEvent = {};
    mockEvent['body'] = {
        "mjml": "<mjml version=\"4.1.2\" lang=\"en\">",
        "options":{
            "validationLevel": "strict"
      }
    };
    exports.handler(mockEvent, null, (error, result) => { return console.log(error, result) });
};