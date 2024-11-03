## ¿Por qué es el valor de this es undefined?

#### Cuando se pasa una función como argumento sin usar bind o sin usar una arrow function, pierde su contexto de this. Entonces, cuando this.service.addTodo es llamada desde la vista, el método addTodo no sabe a qué objeto se refiere this, y por lo tanto, this es undefined en ese contexto.
