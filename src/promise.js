/**
 * Promise é usado para evitar multiplos callbacks alinhados.
 * Ao invéz da função receber o callback que deve ser chamado no final da operação
 * ela retornar uma "promessa" de que a ação será executada (ou não)
 *
 * Veja: 
 *  * https://github.com/kriskowal/q
 *  * https://docs.angularjs.org/api/ng/service/$q
 *  * https://api.jquery.com/category/deferred-object/
 */

/* Exemplo */
function abrirFoto(caminho) {
  var deferred = $q.defer();

  funcaoAssincronaParaAbrirArquivos(caminho, function (err, arquivo){
    if(err) {
      deferred.reject(err);
    } else {
      deferred.resolve(arquivo);
    }
  });

  return deferred.promise;
}

/* Errado */
abrirFoto('./fotos/foto1.jpg', function (err, foto) {
  if(err){
    console.error(err);

  } else {
    redimensionar(foto, function (err, foto) {
      if(err) {
        console.error(err);

      } else {
        adicionarLogo(foto, function (err, foto) {
          if(err){
            console.error(err);

          } else {
            salvarImagem(foto, function (err, foto){
              if(err) {
                console.error(err);

              } else {
                salvarLog(foto);
              }
            });              
          }
        });
      }
    });
  }
})

/* Correto */
abrirFoto('./fotos/foto1.jpg')
  .then(redimensionar)
  .then(adicionarLogo)
  .then(salvarImagem)
  .then(salvarLog)
  .catch(function (err) {
    console.error(err);
  });
