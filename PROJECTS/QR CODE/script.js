const anyLink = "facebook.com";
const size = 250;
new QRCode(document.querySelector(".qr"),{
    text: anyLink,
    width: size,
    height: size,
    colorDark: "black",
    colorLight: "white"
})