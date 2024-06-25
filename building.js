let scene = document.getElementById("scene");

    for (let x = 0; x < 10; x++) {
        for (let z = 0; z < 10; z++) {
            let building = document.createElement("a-box");
            building.setAttribute("position", `${x} 0 ${z}`);
            building.setAttribute("width", 1);
            building.setAttribute("height", Math.random() * 9 + 1);
            building.setAttribute("color", "#CCC");  // Adding depth attribute
            scene.appendChild(building);
            console.log(building);
        }
    }