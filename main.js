window.onload = function (){
    var valueFromStorage = localStorage.getItem("storageValue");
    if (valueFromStorage) document.getElementById("textfield").value = valueFromStorage;
};

var save = document.getElementById("save");
var remove = document.getElementById("remove");

save.onclick = function (){
    var inputValue = document.getElementById("textfield").value;
    localStorage.setItem("storageValue",inputValue);
};

remove.onclick = function (){
    document.getElementById("textfield").value = " ";
    localStorage.removeItem("storageValue");
};