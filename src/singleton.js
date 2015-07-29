/**
 * Singleton é usado para garantir que apenas umas instancia do objeto seja criado
 *
 */
function Universe() {
  var instance;

  Universe = function() {
    return instance;
  };

  instance = this;
}

/* Teste */
var foo = new Universe();
var bar = new Universe();

console.log(foo === bar);