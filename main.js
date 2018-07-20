var index = 1;
showdiv(index);

function getdiv(n) {
    showdiv(index += n);
}

function showdiv(n) {
    var i;
    var a = document.getElementsByClassName("slide");
    if (n > a.length) {
        index = 1;
    }
    if (n < 1) {
        index = a.length;
    }
    for (i = 0; i < a.length; i++) {
        a[i].style.display = "none";
    }
    a[index - 1].style.display = "block";
}

filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterImg");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}