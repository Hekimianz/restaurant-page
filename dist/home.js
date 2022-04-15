export default function homeTab() {

    // selections
    const imgCont = document.querySelector("#img-cont");
    const navCont = document.querySelector("#nav-cont");
    const contentCont = document.querySelector("#content-cont")

    //change content
    while (contentCont.firstChild) {
        contentCont.removeChild(contentCont.firstChild);
    }

    // change image
    imgCont.style.backgroundImage = 'url("/src/assets/images/home.jpg")';
    imgCont.style.backgroundSize = "cover";
    imgCont.style.borderTopLeftRadius = "30px";
    imgCont.style.borderBottomLeftRadius = "30px";

    // change active button
    const homeBtn = document.querySelector("#homeBtn");
    const menuBtn = document.querySelector("#menuBtn");
    const contBtn = document.querySelector("#contBtn");
    menuBtn.style.backgroundColor = "#FFB452";
    homeBtn.style.backgroundColor = "#FFA737";
    contBtn.style.backgroundColor = "#FFB452";
    homeBtn.style.fontSize = "1.7em";
    menuBtn.style.fontSize = "1.5em";
    contBtn.style.fontSize = "1.5em"
    homeBtn.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
    menuBtn.style.boxShadow = "none";
    contBtn.style.boxShadow = "none";

    // create content
    contentCont.removeAttribute('style');
    const contentP = document.createElement("p");
    const content1 = document.createElement("div");
    const content2 = document.createElement("div");
    contentCont.style.display = "grid";
    contentCont.style.gridTemplateColumns = "525px 525px";
    contentCont.style.gridTemplateRows = "200px 500px"
    contentCont.style.justifyContent = "center";
    contentCont.style.alignItems = "center";
    contentP.style.gridColumnStart = "1";
    contentP.style.gridColumnEnd = "3";
    contentP.style.padding = "0 100px"
    contentP.textContent = "We are a restaurant in Los Angeles' Arts District rooted in Mexican culture while celebrating seasonal Californian produce."
    contentP.style.fontSize = "1.5em";
    contentP.style.fontWeight = "bold";
    contentP.style.textAlign = "center";
    contentP.style.fontFamily = "myFont";

    content1.style.height = "100%";
    content2.style.height = "100%";
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    img1.src = "/src/assets/images/burrito.jpg";
    img2.src = "/src/assets/images/ingredients.jpg"
    img1.style.width = "450px";
    img2.style.width = "450px";
    img1.style.height = "250px";
    img2.style.height = "250px";
    img1.style.borderRadius = "32px";
    img2.style.borderRadius = "32px";
    img1.style.boxShadow = "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
    img2.style.boxShadow = "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
    content1.style.textAlign = "center";
    content2.style.textAlign = "center";
    content1.append(img1);
    content2.append(img2);

    const desc1 = document.createElement("p");
    const desc2 = document.createElement("p");
    desc1.textContent = "We serve dishes that stick to our mexican roots while also taking some creative liberty, providing the most creative and revolutionary mexican cuisine."
    desc2.textContent = "As our ancestors did, in The Xochimilco River, we gather the freshest ingredients for all of our items, guaranteeing the best flavors and odors in all of L.A.";
    desc1.style.fontSize = "1.3em";
    desc1.style.fontWeight = "light";
    desc1.style.padding = "0 100px";
    desc1.style.marginTop = "30px";
    desc2.style.fontSize = "1.3em";
    desc2.style.fontWeight = "light";
    desc2.style.padding = "0 100px";
    desc2.style.marginTop = "30px";
    content1.append(desc1);
    content2.append(desc2);


    contentCont.append(contentP);
    contentCont.append(content1);
    contentCont.append(content2);




}