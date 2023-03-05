const descHeadings = document.querySelectorAll(".item__desc-heading");

descHeadings.forEach((descHeading) => {
    descHeading.addEventListener("click", () => {
        const description = document.querySelector(".item__desc-text");

        if (description.style.display === "none") {
        description.style.display = "block";
        } else {
        description.style.display = "none";
        }
    });
});
