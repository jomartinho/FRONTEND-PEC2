// Función findOne que devuelve una promesa en lugar de usar callbacks.
const findOne = (list, { key, value }) => {
    // Retornamos una nueva promesa que se resuelve o rechaza dependiendo del resultado de la búsqueda.
    return new Promise((resolve, reject) => {
      // Simula una búsqueda asíncrona utilizando setTimeout con un retardo de 2 segundos.
      setTimeout(() => {
        // Busca en la lista (array) un elemento cuyo valor del campo 'key' coincida con 'value'.
        const element = list.find(element => element[key] === value);
  
        // Si el elemento es encontrado, se resuelve la promesa con el elemento encontrado.
        if (element) {
          resolve(element);  // Resuelve la promesa (éxito).
        } else {
          // Si no se encuentra el elemento, se rechaza la promesa con un mensaje de error.
          reject({ msg: 'ERROR: Element Not Found' });  // Rechaza la promesa (error).
        }
      }, 2000); // Retardo de 2 segundos para simular un proceso asíncrono.
    });
  };
  
  // Array de objetos que representa una lista de usuarios con sus roles.
  const users = [
    {
      name: 'Carlos',
      rol: 'Teacher' 
    },
    {
      name: 'Ana',
      rol: 'Boss' 
    }
  ];
  
  // Función para manejar el éxito en la búsqueda, usando promesas.
const onSuccess = ({ name }) => console.log(`user: ${name}`);

// Función para manejar el error en la búsqueda, usando promesas.
const onError = ({ msg }) => console.log(msg);

// Primer caso: buscamos al usuario 'Carlos'.
console.log('findOne success');

// Llamamos a la función findOne, que ahora devuelve una promesa.
// Usamos 'then' para manejar el caso de éxito y 'catch' para manejar el error.
findOne(users, { key: 'name', value: 'Carlos' })
  .then(onSuccess)  // Si la promesa se resuelve, ejecuta onSuccess.
  .catch(onError);  // Si la promesa es rechazada, ejecuta onError.

// Segundo caso: buscamos al usuario 'Fermin', que no existe.
console.log('findOne error');

// Llamamos a la función findOne para buscar un nombre que no existe.
// Utilizamos el patrón de promesas con 'then' y 'catch'.
findOne(users, { key: 'name', value: 'Fermin' })
  .then(onSuccess)  // Si la promesa se resuelve, ejecuta onSuccess.
  .catch(onError);  // Si la promesa es rechazada, ejecuta onError.
  
  /*
  El resultado esperado en la consola será:
  findOne success
    (Inmediatamente)

  findOne error
    (Inmediatamente)

    Después de 2 segundos de retardo, se imprimirá:
  user: Carlos      
    (El primer usuario es encontrado con éxito)
  ERROR: Element Not Found   
    (No se encuentra el segundo usuario)
  */