document.addEventListener("DOMContentLoaded", function() {

    const data = [
            {
                "nombre": "Baryk",
                "team": "Grupito de locos 💕",
                "nombrePersonaje": "DiegoLopez (Artista)",
                "species": "Humano",
                "culture": "Thayleño",
                "class": "Radiante (Danzante del Filo)",
                "level": 3,
                "edad": 30,
                "peso": "---",
                "altura": "---",
                "descripcion": "Un valiente guerrero con una determinación inquebrantable.",
                "imagen": "./img/diego.png",
                "wins": ["No Explorada", "No Explorada", "Completada", "No Explorada", "No Explorada"]
            },
            {
                "nombre": "Arsia-hija-hija-Lisha",
                "team": "Grupito de locos 💕",
                "nombrePersonaje": "Ladymoonwhite (Artista)",
                "species": "Humano",
                "culture": "Shin",
                "title": "La sin verdad y sin fuerza (No pudo mover una mesa)",
                "class": "Radiante (Vigilante de la Verdad)",
                "level": 3,
                "edad": 43,
                "peso": "67 kg",
                "altura": "1,66 m",
                "descripcion": "Granjera de Shinovar, La que Sumaba. Se hayaba en la cumbre de la sociedad por sus conocimientos sobre plantas y cultivos, regía sus terrenos y había escrito varios libros. Hasta que un extranjero acusado falsamente de crímenes importantes se coló no solo en sus cultivos sagrados si no también en los vecinos. Arsia lo acogió, escondió y defendió. Cuando se descubrió la mentira y frente a tal ofensa fue juzgada y convertida en una Sinverdad.",
                "imagen": "./img/gian.png",
                "wins": ["No Explorada", "No Explorada", "Completada", "No Explorada", "No Explorada"]
            },
            {
                "nombre": "Zag",
                "team": "Grupito de locos 💕",
                "nombrePersonaje": "Gian",
                "species": "Insomen",
                "culture": "---",
                "title": "El Primer Insomne y al que estafan sus propios esclavos",
                "class": "---",
                "level": 3,
                "edad": "+3000",
                "peso": "---",
                "altura": "---",
                "descripcion": "Desertor de las fuerzas insomne. Ex esclavista.",
                "imagen": "./img/luna.png",
                "wins": ["No Explorada", "No Explorada", "Completada", "No Explorada", "No Explorada"]
            },
            {
                "nombre": "Ragar",
                "nombrePersonaje": "Gar Leyva",
                "species": "Humano",
                "culture": "Mestizo de Shin y Herdaziano",
                "class": "Radiante Nominador de lo otro",
                "spren": "Tintaspren/ Obsidiana",
                "level": 1,
                "edad": 26,
                "peso": "????",
                "altura": "????",
                "descripcion": "Nacido en Herdaz con antecesores procedentes de Shinovar. Amante de la biología rosarina, por influencia de la cultura no pudo desarrollar sus habilidades artísticas a pesar de que mostraba interés desde pequeño. Luego de decidir volcarse de lleno en las artes se convierte en radiante, jurando a su spren Obsidiana alcanzar su potencial en lo que realmente le apasiona.",
                "imagen": "./img/garLeyva.png",
                "wins": ["No Explorada", "No Explorada", "No Explorada", "No Explorada", "No Explorada"]
            },
            {
                "nombre": "????",
                "team": "Maestro Narrativo",
                "title": "Radiante de Odium",
                "nombrePersonaje": "Asir Aronso",
                "species": "Humano",
                "culture": "Unkalaki",
                "class": "Radiante Danzante del Filo",
                "level": 5,
                "edad": 30,
                "peso": "????",
                "altura": "2,25 m",
                "descripcion": "nacido fuera de las montañas y capturado tras la muerte de sus padres en su busqueda por una armadura esquirlada, pasando de mano en mano hasta terminar en las llanuras quebradas y aprendiendo de su cultura por terceros u otros makabakis capturados.",
                "imagen": "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg",
                "wins": ["Completada", "Completada", "Completada", "Completada", "Completada"]
            },
            {
                "nombre": "Vena ki",
                "team": "Beta Tester del caos",
                "nombrePersonaje": "Rockless",
                "species": "Parshendi",
                "culture": "---",
                "title": "El concha su mae que consiguio que los cremlinos le declaren la guerra",
                "class": "Forma Orador",
                "level": "1 - 5",
                "edad": "???",
                "peso": "???",
                "altura": "???",
                "descripcion": "Era un esclavo y era bien tratado, y tocaba caja acústica.\nEl noble quería venderlo caro, pero no sirvió para combatir así que le vendieron a Sadeas",
                "imagen": "./img/parshendi.png",
                "wins": ["Completada", "Completada", "No Explorada", "No Explorada", "No Explorada"]
            },
            {
                "nombre": "Ard’xa",
                "team": "Beta Tester del caos",
                "nombrePersonaje": "Xardax",
                "species": "Humano",
                "culture": "Shin",
                "class": "Militar",
                "title": "🤫",
                "level": "1 - 5",
                "edad": "???",
                "peso": "???",
                "altura": "???",
                "descripcion": "Era un esclavo y era bien tratado, y tocaba cajIntento de asesinato a un bisconde.",
                "imagen": "./img/xar.png",
                "wins": ["Completada", "Completada", "No Explorada", "No Explorada", "No Explorada"]
            },
            {
                "nombre": "Lala",
                "team": "Beta Tester del caos",
                "nombrePersonaje": "Igna",
                "species": "Humano",
                "culture": "Iriali",
                "title": "La mejor comerciante y unica",
                "class": "Maestro de fabriales",
                "level": "1 - 5",
                "edad": "???",
                "peso": "???",
                "altura": "???",
                "descripcion": "Era una noble, y hablo con los Alethi, se calentó y puteo un alto príncipe. Este “demostró” que intentó asesinarlo y fallo. Por ello esta en los campamentos de Sadeas",
                "imagen": "./img/lala.png",
                "wins": ["Completada", "Completada", "No Explorada", "No Explorada", "No Explorada"]
            },
            {
                "nombre": "Jaime Abierto",
                "team": "Beta Tester del caos",
                "nombrePersonaje": "Alan",
                "species": "Humano",
                "culture": "Thayleño",
                "title": "Oppenheimer",
                "class": "Maestro de Fabriales",
                "level": "1 - 5",
                "edad": "???",
                "peso": "???",
                "altura": "???",
                "descripcion": "Intento crear un fabrial llamado proyecto man-J, y se negó a detenerse, incumplido las normas causando la muerte de muchos artefabriano, pero persistió volviendo a matar a otros. ",
                "imagen": "./img/jaime.png",
                "wins": ["Completada", "Completada", "No Explorada", "No Explorada", "No Explorada"]
            },
            {
                "nombre": "dustha`kjue / Otros",
                "team": "Diversidad Alfa Maravilla",
                "nombrePersonaje": "Infamous",
                "species": "Aimiano",
                "culture": "---",
                "title": "El Superviviente de las Guerras",
                "class": "Radiante",
                "level": "1-5",
                "edad": "+5000",
                "peso": "73kg",
                "altura": "1,72 m",
                "descripcion": "Huyó de su antigua vida marcado por la muerte, cambio de nombre cada vez que su fuerza flaqueó ante su debilidad y viajó por todo Roshar indiferente de su destino. Pero todo cambio el día que un spren se empezó a interesar en él y en una promesa casi olvidada.",
                "imagen": "./img/aimiano.png",
                "wins": ["Completada", "Completada", "Completada", "Completada", "Completada"]

            },
            {
                "nombre": "Jonnas",
                "team": "Diversidad Alfa Maravilla",
                "nombrePersonaje": "Zadrinz (Artista)",
                "species": "Humano",
                "culture": "Iriali",
                "title": "El Humano Entre Seres Magicos",
                "class": "Militar",
                "level": "4",
                "edad": "27",
                "peso": "71 kg",
                "altura": "1,73 m",
                "descripcion": "Un guerrero de una clase noble bastante antigua en Roshar con una personalidad bastante explosiva y de muy mal genio, es el heredero de su casa y está dispuesto a regresar el honor a su casa, la cual ha estado en una decadencia de su status generación tras generación.",
                "imagen": "./img/jonas.png",
                "wins": ["No Explorada", "No Explorada", "No Explorada", "Completada", "Completada"]
            },
            {
                "nombre": "",
                "team": "Diversidad Alfa Maravilla",
                "nombrePersonaje": "Daios",
                "species": "Parshendi",
                "culture": "",
                "title": "El Parshendi que Peleo Junto a la Humanidad",
                "class": "---",
                "level": "4",
                "edad": "???",
                "peso": "???",
                "altura": "???",
                "descripcion": "Es un parshendi que lucha para que Odium no termine de aterrorizar el mundo en que ha vivido, la guerra es amplia y no desea que lo poco del mundo que le queda sea controlado por loco demente.",
                "imagen": "./img/daios.png",
                "wins": ["No Explorada", "No Explorada", "No Explorada", "Completada", "No Explorada"]
            },
            {
                "nombre": "",
                "team": "Diversidad Alfa Maravilla",
                "nombrePersonaje": "Luke",
                "species": "Humano",
                "culture": "",
                "title": "Literal no tengo registros del personaje, perdon",
                "class": "",
                "level": "",
                "edad": "???",
                "peso": "???",
                "altura": "???",
                "descripcion": "",
                "imagen": "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg",
                "wins": ["No Explorada", "No Explorada", "No Explorada", "Completada", "No Explorada"]
            },
            {
                "nombre": "Tin",
                "team": "Diversidad Alfa Maravilla",
                "nombrePersonaje": "Vinnie",
                "species": "Humano",
                "culture": "",
                "title": "Fan de nº1 de Kaladin",
                "class": "Militar",
                "level": "5",
                "edad": "???",
                "peso": "???",
                "altura": "???",
                "descripcion": "Es un soldado que viajando ha terminado llegando hasta la torre, no tiene muy claro por que lo aceptaron como soldado, pero no desperdiciara su oportunidad de conocer a Kaladin bendito por la tormenta.",
                "imagen": "./img/tin.png",
                "wins": ["No Explorada", "No Explorada", "No Explorada", "Completada", "No Explorada"]
            }
            
        ]
    

    const profilesContainer = document.getElementById("profiles-container");

    // Obtener datos del JSON
    data.forEach((profile, index) => {
        // Crear tarjeta de perfil
        const profileCard = document.createElement("div");
        profileCard.classList.add("profile-card");

        let variation = (index % 2) === 1
        console.log(variation)
        // Crear imagen
        const img = document.createElement("img");
        img.src = profile.imagen;
        img.alt = profile.nombre;

        // Crear elementos de información
        const dataCard = document.createElement("div");
        const nameHeading = document.createElement("h2");
        nameHeading.textContent = profile.nombre;

        const characterName = document.createElement("p");
        characterName.textContent = `Autor: ${profile.nombrePersonaje}`;

        const characterSpecie = document.createElement("p");
        characterSpecie.textContent = `Especie: ${profile.species}`;

        const characterCulture = document.createElement("p");
        characterCulture.textContent = `Cultura : ${profile.culture}`;

        const characterClass = document.createElement("p");
        characterClass.textContent = `Clase : ${profile.class} (${profile.level})`;

        const age = document.createElement("p");
        age.textContent = `Edad: ${profile.edad}`;

        const weight = document.createElement("p");
        weight.textContent = `Peso: ${profile.peso}`;

        const height = document.createElement("p");
        height.textContent = `Altura: ${profile.altura}`;

        const description = document.createElement("p");
        description.textContent = `Descripción: ${profile.descripcion}`;

        // Agregar elementos a la tarjeta de perfil
        console.log(document.body.clientWidth)
        if(variation && document.body.clientWidth > 1000){
            profileCard.appendChild(img);
            profileCard.appendChild(dataCard);
        }else{
            profileCard.appendChild(dataCard);
            profileCard.appendChild(img);
        }

        dataCard.appendChild(nameHeading);
        if(profile.title !== undefined){
            const characterTitle = document.createElement("p");
            characterTitle.textContent = `Titulo: ${profile.title}`;
            dataCard.appendChild(characterTitle);
        }
        dataCard.appendChild(characterName);
        dataCard.appendChild(characterSpecie);
        dataCard.appendChild(characterCulture);
        dataCard.appendChild(characterClass);

        if(profile.spren !== undefined){
            const characterSpren = document.createElement("p");
            characterClass.textContent = `Spren : ${profile.spren}`;
            dataCard.appendChild(characterSpren);
        }

        dataCard.appendChild(age);
        dataCard.appendChild(weight);
        dataCard.appendChild(height);
        dataCard.appendChild(description);

        const characterWins = document.createElement("p");
        characterWins.textContent = `Zonas completadas:`
        const z0 = document.createElement("ol");
        const z1 = document.createElement("li");
        const z2 = document.createElement("li");
        const z3 = document.createElement("li");
        const z4 = document.createElement("li");
        const z5 = document.createElement("li");
        
        z1.textContent = `Campamentos de Sadeas: ${profile.wins[0]}`
        z2.textContent = `Islas Reshi: ${profile.wins[1]}`
        z3.textContent = `Lago puro: ${profile.wins[2]}`
        z4.textContent = `La antigua Desolacion: ${profile.wins[3]}`
        z5.textContent = `Urithiru: ${profile.wins[4]}`
            
            
        dataCard.appendChild(characterWins);
        dataCard.appendChild(z0);
        z0.appendChild(z1);
        z0.appendChild(z2);
        z0.appendChild(z3);
        z0.appendChild(z4);
        z0.appendChild(z5);

        // Agregar tarjeta de perfil al contenedor
        profilesContainer.appendChild(profileCard);
    });
});
