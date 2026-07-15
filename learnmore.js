const questions = document.querySelectorAll(".block-question");

questions.forEach(function (question) {
    const titleContainer = question.querySelector(".question-title");
    
    titleContainer.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});
