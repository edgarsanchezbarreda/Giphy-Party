const giphyBox = document.querySelector('#giphyBox');
const searchBtn = document.querySelector('#searchBtn');

async function getGif(){
   const response = await axios.get("http://api.giphy.com/v1/gifs/random", {params: {
   api_key: 'SNRTYSwTiVeMmEczl4NlImbMyIiOO1yi'}});
   const imgUrl = response.data.data.bitly_gif_url;

   const newImg = document.createElement('img');
   newImg.src = imgUrl;
   searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    giphyBox.append(newImg);
})
}
getGif();