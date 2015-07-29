/**
 * IIFE consiste em criar um escopo que engloba todo o arquivo.
 * Pq? Para não encher o escopo global (window) com variáveis que deveria ser locais
 * Pq? Para evitar o risco de conflito/sobreescrita de variáveis/funções
 */

/* Errado */
function fnFoo (bar) {
  alert(bar);
}

var bar = "bar";

/* Correto */
(function () {

  function fnFoo (bar) {
    alert(bar);
  }

  var bar = "bar";

})();