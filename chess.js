var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth
		/ window.innerHeight, 0.1, 1000);
camera.position.y = -10;
camera.position.z = 10;
camera.rotation.x = 45 * (Math.PI / 180);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var texture = THREE.ImageUtils.loadTexture("checkerboard.jpg");
var geometry = new THREE.PlaneGeometry(8, 8);
var material = new THREE.MeshBasicMaterial( {
	map : texture
});
var board = new THREE.Mesh(geometry, material);
board.recieveShadows = true;
scene.add(board);

var dirLight = new THREE.DirectionalLight(0xffffff, .5);
dirLight.position.set(50, 50, 50);
var dirLight2 = new THREE.DirectionalLight(0xffffff, .5);
dirLight2.position.set(550, 50, 50);
var dirLight3 = new THREE.DirectionalLight(0xffffff, .5);
dirLight3.position.set(0, 50, 50);
scene.add(dirLight);
scene.add(dirLight2);
scene.add(dirLight3);

var oLoader = new THREE.OBJMTLLoader();

var whiteKing = null;
oLoader.load('pieces/king.obj', 'materials/white_king.mtl', function(object) {
	whiteKing = object;
	object.position.x = 3.2;
	object.position.y = -0.5;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var whiteQueen = null;
oLoader.load('pieces/queen.obj', 'materials/white_king.mtl', function(object) {
	whiteQueen = object;
	object.position.x = 3.2;
	object.position.y = -1.4;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var whitebishop1 = null;
oLoader.load('pieces/Bishop.obj', 'materials/white_king.mtl', function(object) {
	whitebishop1 = object;
	object.position.x = 3.2;
	object.position.y = -2.4;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var whitebishop2 = null;
oLoader.load('pieces/Bishop.obj', 'materials/white_king.mtl', function(object) {
	whitebishop2 = object;
	object.position.x = 3.2;
	object.position.y = 0.4;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var whiteKnight1 = null;
oLoader.load('pieces/Knight.obj', 'materials/white_king.mtl', function(object) {
	whiteKnight1 = object;
	object.position.x = 3.2;
	object.position.y = -3.3;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var whiteKnight2 = null;
oLoader.load('pieces/Knight.obj', 'materials/white_king.mtl', function(object) {
	whiteKnight1 = object;
	object.position.x = 3.2;
	object.position.y = 1.3;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var whiteRook1 = null;
oLoader.load('pieces/Rook.obj', 'materials/white_king.mtl', function(object) {
	whiteRook1 = object;
	object.position.x = 3.2;
	object.position.y = -4.2;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var whiteRook2 = null;
oLoader.load('pieces/Rook.obj', 'materials/white_king.mtl', function(object) {
	whiteRook2 = object;
	object.position.x = 3.2;
	object.position.y = 2.2;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var whitePawn = function(i) {
	oLoader.load('pieces/Pawn.obj', 'materials/white_king.mtl',

	function(object) {
		object.castShadow = true;
		object.position.x = 2.25;
		object.position.y = 2.1 - (i * 0.9);
		object.position.z = 1;
		object.rotation.x = 45;
		object.scale.set(.5, .5, .4);
		scene.add(object);
	}, function(xhr) {

	}, function(xhr) {

	});
};
for ( var i = 0; i < 8; i++) {
	whitePawn(i);
}

var blackKing = null;
oLoader.load('pieces/king.obj', 'materials/black_king.mtl', function(object) {
	blackKing = object;
	object.position.x = -3.2;
	object.position.y = -0.5;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	object.castShadow = true;
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var blackQueen = null;
oLoader.load('pieces/queen.obj', 'materials/white_king.mtl', function(object) {
	blackQueen = object;
	object.position.x = -3.2;
	object.position.y = -1.4;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var blackbishop1 = null;
oLoader.load('pieces/Bishop.obj', 'materials/black_king.mtl', function(object) {
	blackbishop1 = object;
	object.position.x = -3.2;
	object.position.y = -3.3;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var blackKnight2 = null;
oLoader.load('pieces/Knight.obj', 'materials/black_king.mtl', function(object) {
	blackKnight2 = object;
	object.position.x = -3.2;
	object.position.y = 1.3;
	object.position.z = 1;
	object.rotation.x = 45;
	object.rotation.y = -110;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var blackKnight1 = null;
oLoader.load('pieces/Knight.obj', 'materials/black_king.mtl', function(object) {
	blackKnight1 = object;
	object.position.x = -3.2;
	object.position.y = -2.4;
	object.position.z = 1;
	object.rotation.x = 45;
	object.rotation.y = -110;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var blackbishop2 = null;
oLoader.load('pieces/Bishop.obj', 'materials/black_king.mtl', function(object) {
	blackbishop2 = object;
	object.position.x = -3.2;
	object.position.y = 0.4;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var blackRook1 = null;
oLoader.load('pieces/Rook.obj', 'materials/black_king.mtl', function(object) {
	blackRook1 = object;
	object.position.x = -3.2;
	object.position.y = -4.2;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var blackRook2 = null;
oLoader.load('pieces/Rook.obj', 'materials/black_king.mtl', function(object) {
	blackRook2 = object;
	object.position.x = -3.2;
	object.position.y = 2.2;
	object.position.z = 1;
	object.rotation.x = 45;
	object.scale.set(.4, .4, .4);
	scene.add(object);
}, function(xhr) {

}, function(xhr) {

});

var blackPawn = function(i) {
	oLoader.load('pieces/Pawn.obj', 'materials/black_king.mtl',

	function(object) {
		object.position.x = -2.25;
		object.position.y = 2.1 - (i * 0.9);
		object.position.z = 1;
		object.rotation.x = 45;
		object.scale.set(.5, .5, .4);
		object.castShadow = true;
		scene.add(object);
	}, function(xhr) {

	}, function(xhr) {

	});
};
for ( var i = 0; i < 8; i++) {
	blackPawn(i);
}

var start = {
	x : -3.2,
	y : -2.4,
	z : 1
};

var up = {
	x : -3,
	y : -2.4,
	z : 3
};

var over = {
	x : -1.3,
	y : -3.3,
	z : 3
};

var down = {
	x : -1.3,
	y : -3.3,
	z : 1
};

new TWEEN.Tween(start).to(up, 2000).delay(15000).onUpdate(function() {
	blackKnight1.position.x = start.x;
	blackKnight1.position.y = start.y;
	blackKnight1.position.z = start.z;
}).start();

new TWEEN.Tween(up).to(over, 6000).delay(17000).onUpdate(function() {
	blackKnight1.position.x = up.x;
	blackKnight1.position.y = up.y;
	blackKnight1.position.z = up.z;
}).start();

new TWEEN.Tween(over).to(down, 2000).delay(23000).onUpdate(function() {
	blackKnight1.position.x = over.x;
	blackKnight1.position.y = over.y;
	blackKnight1.position.z = over.z;
}).start();

var render = function() {
	TWEEN.update();
	requestAnimationFrame(render);

	renderer.render(scene, camera);
};

render();