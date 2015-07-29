/**
 * Promise é usado para evitar multiplos callbacks alinhados
 */

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
