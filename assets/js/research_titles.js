const titles = ['Are we there yet?', 'Show me the Data!', 'In God we Trust, All Others Bring Data', 'I Love you Logic, You Just Make Sense'];
const index = Math.floor(Math.random() * titles.length);
const title = titles[index];
document.title = title;
document.getElementById("header").children[0].textContent = title;