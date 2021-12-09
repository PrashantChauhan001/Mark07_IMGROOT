const getInput = () => document.getElementById("textInput").value;

const translate = (txt) => {
    fetch("https://api.funtranslations.com/translate/groot.json?text=" + txt)
        .then(res => res.json())
        .then(data => document.getElementById("answer").innerText = data.contents.translated)
        .catch(err => console.log(err))
}

const button = document.getElementById("btn");

button.addEventListener("click", () => translate(getInput()))