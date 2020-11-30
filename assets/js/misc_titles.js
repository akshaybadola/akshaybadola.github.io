const titles = ["Badola's Blog and Stuff", 'Something Smells Funny', 'There is a Light that Never Goes Out', 'Into the Abyss', 'Hark! A Blog!', 'All the truth in the world adds up to one big lie', 'Spam of Consciousness', 'Deity or Devil?', 'Person Woman Man Camera TV', 'Klaatu Barada Nikto'];
const index = Math.floor(Math.random() * titles.length);
const title = titles[index];
document.title = title;
document.getElementById("header").children[0].textContent = title;