const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');

const qrContainer = document.querySelector('.qr-body');


let size = sizes.value
generatebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(qrText , sizes , generatebtn , downloadbtn , qrContainer);
    generateQRCode();
});

function generateQRCode(){
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#ffffff",
        colorDark:"#000000",
    });
}