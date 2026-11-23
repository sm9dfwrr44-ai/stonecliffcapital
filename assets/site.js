(function () {
  var t = document.querySelector('.nav-toggle'), n = document.getElementById('nav');
  if (t && n) {
    t.addEventListener('click', function () {
      var open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var f = document.getElementById('enquiry');
  if (!f) return;
  var via = 'wa';
  f.querySelectorAll('button[type=submit]').forEach(function (b) {
    b.addEventListener('click', function () { via = b.getAttribute('data-via'); });
  });
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (k) { return (f.elements[k].value || '').trim(); };
    var err = f.querySelector('.form-error'), done = f.querySelector('.form-done');
    if (!v('name') || !v('citizenship')) { err.hidden = false; done.hidden = true; return; }
    err.hidden = true;
    var lines = ['Enquiry from stonecliffcapital.com', '', 'Name: ' + v('name'), 'Current citizenship: ' + v('citizenship')];
    if (v('residence')) lines.push('Country of residence: ' + v('residence'));
    lines.push('Interested in: ' + v('interest'));
    if (v('family')) lines.push('Family members: ' + v('family'));
    if (v('message')) lines.push('', v('message'));
    var text = lines.join('\n');
    var url = 'https://wa.me/' + f.dataset.wa + '?text=' + encodeURIComponent(text);
    var a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
    done.hidden = false;
  });
})();
