document.getElementById('start-button').addEventListener('click', () => {
    const resultCol = document.getElementById('resultCol');
    const resultElement = document.getElementById('result');
  
    if (!window.EyeDropper) {
      resultElement.textContent = 'Your browser does not support the EyeDropper API';
      return;
    }
  
    const eyeDropper = new EyeDropper();
  
    eyeDropper.open().then(result => {
      resultElement.value = result.sRGBHex;
      resultElement.style.color = "black"
      resultCol.textContent = result.sRGBHex;
      resultCol.style.backgroundColor = result.sRGBHex;
      resultCol.style.color = result.sRGBHex;
      resultCol.classList.add('bdr');
    }).catch(e => {
      resultElement.textContent = e;
    });
  
  });