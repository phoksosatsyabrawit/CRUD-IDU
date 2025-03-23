//showForm
function btnshow(){
   document.getElementById("contain").style.display="block";
   document.getElementById("close").style.display="block";
   document.getElementById("show").style.display="none";
}
// //hideForm
function btnclose(){
    document.getElementById("contain").style.display="none";
    document.getElementById("show").style.display="block";
    document.getElementById("close").style.display="none";
}
//formatstring  
function format(num){
    return String(num).padStart(3,'0');
}
//add value to table
function addemp(){
    // alert("Hello world!");
    const empName = document.getElementById("empname").value;
    const empPost = document.getElementById("emppost").value;
    const hireDate = document.getElementById("hiredate").value;
    const payLoad= document.getElementById("payload");
    
    if (!empName || !empPost || !hireDate) {
        alert("Please fill all fields!");
        return;
    }
    
    var rowcount = payLoad.rows.length;
    var addrow = payLoad.insertRow();
    var values = [format(rowcount + 1), empName, empPost, hireDate];
    
    values.forEach((val, i) => addrow.insertCell(i).innerHTML = val);
    
    // Add action buttons
    addrow.insertCell().innerHTML = `
        <button class="btn btn-success btn-sm edit" onclick="editRow(this)">Edit</button>
        <button class="btn btn-warning btn-sm delete" onclick="deleteRow(this)">Delete</button>
    `;
    
    // Clear input fields
    ["empname", "emppost", "hiredate"].forEach(id => document.getElementById(id).value = "");

    // var rowcount = payLoad.rows.length;
    // var addrow = payLoad.insertRow();
    // var cell1 = addrow.insertCell();
    // var cell2 = addrow.insertCell();
    // var cell3 = addrow.insertCell();
    // var cell4 = addrow.insertCell();
    // var cell5 = addrow.insertCell();
    // if(payLoad.rows.length){
    //     cell1.innerHTML=`
    //         <td>${format(rowcount+1)}</td>
    //     `;
    //         cell2.innerHTML=`
    //         <td>${empName}</td>
    //     `;
    //         cell3.innerHTML=`
    //         <td>${empPost}</td>
    //     `;
    //         cell4.innerHTML=`
    //         <td>${hireDate}</td>
    //     `;
    //         cell5.innerHTML=`
    //         <td>
    //         <button class="btn btn-success btn-sm edit" onclick="editRow(this)">Edit</button>
    //         <button class="btn btn-warning btn-sm delete" onclick="deleteRow(this)">Delete</button>
    //         </td>
    //     `;
    //     //clear after added
    //     document.getElementById("empname").value = "";
    //     document.getElementById("emppost").value = "";
    //     document.getElementById("hiredate").value = "";
    // };
}
//Function to update row numbers after deletion
function updateRowNumbers() {
    var rows = document.querySelectorAll("#payload tr");
    rows.forEach((row, index) => {
        row.cells[0].innerText = format(index + 1); // Update row number
    });
}
 //Function to delete a row
function deleteRow(button) {
    var row = button.parentNode.parentNode; // Get the row of the clicked button
    row.parentNode.removeChild(row); // Remove the row from the table
    updateRowNumbers();
}
//Function to edit a row
function editRow(button) {
    var row = button.closest("tr"); // Get the row of the clicked button
    var cells = row.getElementsByTagName("td");

    // Get existing values
    var empName = cells[1].innerText;
    var empPost = cells[2].innerText;
    var hireDate = cells[3].innerText;

    // Populate input fields with existing values
    document.getElementById("empname").value = empName;
    document.getElementById("emppost").value = empPost;
    document.getElementById("hiredate").value = hireDate;

    // Delete the row being edited
    deleteRow(button);
}







