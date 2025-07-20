const container = document.querySelector('.container');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink','grey','light blue','dark yellow','purple'];

for (let i=0;i<256;i++)
{
    const square=document.createElement('div');
    square.classList.add('square');

    square.style.backgroundColor = colors[i % colors.length];
    container.appendChild(square);

}