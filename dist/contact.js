export default function contactTab() {
    // selections
    const imgCont = document.querySelector("#img-cont");
    const navCont = document.querySelector("#nav-cont");
    const contentCont = document.querySelector("#content-cont")

    //change content
    while (contentCont.firstChild) {
        contentCont.removeChild(contentCont.firstChild);
    }

    // change image
    imgCont.style.backgroundImage = 'url("/src/assets/images/contact.jpg")';
    imgCont.style.backgroundSize = "cover";
    imgCont.style.borderTopLeftRadius = "30px";
    imgCont.style.borderBottomLeftRadius = "30px";

    // change active button
    const homeBtn = document.querySelector("#homeBtn");
    const menuBtn = document.querySelector("#menuBtn");
    const contBtn = document.querySelector("#contBtn");
    menuBtn.style.backgroundColor = "#FFB452";
    homeBtn.style.backgroundColor = "#FFB452";
    contBtn.style.backgroundColor = "#FFA737";
    homeBtn.style.fontSize = "1.5em";
    menuBtn.style.fontSize = "1.5em";
    contBtn.style.fontSize = "1.7em"
    homeBtn.style.boxShadow = "none";
    menuBtn.style.boxShadow = "none";
    contBtn.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";

    //create content
    contentCont.removeAttribute('style');
    const head = document.createElement("h1");
    const socials = document.createElement("div");
    const ig = document.createElement("img");
    const tw = document.createElement("img");
    const gh = document.createElement("img");
    const igHandle = document.createElement("span");
    const twHandle = document.createElement("span");
    const ghHandle = document.createElement("span");
    const igDiv = document.createElement("div");
    const twDiv = document.createElement("div");
    const ghDiv = document.createElement("div");
    const igLink = document.createElement("a");
    const twLink = document.createElement("a");
    const ghLink = document.createElement("a");
    igLink.href = "https://instagram.com/hekimian_";
    twLink.href = "https://twitter.com/guerreroHek"
    ghLink.href = "https://github.com/Hekimianz";
    igLink.target = "_blank";
    twLink.target = "_blank";
    ghLink.target = "_blank";
    igLink.style.textDecoration = "none";
    twLink.style.textDecoration = "none";
    ghLink.style.textDecoration = "none";
    igLink.style.color = "black";
    twLink.style.color = "black";
    ghLink.style.color = "black";
    igLink.style.fontSize = "1.5em";
    twLink.style.fontSize = "1.5em";
    ghLink.style.fontSize = "1.5em";
    igDiv.append(ig);
    igDiv.append(igHandle);
    twDiv.append(tw);
    twDiv.append(twHandle);
    ghDiv.append(gh);
    ghDiv.append(ghHandle);
    igLink.append(igDiv);
    twLink.append(twDiv);
    ghLink.append(ghDiv);
    igHandle.textContent = "Instagram";
    twHandle.textContent = "Twitter";
    ghHandle.textContent = "GitHub";
    ig.src = "/src/assets/images/ig.png";
    tw.src = "/src/assets/images/tw.png";
    gh.src = "/src/assets/images/gh.png";
    ig.style.width = "75px";
    ig.style.marginRight = "20px";
    tw.style.width = "75px";
    tw.style.marginLeft = "40px";
    tw.style.marginRight = "20px";
    gh.style.width = "75px";
    gh.style.marginLeft = "40px";
    gh.style.marginRight = "20px";
    socials.style.display = "flex";
    socials.style.justifyContent = "center";
    socials.style.alignItems = "center";
    igDiv.style.display = "flex";
    twDiv.style.display = "flex";
    ghDiv.style.display = "flex";
    igDiv.style.justifyContent = "center";
    twDiv.style.justifyContent = "center";
    ghDiv.style.justifyContent = "center";
    igDiv.style.alignItems = "center";
    twDiv.style.alignItems = "center";
    ghDiv.style.alignItems = "center";
    const email = document.createElement("span");
    email.textContent = "aramhekdesign@gmail.com";
    email.style.fontSize = "1.5em";
    email.style.marginBottom = "100px";
    email.style.letterSpacing = "1px";


    socials.append(igLink);
    socials.append(twLink)
    socials.append(ghLink);


    const mail = document.createElement("p");
    head.textContent = "Contact Us";
    head.style.fontSize = "2.5em";
    head.style.fontWeight = "bold";


    contentCont.style.display = "flex";
    contentCont.style.flexDirection = "column";
    contentCont.style.justifyContent = "space-evenly";
    contentCont.style.alignItems = "center";
    contentCont.style.textAlign = "center";
    contentCont.append(head);
    contentCont.append(socials);
    contentCont.append(email);




}

