const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');

const qrContainer = document.querySelector('.qr-body');


let size = sizes.value
generatebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();

});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadbtn.addEventListener('click' , ()=>{
    let img = document.querySelector('.qr-body img ');
    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadbtn.setAttribute("href" , imgAtrr);
    }

    else{
        downloadbtn.setAttribute("href" , `${document.querySelector('canvas').toDataURL()}`);


    }
})

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
    }

    else{
        alert("Enter the text or URL to Generate your QR Code")
    }

}





function generateQRCode(){
    qrContainer.innerHTML = ""
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#ffffff",
        colorDark:"#000000",
    });
}