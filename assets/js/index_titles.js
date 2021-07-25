function change_title(){
  const titles = ["Badola's Blog and Stuff", 'A Supposedly Fun Thing', 'A Blog', 'Hark! A Blog!'];
  const index = Math.floor(Math.random() * titles.length);
  const title = titles[index];
  document.title = title;
  document.getElementById("header").children[0].textContent = title;
}