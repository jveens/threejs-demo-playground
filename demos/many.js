window.onload = function() {

    // This demo adapted from https://threejs.org/examples/#webgl_interactive_cubes
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 
        100,                                        // FOV
        window.innerWidth/window.innerHeight,       // Aspect Ratio
        0.1,                                        // Near viewing plane
        1000                                        // Faw viewing plane
    );
    let radius = 100;
    let theta = 0;

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // var axisHelper = new THREE.AxisHelper( 250 );
    // scene.add( axisHelper );

    // Add a light so we can see all materials
    const light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
    scene.add( light );
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
    scene.add( directionalLight );

    const meshes = [];

    for ( let i = 0; i < 1000; i ++ ) {
        let geometry = new THREE.IcosahedronGeometry(Math.floor(Math.random() * 7) + 4  );
        let material = new THREE.MeshStandardMaterial({
            color: Math.random() * 0xffffff,
            metalness: 0.7
        });
        let mesh = new THREE.Mesh( geometry, material );
        mesh.position.x = Math.random() * 500 - 250;
        mesh.position.y = Math.random() * 500 - 250;
        mesh.position.z = Math.random() * 500 - 250;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;

        meshes.push(mesh);

        scene.add( mesh );
    }

    camera.position.z = 250;

    function animate() {
        requestAnimationFrame(animate);

        meshes.forEach(mesh => {
            mesh.rotation.x += 0.03;
            mesh.rotation.y += 0.03;
        });

        theta += 0.1;
        camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
        camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
        camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
        camera.lookAt( scene.position );
        camera.updateMatrixWorld();

        renderer.render( scene, camera );
    }

    // Kick it off!
    animate();
}