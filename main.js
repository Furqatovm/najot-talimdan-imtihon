function dropdown() {
    let questions = document.querySelectorAll(".question");
    let answers = document.querySelectorAll(".answer");

    let index = 0;
    for (let q of questions) {
        let a = answers[index];  // match question to answer by index

        q.addEventListener("click", function () {
            q.classList.toggle("border")
            a.classList.toggle("show");  // only toggle the related answer
        });

        index++;
    }
}




dropdown();