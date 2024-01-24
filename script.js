document.addEventListener('DOMContentLoaded', function (){
    const container = document.getElementById('container');
    const setGridSizeButton = document.getElementById('grid-size');
    const resetButton = document.getElementById('reset');
    // Create 16x16 grid
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.setAttribute('id',`item${j}`);
            container.appendChild(gridItem);
        }
    }
    const gridItems = document.querySelectorAll(".grid-item");

    for (var i = 0; i < gridItems.length; i++) {
        gridItems[i].style.width = 60 + 'px';
        gridItems[i].style.height = 60 + 'px';
    }

    function draw(e) {
        if (e.type === "mouseenter") {
        e.target.classList.add("hover");
        }
    }

    gridItems.forEach((item) => {
        item.addEventListener("mouseenter", draw);
    });

    setGridSizeButton.addEventListener('click', setGridSize);
    resetButton.addEventListener('click', resetDrawing);

    function setGridSize() {
        const containerSize = 960;
        let rowLength;

        do {
            rowLength = prompt("Row length for the square grid (integer between 0 and 100):", "row length");
         } while (isNaN(rowLength) || rowLength <= 0 || rowLength > 100 || !Number.isInteger(Number(rowLength)));
        
        let gridItemSize = containerSize / rowLength;
        container.innerHTML = '';

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
        }

        function draw(e) {
            if (e.type === "mouseenter") {
            e.target.classList.add("hover");
            }
        }
    
        gridItems.forEach((item) => {
            item.addEventListener("mouseenter", draw);
        });
    }

    function resetDrawing() {
        // implement reset grid functionality here
    }
});
