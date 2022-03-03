const img = ['bg-form.jpg','bg-form2.jpg','bg-form3.jpg']

function trocaFoto(foto) {
    document.querySelector('.img-banner').src = 'img/' + img[foto]
}


let fotoAtual = 0
trocaFoto(fotoAtual)

setInterval(() => {

    fotoAtual++

    if(fotoAtual > 2) {
        fotoAtual = 0
    }

    trocaFoto(fotoAtual)

}, 5000)

document.querySelector('#bt-foto0').addEventListener(onclick, () => {
    trocaFoto(0)
})

document.querySelector('#bt-foto1').addEventListener(onclick, () => {
    trocaFoto(1)
})

document.querySelector('#bt-foto2').addEventListener(onclick, () => {
    trocaFoto(2)
})