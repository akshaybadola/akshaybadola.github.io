function backrefs (){
  const root_url = window.location.origin + window.location.pathname;
  const links = document.getElementsByTagName("a");
  const refs = [];
  for (let x of links){
    if (x.href.replace(root_url, "").startsWith("#ref-")){
      const ref = x.href.replace(root_url, "").replace("#", "");
      let backref = ref.replace("ref-", "backref-");
      if (! refs.includes(ref)){
        refs.push(ref);
      } else{
        const num = refs.filter(x => x === ref).length;
        backref = backref + "-" + String(num);
      }
      x.setAttribute("id", backref);
      let child = document.createElement("a");
      child.setAttribute("href", "#" + backref);
      child.textContent = "\xa0^";
      if ( ! document.getElementById(ref)){
        console.log("Could create backref for", ref);
      } else{
        const elem = document.getElementById(ref);
        if (elem.children[0].className.includes("left-margin")){
          elem.children[1].appendChild(child);
        } else{
            elem.children[0].appendChild(child);
        }
      }
    }
  }
}
