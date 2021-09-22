"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);    
        
        let formData = new FormData(form);
        
        // if (error === 0) {
        //     form.classList.add('_sending');
        //     let responce = await fetch('form', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     console.log(responce);
        //     if (responce.ok) {
        //         let result = await responce.json();
        //         alert(result.message);
        //         form.reset();
        //         form.classList.remove('_sending');
        //     } else {
        //         alert("ERROR!");
        //         form.classList.remove('_sending');
        //     }
        // } else {
        //     alert('Complete the required fields!');
        // }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input)
                    error++;
                }
            }else{
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //Функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

});

window.addEventListener('load', () => {
    document.querySelector('#print').addEventListener('click', () => {
        printJS({
            printable: 'print-content',
            type: 'html',
            css: 'css/style.css',
            style: '.print_hidden{display:none}'
        });
    })

    document.querySelector('#download_pdf').addEventListener('click', () => {
        let divForPdf = document.createElement('div');
        divForPdf.innerHTML = document.getElementById('print-content').innerHTML;
        divForPdf.querySelectorAll('.print_hidden').forEach(i => i.remove())
        html2pdf(divForPdf);
    });
});

