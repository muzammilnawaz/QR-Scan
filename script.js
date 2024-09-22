const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');

const qrContainer = document.querySelector('qr-body');


let size = sizes.value
generatebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    generateQRCode();
});

function generateQRCode(){
    new generateQRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff"
        colorDark:"#000"
    });
}
