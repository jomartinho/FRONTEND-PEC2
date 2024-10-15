# PEC 2
## jmartinho@uoc.edu

## João Rebordão Correia da Silva Martinho

## PEC1_Ej1 - Preguntas Teóricas sobre HTML5, CSS3, JS, y TypeScript:

- Se abordaron preguntas sobre las ventajas de las etiquetas semánticas en HTML5, destacando cómo mejoran la accesibilidad, el SEO y la mantenibilidad del código.

- Se explicaron varias APIs de HTML5, como la API de geolocalización, la API de canvas, y el almacenamiento local.

- Se discutió el uso de media queries en CSS3 para aplicar estilos adaptativos, y las principales características de TypeScript, incluyendo la tipificación estática y la interoperabilidad con JavaScript.

- También se cubrió el uso de preprocesadores CSS como SASS y LESS, sus ventajas, y conceptos como sourcemaps y transpiladores.

## PEC1_Ej2_1 - Formulario con Validación:

- Se desarrolló un formulario de registro que incluye campos como nombre de usuario, email, contraseña y confirmación de contraseña.

- Se implementó la validación de formularios en JavaScript para asegurar que todos los campos requeridos fueran completados, con verificaciones adicionales de longitud de contraseñas, coincidencia de contraseñas, y formato de email.

- Se añadieron mensajes de error personalizados que se muestran bajo cada campo cuando el usuario introduce información incorrecta. El formulario también incluye la prevención de envío en caso de errores.

## PEC1_Ej2_2 -  Calculadora de Conversión de Moneda:

- Se implementó una calculadora de tipos de cambio que utiliza una API externa para obtener las tasas de cambio de diferentes monedas en tiempo real. El usuario puede introducir una cantidad en la moneda base, y la aplicación devuelve el valor convertido en la moneda seleccionada.

- Además, se añadieron:

    - Mostrar un mensaje de "Cargando..." mientras se realiza la consulta a la API.
 
    - Mostrar mensajes de error cuando no se puede completar la consulta.

    - Asegurarse de que los valores introducidos no sean negativos.

## PEC1_Ej2_3 - Sistema de Reserva de Asientos de Cine:

- Se desarrolló una aplicación para la reserva de asientos de cine donde los usuarios pueden seleccionar asientos disponibles. Se usó el almacenamiento local del navegador para guardar las selecciones de asientos y las opciones de película seleccionadas.

- Se añadieron más filas y asientos por fila para hacer que el sistema sea más realista. Además, se creó una clase "no" para añadir un pasillo adicional en el medio y una entrada al cine en el lado izquierdo, mejorando el diseño visual.

- Se integró la calculadora de conversión de moneda con la aplicación de reserva de asientos. El precio de las entradas de cine se actualiza automáticamente según la moneda seleccionada por el usuario.

- Se configuró el euro (€) como la moneda predeterminada. Al cambiar de moneda, tanto el precio de las películas como el total de la reserva se recalculan utilizando las tasas de cambio obtenidas de la API.

- El símbolo de la moneda se actualiza dinámicamente tanto en los precios individuales de las películas como en el total.

## Dificultades

- Uno de los desafíos fue en asegurar que los precios y el total se actualizaran correctamente cuando se cambiaba de moneda o de película. Esto se resolvió con el manejo correcto de eventos y la actualización dinámica de los precios.

- Otra dificultad fué con el tema de las validaciones del formulario, pero al final se resolvió todo.