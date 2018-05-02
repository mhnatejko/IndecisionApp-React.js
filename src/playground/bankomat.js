function bankomat(request) {
    input = request;
    const nominal = [10, 20, 50, 100, 200];
    const resourse = {
        10: 10,
        20: 5,
        50: 2,
        100: 1,
        200: 0
    };

    let validNom = nominal.filter(nom => input/nom > 1);
    let output= [];
    while (input > 0) {
        console.log(input, validNom, output)
        validMax = Math.max(...validNom);
        if (input > validMax){
            input -= validMax;
            resourse[validMax] -= 1;
            output.push(validMax);

        } else {
            validNom.splice(validNom.indexOf(validMax) ,1);
        }      
    }    
    console.log(output)
}

bankomat(60)