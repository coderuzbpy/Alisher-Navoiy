document.getElementById("submitBtn").addEventListener("click", function () {
    let score = 0;

    // To'g'ri javoblar
    const correctAnswers = {
        q1: "D",
        q2: "C",
        q3: "A",
        q4: "D",
        q5: "B",
        q6: "D",
        q7: "A",
        q8: "B",
        q9: "D",
        q10: "B",
        q11: "B",
        q12: "B",
        q13: "B",
        q14: "B",
        q15: "B",
        q16: "B",
        q17: "B",
        q18: "B",
        q19: "A",
        q20: "B",
        q21: "B",
        q22: "C",
        q23: "B",
        q24: "B",
        q25: "A",
        q26: "B",
        q27: "B",
        q28: "C",
        q29: "B",
        q30: "B",
        q31: "B",
        q32: "B",
        q33: "B",
        q34: "B",
        q35: "B",
        q36: "A",
        q37: "B",
        q38: "B",
        q39: "B",
        q40: "B",
        q41: "B",
        q42: "B",
        q43: "B",
        q44: "B",
        q45: "B",
        q46: "B",
        q47: "B",
        q48: "B",
        q49: "B",
        q50: "C"
    };

    // Foydalanuvchi javoblari
    const form = document.getElementById("ul-qulubTest");
    const userAnswers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q4.value,
        q5: form.q5.value,
        q6: form.q6.value,
        q7: form.q7.value,
        q8: form.q8.value,
        q9: form.q9.value,
        q10: form.q10.value,
        q11: form.q11.value,
        q12: form.q12.value,
        q13: form.q13.value,
        q14: form.q14.value,
        q15: form.q15.value,
        q16: form.q16.value,
        q17: form.q17.value,
        q18: form.q18.value,
        q19: form.q19.value,
        q20: form.q20.value,
        q21: form.q21.value,
        q22: form.q22.value,
        q23: form.q23.value,
        q24: form.q24.value,
        q25: form.q25.value,
        q26: form.q26.value,
        q27: form.q27.value,
        q28: form.q28.value,
        q29: form.q29.value,
        q30: form.q30.value,
        q31: form.q31.value,
        q32: form.q32.value,
        q33: form.q33.value,
        q34: form.q34.value,
        q35: form.q35.value,
        q36: form.q36.value,
        q37: form.q37.value,
        q38: form.q38.value,
        q39: form.q39.value,
        q40: form.q40.value,
        q41: form.q41.value,
        q42: form.q42.value,
        q43: form.q43.value,
        q44: form.q44.value,
        q45: form.q45.value,
        q46: form.q46.value,
        q47: form.q47.value,
        q48: form.q48.value,
        q49: form.q49.value,
        q50: form.q50.value
    };

    // Javoblarni tekshirish
    for (let key in correctAnswers) {
        if (userAnswers[key] === correctAnswers[key]) {
            score++;
        }
    }

    // Natijani chiqarish
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Sizning natijangiz: ${score} / 50</p>`;

    if (score === 50) {
        resultDiv.innerHTML += "<p>Ajoyib! Barcha javoblar to'g'ri!</p>";
    } else {
        resultDiv.innerHTML += "<p>Yana bir bor urinib ko'ring!</p>";
    }
});

document.getElementById("resetBtn").addEventListener("click", function () {
    // Clear all radio buttons
    const form = document.getElementById("ul-qulubTest");
    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
    });

    // Clear result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
});



