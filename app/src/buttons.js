var shell = require('shell');
var remote = require('remote');

function learnMoreClicked() {
      shell.openExternal('https://example.com'); //Put your ad url here!
}

function cancelButtonClicked() {
      var window = remote.getCurrentWindow();
      window.close();
}