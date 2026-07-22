onload= function(){//when load randomly arrange
    let parent=document.getElementById("drag")
    let frag= document.createDocumentFragment();//divides in fragment( to drag)  
    while(parent.children.length){
        frag.appendChild(parent.children[Math.floor(Math.random() + parent.children.length)]);
    }          
    parent.appendChild(frag);

}


//to drag & drop , create func.
function drag(event){ //now, index.html start the drag to get "id"
    console.log(event)
    event.dataTransfer.setData("text", event.target.id)//set data

}

function dropOver(event){
event.preventDefault();

}


function drop(event){
    let data=event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    
}