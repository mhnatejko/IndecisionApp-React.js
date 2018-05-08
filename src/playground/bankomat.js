function bankomat(request) {
  
    const nominal = [10, 20, 50, 100, 200];
    const resourse = {
        10: 10,
        20: 5,
        50: 2,
        100: 1,
        200: 0
    };

    let input = Math.ceil(request);
    let output= [];
    while (input > 0) {
        let validNom = nominal.filter(nom => input/nom > 1);
        // console.log(input, validNom, output)
        let validMax = Math.max(...validNom);
        input -= validMax;
        resourse[validMax] -= 1;
        output.push(validMax);
        console.log(`rzadanie:${input}, wyplata:${output}, validnom:${validNom}, calidmax:${validMax}`)
    
    }    
    console.log(output)
}

bankomat(60)

var nominal = [10, 20, 50, 100, 200];
var resourse = {
    10: 10,
    20: 5,
    50: 2,
    100: 1,
    200: 0
};
var output= [];

function work(){
    if(input > 0){
    var validNom = nominal.filter(nom => input/nom >= 1);
    // console.log(input, validNom, output)
    var validMax = Math.max(...validNom);
    console.log(`rzadanie:${input}, wyplata:${output}, validnom:${validNom}, validmax:${validMax}`)
    input -= validMax;
    resourse[validMax] -= 1;
    output.push(validMax);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////


bankomat = {
    resourse: {
        10: 10,
        20: 5,
        50: 2,
        100: 1,
        200: 0
    },
    
    availableMoneyKeys: [],
    availableMoneyKeysCreator: function(){
        for (el of resourse){
            if(resourse[el] > 0){
                ava.push(el)
            }
        }
    },

    delivery: function(deliveryObj){
        for(moneyKey in this.resourse){
            for(deliveryMoneyKey in deliveryObj){
                if(moneyKey==deliveryMoneyKey){
                    this.resourse[moneyKey]+=deliveryObj[deliveryMoneyKey]
                }
            }
        }
    },

    giveMoney: function(moneyRequest){
        console.log('function works');
        
        var isPaymmentPossible = function(){
            var sumOfAvailable = 0;
            for(moneyKey in this.resourse){
                sumOfAvailable += this.resourse[moneyKey]
            }
            if(sumOfAvailable > moneyRequest){return true}
        };
        var isPossible = isPaymmentPossible();

        if(isPossible){
            console.log('mozna wyplacic')
        }
    },
    


}