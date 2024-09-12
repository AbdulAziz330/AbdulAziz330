const codevalue = document.querySelector("#value");
    window.addEventListener("keydown",(e)=>{
        codevalue.innerHTML = `
         <div class="key">
    ${e.key === " " ? "Space" : e.key} 
      <small>Key</small>
  </div>
  <div class="key">
    ${e.keyCode}
    <small>KeyCode</small>
  </div>
  <div class="key">
    ${e.code}
    <small>Key Type</small>
  </div>
        `
    });