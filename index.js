const container = document.querySelector('.container');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'aliceblue','peachpuff','lightblue','darkyellow','purple']; 


for (let i=0;i<256;i++)
{
    const square=document.createElement('div');
    square.classList.add('square');

    let colorIndex =i;

    square.addEventListener('mouseenter',()=>{
        square.style.backgroundColor = colors[colorIndex % colors.length];
    });
    container.appendChild(square);

}

const button =document.querySelector('button')
button.addEventListener('click',()=>{
    const squaresPerSide = prompt("Enter the number of squares per side (max 100):");
    let num = Number(squaresPerSide);

    if (num >100){
        num=100;
    }
    else if (num < 1|| isNaN(num)){
        alert("please enter a valid number")
        return;
    }
    
        container.innerHTML='';
        const size = 500/num;

        for (let i = 0; i < num * num; i++) {

  const square = document.createElement('div');
  square.classList.add('square');

    square.style.width = `${size}px`;
  square.style.height = `${size}px`;

  let colorIndex =i;

    square.addEventListener('mouseenter',()=>{
        square.style.backgroundColor = colors[colorIndex % colors.length];
    });

  container.appendChild(square);
}

});