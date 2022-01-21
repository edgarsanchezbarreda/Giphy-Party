const giphyBox = $('#giphyBox');
const searchBtn = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#searchBox');
const contentBox = document.querySelector('#contentBox');
const removeBtn = document.querySelector('#removeBtn');


// This async function will loop through the object that was received from the query that was input into the input box.
// It will generate a random index, extract the url attributed to the gif from that index, and then append that gif to the DOM.
async function getGif(response){
    let resultsLength = response.data.length;
    if(resultsLength){
        let imgIndex = Math.floor(Math.random() * resultsLength);
        const newImg = document.createElement('img');
        newImg.src = response.data[imgIndex].images.original.url;

        giphyBox.append(newImg);
    }   
}


// This event listener will listen to any submits on the "Search Giphy" input, and will add the value of the input box as a parameter to the above function.
contentBox.addEventListener('submit', async function(e){
    e.preventDefault();
    
    let queryVal = searchBox.value;
    searchBox.value = "";

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {
        q: queryVal, 
        api_key: 'SNRTYSwTiVeMmEczl4NlImbMyIiOO1yi'
        }
    });
    getGif(response.data);
    });


    // This event listener will remove any images from the DOM.
removeBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log('removed');
    giphyBox.empty();
})