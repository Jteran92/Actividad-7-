// Implementación de una pila utilizando un arreglo
class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.elements.pop();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.elements[this.elements.length - 1];
  }
}

// Uso de la pila
let pila = new Stack();

// Agregar elementos a la pila
pila.push("Pera");
pila.push("Mango");
pila.push("Naranja");

// Obtener el elemento en la parte superior de la pila (sin eliminarlo)
console.log(pila.peek()); // Imprime "Naranja"

// Eliminar y obtener el elemento en la parte superior de la pila
let elementoEliminado = pila.pop();
console.log(elementoEliminado); // Imprime "Naranja"

// Verificar si la pila está vacía
console.log(pila.isEmpty()); // Imprime false

// Obtener el tamaño de la pila
console.log(pila.size()); // Imprime 2

module.exports = Stack;
