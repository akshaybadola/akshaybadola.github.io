function change_title(){
  const titles = ['void *ptr', 'The code is Compiling!', 'The Model is Training!', 'void foo() { return bar; }'];
  const index = Math.floor(Math.random() * titles.length);
  const title = titles[index];
  document.title = title;
  document.getElementById("header").children[0].textContent = title;
}