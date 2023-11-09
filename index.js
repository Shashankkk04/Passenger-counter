let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count=0
function counting(){
    count+=1
    countEl.textContent=count
}

function save(){
    saveEl.textContent+=count+" - "
}

function reseting(){
    countEl.textContent=0
}

function clearing(){
    saveEl.textContent="Previous entries: "
}