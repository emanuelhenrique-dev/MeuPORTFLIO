// nav mobile //

const menu = document.querySelector('.menu-btn');
const navList = document.querySelector('nav ul');
const menuItem = menu.querySelector('nav ul li');

function togleMenu() {
  navList.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('menu-expanded');
}

menu.addEventListener('click', (e) => {
  togleMenu();
  //window.scroll(0, 0);
});

document.body.addEventListener('click', (e) => {
  if (navList.className == 'menu active') {
    const local = e.target;
    //console.log(local);
    if (local.tagName == 'A') {
      togleMenu();
    } else if (local.tagName == 'DIV') {
      togleMenu();
    }
  }
});

const projectList = document.querySelector('#projects ul');
const projectCards = document.querySelectorAll('#projects ul li');

// Deixar selecionado um projeto da lista //
projectList.addEventListener('click', (e) => {
  const projectCard = e.target;
  let number = 0;
  //console.log(projectCard);
  if (projectCard.tagName == 'LI') {
    projectCard.classList.remove('hidden');

    for (let i = 0; i < projectCards.length - 1; i++) {
      if (projectCards[i].id !== projectCard.id) {
        projectCards[i].classList.add('hidden');
      }
    }
  } else if (projectCard.tagName == 'UL') {
    //clicar fora
    for (let i = 0; i < projectCards.length - 1; i++) {
      projectCards[i].classList.add('hidden');
    }
  }
});

const copyEmail = document.querySelector('#about .copy-email');
const warning = document.querySelector('#about .copy-email .copy-warning');
const email = 'emanuelhenriquefs@gmail.com';
copyEmail.addEventListener('click', () => {
  console.log('email copiado');
  navigator.clipboard.writeText(email);

  if (warning.className == 'copy-warning') {
    warning.classList.add('active');
  }

  if (warning.className == 'copy-warning active') {
    const myInterval = setInterval(() => {
      warning.classList.remove('active');
      clearInterval(myInterval);
    }, 3000);
  }
});
