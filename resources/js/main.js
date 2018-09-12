var johnMass, ahmedMass, johnHeight, ahmedHeight;

johnMass = 70;
ahmedMass = 90;
johnHeight = 190;
ahmedHeight = 170;

var johnBMI = johnMass / (johnHeight * johnHeight);

var ahmedBMI = ahmedMass / (ahmedHeight * ahmedHeight);

var johnisbig = johnBMI > ahmedBMI;


console.log('John is big than ahmed ? ' + johnisbig);
