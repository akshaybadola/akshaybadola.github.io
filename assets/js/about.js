function change_about(){
  const abouts = ["I'm a cool guy (I think)", 'Wait who am I? Where am I? What is this?!', "Who am I? That's a good question. I've been seeking the answer to that all my life. Do you know who you are?"];
  const index = Math.floor(Math.random() * abouts.length);
  const about = abouts[index];
  document.querySelector("body > div.wrapper > div.about.shadow > header > p").textContent = about;
}