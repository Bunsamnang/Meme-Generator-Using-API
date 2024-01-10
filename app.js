//SOURCE API: https://github.com/D3vd/Meme_Api

const generateMemeBtn = document.querySelector(".generate-meme-btn");
const options = document.getElementById("quantity");

generateMemeBtn.addEventListener("click", () => {
  const quantity = options.value;
  getMeme(quantity);
});

async function getMeme(quantity) {
  const response = await fetch(`https://meme-api.com/gimme/${quantity}`);
  const data = await response.json();
  let memeContainer = "";
  console.log(data);

  data.memes.forEach((meme) => {
    const author = meme.author;
    const imageMeme = meme.url;
    const titleMeme = meme.title;

    memeContainer += ` <div class ="meme-detail-container">
                        <h2 class= "title">${titleMeme}</h2> 
                  
                        <img src = "${imageMeme}">
                        
                        <p class ="author">Credit to: ${author}</p>
                      </div>
    `;
  });

  document.querySelector(".meme-container").innerHTML = memeContainer;
}
