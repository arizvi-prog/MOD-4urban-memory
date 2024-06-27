let button = document.querySelector('button');


function saveEntry() {

    let objs = JSON.parse(localStorage.getItem("objs") || '[]');

    let uname = document.getElementById("uname");
    let title = document.getElementById("title");
    let content = document.getElementById("content");

    let unameVal = uname.value;
    let titleVal = title.value;

    let contentVal = content.value;

    let objEntry = { 'uname': unameVal, 'title': titleVal, 'content': contentVal };

    objs.push(objEntry);
    localStorage.setItem("objs", JSON.stringify(objs));

}

button.addEventListener('click', saveEntry);
console.log(localStorage);