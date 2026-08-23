/* Web3Forms verzending voor alle formulieren met [data-web3form]. */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form[data-web3form]').forEach(function (form) {
    var melding = form.querySelector('.form-melding');
    var knop = form.querySelector('button[type="submit"]');
    var chipVeld = form.querySelector('input[name="Onderwerp"]');
    var chips = form.querySelectorAll('.chip');
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        c.classList.toggle('aan');
        if (chipVeld) chipVeld.value = Array.prototype.filter.call(chips, function (x) { return x.classList.contains('aan'); }).map(function (x) { return x.textContent.trim(); }).join(', ');
      });
    });
    function toon(tekst, soort) { if (!melding) return; melding.textContent = tekst; melding.className = 'form-melding ' + soort; melding.hidden = false; }
    var fout = 'Er ging iets mis bij het versturen. Mail ons gerust op info@outofthebox-verhuizingen.nl of bel 06 18884241.';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var origineel = knop.innerHTML;
      knop.disabled = true; knop.textContent = 'Versturen…';
      fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (d.success) {
            form.reset(); chips.forEach(function (c) { c.classList.remove('aan'); }); if (chipVeld) chipVeld.value = '';
            toon('Bedankt, uw aanvraag is verstuurd. Wij reageren binnen één werkdag.', 'ok');
          } else { toon(fout, 'fout'); }
        })
        .catch(function () { toon(fout, 'fout'); })
        .finally(function () { knop.disabled = false; knop.innerHTML = origineel; });
    });
  });
});
