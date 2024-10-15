// Función findOne que devuelve una promesa.
const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    // Simula una búsqueda asíncrona con un retardo de 2 segundos.
    setTimeout(() => {
      // Busca el elemento en la lista basado en el valor y clave.
      const element = list.find(element => element[key] === value);
      if (element) {
        resolve(element);  // Resuelve la promesa si se encuentra el elemento.
      } else {
        reject({ msg: 'ERROR: Element Not Found' });  // Rechaza la promesa si no se encuentra.
      }
    }, 2000); // Simulación de retardo de 2 segundos.
  });
};

// Array de usuarios.
const users = [
  { name: 'Carlos', rol: 'Teacher' },
  { name: 'Ana', rol: 'Boss' }
];

// Función asíncrona que ejecuta todas las búsquedas en paralelo.
async function findUsersInParallel() {
    // Ejecutamos todas las promesas en paralelo con Promise.allSettled.
    // Las llamadas a findOne se inician al mismo tiempo.
    const results = await Promise.allSettled([
      findOne(users, { key: 'name', value: 'Carlos' }),  // Primera búsqueda.
      findOne(users, { key: 'name', value: 'Ana' }),     // Segunda búsqueda.
      findOne(users, { key: 'name', value: 'Fermin' })   // Tercera búsqueda (fallará).
    ]);

    // Iteramos sobre los resultados de Promise.allSettled.
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      // Si la promesa fue resuelta, imprimimos el nombre del usuario encontrado.
      console.log(`user: ${result.value.name}`);
    } else {
      // Si la promesa fue rechazada, imprimimos el mensaje de error.
      console.log(result.reason.msg);
    }
  });
}

// Llamamos a la función asíncrona que realiza las búsquedas en paralelo.
findUsersInParallel();
  
  
  /*
  El resultado esperado en la consola será:
    Después de 2 segundos de retardo, se imprimirá:
  user: Carlos      
  user: Ana
  ERROR: Element Not Found   
    (No se encuentra el tercer usuario)
  */