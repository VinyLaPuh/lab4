
// const button = document.getElementById('note1');
// if(!button == undefined){
//     button.addEventListener('click', function(e) {
//     console.log('Note was deleted');
    
//     button.classList.add('animate');
//     setTimeout(function() {
//         button.remove();
//     }, 800);
// });
// }




const AddButton = document.getElementById('add_note');
AddButton.addEventListener('click', function(e) {
console.log('Note was added');

var existingNodes = document.getElementsByClassName("notes");

if(existingNodes.length > 0){
    lastNote = 0;
    for (let index = 0; index < existingNodes.length; index++) {
        const Not = existingNodes[index];
        let ind =  Not.id.indexOf("_");
        if (ind == -1) {
            ind =  Not.id.indexOf("_");    
        }
        lastNote = Not.id.substr(parseInt(ind)+1, Not.id.length);
    }
    createNote(parseInt(lastNote)+1);

}
else {
    createNote("1");
}


});



function deleteNotes(){
    
            console.log('Note was deleted');
            
            event.target.parentElement.parentElement.classList.add('animate');
           
            document.getElementById(event.target.parentElement.parentElement.id).remove();
          
     
}


 


function createNote(num){
    var newNote = document.createElement("div");
    newNote.classList.add("notes");
    newNote.classList.add("animate");
    newNote.id = "note_" + num;

    var buttDelete = document.createElement("div");
    buttDelete.classList.add("delete_notes");
    newNote.appendChild(buttDelete);

    var imgDelete = document.createElement("img");
    imgDelete.src = "delete.png";
    imgDelete.addEventListener('click', deleteNotes);
    buttDelete.appendChild(imgDelete);
    
    setTimeout(function() {
        newNote.classList.remove("animate");
        
    }, 20);
    document.body.insertBefore(newNote, AddButton);

}