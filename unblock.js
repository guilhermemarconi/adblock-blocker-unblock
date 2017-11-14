var interval = window.setInterval(removeBlocker, 1000);
var intervalCount = 0;
function removeBlocker() {
  var body = document.body;

  if (body.classList.contains('tp-modal-open')) {
    document.getElementsByClassName('tp-modal')[0].remove();
    document.getElementsByClassName('tp-backdrop')[0].remove();
    body.classList.remove('tp-modal-open');
    window.clearInterval(interval);
  }

  var loginBarreiraGlobo = document.getElementById('login-barreira');

  if (loginBarreiraGlobo) {
    loginBarreiraGlobo.remove();
    body.style.overflow = 'scroll';
    window.clearInterval(interval);
  }

  if (++intervalCount > 15) {
    window.clearInterval(interval);
  };
}
