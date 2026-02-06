function listCreation (){
  
                let textData = document.getElementById("textInput").value;
                if (textData == ""){
                    return;
                }
				
                let ul = document.getElementById("task-list");
				
                let listItem = document.createElement("li");
				
		// checkbox
				const checkb = document.createElement('input');
              	checkb.type = "checkbox";
              	
              	checkb.onclick = function () {
                  listItem.classList.toggle("text-decoration-line-through");
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
				
                let listBgone = document.createElement("button");
                listBgone.addEventListener("click", function (){
                    listItem.remove();
                });
				
                listBgone.className = "btn btn-danger";
                listBgone.innerHTML = "dzēst";
                listItem.className = "list-group-item d-flex justify-content-between align-items-center";
                listItem.innerHTML = textData;
				listItem.appendChild(prioritIndikator);
				listItem.appendChild(checkb);
                listItem.appendChild(listBgone);
                ul.appendChild(listItem);
            }
function saveData() {
	let data = document.querySelectorAll('li');
	localStorage.setItem('data', JSON.stringify(data));
}

function loadData() {
	let dataRetrieve = localStorage.getItem('data');
}

loadData();
