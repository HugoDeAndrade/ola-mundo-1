document.addEventListener("DOMContentLoaded", () => {;
    const texto = document.body.querySelector("#msg");
    texto.addEventListener("click", ()=> {
        if(texto.textContent === "Oi Daniel")
            texto.textContent = "Vc é um gostoso";
        else
            texto.textContent = "Oi Daniel"
    })
})
