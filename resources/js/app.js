import Dropzone from 'dropzone';

Dropzone.autoDiscover = false;

const dropzone = new Dropzone('#dropzone', {
    dictDefaultMessage: "Sube aquí tu imagen",
    acceptedFiles: ".png, .jpg, .jpeg, .gif",
    addRemoveLinks: true,
    dictRemoveFile: "Borrar archivo",
    maxFiles: 1,
    uploadMultiple: false,

    init: function () {
        if (document.querySelector('#imagen').value.trim()) {
            const imagenPublicada = {}
            imagenPublicada.size = 1234;
            imagenPublicada.name = document.querySelector('#imagen').value
            console.log({ foto: imagenPublicada.name });
            this.options.addedfile.call(this, imagenPublicada)
            this.options.thumbnail.call(this, imagenPublicada, `../uploads/${imagenPublicada.name}`)

            imagenPublicada.previewElement.classList.add('dz-success', 'dz-complete')
        }
    },
});

dropzone.on('success', function (file, response) {
    console.log(response.imagen);
    document.querySelector('#imagen').value = response.imagen;
})

dropzone.on('removedFile', function () {
    document.querySelector('#imagen').value = "";
})
