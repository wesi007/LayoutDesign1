function showContent(imageSrc, text) {



    var imageInfo = document.getElementById('image-info');
    console.log(text);


    imageInfo.querySelector('img').src = imageSrc;
    imageInfo.querySelector('p').innerText = text;


}