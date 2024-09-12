const calculate=()=> {
    let x1 = parseFloat(document.getElementById('x1').value);
    let y1 = parseFloat(document.getElementById('y1').value);
    let z1 = parseFloat(document.getElementById('z1').value);
    let x2 = parseFloat(document.getElementById('x2').value);
    let y2 = parseFloat(document.getElementById('y2').value);
    let z2 = parseFloat(document.getElementById('z2').value);

    
    if (isNaN(x1) || isNaN(y1) || isNaN(z1) || isNaN(x2) || isNaN(y2) || isNaN(z2)) {
        document.querySelector('.presult').innerHTML = `Please Enter Valid Value.`;
        return;
    }

   
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));

    
    document.querySelector(".presult").textContent=distance.toFixed(3)
}
document.getElementById("calculate").addEventListener("click",calculate)

const clear = ()=>{
    x1.value = "";
    y1.value = "";
    z1.value = "";
    x2.value = "";
    y2.value = "";
    z2.value = "";
    document.querySelector(".presult").innerHTML = "";

}
const Clr = document.querySelector("#clear").addEventListener("click",clear)