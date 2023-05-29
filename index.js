var imagePaths = [
    'Comp_1_00004.png',
    'Comp1_00005.png',
    'Comp1_00006.png',
    'Comp1_00007.png'
    // ...agrega aquí el resto de las rutas a tus imágenes   
  ];


  function showAnimation() {
    var container = document.getElementById('animation-container');
    
    // Crea una animación CSS keyframes para mostrar cada imagen en orden
    var keyframes = '@keyframes slideshow {';
    var stepPercentage = 100 / imagePaths.length;
    
    for (var i = 0; i < imagePaths.length; i++) {
      keyframes += (i * stepPercentage) + '% { background-image: url("' + imagePaths[i] + '"); }';
    }
    
    keyframes += '100% { background-image: url("' + imagePaths[0] + '"); }';
    keyframes += '}';
    
    // Agrega la animación al estilo del contenedor
    var style = document.createElement('style');
    style.innerHTML = keyframes;
    container.appendChild(style);
    
    // Aplica la animación al contenedor
    container.style.animation = 'slideshow ' + imagePaths.length + 's infinite';
  }
  
  // Llama a la función para mostrar la animación
  showAnimation();
  
  