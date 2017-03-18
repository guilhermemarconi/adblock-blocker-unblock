var interval = window.setTimeout(removeBlocker, 5000);

function removeBlocker() {
  var body = document.body;

  if (body.classList.contains('tp-modal-open')) {
    document.getElementsByClassName('tp-modal')[0].remove();
    document.getElementsByClassName('tp-backdrop')[0].remove();
    body.classList.remove('tp-modal-open');
    window.clearInterval(interval);
  }
}
