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


// создание списка и заполнение элементами списка ----------------------
var div = document.getElementById('heroes-ul');

var newUl = document.createElement('ul');
newUl.id = 'heroes_id_ul';

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

        // вывод элементов в dashboard ---------------------------------------
        var element = document.getElementById('hero-dashboard');
        element.remove();

        var newheroDiv = document.createElement('div');
        newheroDiv.id = "hero-dashboard";
        topheroes.appendChild(newheroDiv);


        var heroDiv = newheroDiv;//document.getElementById('hero-dashboard');

        for (var i = 0; i < heroes.length; i++) {
            var newDiv = document.createElement('div');
            newDiv.className = "hero-bar";
            newDiv.innerHTML = '<a href="#" class="heroname">'+ heroes[i].name +'</a>';
            heroDiv.appendChild(newDiv);
            newDiv.addEventListener("click", hideDash, true);
        }


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


// вывод детальной информации о хероях ----------------

function hideDash() {

    var chosenHero = this.innerText;
    var chosenHeroId = 0;
    // ---------вычисление ID хероя -----------
    for (var i = 0; i < heroes.length; i++) {
        if (heroes[i].name == chosenHero) {
            chosenHeroId = heroes[i].id;
        }
    }
    console.log(chosenHeroId);
    var saveBtn = document.getElementById('save-btn');
    saveBtn.onclick = function () {
        for (var i = 0; i < heroes.length; i++) {
            if (heroes[i].id == chosenHeroId) {
                heroes[i].name = inputHeroName.value;
            }
        }

        var element = document.getElementById('heroes_id_ul');
        element.remove();

        var heroes_ul = document.getElementById('heroes-ul');

        var newUl = document.createElement('ul');
        newUl.id = "heroes_id_ul";
        heroes_ul.appendChild(newUl);


        var div = document.getElementById('heroes_id_ul');

        //var newUl = document.createElement('ul');

        for (var i = 0; i < heroes.length; i++) {
            var newLi = document.createElement('li');
            newLi.innerHTML = '<a href="#"><span class = "badge">' + heroes[i].id + '</span><p>' + heroes[i].name + '</p><button class = "delete" onclick="removeHero()">x</button></a>';
            newUl.appendChild(newLi);
        }
        heroes_ul.appendChild(newUl);

    }


    var heroDetailName = document.getElementById('p_name');
    var heroDetailId = document.getElementById('p_id');
    var inputHeroName = document.getElementById('input_name');
    heroDetailName.innerHTML = 'Name: ' + chosenHero;
    heroDetailId.innerHTML = 'ID: ' + chosenHeroId;
    inputHeroName.value = chosenHero;
    dashId.className = 'dashboard-hidden';
   detailId.className = 'dashboard-visible';

}


// поиск элементов в массиве хероев ---------------------
var searchinput = document.getElementById('herosearch');
searchinput.oninput = function() {
    //document.getElementById('result').innerHTML = searchinput.value;
    //searchresult.remove('li');
    var element = document.getElementById('searchresult');
        element.remove();

    var newUl = document.createElement('ul');
    newUl.id = "searchresult";
    newId.appendChild(newUl);

    var numberFoundHeroes = 0;
        for (var i=0; i < heroes.length; i++) {
        var heroIndex = heroes[i].name.indexOf(searchinput.value, 0);
        if (heroIndex !==-1 && searchinput.value !==''){

            numberFoundHeroes++;
            //console.log('index of hero: ' + i);
            NewLi = document.createElement('li');
            NewLi.innerHTML = '<a href="#">' + heroes[i].name + '</a>';

            searchresult.appendChild(NewLi);
        }
    }
   
};

