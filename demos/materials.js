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
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
    scene.add( directionalLight );

    var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );

    // var material = new THREE.MeshBasicMaterial({
    //     color: 0xFF6565,
    // });
    // var material = new THREE.MeshNormalMaterial();
    // var material = new THREE.MeshLambertMaterial({
    //     color: 0x19B196,
    // });
    // var material = new THREE.MeshPhongMaterial({
    //     color: 0x5B14FF,
    //     shininess: 60,
    //     specular: 0x19FF00
    // });
    var material = new THREE.MeshStandardMaterial({
        color: 0xA70F8E,
        metalness: 0.7,
        roughness: 0.5
    });
    var mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    camera.position.z = 40;

    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.03;
        mesh.rotation.y += 0.03;
        renderer.render( scene, camera );
    }

    // Kick it off!
    animate();
}