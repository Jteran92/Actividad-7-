// Importar la clase Stack
const Stack = require('../ArbolAgg'); // Reemplaza con la ruta correcta

// Pruebas para la clase Stack
describe('Stack', () => {
  // Prueba para push y peek
  test('push y peek deben agregar y devolver el elemento en la parte superior de la pila', () => {
    const pila = new Stack();
    pila.push('Manzana');
    pila.push('Banana');
    expect(pila.peek()).toBe('Banana');
  });

  // Prueba para pop
  test('pop debe eliminar y devolver el elemento en la parte superior de la pila', () => {
    const pila = new Stack();
    pila.push('Manzana');
    pila.push('Banana');
    const elementoEliminado = pila.pop();
    expect(elementoEliminado).toBe('Banana');
    expect(pila.size()).toBe(1);
  });

  // Prueba para isEmpty
  test('isEmpty debe devolver true si la pila está vacía', () => {
    const pila = new Stack();
    expect(pila.isEmpty()).toBe(true);
  });

  // Prueba para size
  test('size debe devolver el tamaño correcto de la pila', () => {
    const pila = new Stack();
    pila.push('Manzana');
    pila.push('Banana');
    expect(pila.size()).toBe(2);
  });

  // Prueba para pila vacía
  test('pop y peek deben devolver un mensaje si la pila está vacía', () => {
    const pila = new Stack();
    expect(pila.pop()).toBe('La pila está vacía');
    expect(pila.peek()).toBe('La pila está vacía');
  });
});
