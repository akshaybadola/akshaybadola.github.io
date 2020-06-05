const titles = ["Badola's Blog and Stuff", 'Something Smells Funny', 'There is a Light that Never Goes Out', 'Into the Abyss'];
const index = Math.floor(Math.random() * titles.length);
const title = titles[index];
document.title = title;
document.getElementById("header").children[0].textContent = title;