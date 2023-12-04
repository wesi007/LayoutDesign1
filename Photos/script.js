function showContent(imageSrc, text) {
    // Update the image and text in the other side
    var imageInfo = document.getElementById('imageInfo');
    imageInfo.querySelector('img').src = imageSrc;
    imageInfo.querySelector('p').innerText = text;
}