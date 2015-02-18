var camera;
var cssScene, cssRenderer;
var controls;
var threeDiv;

// set up the threejs environment
function init() {

  // every three js environment needs a scene to hold everything
  cssScene = new THREE.Scene();

  threeDiv = new THREE.CSS3DObject( $('#vid-div')[0] );
  // threeDiv = new THREE.CSS3DObject( $('#test')[0] );

  cssScene.add( threeDiv );

  threeDiv.position.z = -100;
  // threeDiv.rotation.y = Math.PI/2;

  // every three js envorinmont needs a camera to look at the divs
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 0, 0, 800 );

  // and a renderer which defines how the scene draws
  cssRenderer = new THREE.CSS3DRenderer();

  cssRenderer.setSize( window.innerWidth, 600);
  document.body.appendChild( cssRenderer.domElement );

  // the controls let us spin the box
  controls = new THREE.TrackballControls( camera , cssRenderer.domElement);
  animate();

}

var maxRot = Math.PI/2;
var dir

function animate() {
  console.log('animating');
  // This is how you start the animation loop, by requesting that the browser
  // call this method (will do its best to call it 60 times a second)
  requestAnimationFrame( animate );

  // this lets the control do its work
  controls.update();

  //threeDiv.rotation.y += (Math.PI/2)/100;

  // render out the scene
  cssRenderer.render( cssScene, camera );

}

$( document ).ready( init );




