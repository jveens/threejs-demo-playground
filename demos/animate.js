window.onload = function() {
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 
        100,                                        // FOV
        window.innerWidth/window.innerHeight,       // Aspect Ratio
        0.1,                                        // Near viewing plane
        1000                                        // Faw viewing plane
    );

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0xB13950,
        wireframe: true
    });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    // THIS IS NEW
    function animate() {
        requestAnimationFrame(animate);

        // Any animation must happen here!
        cube.rotation.x += 0.03;
        cube.rotation.y += 0.03;

        renderer.render( scene, camera );
    }

    // Kick it off!
    animate();
}