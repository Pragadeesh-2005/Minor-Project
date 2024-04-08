var ip=document.getElementById('ip')
var table=document.getElementById('list-table')
var input1=document.getElementById('input1')
var input2=document.getElementById('input2')
var input3=document.getElementById('input3')
function add(){
    var row=document.createElement('tr')

    var col1=document.createElement('td')
    col1.innerHTML=input1.value
    
    var col2=document.createElement('td')
    col2.innerHTML=input2.value

    var col3=document.createElement('td')
    col3.innerHTML=input3.value

    var col4=document.createElement('td')
    col4.innerHTML="<button onclick='del(event)'>DELETE</button><button onclick='up(event)'>UPDATE</button>"

   
    row.append(col1)
    row.append(col2)
    row.append(col3)
    row.append(col4)
    table.append(row)
    input1.value='';
    input2.value='';
    input3.value='';
    input4.value='';

}
function del(event) {
    event.target.parentElement.parentElement.remove()
}

function up(event){
    
    
    var x=event.target.parentElement.parentElement.childNodes[0].textContent;
    console.log(x);
    input1.value=x;
  
    var y=event.target.parentElement.parentElement.childNodes[1].textContent;
    input2.value=y;
   var z=event.target.parentElement.parentElement.childNodes[2].textContent;
    input3.value=z;
    event.target.parentElement.parentElement.remove();
    
}