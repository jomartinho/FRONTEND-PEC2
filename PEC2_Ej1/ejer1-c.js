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
  
  // Función asíncrona para manejar la búsqueda de usuarios.
  async function findUser(key, value) {
    try {
      // Esperamos a que findOne devuelva el resultado usando await.
      const result = await findOne(users, { key, value });
  
      // Si la promesa se resuelve, imprimimos el nombre del usuario encontrado.
      console.log(`user: ${result.name}`);
    } catch (error) {
      // Si la promesa es rechazada, capturamos el error e imprimimos el mensaje.
      console.log(error.msg);
    }
  }
  
  // Llamada a findUser para buscar a 'Carlos'.
  console.log('findOne success');
  
  // Usamos la función asíncrona findUser para buscar al usuario 'Carlos'.
  findUser('name', 'Carlos');
  
  // Llamada a findUser para buscar a 'Fermin', que no existe.
  console.log('findOne error');
  
  // Usamos la función asíncrona findUser para buscar al usuario 'Fermin'.
  findUser('name', 'Fermin');
  
  
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