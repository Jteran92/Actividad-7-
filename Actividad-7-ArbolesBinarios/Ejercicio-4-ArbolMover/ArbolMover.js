class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }

  class ArbolBinario {
    constructor() {
      this.raiz = null;
    }

    insertar(valor) {
      const nuevoNodo = new Nodo(valor);
  
      if (this.raiz === null) {
        this.raiz = nuevoNodo;
      } else {
        this.insertarNodo(this.raiz, nuevoNodo);
      }
    }

    insertarNodo(nodo, nuevoNodo) {
      if (nuevoNodo.valor < nodo.valor) {
        if (nodo.izquierda === null) {
          nodo.izquierda = nuevoNodo;
        } else {
          this.insertarNodo(nodo.izquierda, nuevoNodo);
        }
      } else {
        if (nodo.derecha === null) {
          nodo.derecha = nuevoNodo;
        } else {
          this.insertarNodo(nodo.derecha, nuevoNodo);
        }
      }
    }
    buscar(valor) {
        return this.buscarNodo(this.raiz, valor);
    }


    buscarNodo(nodo, valor) {
        if (nodo === null || nodo.valor === valor) {
        return nodo;
        }

        if (valor < nodo.valor) {
        return this.buscarNodo(nodo.izquierda, valor);
        } else {
        return this.buscarNodo(nodo.derecha, valor);
        }
    }eliminar(valor) {
    this.raiz = this.eliminarNodo(this.raiz, valor);
  }


  eliminarNodo(raizActual, valor) {
    if (raizActual === null) {
      return raizActual;
    }

    if (valor < raizActual.valor) {
      raizActual.izquierda = this.eliminarNodo(raizActual.izquierda, valor);
    }

    else if (valor > raizActual.valor) {
      raizActual.derecha = this.eliminarNodo(raizActual.derecha, valor);
    }

    else {
      if (raizActual.izquierda === null) {
        console.log(`Elemento ${valor} eliminado`);
        return raizActual.derecha;
      } else if (raizActual.derecha === null) {
        console.log(`Elemento ${valor} eliminado`);
        return raizActual.izquierda;
      }

      raizActual.valor = this.encontrarMinimoValor(raizActual.derecha);

      raizActual.derecha = this.eliminarNodo(raizActual.derecha, raizActual.valor);
    }

    return raizActual;
  }

  encontrarMinimoValor(raiz) {
    while (raiz.izquierda !== null) {
      raiz = raiz.izquierda;
    }
    return raiz.valor;
  }
  eliminar(valor) {
    this.raiz = this.eliminarNodo(this.raiz, valor);
  }


  eliminarNodo(raizActual, valor) {
    if (raizActual === null) {
      return raizActual;
    }


    if (valor < raizActual.valor) {
      raizActual.izquierda = this.eliminarNodo(raizActual.izquierda, valor);
    }
        else if (valor > raizActual.valor) {
      raizActual.derecha = this.eliminarNodo(raizActual.derecha, valor);
    }

    else {

      if (raizActual.izquierda === null) {
        console.log(`Elemento ${valor} eliminado`);
        return raizActual.derecha;
      } else if (raizActual.derecha === null) {
        console.log(`Elemento ${valor} eliminado`);
        return raizActual.izquierda;
      }


      raizActual.valor = this.encontrarMinimoValor(raizActual.derecha);

      raizActual.derecha = this.eliminarNodo(raizActual.derecha, raizActual.valor);
    }

    return raizActual;
  }


  encontrarMinimoValor(raiz) {
    while (raiz.izquierda !== null) {
      raiz = raiz.izquierda;
    }
    return raiz.valor;
  }
  mover(valor, nuevaPosicion) {
    const nodo = this.buscar(valor);

    if (nodo) {

      this.raiz = this.eliminarNodo(this.raiz, valor);


      this.insertar(nuevaPosicion);

      console.log(`Elemento ${valor} movido a la posición ${nuevaPosicion}`);
    } else {
      console.log(`Elemento ${valor} no encontrado en el árbol`);
    }
  }
  
}

module.exports = ArbolBinario;