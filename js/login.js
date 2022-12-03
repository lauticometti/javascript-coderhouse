let usuarioConEmail = 'prueba@gmail.com';
let contrasenia = 'password';
let valid = false;

let userName;
let userEmail;
let userPassword;

//punto a
const loginValidator = function() {
  userName = prompt('Ingresa tu nombre:');
  userEmail = prompt('Ingresa tu email:');
  userPassword = prompt('Ingresa tu contraseña:');

  if (userEmail !== usuarioConEmail && userPassword !== contrasenia) { 
    alert('Su usuario y contraseña son incorrectos.')
    loginValidator();
  } 
  else if (userEmail !== usuarioConEmail) {
    alert('Su email es incorrecto.')
    loginValidator();
  }
  else if (userPassword !== contrasenia) {
    alert('Su contraseña es incorrecta.')
    loginValidator();
  }

  else valid = true; 
} 


//entiendo que la siguiente funcion es innecesaria, podria saludar al usuario simplemente al final de la funcion anterior, pero la consigna pide que cada punto se haga con una funcion separada.

//punto b
const bienvenida = function(valid) {
  if (valid) alert(`Bienvenido ${userName}.`)
  else alert('Login fallido.')
}


//punto c
const hasAt = function(userEmail) {
  for (let i = 0; i < userEmail.length; i++) {
    if (userEmail[i] === '@') {
      console.log('Es un mail valido')
      break
    }
  }
}


//punto d
const moreEightChars = function(userPassword) {
  if (userPassword.length < 8) console.log('Su contraseña es insegura.') 
}


//punto e 
const moreOneNumber = function(userPassword) {
  for (let i = 0; i < userPassword.length; i++) {
    if (typeof userPassword[i] === 'number') return;
  }
  
  let wannaChange;
  while (wannaChange !== 'SI' && wannaChange !== 'NO') {
    wannaChange = prompt('Su contraseña debe tener caracteres alfanumericos. Desea cambiarla?', 'SI/NO').toUpperCase();
    if ((wannaChange !== 'SI' && wannaChange !== 'NO')) alert('Por favor, ingresa un "SI" o un "NO"')
  }

  if (wannaChange === "NO") alert('Tu contraseña es invalida. Login rechazado.')
  else {
    contrasenia = prompt('Ingrese una nueva contraseña:');
    return alert('Su contraseña fue cambiada.')
  }
}


loginValidator();
bienvenida(valid);
hasAt(userEmail);
moreEightChars(userPassword);
moreOneNumber(userPassword);




