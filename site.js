(function(){
  var LEAD_EMAIL = "jralocal80@gmail.com";
  var b = document.querySelector('.burger'), l = document.querySelector('.nav-links');
  if(b && l) b.addEventListener('click', function(){ l.classList.toggle('open'); });
  var forms = document.querySelectorAll('form[data-quote]');
  Array.prototype.forEach.call(forms, function(f){
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = f.querySelector('button');
      if(btn){ btn.disabled = true; btn.textContent = 'Sending...'; }
      var d = new FormData(f), p = { _subject: 'New Quote Request — Tri-Cities Auto Glass', _template: 'table', Page: document.title, URL: location.href, Submitted: new Date().toLocaleString() };
      d.forEach(function(v,k){ p[k] = v; });
      fetch('https://formsubmit.co/ajax/' + encodeURIComponent(LEAD_EMAIL), {
        method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body: JSON.stringify(p)
      }).catch(function(){}).then(function(){
        var card = f.closest('.qcard');
        if(card) card.innerHTML = '<div class="qdone"><div class="ring"><svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="#f5a623" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h3>Request Received</h3><p class="sub">Thanks — we\'ll call you shortly with your free quote. Need it sooner? Call us now.</p><a class="btn-a" href="tel:5095090263">&#9742; Call (509) 509-0263</a></div>';
      });
    });
  });
  var io = new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ e.target.style.opacity='1'; e.target.style.transform='none'; io.unobserve(e.target); } }); }, {threshold:.12});
  Array.prototype.forEach.call(document.querySelectorAll('[data-reveal]'), function(n){
    n.style.opacity='0'; n.style.transform='translateY(20px)'; n.style.transition='opacity .6s ease, transform .6s ease'; io.observe(n);
  });
})();