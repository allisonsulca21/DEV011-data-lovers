export const renderItems = (data) => {
  const ul = document.createElement("ul")
data.forEach(element => {
  let cardLi = `
  <dl class='typeCPHP'>  
    <dt class='type'>${element.type[0]} </dt>
  </dl>
    <div class='img'>
    <img src="${element.img}" />
    </div>
    <div class='name'>${element.name} </div>
`
let li = document.createElement('li');
    li.innerHTML = cardLi;
    ul.append(li);
});
  return ul;
};

