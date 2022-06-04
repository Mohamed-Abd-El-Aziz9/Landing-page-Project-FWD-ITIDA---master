const Sections = Array.from(document.querySelectorAll('section')); // here i define a varaible called sections and push all the section on it by querySelectorAll function (HTMLCollection)
const UnorderList = document.getElementById("navbar__list"); // here i define a varabile to grap the unordered list into to to add list item (li) on it later


// in this function i will create the navigationbar .. its dynamic and i am trying to use all the method that we learn in the class room in this function
function CreateNavigationBar() {
    //define a counter start from 1 and increase every loop by one to use it to set ( href and id) of the section dynamiclly
    let counter = 1;
    for (let i = 0; i < Sections.length; i++) {
        // here i created the li that will handel the whole data (link and textnode)
        let NewListitem = document.createElement("li");
        NewListitem.classList.add("ListItem")
        // here i created a link the will hold the href of the section to go for the deteced section when i click on it
        let linkOfTheSection = document.createElement("a")
        //here i added a class name to the link to style it .. this class is preplemented aleardy in cs file from the start cod
        linkOfTheSection.classList.add('menu__link');
        // here i added href to each section to go it immeditaly when click on.
        linkOfTheSection.setAttribute('data-link', `section${counter}`)
        // here i set a unique id to every listed item added to the navbar .. every time u added section counter will increase by one and add to the navbar immeditaly
        linkOfTheSection.setAttribute('id', `#section${counter}`)
        // here i try to grap the data nav of each section and stord it i linkOfTheSection varaible
        let SectionText = Sections[i].getAttribute("data-nav");
        //here i created a varabile handle the label of the SectionText handel the following (section + (number of the section))
        let TextOfListItem = document.createTextNode(SectionText);
        // here i try to append the (section+number of the section) to the link 
        linkOfTheSection.appendChild(TextOfListItem);
        // then append the whole link with its feauters to the the listed item -li-
        NewListitem.appendChild(linkOfTheSection);
        // finaially here i appended the whole listed item the the unordered list which class is navbar__list
        UnorderList.appendChild(NewListitem);
        counter++;
    }

}
// calling the function to build the navigation bar
CreateNavigationBar();

// in the funtion i try to be clear which section is being viewed while scrolling through the page.
// i being the the onscroll which means that when the user scroll do this function 
window.onscroll = function () {
    // here i grap the sections varaible which hold all the sections of the page and loop over them to detected which section is on the viewbord
    Sections.forEach(function (active) {
        // defina a varanbile hold the active link of the each section 
        let ActivationLink = UnorderList.querySelector(`[data-link=${active.id}]`);

        // here i try to chreck if the section is aleardy on the viewborad or not
        // i search a lot and found thera are two ways to do - one with IntersectionObserver class - and the other one with getBoundingClientRect - so i get comfortable with getBoundingClientRect and used it a chive my goal
        // i define the bounderies here due to the section height .. i try to meausre the dimention to run the funtion when the user can see a big part of section 
        if (active.getBoundingClientRect().top >= -170 && active.getBoundingClientRect().top <= 350) {
            // so the the on the viewborad the funtion will add your-active-class to the section to give him the style which i predefined in style file .. i just modifie the color with my preferd one
            active.classList.add("your-active-class");
            ActivationLink.classList.add("active-link")

        }
        else {
            // when the user is get of of the dimentions the class will remove immediatly :) its just a brillaint idea that i enjoyed working on it a lot :)
            active.classList.remove("your-active-class");
            ActivationLink.classList.remove("active-link")


        }

    });

}

console.log(UnorderList)

const links = document.querySelectorAll(".menu__link")
links.forEach((elem) => {
    elem.addEventListener("click", function () {
        const ActiveElemnt = document.getElementById(elem.getAttribute("data-link"));
        ActiveElemnt.scrollIntoView({ behavior: "smooth", block: "center" })


    })
})

// Finally thanks for you and the udacity paltform for this valuable content ..  i really enjoyed learing the course and enjoyed much more when i buliding this project :) be Safe <3


