let newNot = document.getElementsByClassName("new");
let notNumber = document.getElementById("notificationsNumber");
let mark = document.getElementById("mark");

notNumber.innerHTML = newNot.length;

mark.addEventListener('click', () => {
    Array.from(newNot).forEach((e) => e.classList.remove("new"));
    notNumber.innerHTML = 0;
});

Array.from(newNot).forEach(Element => {
    Element.addEventListener('click', () => {
        Element.classList.remove("new");
        for (var i = 0; i <= newNot.length; i++) {
            console.log(i)
            notNumber.innerHTML = i;
        }
    });
});

