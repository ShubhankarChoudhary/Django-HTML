console.log('Hello World!!')
// MATH OPERATORS
var currentyear=2018
var shubh_age=currentyear-1994
var pij_age=currentyear-1992
console.log(shubh_age)
console.log(pij_age)
var value=100/3
console.log(value)
var whoisOlder = pij_age>shubh_age
console.log(whoisOlder)
// TYPEOF OPERATOR
console.log('The variable type of value is :- '+typeof value+' '+'The variable type of value is :- '+typeof whoisOlder)


// USE OF OPERATORS

var currentyear=2020,ageJohn,ageMartin,validAge,value1,value2,avg;
ageJohn=currentyear-1986
ageMartin=currentyear-2004
validAge=18
console.log(ageJohn)
console.log(ageMartin)
value1=ageJohn>=validAge
value2=ageMartin>=validAge
console.log(value1)
console.log(value2)
avg=(ageJohn+ageMartin)/2
console.log(avg)

// This uses the BODMAS rule

var a = b = (2*5)-4+10
console.log(a,b)


console.log('*****Coding Challenge*****')

var MarkMass,JohnMass,MarkHeight,JohnHeight,MarkBMI,JohnBMI,BMIcompare;
MarkMass=60
MarkHeight=1.75
JohnMass=70
JohnHeight=1.85
MarkBMI = MarkMass / (MarkHeight*MarkHeight)
JohnBMI = JohnMass / (JohnHeight*JohnHeight)
BMIcompare = MarkBMI>=JohnBMI
console.log("Mark's BMI is "+MarkBMI+" and John's BMI is "+JohnBMI)
console.log("Is Mark's BMI higher than John's BMI? ",BMIcompare)

if (MarkBMI>JohnBMI){
    console.log("Mark's BMI is greater")
}
else{
    console.log("John's BMI is greater")
}
console.log('*****Coding Challenge Ends*****')
if (JohnMass==70){
    console.log('Correct Value')
}
else{
    console.log('Wrong Value')
}
var Name='Sam'
var isMarried=false
if(isMarried){
    console.log(Name+' is married')
}
else{
    console.log(Name+' is not married')
}
JohnAge=22
if (JohnAge<13){
    console.log('John is a child')
}
else if(JohnAge>=13 && JohnAge<20){
    console.log('John is a teenager')
}
else{
    console.log('John is an adult')
}
console.log('******************')
//*******Ternary Operator********/

var ShubhAge=25
var bike = ShubhAge >= 18 ? 'Can ride a 600cc bike' : 'Ride a 150cc bike'
console.log(bike)
var job='Doctor'
switch(job){
    case 'Teacher':
        console.log(Name+' is a teacher');
        break;
    case 'Professor':
        console.log(Name+' is a Professor');
        break;
    case 'Doctor':
        console.log(Name+' is a doctor');
}
console.log('************************')

var AnshAge=45

var Name='Ansh'


switch(true){
    case AnshAge <=12 :
        console.log(Name+' is a small boy')
        break;
    case AnshAge > 12 && AnshAge < 15 :
        console.log(Name+' is a boy')
        break;
    case AnshAge >= 15 && AnshAge<=20:
        console.log(Name+' is a teenager')
        break;
    case AnshAge >20 && AnshAge<= 30:
        console.log(Name+' is a Young Man')
        break;
    case AnshAge>30 && AnshAge<45 :
        console.log(Name+' is a Man')
        break;
    default:
        console.log(Name+' has started getting old')
}


// Falsy Values  undefined,null,0,NaN

JohnTeam=[89,120,103]
MikeTeam=[116,94,123]

var JohnScore,MikeScore;

JohnScore = (JohnTeam[0]+JohnTeam[1]+JohnTeam[2])

console.log(JohnScore)

MikeScore = (MikeTeam[0]+MikeTeam[1]+MikeTeam[2])

console.log(MikeScore)

if (JohnScore > MikeScore) {
    console.log('John is more')
}
else if (JohnScore < MikeScore) {
    console.log('Mike is more')
}
else{
    console.log("It's a tie")
}
