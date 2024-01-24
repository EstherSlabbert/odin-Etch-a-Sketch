document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const setGridSizeButton = document.getElementById('grid-size');
    const resetButton = document.getElementById('reset');

    function createGrid(rowLength) {
        container.innerHTML = ''
        let gridItemSize = 960 / rowLength

        for (let i = 0; i < rowLength; i++) {
            for (let j = 0; j < rowLength; j++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                container.appendChild(gridItem);
            }
        }

        const gridItems = document.querySelectorAll(".grid-item")

        for (var i = 0; i < gridItems.length; i++) {
            gridItems[i].style.width = gridItemSize + 'px';
            gridItems[i].style.height = gridItemSize + 'px';
            gridItems[i].addEventListener("mouseenter", draw);
        }
    }

    function draw(e) {
        if (e.type === "mouseenter") {
            e.target.classList.add("hover");
        }
    }

    createGrid(16);

    setGridSizeButton.addEventListener('click', () => {
        let rowLength;

        do {
            rowLength = prompt("Row length for the square grid (integer between 0 and 100):", "row length")
        } while (isNaN(rowLength) || rowLength <= 0 || rowLength > 100 || !Number.isInteger(Number(rowLength)))

        createGrid(rowLength);
    })

    resetButton.addEventListener('click', () => {
        const gridItems = document.querySelectorAll(".grid-item.hover");
        gridItems.forEach((item) => {
            item.classList.remove("hover");
        });
    })
})
