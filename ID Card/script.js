// تعريف جميع العناصر باستخدام const
const FullNameInput = document.getElementById("FullNameInput");
const IdNumberInput = document.getElementById("IdNumberInput");
const BirthDayInput = document.getElementById("BirthDayInput");
const BirthPlaceSelect = document.getElementById("BirthPlaceSelect");
const GenderSelect = document.getElementById("GenderSelect");

const Submit = document.getElementById("Submit");
const Delete = document.getElementById("Delete");

const FullNameResult = document.getElementById("FullNameResult");
const IdNumberResult = document.getElementById("IdNumberResult");
const BirthDayResult = document.getElementById("BirthDayResult");
const BirthPlaceResult = document.getElementById("BirthPlaceResult");
const GenderResult = document.getElementById("GenderResult");

const Card = document.getElementById("Card");


FullNameInput.onfocus = function () {
    FullNameInput.style.border = "2px solid #4A90E2";
    FullNameInput.style.background = "#eef6ff";
};
FullNameInput.onblur = function () {
    FullNameInput.style.border = "1px solid #aaa";
    FullNameInput.style.background = "white";
};


BirthPlaceSelect.onchange = function () {
    BirthPlaceResult.textContent = "Birth Place : " + BirthPlaceSelect.value;
};


Submit.onclick = function () {
    FullNameResult.textContent = "Full Name : " + FullNameInput.value;
    IdNumberResult.textContent = "ID Number : " + IdNumberInput.value;
    BirthDayResult.textContent = "Birth Day : " + BirthDayInput.value;
    GenderResult.textContent = "Gender : " + GenderSelect.value;

    alert("Form Submitted Successfully!"); // رسالة بسيطة
};


Delete.onclick = function () {
    FullNameResult.textContent = "";
    IdNumberResult.textContent = "";
    BirthDayResult.textContent = "";
    BirthPlaceResult.textContent = "";
    GenderResult.textContent = "";

    FullNameInput.value = "";
    IdNumberInput.value = "";
    BirthDayInput.value = "";
    BirthPlaceSelect.value = "";
    GenderSelect.value = "";
};


Card.addEventListener("mouseenter", function () {
    Card.style.background = "#d9e9ff";
});


Card.onmouseleave = function () {
    Card.style.background = "#f7f7f7";
};
