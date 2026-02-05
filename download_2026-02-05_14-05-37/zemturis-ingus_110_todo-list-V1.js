let izveletaPriorit = "Vidēja";	

document.querySelectorAll("#prioritates option").forEach(item => {
    item.onclick = function (e) {
        e.preventDefault();
        izveletaPrioritate = this.value;
    };
});

function listCreation (){
  
                var textData = document.getElementById("textInput").value;
                if (textData == ""){
                    return;
                }
                var ul = document.getElementById("task-list");
                const prioritate = izveletaPrioritate;
	
              	const prioritIndikator = document.createElement('span');
              	prioritIndikator.textContent = prioritate + " ";
                if (prioritate = "Svarīgi") {
                  prioritIndikator.className = "bg-danger";  // !
                }
              	
              	const checkb = document.createElement('input');
              	checkb.type = "checkbox";
              	
              	checkb.onclick = function () {
                  textContent.classList.toggle("classList.toggle");
              	};
                var listItem = document.createElement("li");
                var listBgone = document.createElement("button");
                listBgone.addEventListener("click", function (){
                    listItem.remove();
                });
                listBgone.className = "btn btn-danger";
                listBgone.innerHTML = "dzēst";
                listItem.className = "list-group-item d-flex justify-content-between align-items-center";
                listItem.innerHTML = textData;
                listItem.appendChild(listBgone);
                ul.appendChild(listItem);
            }
