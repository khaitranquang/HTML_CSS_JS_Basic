/**
 * Created by User on 8/7/2017.
 */
// Check if is integer
function isInteger(num) {
    if(parseInt(num) == num) return true;
    else return false;
}

function TaoTable() {
    var so_dong = document.getElementById("so_dong");
    var so_cot = document.getElementById("so_cot");
    // var tong = document.getElementById("tong");

    if(isInteger(so_dong.value) && isInteger(so_cot.value)){
        /*Tao table
        <table>
            <tr>
                <td> </td>
                <td> </td>
            </tr>
        </table>
         */
        var divId = document.getElementById("container_table");
        var soDong = parseInt(so_dong.value);
        var soCot  = parseInt(so_cot.value);

        //Tao the table
        var tagTable = document.createElement("table");
        tagTable.border = 1;

        for (var i = 0; i < soDong; i++){
            // Tao the dong
            var tagTR = document.createElement("tr");
            tagTable.appendChild(tagTR);
            //Tao cot
            for (var j = 0; j < soCot; j++){
                var tagTD = document.createElement("td");
                var textNode = document.createTextNode(i + ", " + j);
                tagTD.appendChild(textNode);
                tagTR.appendChild(tagTD);
            }
        }

        divId.appendChild(tagTable);
        divId.appendChild(document.createElement("br"))
        return true;
    }
    else{
        alert("Please enter integer number(s)");
        return false;
    }
}