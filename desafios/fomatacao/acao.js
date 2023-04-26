texto = document.querySelector("#texto")

n = document.querySelector("#n")
i = document.querySelector("#i")
s = document.querySelector("#s")
td = document.querySelector("#td")
tc = document.querySelector("#tc")
te = document.querySelector("#te")
c = document.querySelector("#cor")

c.addEventListener('input',function(){
    texto.style.color = c.value
})

tc.addEventListener('click', function(){
    if (texto.style.textAlign == "") {
        texto.style.textAlign = "center"
    } else {
        texto.style.textAlign = ""
    }
})

te.addEventListener('click', function(){
    if (texto.style.textAlign == "") {
        texto.style.textAlign = "left"
    } else {
        texto.style.textAlign = ""
    }
})

td.addEventListener('click', function(){
    if (texto.style.textAlign == "") {
        texto.style.textAlign = "right"
    } else {
        texto.style.textAlign = ""
    }
})



n.addEventListener("click", function () {
    if (texto.style.fontWeight != 750) {
        texto.style.fontWeight = 750
    } else {
        texto.style.fontWeight = ''
    }
})

i.addEventListener("click", function () {
    if (texto.style.fontStyle != "italic") {
        texto.style.fontStyle = "italic"
    } else {
       texto.style.fontStyle = ''
    }

})

s.addEventListener("click", function () {
    if (texto.style.textDecoration != "underline") {
        texto.style.textDecoration = "underline"
    } else {
        texto.style.textDecoration = ''
    }

})