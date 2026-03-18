export function initNavbar() {
  const header = document.querySelector('.header');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

export function initTyping() {
  const el = document.querySelector('.typing');
  if (!el) return;

  const words = [
    'Full Stack Developer',
    'Python Backend',
    'Java & SQL',
    'Amante del código limpio',
  ];

  let wordIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIdx];

    if (deleting) {
      el.textContent = word.slice(0, --charIdx);
    } else {
      el.textContent = word.slice(0, ++charIdx);
    }

    if (!deleting && charIdx === word.length) {
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }

    if (deleting && charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      setTimeout(tick, 350);
      return;
    }

    setTimeout(tick, deleting ? 55 : 90);
  }

  tick();
}
