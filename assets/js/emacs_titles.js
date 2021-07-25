const change_title = () => {
  const titles = ['This Emacs Life', 'In the Beginning there was Nothing, then God created Lisp', 'http://xkcd.com/378/ C-x M-c M-butterfly'];
  const index = Math.floor(Math.random() * titles.length);
  const title = titles[index];
  document.title = title;
  document.getElementById("header").children[0].textContent = title;
}