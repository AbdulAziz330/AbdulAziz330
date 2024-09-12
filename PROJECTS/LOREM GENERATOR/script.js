let form = document.querySelector("#form");
let copy = document.querySelector(".copy");

form.addEventListener("submit",(e)=>{
e.preventDefault()
let textSize = parseInt(form.input.value);
if (!parseInt(textSize)) {
    alert("Please Enter The Value in Number!")
   }
document.querySelector(".loremText").innerHTML = sentences(textSize);
})

  const sentences = (size)=>{
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula odio non risus finibus feugiat.
    Donec bibendum, sapien eget volutpat dapibus, urna velit malesuada tortor, et fermentum arcu velit non dui.
    Vestibulum condimentum, justo sed rhoncus laoreet, nunc tellus viverra nulla, nec eleifend purus velit non justo.
    Proin sit amet venenatis velit, eu varius nunc. Integer eget ligula eu metus elementum sodales.
    Sed efficitur, mi a rhoncus vehicula, odio orci malesuada elit, at fermentum justo nulla et urna.
    Cras auctor, elit at lacinia eleifend, metus ex condimentum purus, ut lacinia tortor lectus id ipsum.
    Nunc viverra sit amet justo in lacinia. Vestibulum scelerisque, orci id cursus placerat, purus purus bibendum urna, at scelerisque quam libero sed arcu.
    Fusce eget purus eget purus sodales tristique ac nec nunc. Pellentesque eleifend laoreet ultrices.`;
    const array = lorem.split('\n')
    let result = '';

   for ( i = 0; i < size; i++) {
    result += `<p >${array[i % array.length]}<p/>`
   }
 
   if (result) {
    document.querySelector(".text-wrapper").style.display= "flex"
}

return result;
}

copy.addEventListener("click",()=>{
   
        const text = document.querySelector('.loremText').textContent;
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.style.display = 'none';
        textArea.select();
        textArea.setSelectionRange(0,999999)
        if (textArea.select) {
            navigator.clipboard.writeText(textArea.value);
            copy.classList.add('fa-clipboard')
            copy.classList.remove('fa-copy')
            setTimeout(() => {
                copy.classList.remove('fa-clipboard')
                copy.classList.add('fa-copy')
            }, 500);
        }
    

})