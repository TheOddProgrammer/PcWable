const body = document.body;

const requestURL = 'https://raw.githubusercontent.com/WilderDuarte/exercisejson/main/indexjsona.json ';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const clasificatoria = request.response;
    Estructura(clasificatoria);
    MostrarPartidos(clasificatoria);
}

function Estructura(jsonObj) {
    const header = document.createElement('header');
    const myH1 = document.createElement('h1');
    const myH3a = document.createElement('h3');
    const myH3b = document.createElement('h3');
    const myP = document.createElement('p');

    myH1.textContent = jsonObj['fase'];
    myH3a.textContent = "Goleador: "+jsonObj['goleador'];
    myH3b.textContent = "Asistidor: " +jsonObj['asistidor'];
    myP.textContent = jsonObj['descripcion']
        
    body.appendChild(header);
    header.appendChild(myH1);
    header.appendChild(myP);
    header.appendChild(myH3a);
    header.appendChild(myH3b);
            
}

function MostrarPartidos(jsonObj) {        
    const Grupos = jsonObj['partidos'];
    const section = document.createElement("div");
    body.appendChild(section);
            
    for (var i = 0; i < Grupos.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const image = document.createElement('img');
        const image2 = document.createElement('img');
        const P2 = document.createElement('p');
        const P3 = document.createElement('p');

                
        myH2.textContent = Grupos[i].partido;
        image.src = Grupos[i].escudo_uno;
        image2.src = Grupos[i].escudo_dos;
        P2.textContent = Grupos[i].resultado;
        P3.textContent = "MVP: "+Grupos[i].mvp;

                
        myArticle.appendChild(image);
        myArticle.appendChild(image2);
        myArticle.appendChild(myH2)
        myArticle.appendChild(P2);
        myArticle.appendChild(P3);

        section.appendChild(myArticle);

                
    }
}