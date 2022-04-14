function positions(firstPlace, secondPlace, lastPlace) {
    var arrayInicial = [firstPlace, secondPlace, lastPlace]

    arrayInicial.forEach(function(competidor, index) {
        if (competidor == "Daniel" && index !== 0) {
          [arrayInicial[index], arrayInicial[index - 1]] = [arrayInicial[index - 1], arrayInicial[index]];
        }
    })
    console.log("1ª - Colocado " + arrayInicial[0]);
    console.log("2ª - Colocado " + arrayInicial[1]);
    console.log("3ª - Colocado " + arrayInicial[2]);
}