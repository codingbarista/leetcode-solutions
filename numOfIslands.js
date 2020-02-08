/*
    Solution using grid manipulation. We will use '#' to mark visited '1'.
    This will use less memory and perform faster than solution #2.
*/
function numIslands(grid) {
    let count = 0;
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1') {
          count++;
          dfs(grid, i,j);
        }
      }
    }
  
    return count;
  }
  
function dfs(grid, row, col) {
    // bound check
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;
  
    const value = grid[row][col];
    if (value === '1') {
      grid[row][col] = '#';
      dfs(grid, row + 1, col);
      dfs(grid, row - 1, col);
      dfs(grid, row, col + 1);
      dfs(grid, row, col - 1);
    }
}

/*
    Solution using a map to keep track of visited element in a grid.
    This will use more memory and will be slower than the previous solution.
    However, this solution is better suited for real life situation where
    1. data is immutable
    2. data will be used elsewhere
*/

function numIslandsVisited(grid) {
    let count = 0;
    let visited = {};
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1' && !visited[`${i}-${j}`]) {
                count++;
                dfs(grid, visited, i, j);
            }
        }
    }
    
    return count;
}

function dfsWithVisited(grid, visited, row, col) {
    const path = `${row}-${col}`;
    // bound check
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || visited[path]) return;
    
    const value = grid[row][col];
    if (value === '1') {
        visited[path] = true;
        dfs(grid, visited, row + 1, col);
        dfs(grid, visited, row - 1, col);
        dfs(grid, visited, row, col + 1);
        dfs(grid, visited, row, col - 1);
    }
}