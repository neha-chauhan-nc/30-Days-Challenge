const inputarea=document.getElementById("inputArea");

const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputarea.value===''){
        alert("u must write something!")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputarea.value;
        listContainer.appendChild(li);
        
        let span=document.createElement("span");
        span.innerHTML='\u00d7'//X-cross sign will come
        li.appendChild(span)
        //add animation,scroll ane pr apne aap list neeche ki dikhe jb jyada list add ho hme scroll krna na pade 
        listContainer.scrollTo({top:listContainer.scrollHeight,behavior:"smooth"})//scroll behavior is"smooth"

    }
    inputarea.value=''//input box empty after adding a task
    saveData(); //when input take, then data should be save
}


//whenever press "enter" by writing smthing in input , tb bhi task add ho, so add eventlisterner on input
inputarea.addEventListener("keydown",(e)=>{
   // console.log(e) //wite in input a letter/word/smthing,then see in console, same for"button"first click on btn then see console
   if(e.key=="Enter"){ //equal to enter(when key/keybord press "enter")
    addTask();
   }
})

listContainer.addEventListener("click",(e)=>{
    console.log(e)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //add checked class or if add class(checked)then remove class

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();//parentElement(li) of span "remove"
        saveData()//when remove "li", deleted li ka data is saved
    }
})


//save data:-coz when we refresh,our data/checklist in todo is removed,it not saved,so we store/save data.so that when refresh data remains.
//set data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);//save/store data, of li present inside listContainer(ul)

}

//Now get/show data
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();



