function listCreation (){
                var textData = document.getElementById("textInput").value;
                if (textData == ""){
                    return;
                }
                var ul = document.getElementById("task-list");
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