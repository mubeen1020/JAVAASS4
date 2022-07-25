
    function removeDummy() {
        var elem = document.getElementById('dummy');
        elem.parentNode.removeChild(elem);
        return false;
    }



    var parent=document.getElementById('main'); 

function createele(){
    var newpera=document.createElement('p');    
    var newtext=document.getElementById('dummy').value;  
    newtext=document.createTextNode(newtext);  
    newpera.appendChild(newtext);  
    parent.appendChild(newpera);   
    console.log(newpera);   
}
function edit(){

    edittext=prompt("enter text")
}
edit();