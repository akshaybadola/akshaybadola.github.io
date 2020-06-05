const titles = ['This Emacs Life', 'In the Beginning there was Nothing, then God created Lisp'];
const index = Math.floor(Math.random() * titles.length);
const title = titles[index];
document.title = title;
document.getElementById("header").children[0].textContent = title;