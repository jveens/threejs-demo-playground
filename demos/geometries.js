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

    // var geometry = new THREE.BoxGeometry(3, 3, 3);
    // var geometry = new THREE.CircleGeometry(5, 10);
    // var geometry = new THREE.ConeGeometry(3, 4, 30 );
    // var geometry = new THREE.CylinderGeometry( 2, 2, 3, 25 );
    // var geometry = new THREE.DodecahedronGeometry(2);
    // var geometry = new THREE.IcosahedronGeometry(2);
    // var geometry = new THREE.OctahedronGeometry(2);
    // var geometry = new THREE.PlaneGeometry( 2, 2 );
    // var geometry = new THREE.RingGeometry( 1, 2, 32 );
    // var geometry = new THREE.SphereGeometry( 4, 40, 20 );
    // var geometry = new THREE.TetrahedronGeometry(2);
    // var geometry = new THREE.TorusGeometry( 2, 1, 10, 100 );
    // var geometry = new THREE.TorusKnotGeometry( 10, 5, 100, 16 );
    var material = new THREE.MeshNormalMaterial({
        // wireframe: true
    });
    var mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    camera.position.z = 40;
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