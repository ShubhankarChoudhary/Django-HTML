function Price(Product){
    switch(true){
        case (Product==='Bike'):
            console.log('The Price is Rs. 80,000')
            break;
        case (Product==='Car'):
            console.log('The Price is Rs. 1 Lakh')
            break;
        default:
            console.log('No vehicles are present')
    }
}

function CalculateAge(BirthYear){
    var PresentYear = 2020
    var ageinside = PresentYear - BirthYear
    console.log('This is the output from CalculateAge function, the current age is : '+ageinside)
    return PresentYear - BirthYear
}

function YearsToRetire(Name,BirthYear){
    var age = CalculateAge(BirthYear)
    console.log('The current age of '+Name+' is : '+age)
    var AgeToRetire = 60
    var NoOfYearsToRetire = AgeToRetire - age
    if (NoOfYearsToRetire<0 ){
        console.log('The age limit to work has already crossed but you can still give your ideas to the youth')
    }
    else{
        console.log('The number of years to work is : '+NoOfYearsToRetire)
    }
}

Price('')
YearsToRetire('Alpha',1994)
YearsToRetire('Betta',2000)
YearsToRetire('Gamma',1930)

// Function Expression

var PriceofCar = function(CarName){
    switch(CarName){
        case 'Bentley':
            return '55 Lakhs'
        case 'Lamborghini':
            return '2 crores'
        case 'Ferrari':
            return '1.5 crore'
        case 'Maruti Suzuki':
            return '10 Lakhs'
        default:
            return 'Please try hard to buy a Lamborghini'
    }
}
console.log(PriceofCar('Bentley'))
console.log(PriceofCar('Lamborghini'))
console.log(PriceofCar('Ferrari'))
console.log(PriceofCar('Honda'))


console.log(typeof(23))
console.log(typeof('A'))



// ARRAY

var Alpha=['Sam','India',1994]

console.log(Alpha)

Alpha.push('False')
Alpha.push('False')

console.log(Alpha)

var isCoder = Alpha.indexOf('Sam') === -1 ? 'Sam is not a coder' : 'Sam is a coder'

console.log(isCoder)


// Resturant  

function TipCalculator(Amount){
    var tip;
    switch(true){
        case (Amount<50):
            tip = 0.2*Amount
            return Amount+tip;
        case (Amount>=50 || Amount<=200):
            tip = 0.15*Amount
            return Amount+tip
        case (Amount>200):
            tip = 0.1*Amount
            return Amount+tip
    }
}
var Bill=[124,48,268]
var NewBill=[]
var i,c;
for (i=0;i<Bill.length;i++){
    c=TipCalculator(Bill[i])
    console.log(c+' is the total amount including Tip for Bill : '+Bill[i])
    NewBill.push(c)
}
// console.log(Bill+' is the old bill without Tip')
// console.log(NewBill+' is the new bill with Tip')
console.log(Bill)
console.log(NewBill)


// Key Value Pair






















































































































































