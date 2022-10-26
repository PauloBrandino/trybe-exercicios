// 1 - Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;

let h1 = document.createElement('h1');
h1.innerText = 'Exercício - JavaScript DOM'
document.body.appendChild(h1)

// 2 - Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement('main');
main.classList.add('main-content');
document.body.appendChild(main);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let centerContent = document.createElement('section');
centerContent.classList.add('center-content');
main.appendChild(centerContent);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragraph = document.createElement('p');
paragraph.innerText = 'Adicionando um Parágrafo';
centerContent.appendChild(paragraph);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionLeft = document.createElement('section');
sectionLeft.classList.add('left-content');
main.appendChild(sectionLeft);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionRight = document.createElement('section');
sectionRight.classList.add('right-content');
main.appendChild(sectionRight);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let smallImg = document.createElement("img");
smallImg.src = "https://picsum.photos/200";
smallImg.classList.add('small-image');
sectionLeft.appendChild(smallImg);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let unOrdeneredList = document.createElement('ul');

let numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (index = 0; index < numbers.length; index += 1){
    let listItem = document.createElement('li');
    listItem.innerText = numbers[index];
    unOrdeneredList.appendChild(listItem);
}

sectionRight.appendChild(unOrdeneredList);

// 9 - Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (index = 0; index < 3; index += 1) {
    let h3 = document.createElement('h3');
    h3.innerText = 'OIOIOIOIOI';
    main.appendChild(h3);    
}

