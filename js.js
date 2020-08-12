var grupoTarjeta1 =
["🐶", "🐺", "🐱","🐵","💥", "📕", "🐷","🐪","❤", "💻","👓","🎂","🐹","🐉","🐨","🐼","🎃","🐣"];
var grupoTarjeta2 =
["🐶", "🐺", "🐱","🐵","💥", "📕", "🐷","🐪","❤", "💻","👓","🎂","🐹","🐉","🐨","🐼","🎃","🐣"];

var valor_nulo=[];
var memoria_carta_ids=[];
var carta_virada= 0;


var todasLasTarjetas = grupoTarjeta1.concat(grupoTarjeta2);

function crearTajetas() {
  var mesa = document.querySelector("#mesa");

  todasLasTarjetas.forEach(function mensaje(Element) {
    var tarjeta = document.createElement("div");


    tarjeta.innerHTML = "<p class='ico'>" + Element + "</p>";

    mesa.appendChild(tarjeta);

  });
}



crearTajetas();

var propiedadCss= document.getElementById('propiedadCss');
propiedadCss='mesa';

mesa.class.add("bg-danger");


/*<div class="tarjeta">🐶</div>*/
