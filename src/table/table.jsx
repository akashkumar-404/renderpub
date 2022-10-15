import React from 'react'
import  Tablefunc  from './func';

export const Table = () => {

    var table = document.getElementsByTagName("table")[0];
    // Get all the rows in the table
    var rows = table.getElementsByTagName("tr");
    
    for (var i = 0; i < rows.length; i++) {
        //Get the cells in the given row
        var cells = rows[i].getElementsByTagName("td");
        for (var j = 0; j < cells.length; j++) {
            // Cell Object
            var cell = cells[j];
            cell.rowIndex = i;
            cell.positionIndex = j;
            cell.totalCells = cells.length;
            cell.totalRows = rows.length;
            // Track with onclick
            //console.log(cell);
            cell.onclick = function () {
                alert("I am in row " + (this.rowIndex+1) + " (out of " + this.totalRows + " rows) and I am position " + (this.positionIndex+1) + " (out of " + this.totalCells + " cells)");
                console.log(cell);
                <Tablefunc  table={table} cell={cell}/>
            };
        }
    }
   
   
    

  return (
    <div>
        <table>
    <tbody>
        <tr>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
        </tr>

        <tr>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
        </tr>

        <tr>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
        </tr>
        <tr>
        <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='gold'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
        </tr>
        <tr>
        <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
        </tr>
        <tr>
        <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
        </tr>
        <tr>
        <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
        </tr>

        <tr>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='red'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='teal'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='violet'></td>
        </tr>
        <tr>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
        </tr>
        <tr>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='green'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
            <td style={{border:'1px solid',width:'40px',height:'25px'}} className='purple'></td>
        </tr>
    </tbody>
</table>
    </div>
  )
}
