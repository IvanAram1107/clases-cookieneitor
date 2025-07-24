/*
Las Promises nos sirven para ejecutar tareas asincronas, de tal manera que el 
hilo de procesamiento no sea bloqueado por dicha tarea.

Para crear una promisa usamos la clase Promise y el constructor recibe una funcion
que llamaremos 'funcion ejecutora'. Esta funcion ejecutora recibe 2 parametros 
(convencionalmente nombrados 'resolve' y 'reject') los cuales son funciones que
determinaran el outcome de nuestra promesa. O sea si se manda a llamar la funcion 
recibida como primer parametro estaríamos indicando que la promesa se completo de
manera exitosa y si le pasamos algun argumento a dicha funcion se puede recibir 
en el .then de la promesa. Y de manera similar si nosotros ejecutamos la funcion
recibida en el segundo parametro estaríamos rechazando la promesa (normalmente esto
se hace cuando hay algun error o algo por el estilo), y tambien le podemos pasar
el motivo por el cual estamos rechazando la promesa como argumento a dicha funcion;
este motivo lo podremos usar en el .catch de la promesa.
*/

// function funcionEjecutora(resolve, reject) {
//   resolve("Fulfilled promise 1");
//   // reject("Rejected promise 1");
// }
// const promise1 = new Promise(funcionEjecutora);
// function logValue(value) {
//   console.log("Value:", value);
// }
// function logError(err) {
//   console.log("Error:", err);
// }
// promise1.then(logValue).catch(logError);

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fulfilled promise 1");
    // reject("Rejected promise 1");
  }, 100);
});

promise1.then(value => {
  console.log("Value:", value);
}).catch(err => {
  console.log("Error:", err);
});
/*
promise1.then(
  function(value) {
    console.log("Value:", value);
  }
).catch(
  function(err) {
    console.log("Error:", err);
  }
);
*/

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("RESOLVED!");
//     reject("REJECTED!");
//   }, 1000);
// });
// promise2.then(logValue, logError);


/*
async / await

TODO: Add description
*/


const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola Cesar!"), 1000);
});

try {
  const value = await promise;
  console.log("fun1 - value:", value);
} catch (err) {
  console.log("fun1 - error:", err);
}
