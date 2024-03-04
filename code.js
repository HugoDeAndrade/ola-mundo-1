document.addEventListener("DOMContentLoaded", () => {;
    const texto = document.body.querySelector("#msg");
    texto.addEventListener("click", ()=> {
        if(texto.textContent === "Olá Mundo")
            texto.textContent = "Hello World";
        else
            texto.textContent = "Olá Mundo"
    })
})
