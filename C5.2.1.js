const parser = new DOMParser();

const xml = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xml, 'text/xml');
const listNode = xmlDOM.querySelector('list');
   
list = [];

for (var i = 0; i < 2; i++) {
  const nameNode = listNode.querySelectorAll('name')[i];
  const firstNode = listNode.querySelectorAll('first')[i];
  const secondNode = listNode.querySelectorAll('second')[i];
  const ageNode = listNode.querySelectorAll('age')[i];
  const profNode = listNode.querySelectorAll('prof')[i];
  const langAttr = nameNode.getAttribute('lang');
  
  const worker = {name: firstNode.textContent + ' ' + secondNode.textContent,
                 age: ageNode.textContent,
                 prof: profNode.textContent,
                 lang: langAttr
                 };
  list.push(worker)
}
const result = {
  list:
    list
}

console.log(result)