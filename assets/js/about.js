function change_about(){
  const abouts = ['I do stuff, sometimes.', 'Wait who am I? Where am I? What is this?!', "Who am I? That's a good question. I've been seeking the answer to that all my life. Do you know who you are?", "I read therefore I think, I think therefore I am, I am therefore I code, I code therefore I'm bored"];
  const index = Math.floor(Math.random() * abouts.length);
  const about = abouts[index];
  const element = (document.querySelector("body > div.wrapper > div.about > header > div.author-description")
    || document.querySelector("body > div.about.shadow > header > div.author-description")).textContent = about;
}