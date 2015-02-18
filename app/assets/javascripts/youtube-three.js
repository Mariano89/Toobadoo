var camera;
var cssScene, cssRenderer;
var controls;
var threeDiv;


// set up the threejs environment
function init() {

  // every three js environment needs a scene to hold everything
  cssScene = new THREE.Scene();

  // for (i=0;i<4;i++) {
  //   threeDivs[i] = new THREE.CSS3DObject( $('#vid-div' + i )[0] );
  //   cssScene.add( threeDivs[i] );
  // }


  threeDiv = new THREE.CSS3DObject( $('#vid-div')[0] );
  cssScene.add( threeDiv );

  var dim = 240;

  // threeDivs[0].position.z = dim;

  // threeDivs[1].position.x = -dim;
  // threeDivs[1].rotation.y = Math.PI/2;

  // threeDivs[2].position.x = dim;
  // threeDivs[2].rotation.y = -Math.PI/2;

  // threeDivs[3].position.z = -dim;
  // threeDivs[3].rotation.y = Math.PI;

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

var maxRot = Math.PI/4;
var dir = 1;

function animate() {
  // This is how you start the animation loop, by requesting that the browser
  // call this method (will do its best to call it 60 times a second)
  requestAnimationFrame( animate );

  // var axis = new THREE.Vector3(0,1,0);
  // rotateAroundWorldAxis(threeDiv, axis, Math.PI / 90);

  // this lets the control do its work
  controls.update();


  threeDiv.rotation.y -= (Math.PI/2)/45;

  // render out the scene
  // camera.rotate.y += (Math.PI/2)/100;
  cssRenderer.render( cssScene, camera );

}

function rotateAroundWorldAxis(object, axis, radians) {
    rotWorldMatrix = new THREE.Matrix4();
    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);

    // old code for Three.JS pre r54:
    //  rotWorldMatrix.multiply(object.matrix);
    // new code for Three.JS r55+:
    rotWorldMatrix.multiply(object.matrix);                // pre-multiply

    object.matrix = rotWorldMatrix;

    // old code for Three.js pre r49:
    // object.rotation.getRotationFromMatrix(object.matrix, object.scale);
    // old code for Three.js pre r59:
    // object.rotation.setEulerFromRotationMatrix(object.matrix);
    // code for r59+:
    object.rotation.setFromRotationMatrix(object.matrix);
}

$( document ).ready( init );




