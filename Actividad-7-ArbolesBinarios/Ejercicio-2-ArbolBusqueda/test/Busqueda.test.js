const ArbolBinario = require('../Busqueda');

describe('ArbolBinario', () => {
  let arbol;

  beforeEach(() => {
    arbol = new ArbolBinario();
  });

  test('debería insertar y buscar nodos correctamente', () => {
    arbol.insertar(10);
    arbol.insertar(5);
    arbol.insertar(15);

    expect(arbol.buscar(10).valor).toBe(10);
    expect(arbol.buscar(5).valor).toBe(5);
    expect(arbol.buscar(15).valor).toBe(15);
    expect(arbol.buscar(7)).toBeNull();
  });

  test('debería eliminar nodos correctamente', () => {
    arbol.insertar(10);
    arbol.insertar(5);
    arbol.insertar(15);

    arbol.eliminar(5);
    expect(arbol.buscar(5)).toBeNull();
    expect(arbol.buscar(10).izquierda).toBeNull();

    arbol.eliminar(15);
    expect(arbol.buscar(15)).toBeNull();
    expect(arbol.buscar(10).derecha).toBeNull();

    arbol.eliminar(10);
    expect(arbol.buscar(10)).toBeNull();
    expect(arbol.raiz).toBeNull();
  });
});
