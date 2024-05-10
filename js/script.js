document.addEventListener("DOMContentLoaded", function() {

    const data = [
            {
                "nombre": "Baryk",
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
                "nombre": "Juan Pérez",
                "nombrePersonaje": "El Guerrero",
                "species": "Humano",
                "culture": "---",
                "class": "Maestro de fabriales",
                "level": 1,
                "edad": 30,
                "peso": "75 kg",
                "altura": "1.80 m",
                "descripcion": "Un valiente guerrero con una determinación inquebrantable.",
                "imagen": "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg",
                "wins": ["No Explorada", "No Explorada", "No Explorada", "No Explorada", "No Explorada"]
            },
            {
                "nombre": "María González",
                "nombrePersonaje": "La Hechicera",
                "species": "Humano",
                "culture": "---",
                "class": "Maestro de fabriales",
                "level": 1,
                "edad": 25,
                "peso": "60 kg",
                "altura": "1.65 m",
                "descripcion": "Una poderosa hechicera con conocimientos ancestrales.",
                "imagen": "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg",
                "wins": ["No Explorada", "No Explorada", "No Explorada", "No Explorada", "No Explorada"]
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
        if(variation){
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
