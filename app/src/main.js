global.$ = $;

global.View = function() {
  var body = document.body;
  var view = document.getElementsByClassName('container');
  var installer = global.installer();
  var remote = require('remote');
  var dialog = remote.require('dialog');

  var msg = new global.Messages()

  this.zxpPath;

  _this = this;

  var updateStatus = function(message) {
    $(body).find('#progressText').html(message);
  }

  var install = function() {
    var promise = installer.install(_this.zxpPath);
    startInstalling();
    promise.then(function(result) {
      installationSuccess();
    }, function(err) {
      installationFailed(err);
    });
  }

  var startInstalling = function(){
    updateStatus(msg.ui['installing']);
  }

  var installationFailed = function(err) {
    updateStatus(err);
    $('#progressText').css({'margin-top': '0.5rem'});
    $('#progressTrack').css({'animation-iteration-count': '1', '-webkit-animation-iteration-count': '1', 'width': '100%', 'background': '#d00a0a'});
  }

  var installationSuccess = function() {
    updateStatus(msg.ui['installed']);
    $('#progressText').css({'margin-top': '0.5rem'});
    $('#progressTrack').css({'animation-iteration-count': '1', '-webkit-animation-iteration-count': '1', 'width': '100%'});
    setTimeout(closeApp, 2000)
  }

  function closeApp() {
    var window = remote.getCurrentWindow();
    window.close();
  }

   this.init = function() {
    console.log('installing extension');
    _this.zxpPath = __dirname +'/bin/extension.zxp';
    console.log(_this.zxpPath)
    install();
  }
}

  $(document).ready(function() {
  var _view = new View();
  _view.init();
  });