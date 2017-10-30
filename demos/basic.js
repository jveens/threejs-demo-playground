window.onload = function() {
    
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera( 
        100,                                        // FOV
        window.innerWidth/window.innerHeight,       // Aspect Ratio
        0.1,                                        // Near viewing plane
        1000                                        // Faw viewing plane
    );

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0xB13950,
        wireframe: true
    });
    var mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    camera.position.z = 5;

    renderer.render(scene, camera);

}