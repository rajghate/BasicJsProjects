const grid = document.getElementById('grid');

let cardArray = [
  {
    name:"Color Flip",
    src:"ColorFlip/colorflip.html",
    code:"x",
    desc:"Changing the background color using random hex color codes"
  },
  {
    name:"Counter",
    src:"Counter/counter.html",
    code:"x",
    desc:"Basic Counter with increment decrement and reset functionality "
  },
  {
    name:"x",
    src:"x",
    code:"x",
    desc:"x"
  }
]

for(let i = 0; i < cardArray.length-1; i++){
  var card = document.createElement('div');
  var link = document.createElement('a');
  var code = document.createElement('a');
  card.setAttribute('class',"card");
  card.setAttribute('data-id',"card"+i);
  card.innerHTML = "<h2>"+cardArray[i].name+"</h2>"+"<p>"+cardArray[i].desc+"</p>";
  link.setAttribute('class',"cardlink");
  link.setAttribute('data-id',"card-link"+i);
  link.setAttribute('href',cardArray[i].src);
  link.setAttribute('target','_blank');
  code.setAttribute('class',"cardlink");
  code.setAttribute('data-id',"codelink"+i);
  code.setAttribute('href',cardArray[i].code);
  code.setAttribute('target','_blank');
  code.style.float = "right";
  link.style.float = "left";
  link.innerHTML = "view";
  code.innerHTML = "code";

  card.appendChild(link);
  card.appendChild(code);
  grid.appendChild(card);
}
