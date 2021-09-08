function navtoAbout(){
    console.log("Nav to About");
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var ideas = document.getElementById("ideas");
    var clubs = document.getElementById("clubs");
    var store = document.getElementById("store");

    var aboutMenu = document.getElementById("aboutMenu");
    var ideasMenu = document.getElementById("ideasMenu");
    var clubsMenu = document.getElementById("clubsMenu");
    var storeMenu = document.getElementById("storeMenu");

    home.style.visibility = "hidden";
    about.style.visibility = "visible";
    ideas.style.visibility = "hidden";
    clubs.style.visibility = "hidden";
    store.style.visibility = "hidden";

    aboutMenu.style.backgroundColor = "#DFE8EF";
    ideasMenu.style.backgroundColor = "#E5E5E5";
    clubsMenu.style.backgroundColor = "#E5E5E5";
    storeMenu.style.backgroundColor = "#E5E5E5";
}

function navtoIdeas(){
    console.log("Nav to Ideas");
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var ideas = document.getElementById("ideas");
    var clubs = document.getElementById("clubs");
    var store = document.getElementById("store");

    var aboutMenu = document.getElementById("aboutMenu");
    var ideasMenu = document.getElementById("ideasMenu");
    var clubsMenu = document.getElementById("clubsMenu");
    var storeMenu = document.getElementById("storeMenu");

    home.style.visibility = "hidden";
    about.style.visibility = "hidden";
    ideas.style.visibility = "visible";
    clubs.style.visibility = "hidden";
    store.style.visibility = "hidden";

    aboutMenu.style.backgroundColor = "#E5E5E5";
    ideasMenu.style.backgroundColor = "#DFE8EF";
    clubsMenu.style.backgroundColor = "#E5E5E5";
    storeMenu.style.backgroundColor = "#E5E5E5";
}

function navtoClubs(){
    console.log("Nav to Clubs");
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var ideas = document.getElementById("ideas");
    var clubs = document.getElementById("clubs");
    var store = document.getElementById("store");

    var aboutMenu = document.getElementById("aboutMenu");
    var ideasMenu = document.getElementById("ideasMenu");
    var clubsMenu = document.getElementById("clubsMenu");
    var storeMenu = document.getElementById("storeMenu");

    home.style.visibility = "hidden";
    about.style.visibility = "hidden";
    ideas.style.visibility = "hidden";
    clubs.style.visibility = "visible";
    store.style.visibility = "hidden";

    aboutMenu.style.backgroundColor = "#E5E5E5";
    ideasMenu.style.backgroundColor = "#E5E5E5";
    clubsMenu.style.backgroundColor = "#DFE8EF";
    storeMenu.style.backgroundColor = "#E5E5E5";
}

function navtoStore(){
    console.log("Nav to Store");
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var ideas = document.getElementById("ideas");
    var clubs = document.getElementById("clubs");
    var store = document.getElementById("store");

    var aboutMenu = document.getElementById("aboutMenu");
    var ideasMenu = document.getElementById("ideasMenu");
    var clubsMenu = document.getElementById("clubsMenu");
    var storeMenu = document.getElementById("storeMenu");

    home.style.visibility = "hidden";
    about.style.visibility = "hidden";
    ideas.style.visibility = "hidden";
    clubs.style.visibility = "hidden";
    store.style.visibility = "visible";

    aboutMenu.style.backgroundColor = "#E5E5E5";
    ideasMenu.style.backgroundColor = "#E5E5E5";
    clubsMenu.style.backgroundColor = "#E5E5E5";
    storeMenu.style.backgroundColor = "#DFE8EF";
}

function navtoMeet(){
    window.open("https://www.canva.com/design/DAEpRT2HJyk/CqENK8IS4dQ07qjuU02UeQ/view?utm_content=DAEpRT2HJyk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton", '_blank');
}

function navtoExpectations(){
    window.open("https://docs.google.com/document/d/1lohCBs3GPTU20h9XzN4gGTlUAIbUvebIxC25vVQfL5c/edit?usp=sharing", '_blank');
}

function navtoSuggestions(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScMufg73eDS3c3rohp0IMI3OwcDjYhL5WTGPNtPhROHGLLlMw/viewform?usp=sf_link", '_blank');
}
