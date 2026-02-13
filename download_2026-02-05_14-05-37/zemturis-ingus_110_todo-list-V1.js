/*Ingus Zemturis V1*/
/*Elizaveta Fedosova V2*/

function listCreation (){
    let textData = document.getElementById("textInput").value;
    if (textData == ""){
        return;
    }
	const textSpan = document.createElement("span");
	textSpan.textContent = textData;
	textSpan.className = "task-text";
	
    let ul = document.getElementById("task-list");
	
    let listItem = document.createElement("li");
	
// checkbox
	const checkb = document.createElement('input');
    checkb.type = "checkbox";

    checkb.onclick = function () {
        listItem.classList.toggle("text-decoration-line-through");
		saveData();
    };
// prioritate
	let prioritates = document.getElementById('prioritates');
	let prioritVertiba = prioritates.value;
	
    const prioritIndikator = document.createElement('span');
    prioritIndikator.textContent = prioritVertiba + " ";
	
    if (prioritVertiba === "Svarīgi") {
        prioritIndikator.className = "badge badge-pill bg-danger";
    }
	else if (prioritVertiba === "Vidēja") {
        prioritIndikator.className = "badge badge-pill bg-warning";
    }
	else {
		prioritIndikator.className = "badge badge-pill bg-success";
	}
// dzēšanas poga
    let listBgone = document.createElement("button");
        listBgone.addEventListener("click", function (){
        listItem.remove();
		saveData();
    });
	
    listBgone.className = "btn btn-danger";
    listBgone.innerHTML = "dzēst";
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.appendChild(textSpan);
	listItem.appendChild(prioritIndikator);
	listItem.appendChild(checkb);
    listItem.appendChild(listBgone);
    ul.appendChild(listItem);
	saveData();
}
function saveData() {
	let items = document.querySelectorAll('li');
	let data = [];
	items.forEach(item => {
        let taskText = item.querySelector('.task-text').textContent;
        let prioritate = item.querySelector('.badge').textContent.trim();
        let checkb = item.querySelector('input[type="checkbox"]').checked;
		let krasa = item.querySelector('.badge').className;
		
		data.push({
            taskText: taskText,
            prioritate: prioritate,
            checkb: checkb,
			krasa: krasa
        });
    });
	
	localStorage.setItem('info', JSON.stringify(data));
}

function loadData() {
	let info = localStorage.getItem('info');
	if (!info) return;
	let data = JSON.parse(info);
	let ul = document.getElementById("task-list");
	ul.innerHTML = "";
	data.forEach(item => {
		const textSpan = document.createElement("span");
		textSpan.textContent = item.taskText;
		textSpan.className = "task-text";
		
        let listItem = document.createElement("li");
				
	// checkbox
		const checkb = document.createElement('input');
        checkb.type = "checkbox";
		checkb.checked = item.checkb;
		
		if (item.checkb) {
			listItem.classList.add("text-decoration-line-through");
		}
        
        checkb.onclick = function () {
            listItem.classList.toggle("text-decoration-line-through");
			saveData();
        };
	// prioritate
		let prioritates = document.getElementById('prioritates');
		let prioritVertiba = prioritates.value;
	
        const prioritIndikator = document.createElement('span');
		prioritIndikator.textContent = item.prioritate;
		prioritIndikator.className = item.krasa;
		
	// dzēšanas poga
        let listBgone = document.createElement("button");
        listBgone.addEventListener("click", function (){
            listItem.remove();
			saveData();
        });
		
        listBgone.className = "btn btn-danger";
        listBgone.innerHTML = "dzēst";
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.appendChild(textSpan);
		listItem.appendChild(prioritIndikator);
		listItem.appendChild(checkb);
        listItem.appendChild(listBgone);
        ul.appendChild(listItem);
    });
}

window.addEventListener("DOMContentLoaded", loadData);
