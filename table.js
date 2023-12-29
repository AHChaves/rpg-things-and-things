var tableObj = document.getElementById("tabela");
var cellCounts = tableObj.rows[0].cells.length;

function addRow(){
    var newRow = tableObj.insertRow(rowLength);
    var rowLength =  tableObj.rows.length;

    for(var i=0; i < cellCounts; i++){
        var newCell = newRow.insertCell(i);
        newRow.cells[0].innerHTML = rowLength - 1;

        if(i != 0){
            newCell.setAttribute("contenteditable", "true");
        }

    

    }
}

