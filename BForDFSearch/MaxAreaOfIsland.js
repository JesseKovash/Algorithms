// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.



// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

var maxAreaOfIsland = function(grid) {
  let maxSize = 0;

  const islandSizeFinder = function(newGrid, row, col) {
    let count = 0;

    //set current cell to 0 and increment
    newGrid[row][col] = 0;
    count++;

    //up
    if (newGrid[row - 1]) {
      if (newGrid[row - 1][col] === 1) {
        count += islandSizeFinder(newGrid, row - 1, col)
      }
    }
    //down
    if (newGrid[row + 1]) {
      if (newGrid[row + 1][col] === 1) {
        count += islandSizeFinder(newGrid, row + 1, col)
      }
    }
    //left
    if (newGrid[row][col - 1]) {
      if (newGrid[row][col - 1] === 1) {
        count += islandSizeFinder(newGrid, row, col - 1)
      }
    }
    //right
    if (newGrid[row][col + 1]) {
      if (newGrid[row][col + 1] === 1) {
        count += islandSizeFinder(newGrid, row, col + 1)
      }
    }
    if (count > maxSize) {
      maxSize = count;
    }
    return count
  }

  grid.forEach((oneRow, rowIndex)=>{
    oneRow.forEach((oneCell, colIndex)=> {
      if (oneCell === 1) {
        islandSizeFinder(grid.slice(), rowIndex, colIndex)
      }
    })
  })

return maxSize
};