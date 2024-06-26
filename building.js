let scene = document.getElementById("scene");

    for (let x = 0; x < 20; x++) {
        for (let z = 0; z < 20; z++) {
            let building = document.createElement("a-box");
            let height = Math.random() * 27 + 3;
            building.setAttribute("height", height);
            building.setAttribute("position", `${x * 4 - (x%4) - 36} ${height/2 - 40} ${z*4 - (z%4) -36}`);
            building.setAttribute("width", 3);
            building.setAttribute("depth", 3);
            building.setAttribute("src", "window.png");
            building.setAttribute("roughness", 0)
            building.setAttribute("repeat",`10 ${height/16}`);
            let colour = generateRandomGrey();
            building.setAttribute("color", colour);
            scene.appendChild(building);
            console.log(building);
        }
    }

function generateRandomGrey(){
    let base = Math.floor(Math.random() * 255);
    let hex = base.toString(16).padStart(2,"0");
    let colour = '#' + hex + hex + hex;
    return colour
}