let questions = document.querySelectorAll(".Net_questions");

questions.forEach(question =>{
    const answer = question.querySelector(".answer");
    question.addEventListener("click" , ()=>
    {
       answer.classList.toggle("active");
    });

});

