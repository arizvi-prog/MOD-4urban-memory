let entries = document.getElementById("entries");

let numEntries = localStorage.length;

let allEntries = JSON.parse(localStorage.getItem("objs"));
console.log(allEntries);

// for(let i = 0; i < numEntries; i++) {
//     // let uname = 
//     // let title = 
//     // let content = 

//     createEntry();


// }

function createEntry() {
    let entry = document.createElement("div");
    entry.classList.add("entry");

    let title = document.createElement("p");
    title.classList.add("title");
    

    let content = document.createElement("p");
    content.classList.add("content");
    

    let uname = document.classList.add("uname");
    uname.classList.add("uname");
    

    entry.appendChild(content);
    entry.appendChild(title);
    entry.appendChild(uname);

    entries.appendChild(entry);
}

console.log(localStorage);

