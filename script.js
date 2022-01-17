function $(name) {
    return document.querySelector(name);
}

function init() {
    if (localStorage.userName == undefined)
        changeName();
    else {
        $(".username").innerHTML = localStorage.userName;
        $(".lockUsername").innerHTML = localStorage.userName;
    }
}


function lock() {
    $(".time").innerHTML = new Date();
    $("body").style.overflow = "hidden";
    $(".lock").classList.add("showing");
    $(".test2").style.transform = "translateX(-15.5px)";
}

function unlock() {
    $("body").style.overflow = "auto";
    $(".lock").classList.remove("showing");
    $(".test2").style.transform = "translateX(0px)";
}

function changeName() {
    $("body").style.overflow = "hidden";
    $(".hello").style.display = "flex";
    $(".content").style.pointerEvents = "none";
    $(".headermenu").style.pointerEvents = "none";
    $(".timer").style.pointerEvents = "none";

}




function enterName() {

    localStorage.userName = $("#username").value;
    $(".hello").style.display = "none";
    $(".username").innerHTML = localStorage.userName;
    $("body").style.overflow = "scroll";
    $(".content").style.pointerEvents = "auto";
    $(".headermenu").style.pointerEvents = "auto";
    $(".timer").style.pointerEvents = "auto";

}




function calcTriangle() {
    $(".tri_result").innerHTML = $("#tri_h").value * $("#tri_b").value / 2;
}

let clock = undefined;
let clockLength = 0;

function checkStrings() {
    if ($("#first_str").value.length == $("#second_str").value.length) {
        $("#str_result").innerHTML = "Строки равны";
    } else {
        $("#str_result").innerHTML = "Ой-ёй";
    }
}


function tickTime() {
    //$(".date").innerHTML = new Date();
    clockLength++;
    $(".seconds").innerHTML = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(Math.floor(clockLength / 60)) + ":" +
        new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(clockLength % 60);
}

function insertTime() {
    clearTime(clock);
    clockLength = 0;
    clock = setInterval(tickTime, 1000);
}

function clearTime() {
    clearInterval(clock);

}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray.filter(function(e) {
        return isNumber(e);
    }));
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray.filter(function(e) {
        return isNumber(e);
    }));
}



function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }


function arrayOperations() {
    var arr = [];
    arr[0] = $("#n1").value;
    arr[1] = $("#n2").value;
    arr[2] = $("#n3").value;
    arr[3] = $("#n4").value;
    arr[4] = $("#n5").value;

    if (arr.every(function(e) { return !isNumber(e) }))
        $("#arr_result").innerHTML = " ";
    else $("#arr_result").innerHTML = "Max:" + getMaxOfArray(arr) + "\n" + "Min:" + getMinOfArray(arr);

}
document.addEventListener('DOMContentLoaded', init);

function analyzeStrings() {
    if (anagrams($("#first-ana").value, $("#second-ana").value)) {
        $("#result-ana").innerHTML = "Анаграмма";
    } else {
        $("#result-ana").innerHTML = "Не анаграмма";
    }
}

function anagrams(stringA, stringB) {

    stringA = stringA.toLowerCase()
    stringB = stringB.toLowerCase()

    if (stringA.length !== stringB.length) {
        return false
    }

    let arrB = stringB.split("")

    for (let char of stringA) {
        if (!arrB.includes(char)) {
            return false
            break;
        } else {
            arrB.splice(arrB.indexOf(char), 1)
        }
    }

    return true

}


function result() {
    let points = 0;

    if (document.getElementsByName("answer1")[4 - 1].checked) {

        points++;
        $(".test").children[0].children[0].style.color = "green";
    } else {
        $(".test").children[0].children[0].style.color = "red";
    }
    if (document.getElementsByName("answer2")[3 - 1].checked) {
        points++;
        $(".test").children[1].children[0].style.color = "green";
    } else {
        $(".test").children[1].children[0].style.color = "red";
    }
    if (document.getElementsByName("answer3")[1 - 1].checked) {
        points++;
        $(".test").children[2].children[0].style.color = "green";
    } else {
        $(".test").children[2].children[0].style.color = "red";
    }
    if (document.getElementsByName("answer4")[1 - 1].checked) {
        points++;
        $(".test").children[3].children[0].style.color = "green";
    } else {
        $(".test").children[3].children[0].style.color = "red";
    }
    if (document.getElementsByName("answer5")[4 - 1].checked) {
        points++;
        $(".test").children[4].children[0].style.color = "green";
    } else {
        $(".test").children[4].children[0].style.color = "red";
    }
    if (document.getElementsByName("answer6")[4 - 1].checked) {
        points++;
        $(".test").children[5].children[0].style.color = "green";
    } else {
        $(".test").children[5].children[0].style.color = "red";
    }
    if (document.getElementsByName("answer7")[2 - 1].checked) {
        points++;
        $(".test").children[6].children[0].style.color = "green";
    } else {
        $(".test").children[6].children[0].style.color = "red";
    }
    if (document.getElementsByName("answer8")[1 - 1].checked) {
        points++;
        $(".test").children[7].children[0].style.color = "green";
    } else {
        $(".test").children[7].children[0].style.color = "red";
    }
    if (document.getElementsByName("answer9")[4 - 1].checked) {
        points++;
        $(".test").children[8].children[0].style.color = "green";
    } else {
        $(".test").children[8].children[0].style.color = "red";
    }
    if (document.getElementsByName("answer10")[4 - 1].checked) {
        points++;
        $(".test").children[9].children[0].style.color = "green";
    } else {
        $(".test").children[9].children[0].style.color = "red";
    }
    $("#test_results").innerHTML = " Вы ответили правильно на " + points + " из " + (10) + " вопросов";
}


function findMaxLength() {
    var longest = $("#text").value.split('\n').sort(
        function(a, b) {
            return b.length - a.length;
        }
    )[0];
    $("#longest").innerHTML = longest;
}

function replaceStrings() {
    $("#char").innerHTML = getMax($("#to-replace").value);
    $("#result-replace").innerHTML = $("#to-replace").value.replaceAll(getMax($("#to-replace").value), $("#replace").value);
}


function getMax(str) {
    var max = 0,
        maxChar = '';
    str.split('').forEach(function(char) {
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
};