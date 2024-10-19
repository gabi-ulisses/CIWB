function ex11(frutas){
    let abrevMaiusculas = frutas.map(fruta => fruta.substring(0, 3).toUpperCase());
    console.log(abrevMaiusculas);
}
