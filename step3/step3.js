var https = require ('https');

function getAndPrintHTML (options) {
  //Is getAndPrintHTML (host, path) a bad idea?
  // What if I create 'options' as a string of both host + path? and then split it?

  //host + path must be passed through somehow as objects
  //function must accept multiple parameters: host and path

  var printedHTML;


  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      printedHTML += data;
    })

    response.on('end', function() {
      console.log(printedHTML);
    })
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);