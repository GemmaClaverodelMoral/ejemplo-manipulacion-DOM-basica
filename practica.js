const h1 = document.querySelector('h1')
console.log(h1.innerHTML)
console.log({h1})



pid = document.getElementById('pid')
  const img = document.createElement('img')
img.setAttribute('src', "./Captura de pantalla 2024-06-24 093644.png")
console.log(img)

setTimeout(() => 
 {
	h1.innerHTML = 'Apareció la IMAGEN !!';
	pid.appendChild(img);
  }, 5000); // 3 segundos


const botonSumar = document.getElementById('boton_sumar');
//const numero1 = document.querySelector('#numero1')

botonSumar.addEventListener('click', btnSumar)

function btnSumar(){
	
    botonSumar.innerHTML = '¡Clickeado!';
    
    // Ejemplo: Cambiar el texto del h1 al ser clicado
    const resultado = document.getElementById('resultado');
	numero1 = Number(document.getElementById('numero1').value)
	numero2 = Number(document.getElementById('numero2').value)
    resultado.innerHTML = numero1 + numero2;
};

