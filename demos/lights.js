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

    // var axisHelper = new THREE.AxisHelper( 5 );
    // scene.add( axisHelper );

    // Add a light so we can see all materials
    // var light = new THREE.HemisphereLight( 0xff0000, 0x080820, 1 );
    var light = new THREE.AmbientLight( 0x7941A7, 0.5 ); // soft white light
    // var light = new THREE.DirectionalLight( 0xffffff, 1 );
    var light2 = new THREE.PointLight( 0x029A74, 1, 100, 2 );
    light2.position.set( 10, 10, 10 );
    scene.add( light2 );
    scene.add( light );
    
    var geometry = new THREE.TorusGeometry( 2, 1, 10, 100 );

    var material = new THREE.MeshLambertMaterial({
        // wireframe: true
    });
    var mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    camera.position.z = 10;
    // camera.position.y = 2;
    // camera.position.x = 2;

    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.03;
        mesh.rotation.y += 0.03;
        renderer.render( scene, camera );
    }

    // Kick it off!
    animate();
}