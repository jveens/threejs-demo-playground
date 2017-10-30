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

    // Add a light so we can see all materials
    var light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
    scene.add( light );
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
    scene.add( directionalLight );

    var geometry = new THREE.BoxGeometry(10, 10, 10);
    var knot;

    // Load our texture
    var textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = true;
    textureLoader.load('./assets/texture-basket.jpg', function(texture) {

        // apply the texture as a bump map
        var material = new THREE.MeshStandardMaterial({
            color: 0x0072FF,
            bumpMap: texture,
            roughness: 0.7
        });

        knot = new THREE.Mesh(geometry, material);

        scene.add(knot);
    });

    camera.position.z = 15;

    function animate() {
        requestAnimationFrame(animate);
        knot.rotation.x += 0.008;
        knot.rotation.y += 0.008;
        // knot.rotation.z += 0.01;
        renderer.render( scene, camera );
    }

    // Kick it off!
    animate();
}