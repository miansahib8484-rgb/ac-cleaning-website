var hdr=document.getElementById('hdr');
window.addEventListener('scroll',function(){
  if(hdr)hdr.classList.toggle('scrolled',scrollY>20);
  var fw=document.getElementById('floatWa');
  if(fw)fw.classList.toggle('show',scrollY>300);
});
var io=new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e&&e.isIntersecting&&e.target) e.target.classList.add('in'); });
},{threshold:0.08});
document.querySelectorAll('.fade,.fade-l,.fade-r').forEach(function(el){ if(el) io.observe(el); });

function toggleMenu(){
  var menu=document.getElementById('mobMenu');
  var btn=document.getElementById('hambBtn');
  if(!menu||!btn) return;
  menu.classList.toggle('open');
  btn.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

function toggleFaq(el){
  var item = el.parentElement;
  var wasOpen = item.classList.contains('open');
  item.parentElement.querySelectorAll('.faq-item').forEach(function(f){ f.classList.remove('open'); });
  if(!wasOpen) item.classList.add('open');
}

document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click', function(e){
    var target = document.querySelector(this.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
