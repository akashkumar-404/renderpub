function Tablefunc({cell}){
    var M = 8;
    var N = 8;

    // A recursive function to replace
    // previous color 'prevC' at '(x, y)'
    // and all surrounding pixels of (x, y)
    // with new color 'newC' and
    function floodFillUtil(screen, x, y, prevC, newC)
    {
     
      // Base cases
      if (x < 0 || x >= M || y < 0 || y >= N) return;
      if (screen[x][y] != prevC) return;

      // Replace the color at (x, y)
      screen[x][y] = newC;

      // Recur for north, east, south and west
      floodFillUtil(screen, x + 1, y, prevC, newC);
      floodFillUtil(screen, x - 1, y, prevC, newC);
      floodFillUtil(screen, x, y + 1, prevC, newC);
      floodFillUtil(screen, x, y - 1, prevC, newC);
    }

    // It mainly finds the previous color
    // on (x, y) and calls floodFillUtil()
    function floodFill(screen, x, y, newC) {
      var prevC = screen[x][y];
      if (prevC == newC) return;
      floodFillUtil(screen, x, y, prevC, newC);
    }

    // Driver code
    var screen = document.getElementsByTagName("table")[0];
    var rows = screen.getElementsByTagName("tr");
    var x = this.rowIndex+1,
      y = this.positionIndex+1,
      newC = cell;
      let bag=''
    floodFill(screen, x, y, newC);

    console.log("Updated screen after" + "call to floodFill: <br>");
    for (var i = 0; i < M; i++) {
      for (var j = 0; j < N; j++) bag=bag+screen[i][j] + " ";

      console.log(bag)
      console.log("<br>");
    }
}

export default Tablefunc;