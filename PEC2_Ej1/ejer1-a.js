
// Función findOne que busca un elemento en un array basado en una clave y valor, y ejecuta callbacks para el éxito o el error.
const findOne = (list, { key, value }, { onSuccess, onError }) => {
    // Simula una búsqueda asíncrona utilizando setTimeout con un retardo de 2 segundos.
    setTimeout(() => {
      // Busca en la lista (array) un elemento cuyo valor del campo "key" coincida con "value".
      const element = list.find(element => element[key] === value);
  
      // Si se encuentra el elemento, se ejecuta el callback de éxito, si no, se ejecuta el callback de error.
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000); // Retardo de 2 segundos para simular un proceso asíncrono.
  };
  
  // Callback que se ejecuta cuando la búsqueda tiene éxito.
  // Toma el nombre del usuario encontrado y lo muestra en la consola.
  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  
  // Callback que se ejecuta cuando no se encuentra el elemento en la búsqueda.
  // Muestra el mensaje de error.
  const onError = ({ msg }) => console.log(msg);
  
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
  
  // Se imprime en consola el texto abajo para indicar que se ejecutará la primera búsqueda exitosa.
  console.log('findOne success');
  
  // Se llama a la función findOne para buscar un usuario cuyo nombre sea "Carlos". Si lo encuentra, ejecutará el callback onSuccess, si no, ejecutará onError.
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
  
  // Se imprime en consola el texto 'findOne error' para indicar que se ejecutará la segunda búsqueda fallida.
  console.log('findOne error');
  
  // Se llama a la función findOne para buscar un usuario cuyo nombre sea 'Fermin'. No lo encontrará, por lo que ejecutará el callback onError.
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
  
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