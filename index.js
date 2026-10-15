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
    portal:17 ,
    piso: 2 
}

//3
const FullStackDeveloper = {
    arrayLenguajes:,
    arrayProyectos:
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

    ladrar: function (){
        return "Wof wof";
    },
    popo:function (){
        return Math.random() *3;
    }
};
console.log (Perro.ladrar ());
        ///OTRA FORMA DE LLAMAR FUNCION
Perro.ladrar ();
Perro.popo ();

//5
const Portatil = {
    marca: "ASUS",
    peso: 28
};
const marcaPortatil = Portatil.marca;
console.log (marcaPortatil);
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