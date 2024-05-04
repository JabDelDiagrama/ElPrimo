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
                "imagen": "./img/diego.png"
            },
            {
                "nombre": "Arsia-hija-hija-Lisha",
                "nombrePersonaje": "Ladymoonwhite (Artista)",
                "species": "Humano",
                "culture": "Shin",
                "class": "Radiante (Vigilante de la Verdad)",
                "level": 3,
                "edad": 43,
                "peso": "--",
                "altura": "--",
                "descripcion": "Granjera de Shinovar, La que Sumaba. Se hayaba en la cumbre de la sociedad por sus conocimientos sobre plantas y cultivos, regía sus terrenos y había escrito varios libros. Hasta que un extranjero acusado falsamente de crímenes importantes se coló no solo en sus cultivos sagrados si no también en los vecinos. Arsia lo acogió, escondió y defendió. Cuando se descubrió la mentira y frente a tal ofensa fue juzgada y convertida en una Sinverdad.",
                "imagen": "./img/luna.png"
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
                "imagen": "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg"
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
                "imagen": "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg"
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
                "imagen": "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg"
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
                "imagen": "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg"
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
        characterName.textContent = `Autor : ${profile.nombrePersonaje}`;

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
        dataCard.appendChild(characterName);
        dataCard.appendChild(characterSpecie);
        dataCard.appendChild(characterCulture);
        dataCard.appendChild(characterClass);
        dataCard.appendChild(age);
        dataCard.appendChild(weight);
        dataCard.appendChild(height);
        dataCard.appendChild(description);

        // Agregar tarjeta de perfil al contenedor
        profilesContainer.appendChild(profileCard);
    });
});
