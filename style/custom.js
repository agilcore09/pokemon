
async function getPokemon() {
    try {
        const config = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const response = await config.json();

        response.results.forEach(poke => {
            const getCol = document.querySelector(".wrappers");
            // create elements
            getCol.insertAdjacentHTML('beforeend',
            `<div class="col-md-4 col-sm-12 my-3">
            <div class="wrapper">
                <div class="card" style="width: 18rem;">
                    <img src="img/1.webp" class="card-img-top img-fluid pokeball" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${poke.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up
                            the bulk
                            of the card's content.</p>
                        <button type="button" class="btn btn-primary tombol-poke" data-poke="${poke.name}" data-toggle="modal" data-target="#pokemodal">Go View Detail</button>
                    </div>
                </div>
            </div>
        </div>`)
        });

    } catch (error) {
        console.log(error.message);
    }
}

getPokemon()

function getDetailPokemon(pokemon){
    const tombol = document.querySelector(".tombol-poke");
    this.addEventListener("click", function(){
        console.log(tombol.value)
    });
}

getDetailPokemon()