function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="noteCard m-2 card">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-danger">Delete Note</button>
        </div>
    </div>
    `;
  });
  let notesElm= document.getElementById('notes')
  if(notesObj.length !=0){
    notesElm.innerHTML=html
  }else{
    notesElm.innerHTML= `Nothing to show! Create your first note!`
  }
}
