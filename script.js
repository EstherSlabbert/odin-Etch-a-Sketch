document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const setGridSizeButton = document.getElementById('grid-size');
    const resetButton = document.getElementById('reset');

    function createGrid(rowLength) {
        container.innerHTML = '';
        let gridItemSize = 960 / rowLength;

        for (let i = 0; i < rowLength; i++) {
            for (let j = 0; j < rowLength; j++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                container.appendChild(gridItem);
            }
        }

        const gridItems = document.querySelectorAll(".grid-item");

        for (var i = 0; i < gridItems.length; i++) {
            gridItems[i].style.width = gridItemSize + 'px';
            gridItems[i].style.height = gridItemSize + 'px';
            gridItems[i].addEventListener("mouseenter", draw);
        }
    }

    // RGB values for the starting color white
    let r = 255;
    let g = 255;
    let b = 255;
    // darkens colors while sketching
    function draw(e) {
        if (e.type === "mouseenter") {
            // decreases RGB values by 10%
            r = Math.max(0, r - 25.5);
            g = Math.max(0, g - 25.5);
            b = Math.max(0, b - 25.5);
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }

    createGrid(16); // initial grid size is 16 by 16

    setGridSizeButton.addEventListener('click', () => {
        let rowLength;

        do {
            rowLength = prompt("Row length of squares for the grid (integer between 0 and 100):",
             "Number of squares across")
        } while (isNaN(rowLength) || rowLength <= 0 || rowLength > 100 || !Number.isInteger(Number(rowLength)))

        createGrid(rowLength);
    })

    resetButton.addEventListener('click', () => {
        r = 255;
        g = 255;
        b = 255;
        const gridItems = document.querySelectorAll(".grid-item.hover");
        gridItems.forEach((item) => {
            item.classList.remove("hover");
        });
    })
})
