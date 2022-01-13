// Initial Similar Colors

    const similar1 = document.getElementById('similar1');
    const similar2 = document.getElementById('similar2');
    const similar3 = document.getElementById('similar3');
  
    const step=255/800;
    const r=3*step;
    const g=17*step;
    const b=80*step;
    similar1.style.background = "rgb(" + r*15 + "," + g*15 + "," + b*15 + ")";
    similar1.style.color = "rgb(" + r*15 + "," + g*15 + "," + b*15 + ")";
    similar2.style.background = "rgb(" + r*5 + "," + g*5 + "," + b*5 + ")";
    similar2.style.color = "rgb(" + r*5 + "," + g*5 + "," + b*5 + ")";
    similar3.style.background = "rgb(" + r*1 + "," + g*1 + "," + b*1 + ")";
    similar3.style.color = "rgb(" + r*1 + "," + g*1 + "," + b*1 + ")";

// For copy text

const copy1 = document.getElementById('copy1');
const copy2 = document.getElementById('copy2');
const cop3 = document.getElementById('cop3');
document.getElementById('copy1').addEventListener('click',() =>{
  navigator.clipboard.writeText(document.getElementById('copy1').textContent);
  document.getElementById("myTooltip1").innerHTML = "Copied!";
  document.getElementById("myTooltip2").innerHTML = "Click to Copy";
  document.getElementById("myTooltip3").innerHTML = "Click to Copy";
  document.getElementById("mainColorText").innerHTML = "Click to Copy";
});
document.getElementById('copy2').addEventListener('click',() =>{
  navigator.clipboard.writeText(document.getElementById('copy2').textContent);
  document.getElementById("myTooltip2").innerHTML = "Copied!";
  document.getElementById("myTooltip3").innerHTML = "Click to Copy";
  document.getElementById("mainColorText").innerHTML = "Click to Copy";
  document.getElementById("myTooltip1").innerHTML = "Click to Copy";
});
document.getElementById('copy3').addEventListener('click',() =>{
  navigator.clipboard.writeText(document.getElementById('copy3').textContent);
  document.getElementById("myTooltip3").innerHTML = "Copied!";
  document.getElementById("myTooltip1").innerHTML = "Click to Copy";
  document.getElementById("myTooltip2").innerHTML = "Click to Copy";
  document.getElementById("mainColorText").innerHTML = "Click to Copy";
});
document.getElementById('mainColor').addEventListener('click',() =>{
  navigator.clipboard.writeText(document.getElementById('mainColor').textContent);
  document.getElementById("mainColorText").innerHTML = "Copied!";
  document.getElementById("myTooltip1").innerHTML = "Click to Copy";
  document.getElementById("myTooltip2").innerHTML = "Click to Copy";
  document.getElementById("myTooltip3").innerHTML = "Click to Copy";
});

// For Color Picker

document.getElementById('start-button').addEventListener('click', () => {
    const resultCol = document.getElementById('resultCol');
    const resultElement = document.getElementById('result');
    document.getElementById("myTooltip1").innerHTML = "Click to Copy";
    document.getElementById("myTooltip2").innerHTML = "Click to Copy";
    document.getElementById("myTooltip3").innerHTML = "Click to Copy";
    document.getElementById("mainColorText").innerHTML = "Click to Copy";
    

    if (!window.EyeDropper) {
      resultElement.textContent = 'Your browser does not support the EyeDropper API';
      return;
    }
  
    const eyeDropper = new EyeDropper();
  
    eyeDropper.open().then(result => {
      resultElement.value = result.sRGBHex;
      resultElement.style.color = "black"
      document.getElementById('mainColor').textContent = result.sRGBHex;
      resultCol.style.backgroundColor = result.sRGBHex;
      resultCol.style.color = result.sRGBHex;
      resultCol.classList.add('bdr');

      // For Similar Colors 
      
      if(tinycolor(result.sRGBHex).isLight()){
        similar1.style.background = tinycolor(result.sRGBHex).lighten().toString();
        similar1.style.color = tinycolor(result.sRGBHex).lighten().toString();
        copy1.textContent= tinycolor(result.sRGBHex).lighten().toString()
        similar2.style.background = tinycolor(result.sRGBHex).darken().toString();
        similar2.style.color = tinycolor(result.sRGBHex).darken().toString();
        copy2.textContent = tinycolor(result.sRGBHex).darken().toString();
        similar3.style.background = tinycolor(result.sRGBHex).darken(30).toString();
        similar3.style.color = tinycolor(result.sRGBHex).darken(30).toString();
        copy3.textContent = tinycolor(result.sRGBHex).darken().toString();
      }
      else{
        similar1.style.background = tinycolor(result.sRGBHex).lighten(30).toString();
        similar1.style.color = tinycolor(result.sRGBHex).lighten(30).toString();
        copy1.textContent = tinycolor(result.sRGBHex).lighten(30).toString();
        similar2.style.background = tinycolor(result.sRGBHex).lighten(10).toString();
        similar2.style.color = tinycolor(result.sRGBHex).lighten(10).toString();
        copy2.textContent = tinycolor(result.sRGBHex).lighten(10).toString();
        similar3.style.background = tinycolor(result.sRGBHex).darken().toString();
        similar3.style.color = tinycolor(result.sRGBHex).darken().toString();
        copy3.textContent = tinycolor(result.sRGBHex).darken().toString();
      }
      
    /*  var color = [];
      color= result.sRGBHex;
      var c = color.substring(1);
      var rgb = parseInt(c, 16);
      console.log("hello");
      console.log(color);
      console.log(rgb)
      
      var aRgb = [(rgb >> 16) & 0xff, (rgb >>  8) & 0xff, (rgb >>  0) & 0xff ];
      console.log(aRgb);
      var max=Math.max(Math.max(aRgb[0],Math.max(aRgb[1],aRgb[2])),1);
      var step=255/max;
      var r=aRgb[0]*step;
      var g=aRgb[1]*step;
      var b=aRgb[2]*step;
      similar1.style.background = "rgb(" + r*0.5 + "," + g*0.5 + "," + b*0.5 + ")";
      similar1.style.color = "rgb(" + r*0.5 + "," + g*0.5 + "," + b*0.5 + ")";
      similar2.style.background = "rgb(" + r*1 + "," + g*1 + "," + b*1 + ")";
      similar2.style.color = "rgb(" + r*1 + "," + g*1 + "," + b*1 + ")";
      similar3.style.background = "rgb(" + r*1.5 + "," + g*1.5 + "," + b*1.5 + ")";
      similar3.style.color = "rgb(" + r*1.5 + "," + g*1.5 + "," + b*1.5 + ")";
*/

    }).catch(e => {
      resultElement.textContent = e;
    });
  
  });
