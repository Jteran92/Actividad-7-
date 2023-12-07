const { Node, insert, deleteNode, inorder } = require('../Eliminar');

describe('Binary Search Tree Operations', () => {
  let root;

  beforeEach(() => {
    root = null;
  });

  test('insert function should insert nodes correctly', () => {
    const keys = [15, 10, 20, 8, 12, 16];

    for (const key of keys) {
      root = insert(root, key);
    }

    // Realiza una comprobación visual o usa otras funciones de prueba
    // para asegurarte de que los nodos se hayan insertado correctamente.
    // Aquí, simplemente mostramos el recorrido en orden.
    inorder(root);
  });

  test('deleteNode function should delete nodes correctly', () => {
    const keys = [15, 10, 20, 8, 12, 16];

    for (const key of keys) {
      root = insert(root, key);
    }

    // Elimina el nodo con valor 16
    root = deleteNode(root, 16);

    // Realiza una comprobación visual o usa otras funciones de prueba
    // para asegurarte de que el nodo se haya eliminado correctamente.
    // Aquí, simplemente mostramos el recorrido en orden después de la eliminación.
    inorder(root);
  });
});
