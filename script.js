// APIS:
// Api de Noticias, Noticias Mundo e Filmes
// Api de Clima  
// Api de Bandeiras de paises
// Api de Cotaçoes Atuais

const carrosell = document.querySelector(".carro");
const container = document.getElementById("filme");
const container2 = document.getElementById("mundo");
let cards2;
let cards;
let carrosel;

let x = 1;
let y = 1;

// (API DE Notícias) ROTA NOTICIAS MUNDO:  

function mundo(noticiasM) {
    console.log(noticiasM)
    noticiasM.map(noticiaM => {
        if(y <= 6){
            cards2 = `
                    <div class="col" style="display: flex; justify-content: center; border-color: black;">
                        <div class="card" style="width: 18rem; margin-bottom: 30px;   border-radius: 0;">
                            <img  src="${noticiaM.multimedia[0].url}" class="card-img-top">
                            <div class="card-body" >
                                <h5 class="card-title">${noticiaM.title}</h5>
                                <p class="card-text">${noticiaM.abstract}</p>
                                <a href="${noticiaM.url}" target="_blank" style="text-decoration: none;"><buttom style="padding: 5px 10px; background-color: black; border-radius: 5px; color: white;">Ver Mais</buttom></a>
                            </div>
                        </div>
                    </div>

                `;
            container2.innerHTML += cards2;
        }
        y = y + 1;

    })  
}

fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=6hGZKI7p6kL6QwP0AQRUbHTOs0fvy28Q')

.then(response => {
    return response.json()
})
.then(resposta => {
    mundo(resposta.results);
})

// Carrosel Notícias Filmes:

function imagesC(noticiasI) {
    console.log(noticiasI)
        carrosel = `
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="${noticiasI[0].url}" target="_blank"><img src="${noticiasI[0].multimedia[0].url}" class="d-block w-100" alt="..."></a>
                        <div class="carousel-caption  d-md-block">
                            <h5>${noticiasI[0].title}</h5>
                            <p>${noticiasI[0].abstract}</p>
                        </div>
                    </div>
                        <div class="carousel-item">
                            <a href="${noticiasI[1].url}" target="_blank"><img src="${noticiasI[1].multimedia[0].url}" class="d-block w-100" alt="..."></a>
                            <div class="carousel-caption  d-md-block">
                                <h5>${noticiasI[1].title}</h5>
                                <p>${noticiasI[1].abstract}</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <a href="${noticiasI[2].url}" target="_blank"><img src="${noticiasI[2].multimedia[0].url}" class="d-block w-100" alt="..."></a>
                            <div class="carousel-caption  d-md-block">
                            <h5>${noticiasI[2].title}</h5>
                            <p>${noticiasI[2].abstract}</p>
                            </div>
                        </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;
        carrosell.innerHTML += carrosel;

}

// (API DE Notícias) ROTA NOTICIAS Filmes: 

function infos(noticias) {
    noticias.map(noticia => {
        
        if(x <= 6){
            cards = `
                <div class="col" style="display: flex; justify-content: center; border-color: black;">
                    <div class="card" style="width: 18rem; margin-bottom: 30px;   border-radius: 0;">
                        <img  src="${noticia.multimedia[0].url}" class="card-img-top">
                        <div class="card-body" >
                            <h5 class="card-title">${noticia.title}</h5>
                            <p class="card-text">${noticia.abstract}</p>
                            <a href="${noticia.url}" target="_blank" style="text-decoration: none;"><buttom style="padding: 5px 10px; background-color: black; border-radius: 5px; color: white;">Ver Mais</buttom></a>
                        </div>
                    </div>
                </div>
                `;
            container.innerHTML += cards;
        }
        x = x + 1;

    })  
}

fetch('https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=6hGZKI7p6kL6QwP0AQRUbHTOs0fvy28Q')

.then(response => {
    return response.json()
})
.then(data => {
    imagesC(data.results);
    infos(data.results);
});


// (API CLIMA e API de Bandeiras) Rota Clima e link das bandeiras

const apiKey = 'e866ac8f08c08e2e6c8f10eef88d0f30';

// Link API bandeiras dos Paises
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
const weatherContainer = document.querySelector("#weather-data")

// Função
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    
    return data
}

// Funçoes 
const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerHTML = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;


    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter"){
        const city = e.target.value;

        showWeatherData(city);
    }
})




///// (Api Cotação de Moedas) Rota de Cotação;

//Define as informações que queremos trazer
const realp = document.getElementById('realp');
const realc = document.getElementById('realc');

const euro = document.getElementById('euro');
const eurod = document.getElementById('eurod');

// Define o link da sua api
const apiUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL';


// Trazer as informaçoes da API
fetch()
fetch(apiUrl)

// Converte a resposta em JavaScript
.then(Response => Response.json())
.then(data=>{
    console.log(data); //Imprime os dados da API no console

    let valor = data.USDBRL.bid;
    let dia = data.USDBRL.create_date;

    let eurov = data.EURBRL.bid;
    let euro_d = data.EURBRL.create_date;

    
    // real.innerHTML = nome;
    realp.innerHTML = parseFloat(valor).toFixed(2) + " Real Brasileiro";

    // realc.innerHTML = Date("DD/MMM/YYYY", (dia));
    const dataCriada = new Date(dia);
    const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
        timeZone: 'UTC',
    });


    const dataCriada2 = new Date(euro_d);
    const dataFormatada2 = dataCriada2.toLocaleDateString('pt-BR', {
        timeZone: 'UTC',
    });

    var arrayD = dia.split(' ');
    var arrayE = euro_d.split(' ');
    realc.innerHTML = dataFormatada +' '+ arrayD[1];

    euro.innerHTML = parseFloat(eurov).toFixed(2) + " Real Brasileiro";

    eurod.innerHTML = dataFormatada2 +' '+ arrayE[1];
    
    
    


});






