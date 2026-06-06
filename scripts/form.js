document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectChoice = document.getElementById("product-name");

products.forEach(product => {
    let prodID = product.id;
    let prodNAME = product.name;

    const opt = new Option(prodNAME, prodID);

    selectChoice.add(opt);
})

const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", () => {
    // event.preventDefault();

    let numSubmits = Number(localStorage.getItem("numOfSubmits")) || 0;
    numSubmits++;
    localStorage.setItem("numOfSubmits", numSubmits);

})