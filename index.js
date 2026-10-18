//1
const Coche = {
    marca: "SEAT",
    modelo: "Ibiza",
    matricula: "3296THZ"
}

//2
const Casa = {
    codPostal: 46025,
    calle: "Elarte de la Juana",
    portal: 17,
    piso: 2
}

//3
const FullStackDeveloper = {
    arrayLenguajes: []
    arrayProyectos: []
}

const FullStackDeveloper = {
    lenguajes: ["HTML", "CSS", "JavaScript"],
    proyectos: ["Página web", "Tienda online", "Portfolio"]
};

//4
const Perro = {
    nombre: "Khali",
    raza: "San Bernardo",
    color: "Moteado",
    edad: 7,

    ladrar: function () {
        return "Wof wof";
    },
    popo: function () {
        return Math.random() * 3;
    }
};
console.log(Perro.ladrar());
///OTRA FORMA DE LLAMAR FUNCION
Perro.ladrar();
Perro.popo();

//5
const Portatil = {
    marca: "ASUS",
    peso: 28
};
const marcaPortatil = Portatil.marca;
console.log(marcaPortatil);

//6
const Portatil2 = {
    marca: "HP"
}
const marcaPortatil2 = Portatil2.marca;
console.log(marcaPortatil2);

//7
const Concierto = {
    grupos: [
        "Guns and Roses",
        "Los Ramones",
        "Walls"
    ]
}
const grupos = Concierto.grupos;

console.log(grupos);

//8
const Led = {
    red: 10,
    green: 5,
    blue: 20
}
const RGB = [Led.red, Led.green, Led.blue];
console.log(RGB);

//9
const Portatil = {
    modelo: "Asus intel 8 234"
}
Portatil.modelo = "345"
console.log(Portatil);

//10
const Concierto = {
    NúmeroEntradas: 300,
    Cartelera: [
        "Green Day",
        "Bring me the Horizon",
        "Twenty One Pilots"
    ]
}
Concierto.Cartelera.push("Guns N Roses");
console.log(Concierto);

//11
const Concierto = {
    Date: new Date(2026, 12, 17)
};
console.log(Concierto);

Concierto.Date = new Date(2026, 9, 16);

console.log(Concierto);

//12
const Impresora = {
    imprimiendo: false
};
Impresora.imprimiendo = {
    nombreArchivo: "documento.pdf",
    copias: 3,
    numPaginas: 20
};
console.log(Impresora);
//13

const Noticia = {
    Titular: "Hombre descarrila",
    Cuerpo: "Hombre borracho descarrila tras afterhour intenso"
}

//14
const Persona = {
    Nombre: "Carmen",
    Apellidos: "Guiral Barberá",
    Edad: 23
}

//15
const Avion = {
    numPasajeros: 40,
    Despegar: function () {
        return "Despegando..."
    },
    Volar: function () {
        return "Llegando al destino..."
    },
    Aterrizar: function () {
        return "Aterrizando..."
    }
}
console.log(Avion.Despegar());
console.log(Avion.Volar());
console.log(Avion.Aterrizar());

//16
const Paquete = {
    Array: [
        "ID"
        "Dirección"
        "Numero de Entrega"
    ]
}

//17
const Pais = {
    Num habitantes: "1670000",
    Continente: "Asia",
    Gentilicio: "Asiaticos"
}

//18
const O_Error = {
    Codigo: 404
}
const codError = O_Error.Codigo;
console.log(codError);

//19
const Grupo = {
    Día: 16,
    Mes: "Abril",
    Año: 2023,
    Integrantes: ["Pablo", "Juana", "David"]
}
const Integrantes = Grupo.Integrantes;
console.log (Integrantes);

//20
const Impresora = {
    tinta: {
        rojo: 40,
        verde: 60,
        azul: 20
    }
};
const nivelesTinta = Impresora.tinta;
console.log(nivelesTinta);

//21
const Pantalla {
    pixeles: [
        [1,5,4],
        [3,7,8]
    ]
}
const pixeles = Pantalla.pixeles;
console.log (pixeles);

//22
const Movil = {
    Marca: "Hwei",
    Especificaciones: "Modelo 3",
    Batería: "3%"
}
const especificaciones = Movil.Especificaciones;
console.log (Movil ["Especificaciones"]);

//23
const Grupo = {
    Tipo: "Juegos de rol",
    numIntegrantes: 6
}
Grupo.numIntegrantes = 5;
console.log (numIntegrantes);

//24
const Pantalla = {
    Tipo: "OLED",
    Dimensiones: "1890x1900"
}
Pantalla.Dimensiones = "1920x1080";
console.log (Pantalla.Dimensiones);

//25
const Led = {
    encendido: true
};

Led.encendido = !Led.encendido;

console.log(Led.encendido); 

//26
const Movil = {
    Marca: "Oppo",
    temperatura: "15º"
}

Movil.temperatura = "20º";
console.log (Movil.temperatura);