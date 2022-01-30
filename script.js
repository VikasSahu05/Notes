let addBtn = document.getElementById('addbtn');
    showNotes();

addBtn.addEventListener('click',function(e){
    e.preventDefault();
    let addTxt = document.getElementById('addtxt');
    let txt = document.getElementById('addtxt').value;
    let notes =  localStorage.getItem('notes');
    if(txt == ""){
        alert('Name sajcbjs');
        return false;
    }
    if(notes == null ){
        noteObj = [];
    }else{
        noteObj = JSON.parse(notes);
    }
    noteObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(noteObj));
    addTxt.value="";
    // console.log(noteObj);
    showNotes();
});
function showNotes(){
    let notes = localStorage.getItem('notes');

    if(notes == null){
        noteObj = [];
    }else{
        noteObj = JSON.parse(notes);
    }

    let html="";
    noteObj.forEach(function(element,index){
        html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p>${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" type="button" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    });
    let notesElm = document.getElementById('notes');
    if(noteObj.length!=0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `Nothing to show! Use "Add a notes" section above to the notes`;
    }
}

function deleteNote(index){
    // console.log('Deleting',index);
    let notes = localStorage.getItem('notes');

    if(notes == null){
        noteObj = [];
    }else{
        noteObj = JSON.parse(notes);
    }

    noteObj.splice(index,1);  //staring index se leta hai aur litne element delete karna chahte hai wo yaha hum 1 element delete kar rhe hai to 1
    localStorage.setItem("notes",JSON.stringify(noteObj)); 
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputVal = search.value;
    // console.log('Input event field',inputVal);

    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";

        }
    });
});
// localStorage.clear();




