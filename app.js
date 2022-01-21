const giphyBox = document.querySelector('#giphyBox');
const searchBtn = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#searchBox');


async function getGif(){
   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {
   q: 'puppy', 
   api_key: 'SNRTYSwTiVeMmEczl4NlImbMyIiOO1yi'}});
//    console.log(response.data.data);
   const imgUrl = response.data.data;
   

   const newImg = document.createElement('img');
   newImg.src = imgUrl;
   searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    giphyBox.append(newImg);
})
}
getGif();