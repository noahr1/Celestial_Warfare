import * as Utils from "./utils.js";

const minimapBox = document.getElementById('minimap-box');
const resizeHandle = document.getElementById('resize-handle');
const canvasContainer = document.getElementById('p5-canvas');
const tabButtons = document.querySelectorAll(".tab-button");
const barContents = document.querySelectorAll(".bar-content");
const partBoxes = document.querySelectorAll(".tool-box");
let game_render;
let cameraX = 5000, cameraY = 5000;
const world = {
    width: 10000,
    height: 10000
};
let selected;
let isResizing = false;

const game = (p) => {
    p.setup = () => {
        game_render = p.createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    }

    p.draw = () => {
        p.clear();
        p.background(100);

        // // Start translating everything based on the camera
        p.push();
        p.translate(-cameraX, -cameraY);

        //draw world
        p.fill("blue");
        p.rect(15, 15, 15, 15);
        //drawLaser();
        p.pop(); // Reset translation
    }

    p.windowResized = () => {
        p.resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    }

    window.addEventListener("keydown", (e) => {
        var key = e.key;
        if (key == "a") {
            cameraX -= 10;
        }
        if (key == "d") {
            cameraX += 10;
        }
        if (key == "w") {
            cameraY -= 10;
        }
        if (key == "s") {
            cameraY += 10;
        }

        // Clamp camera within the world bounds
        cameraX = p.constrain(cameraX, 0, world.width - p.width);
        cameraY = p.constrain(cameraY, 0, world.height - p.height);
    });
}

const map = (p) => {
    p.setup = () => {

    }
    p.draw = () => {
        p.image(game_render, 0, 0, p.width, p.height);
    }
    p.windowResized = () => {
        p.resizeCanvas(minimapBox.offsetWidth, minimapBox.offsetHeight);
    }
}

//Tab Functionality
tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove 'active' class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove("active"));
        barContents.forEach(content => content.classList.remove("active"));

        //Add 'active' class to the clicked button and corresponding content
        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});

//Part Boxes Functionality
partBoxes.forEach(box => {
    box.addEventListener("click", () => {
        selected = box.innerHTML;
        console.log(selected);
    });
});

resizeHandle.addEventListener('mousedown', function (e) {
    isResizing = true;
});

document.addEventListener('mouseup', function () {
    isResizing = false;
});

// Resizing the resizable box

document.addEventListener('mousemove', function (e) {
    if (isResizing) {
        let newSize = Math.max(e.clientY - minimapBox.getBoundingClientRect().top, e.clientX - minimapBox.getBoundingClientRect().left);
        minimapBox.style.width = `${Utils.clamp(newSize, 150, 300)}px`;
        minimapBox.style.height = `${Utils.clamp(newSize, 150, 300)}px`;
    }
});

new p5(game, canvasContainer);
new p5(map, minimapBox);