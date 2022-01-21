console.log("Let's get this party started!");

async function getGif(){
    const res = await axios.get('api.giphy.com/v1/gifs/random');
    console.log(res);
}
getGif();