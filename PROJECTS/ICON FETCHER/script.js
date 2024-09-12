const searchBox = document.querySelector(".input");
    const iconImage = document.querySelector(".image");
    searchBox.addEventListener("keydown",()=>{
        const fetcher = `https://www.google.com/s2/favicons?sz=32&domain_url=${searchBox.value}`;
        iconImage.src = fetcher;
    })