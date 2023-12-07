// Una función constructora para almacenar un nodo BST
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// Función para realizar un recorrido en orden en el BST
function inorder(root) {
  if (root === null) {
      return;
  }

  inorder(root.left);
  console.log(root.data);
  inorder(root.right);
}

// Función auxiliar para encontrar el nodo de valor mínimo en el subárbol enraizado en `curr`
function getMinimumKey(curr) {
  while (curr.left !== null) {
      curr = curr.left;
  }
  return curr;
}

// Función recursiva para insertar una clave en un BST
function insert(root, key) {
  if (root === null) {
      return new Node(key);
  }

  if (key < root.data) {
      root.left = insert(root.left, key);
  } else {
      root.right = insert(root.right, key);
  }

  return root;
}

// Función para eliminar un nodo de un BST
function deleteNode(root, key) {
  let parent = null;
  let curr = root;

  while (curr !== null && curr.data !== key) {
      parent = curr;

      if (key < curr.data) {
          curr = curr.left;
      } else {
          curr = curr.right;
      }
  }

  if (curr === null) {
      return root;
  }

  if (curr.left === null && curr.right === null) {
      if (curr !== root) {
          if (parent.left === curr) {
              parent.left = null;
          } else {
              parent.right = null;
          }
      } else {
          root = null;
      }
  } else if (curr.left !== null && curr.right !== null) {
      let successor = getMinimumKey(curr.right);
      let val = successor.data;

      deleteNode(root, successor.data);

      curr.data = val;
  } else {
      let child = (curr.left !== null) ? curr.left : curr.right;

      if (curr !== root) {
          if (curr === parent.left) {
              parent.left = child;
          } else {
              parent.right = child;
          }
      } else {
          root = child;
      }
  }

  return root;
}

// Función principal para probar el código
function main() {
  const keys = [15, 10, 20, 8, 12, 16];
  let root = null;

  for (const key of keys) {
      root = insert(root, key);
  }

  root = deleteNode(root, 16);
  inorder(root);
}

module.exports = { Node, insert, deleteNode, inorder, getMinimumKey };

