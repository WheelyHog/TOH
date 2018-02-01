// имеется массив хероев -----------------

var heroes = [
    {id: 11, name: "Mr. Nice"},
    {id: 12, name: "Narco"},
    {id: 13, name: "Bombasto"},
    {id: 14, name: "Celeritas"},
    {id: 15, name: "Magneta"},
    {id: 16, name: "RubberMan"},
    {id: 17, name: "Dynama"},
    {id: 18, name: "Dr IQ"},
    {id: 19, name: "Magma"},
    {id: 20, name: "Tornado"}
];

//console.log( heroes[3].id );

// создание списка и заполнение элементами списка ----------------------
var div = document.getElementById('heroes-ul');

var newUl = document.createElement('ul');

for (var i = 0; i < heroes.length; i++) {
    var newLi = document.createElement('li');
    newLi.innerHTML = '<a href="#"><span class = "badge">'+ heroes[i].id + '</span><p>'+ heroes[i].name + '</p><button class = "delete" onclick="removeHero()">x</button></a>';
    newUl.appendChild(newLi);
}

div.appendChild(newUl);
// переключение между доской и таблицей -------------------------
var buttons = document.querySelectorAll('button');
buttons.forEach (function(elem) {
    elem.addEventListener('click', changeState, true)
});

var dashId = document.getElementById('dash');
var tabId = document.getElementById('table');
var detailId = document.getElementById('hero-details');

function changeState () {
    if (this.id == 'dashboard') {
        tabId.className = 'dashboard-hidden';
        dashId.className = 'dashboard-visible';
        detailId.className = 'dashboard-hidden ';
    }
    else {
        tabId.className = 'dashboard-visible';
        dashId.className = 'dashboard-hidden';
        detailId.className = 'dashboard-hidden ';
    };

}

// добавление хероев в список и вывод в таблицу ------------------------
function addHero () {
    var newhero = document.getElementById('heroname').value;
    if (newhero != "") {
        heroes.push({id:(heroes[heroes.length-1].id)+1, name: newhero});
    }
    else return;
    var newLi = document.createElement('li');
    newLi.innerHTML = '<a href="#"><span class = "badge">'+ heroes[heroes.length-1].id + '</span><p>'+ heroes[heroes.length-1].name + '</p><button class = "delete" onclick="removeHero()">x</button></a>';
    newUl.appendChild(newLi);
    document.getElementById('heroname').value = "";

}

// удаление хероев из списка и массива ----------------------------------------

function removeHero () {
    //console.log(this.event.target.parentNode.parentNode);
    var remHero = this.event.target.parentNode.parentNode;
    remHero.remove();
    var heroNumber = remHero.getElementsByClassName("badge")[0].textContent;
    //console.log("heroNumber=" + heroNumber);

    // --нахождение индекса удаляемого элемента --
    var findHeroIndex = function(arr, needId){
        return arr.findIndex(function(element){return element.id ===needId});
    }
    //console.log(findHeroIndex(heroes, +heroNumber));
    //--------------------------------------------

    heroes.splice(findHeroIndex(heroes, +heroNumber), 1);

}
// вывод элементов в dashboard ---------------------------------------
var heroDiv = document.getElementById('hero-dashboard');

for (var i = 0; i < heroes.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.className = "hero-bar";
    newDiv.innerHTML = '<a href="#" onclick="hideDash()">'+ heroes[i].name +'</a>';
    heroDiv.appendChild(newDiv);
}
// вывод детальной информации о хероях ----------------
function hideDash() {
    dashId.className = 'dashboard-hidden';
    detailId.className = 'dashboard-visible ';
}

// поиск элементов в массиве хероев ---------------------

var searchinput = document.getElementById('herosearch');
searchinput.oninput = function() {
    document.getElementById('result').innerHTML = searchinput.value;

    var findHeroName = function(arr, needName){
        return arr.findIndex(function(element){return element.name ===needName});
    }
    console.log(findHeroName(heroes, searchinput.value));
};

var needle = 'Ma';

var findHeroByname = function(arr, needle){
    return arr.findIndex(function(element){return element.name.includes(needle)});
}

console.log(findHeroByname(heroes, 'Ma'));