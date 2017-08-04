// Counts the number of living neighbors a given cell has
const getLivingNeighbors = (xCoord, yCoord, grid = []) => {

  const height = grid.length;
  const width = grid[0].length;

  // Capture corners. If a cell is at the edge of the grid, the cell on the opposite edge will be its neighbor
  const left = xCoord - 1 < 0 ? (width - 1) : (xCoord - 1);
  const right = xCoord + 1 === width ? 0 : (xCoord + 1);
  const up = yCoord - 1 < 0 ? (height - 1) : (yCoord - 1);
  const down = yCoord + 1 === height ? 0 : (yCoord + 1);
  console.log("xCoord", xCoord)
  console.log("yCoord", yCoord)
  console.log("width", width)
  console.log("height", height)
  console.log("left", left)
  console.log("right", right)
  console.log("up", up)
  console.log("down", down)

  let count = 0;

  //once received indexes of neighbors, count number of living neighbors and return total
  count += grid[up][left].status;
  count += grid[up][xCoord].status;
  count += grid[up][right].status;
  count += grid[yCoord][left].status;
  count += grid[yCoord][right].status;
  count += grid[down][left].status;
  count += grid[down][xCoord].status;
  count += grid[down][right].status;

  return count;
};

// Determines the next state of a cell based on the number of living neighbors
const determineNextState = (grid = [], xCoord, yCoord) => {
  let status;
  let currStatus = grid[yCoord][xCoord].status; //0 or 1
  let count = getLivingNeighbors(xCoord, yCoord, grid);
  if (currStatus && (count === 2 || count === 3)) {
    status = 1;
  } else if (!currStatus && count === 3) {
    status = 1;
  } else {
    status = 0;
  }
  return status;
};

// Generates a grid based on conditions and/or previous grid
const makeGrid = (condition, height, width, grid = []) => {
  const newGrid = [];
  for (let yCoord = 0; yCoord < height; yCoord++) { //rows
    const row = [];
    for (let xCoord = 0; xCoord < width; xCoord++) { //columns
      let status; //0 = dead, 1 = living
      if (condition === 'clear') {
        status = 0;
      }
      if (condition === 'random') {
        if (Math.random() > 0.75) status = 1;
        else status = 0;
      }
      if (condition === 'next') {
        status = determineNextState(grid, xCoord, yCoord);
      }
      row.push({
        xCoord,
        yCoord,
        status
      });
    }
    newGrid.push(row);
  }
  return newGrid;
};

export default makeGrid;
