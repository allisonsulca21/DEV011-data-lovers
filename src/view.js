
export const renderItems = (data) => {
  const ul = document.createElement('ul')
  ul.classList.add('boxCard');
  data.forEach(element => {
    const cardLi = `
    <dl itemscope itemtype='pokemon'>
      <div class='typeCPHP'>
        <dd itemprop='type'>${element.type[0]}</dd>
        <dd itemprop='max-cp'>CP
        ${element.stats['max-cp']}
        </dd>
        <dd itemprop='max-hp'>HP
        ${element.stats['max-hp']}
        </dd>
      </div>
      <dd itemprop="image">
        <img src='${element.img}' />
      </dd>
      <dd itemprop="name">${element.name}</dd>
    </dl>
`
    const li = document.createElement('li');
    li.classList.add('individualCard');
    li.setAttribute('itemprop', 'itemtype', 'pokemon');
    li.innerHTML = cardLi;
    ul.append(li);
  });
  return ul;
};