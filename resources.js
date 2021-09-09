function navtoHome(){
    // UPDATING ELEMENT DISPLAYED
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var ideas = document.getElementById("ideas");
    var clubs = document.getElementById("clubs");
    var store = document.getElementById("store");

    home.style.visibility = "visible";
    about.style.visibility = "hidden";
    ideas.style.visibility = "hidden";
    clubs.style.visibility = "hidden";
    store.style.visibility = "hidden";

    // UPDATING MENU ITEM HIGHLIGHTED
    var homeImg = document.getElementById("homeMenuImg");
    var aboutImg = document.getElementById("aboutMenuImg");
    var ideasImg = document.getElementById("ideasMenuImg");
    var clubsImg = document.getElementById("clubsMenuImg");
    var storeImg = document.getElementById("storeMenuImg");

    homeImg.src = "home-blue.png";
    aboutImg.src = "about.png";
    ideasImg.src = "ideas.png";
    clubsImg.src = "clubs.png";
    storeImg.src = "store.png";
}

function navtoAbout(){
    // UPDATING ELEMENT DISPLAYED
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var ideas = document.getElementById("ideas");
    var clubs = document.getElementById("clubs");
    var store = document.getElementById("store");

    home.style.visibility = "hidden";
    about.style.visibility = "visible";
    ideas.style.visibility = "hidden";
    clubs.style.visibility = "hidden";
    store.style.visibility = "hidden";

    // UPDATING MENU ITEM HIGHLIGHTED
    var homeImg = document.getElementById("homeMenuImg");
    var aboutImg = document.getElementById("aboutMenuImg");
    var ideasImg = document.getElementById("ideasMenuImg");
    var clubsImg = document.getElementById("clubsMenuImg");
    var storeImg = document.getElementById("storeMenuImg");

    homeImg.src = "home.png";
    aboutImg.src = "about-blue.png";
    ideasImg.src = "ideas.png";
    clubsImg.src = "clubs.png";
    storeImg.src = "store.png";
}

function navtoIdeas(){
    // UPDATING ELEMENT DISPLAYED
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var ideas = document.getElementById("ideas");
    var clubs = document.getElementById("clubs");
    var store = document.getElementById("store");

    home.style.visibility = "hidden";
    about.style.visibility = "hidden";
    ideas.style.visibility = "visible";
    clubs.style.visibility = "hidden";
    store.style.visibility = "hidden";

   // UPDATING MENU ITEM HIGHLIGHTED
    var homeImg = document.getElementById("homeMenuImg");
    var aboutImg = document.getElementById("aboutMenuImg");
    var ideasImg = document.getElementById("ideasMenuImg");
    var clubsImg = document.getElementById("clubsMenuImg");
    var storeImg = document.getElementById("storeMenuImg");

    homeImg.src = "home.png";
    aboutImg.src = "about.png";
    ideasImg.src = "ideas-blue.png";
    clubsImg.src = "clubs.png";
    storeImg.src = "store.png";
}

function navtoClubs(){
    // UPDATING ELEMENT DISPLAYED
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var ideas = document.getElementById("ideas");
    var clubs = document.getElementById("clubs");
    var store = document.getElementById("store");

    home.style.visibility = "hidden";
    about.style.visibility = "hidden";
    ideas.style.visibility = "hidden";
    clubs.style.visibility = "visible";
    store.style.visibility = "hidden";
    
    // UPDATING MENU ITEM HIGHLIGHTED
    var homeImg = document.getElementById("homeMenuImg");
    var aboutImg = document.getElementById("aboutMenuImg");
    var ideasImg = document.getElementById("ideasMenuImg");
    var clubsImg = document.getElementById("clubsMenuImg");
    var storeImg = document.getElementById("storeMenuImg");

    homeImg.src = "home.png";
    aboutImg.src = "about.png";
    ideasImg.src = "ideas.png";
    clubsImg.src = "clubs-blue.png";
    storeImg.src = "store.png";
}

function navtoStore(){
    // UPDATING ELEMENT DISPLAYED
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var ideas = document.getElementById("ideas");
    var clubs = document.getElementById("clubs");
    var store = document.getElementById("store");

    home.style.visibility = "hidden";
    about.style.visibility = "hidden";
    ideas.style.visibility = "hidden";
    clubs.style.visibility = "hidden";
    store.style.visibility = "visible";

    // UPDATING MENU ITEM HIGHLIGHTED
    var homeImg = document.getElementById("homeMenuImg");
    var aboutImg = document.getElementById("aboutMenuImg");
    var ideasImg = document.getElementById("ideasMenuImg");
    var clubsImg = document.getElementById("clubsMenuImg");
    var storeImg = document.getElementById("storeMenuImg");

    homeImg.src = "home.png";
    aboutImg.src = "about.png";
    ideasImg.src = "ideas.png";
    clubsImg.src = "clubs.png";
    storeImg.src = "store-blue.png";
}

// EXTERNAL LINKS
function navtoMeet(){
    window.open("https://www.canva.com/design/DAEpRT2HJyk/CqENK8IS4dQ07qjuU02UeQ/view?utm_content=DAEpRT2HJyk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton", '_blank');
}

function navtoExpectations(){
    window.open("https://docs.google.com/document/d/1lohCBs3GPTU20h9XzN4gGTlUAIbUvebIxC25vVQfL5c/edit?usp=sharing", '_blank');
}

function navtoSuggestions(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScMufg73eDS3c3rohp0IMI3OwcDjYhL5WTGPNtPhROHGLLlMw/viewform?usp=sf_link", '_blank');
}
