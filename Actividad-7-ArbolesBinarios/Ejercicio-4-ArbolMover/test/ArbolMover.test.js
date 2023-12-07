const ArbolBinario = require('../ArbolMover'); // Ajusta la ruta según la estructura de tu proyecto

describe('ArbolBinario', () => {
  let arbol;

  beforeEach(() => {
    arbol = new ArbolBinario();
  });

  test('debería insertar y buscar correctamente', () => {
    arbol.insertar(10);
    arbol.insertar(5);
    arbol.insertar(15);

    expect(arbol.buscar(10)).not.toBeNull();
    expect(arbol.buscar(5)).not.toBeNull();
    expect(arbol.buscar(15)).not.toBeNull();
    expect(arbol.buscar(20)).toBeNull();
  });

  test('debería eliminar correctamente', () => {
    arbol.insertar(10);
    arbol.insertar(5);
    arbol.insertar(15);

    arbol.eliminar(5);

    expect(arbol.buscar(5)).toBeNull();
    expect(arbol.buscar(10)).not.toBeNull();
    expect(arbol.buscar(15)).not.toBeNull();
  });

  test('debería mover correctamente', () => {
    arbol.insertar(10);
    arbol.insertar(5);
    arbol.insertar(15);

    arbol.mover(5, 20);

    expect(arbol.buscar(5)).toBeNull();
    expect(arbol.buscar(20)).not.toBeNull();
  });
});
