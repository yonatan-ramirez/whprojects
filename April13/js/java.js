

var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');

var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "is it working?",
        title: "Unsplash Photo",
        cost: 100,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, saepe?"
    },
    {
        img: "http://unsplash.it/256/256?image=206",
        alt: "image 206",
        title: "Another Unsplash Photo",
        cost: 75,
        desc:"Another image that I'm selling using other people's work."
    },
    {
        img: "http://unsplash.it/256/256?image=209",
        alt: "image 209",
        title: "Yet Another Image!",
        cost: 95,
        desc:"Another Image!"
    },
    {
        img: "http://unsplash.it/256/256?image=210",
        alt: "image 210",
        title: "Random image!",
        cost: 10,
        desc:"Magic"
    },
    {
        img: "http://unsplash.it/256/256?image=211",
        alt: "image 211",
        title: "Image 211",
        cost: 30,
        desc:"random image"
    },
    {
        img: "http://unsplash.it/256/256?image=212",
        alt: "image 212",
        title: "image 212 Unsplash Photo",
        cost: 60,
        desc:"magic work"
    },
    {
        img: "http://unsplash.it/256/256?image=213",
        alt: "image 213",
        title: "image 213 Unsplash Photo",
        cost: 75,
        desc:"image magic work!"
    },
    {
        img: "http://unsplash.it/256/256?image=214",
        alt: "image 214",
        title: "image 214 Unsplash Photo",
        cost: 25,
        desc:"randomness magic"
    }

];

function displayItems(arr){
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[i].alt);
        var item = `
            <li data-sku="${[i + 1]}">
            <input type="checkbox" name="" id="">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
            </li>`;
        items.innerHTML += item;
    }
}
displayItems(itemArray);
// console.log(items.children);

function addListener(arr, objArr){
    for(var i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', function(evt, arr){
            // console.log(this.firstElementChild.checked);
            this.classList.toggle('selected');
            
            // this.firstElementChild.checked = true;
            
            // ternary operator 
            (this.firstElementChild.checked) ? 
            this.firstElementChild.checked = false :
            this.firstElementChild.checked = true;
            
            // console.log(this.dataset.sku,parseInt( this.dataset.sku) + 1);
            selectedArray.push(objArr.slice(this.dataset, parseInt(this.dataset.sku)+ 1)[0]);
            console.log(selectedArray);
            // console.log(this);
            // selectedArray.push(arr[this.dataset.sku]);
            // console.log(Array.from(arr));
            console.log(Array.from(arr).slice(this.dataset.sku));

            // console.log(selectedArray);
        });
    }
    // console.log(arr);
}
addListener(items.children);
