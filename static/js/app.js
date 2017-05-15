if(navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js')
    .then(registration => {
      console.log('UHU!!!');

      pedePermissao();

      const subscribeOptions = {
        userVisibleOnly: true,
      };

      return registration.pushManager.subscribe(subscribeOptions)
                .then(reg => {
                  console.log(reg);
                })
    })
    .catch(e => {
      console.log('ERROR!!!', e)
    })
}

function pedePermissao() {
  return Notification.requestPermission((result) => {
    console.log(result);
  })
}