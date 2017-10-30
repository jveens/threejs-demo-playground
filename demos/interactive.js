window.onload = function() {

    // This demo adapted from https://threejs.org/examples/#webgl_interactive_cubes
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 
        100,                                        // FOV
        window.innerWidth/window.innerHeight,       // Aspect Ratio
        0.1,                                        // Near viewing plane
        1000                                        // Faw viewing plane
    );
    let raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    let INTERSECTED;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function onDocumentMouseMove( event ) {
        event.preventDefault();
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    // var axisHelper = new THREE.AxisHelper( 250 );
    // scene.add( axisHelper );

    // Add a light so we can see all materials
    const light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1.5 );
    scene.add( light );
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
    scene.add( directionalLight );

    const meshes = [];

    for ( let i = 0; i < 1000; i ++ ) {
        let geometry = new THREE.TetrahedronGeometry(15);
        let material = new THREE.MeshPhongMaterial({
            color: 0x000000,
            emissive: 0x000000,
            emissiveIntensity: 0
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

    camera.position.z = 300;

    function animate() {
        requestAnimationFrame(animate);

        meshes.forEach(mesh => {
            mesh.rotation.x += 0.03;
            mesh.rotation.y += 0.03;
        });

        raycaster.setFromCamera(mouse, camera);

        let intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            if ( INTERSECTED != intersects[ 0 ].object ) {
                if ( INTERSECTED ) {
                    INTERSECTED.material.setValues({
                        emissive: INTERSECTED.currentHex,
                        emissiveIntensity: 0
                    });
                }
                INTERSECTED = intersects[ 0 ].object;
                INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                INTERSECTED.material.setValues({
                    color: Math.random() * 0xffffff,
                    emissiveIntensity: 1
                });
            }
        } else {
            if ( INTERSECTED ) {
                INTERSECTED.material.setValues({
                    // emissive: INTERSECTED.currentHex,
                    emissiveIntensity: 1
                });
            }
            INTERSECTED = null;
        }

        renderer.render( scene, camera );
    }

    // Kick it off!
    animate();
}