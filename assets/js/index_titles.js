const titles = ["Badola's Blog and Stuff", 'Hark! A Vagrant', 'A Blog'];
const index = Math.floor(Math.random() * titles.length);
const title = titles[index];
document.title = title;
document.getElementById("header").children[0].textContent = title;