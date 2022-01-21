const giphyBox = document.querySelector('#giphyBox');
const searchBtn = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#searchBox');
const contentBox = document.querySelector('#contentBox');



async function getGif(query){
   let queryVal = searchBox.value;
   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {
   q: queryVal, 
   api_key: 'SNRTYSwTiVeMmEczl4NlImbMyIiOO1yi'}});

   const newImg = document.createElement('img');
   let resultsLength = response.data.data.length;
   let imgIndex = Math.floor(Math.random() * resultsLength);
   
   newImg.src = response.data.data[imgIndex].images.original.url;
   contentBox.addEventListener('click', async function(e){
   e.preventDefault();
   giphyBox.append(newImg);
    })
   
}
getGif();
