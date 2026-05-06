
const botao = document.querySelector('.botao-menu');
const menuLateral = document.querySelector('.menu-lateral');
const conteudo = document.querySelector('.conteudo');
const background = document.querySelector('.background');

botao.addEventListener('click', () => {
  menuLateral.classList.toggle('ativo');
  botao.classList.toggle('ativo');
  conteudo.classList.toggle('ativo');
  background.classList.toggle('ativo');
});

background.addEventListener('click', () => {
  menuLateral.classList.remove('ativo');
  botao.classList.remove('ativo');
  conteudo.classList.remove('ativo');
  background.classList.remove('ativo');
});

document.querySelectorAll('.has-submenu > a').forEach(link => {
  link.addEventListener('click', (e) => {
    const parent = link.parentElement;
    const submenu = parent.querySelector('.submenu');
    if (submenu) {
      e.preventDefault();
      parent.classList.toggle('aberto');
    }
  });
});
