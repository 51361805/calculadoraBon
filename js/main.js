const display = document.getElementById('display-screem');
const buttons = document.querySelectorAll('button');
const btnAC = document.getElementById('btn-ac');
const btnDivide = document.getElementById('btn-divide');
const btnEqual = document.getElementById('btn-equal');
const btnACUno = document.getElementById('btn-acUno');



buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button === btnACUno) {

            const currentDisplay = display.innerText;
            display.innerText = currentDisplay.slice(0, -1);

        } else if (button === btnAC) {

            display.innerText = '';
        } else if (display.innerText !== '' && button === btnEqual) {
            display.innerText = eval(display.innerText);

        } else if (display.innerText === '' && button === btnEqual) {

            display.innerText = 'vacio';
            setTimeout(() => {

                display.innerText = '';
            }, 2000);

        } else {

            display.innerText += button.innerText;
        }
    });
});






const dark = document.getElementById('dark')
const calucladora = document.querySelector('.contenedor')
const pantalla = document.querySelector('.text')
const oscClar = document.querySelector('.oscClar')
const titulo = document.querySelector('.calculator-title')


dark.addEventListener('click', function () {
    display.innerText = '';
    calucladora.classList.toggle('contenedorBlak');
    pantalla.classList.toggle('textBlak');
    titulo.classList.toggle('titClaro')

    if (oscClar.innerText === 'oscuro') {
        oscClar.innerText = 'claro';
    } else {
        oscClar.innerText = 'oscuro';
    }
});




