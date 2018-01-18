var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var $paleta = $('#paleta');
var $grillaDePixeles = $('#grilla-pixeles');
// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  $('#color-personalizado').css('background-color', $backgroundColor);
});


function generarPaleta(indexElemento, color) {
    var $divColor = $('<div>', {'class': 'color-paleta', 'style': 'background-color: ' + color + ";'"});
    $paleta.append($divColor);
}

$.each(nombreColores, generarPaleta);

// 4 - Creando pixeles de la grilla

var pixelesDeGrilla = [];

for (var i = 0; pixelesDeGrilla.length < 1750; i++) {
  pixelesDeGrilla[i] = i;
}

function agregarPixelDeGrilla(indexElemento, pixel) {
  var $divPixel = $('<div/>');
  $grillaDePixeles.append($divPixel);
}

// 5 - Recorrer elementos de la pixelesDeGrilla con la función .each()

$.each(pixelesDeGrilla, agregarPixelDeGrilla);


function cambiarColorIndicador() {
  var $backgroundColor = $(this).css('background-color');
  $('#indicador-de-color').css('background-color', $backgroundColor);
}

$('.color-paleta').click(cambiarColorIndicador);

var $divPixelGrilla = $('#grilla-pixeles.cursor-personalizado div');

function cambiarColor() {
  var $indicadorDeColor = $('#indicador-de-color').css('background-color');
  $(this).css('background-color', $indicadorDeColor);
}


$divPixelGrilla.click(cambiarColor);

function detectarBoton (event) {
  console.log(event);
  if(event && event.button==0){
    alert("derecho");
  } else if(event && event.button==1) {
    alert("medio");
  }
  else {
    alert("izquierdo");
  }
}

detectarBoton();
