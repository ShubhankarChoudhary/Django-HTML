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


var John = {
    fName : 'John',
    lName : 'Franklin',
    BirthYear : 1989,
    isMarried : false ,
    Job : 'IT Professional',
    FamilyMembers : ['Alpha','Betta','Gamma']
}

console.log(John.fName)
console.log(John.lName)
console.log(John.isMarried)

John.isMarried = true

console.log(John.isMarried)

console.log(John)


// OBJECT LITERAL


var Dani = new Object();
 Dani.fName = 'Daniel'
 Dani.lName='Cool'
 Dani.BirthYear = 1988
 Dani['Job'] = 'IT Professional'

 console.log(Dani)

var Jharkhand = {
    State : 'Jharkhand',
    Capital : 'Ranchi',
    Districts : ['Deoghar','Dumka','Dhanbad'],
    NoOfTouristSpots : 5,
    IncomeOfState : function(NoOfTouristSpots){
        this.Profit = (10*this.NoOfTouristSpots);
    }
}
console.log(Jharkhand.IncomeOfState())
// Jharkhand.Profit = Jharkhand.IncomeOfState()
console.log(Jharkhand)

// BMI of JOHN and MARK

var John = {
    FullName : 'John Martin',
    Mass : 75,
    Height : 1.80,
    BMI : function(){
        this.JohnBMI = this.Mass/(this.Height*this.Height)
        return this.JohnBMI
    }
}
var Mark = new Object();
Mark = {
    FullName : 'Mark Luther',
    Mass : 80,
    Height : 1.90,
    BMI : function(){
        this.MarkBMI = this.Mass/(this.Height*this.Height)
        return this.MarkBMI
    }
}

console.log(John.BMI())
console.log(John)
console.log(Mark.BMI())
console.log(Mark)

if (John.BMI()>Mark.BMI()){
    console.log(John.FullName+'  '+John.JohnBMI)
}
else if(John.JohnBMI<Mark.MarkBMI){
    console.log(Mark.FullName+'  '+Mark.MarkBMI)
}
else{
    console.log('Same BMI value for both')
}


// Loops


for (var i=0; i<=9;i++){
    console.log(i)
}

for (i=10; i>=1;i--){
    console.log(i)
}


FamilyMembers = ['Mom','Dad',22,'Ansh','Harsh',25]
// for (i=0;i<FamilyMembers.length;i++){
//     console.log(FamilyMembers[i])
// }
// i=0
// while(i<FamilyMembers.length){
//     console.log(FamilyMembers[i])
//     i++
// }

for (i=0;i<10;i++){
    if (typeof FamilyMembers[i] === 'string'){
        continue;
    }
    console.log(FamilyMembers[i])
}

// Challenge
var John = {
    Bill : [124,48,268,180,42],
    tip : [],
    Total : [],
    calTip : function(Bill){
        console.log("***********John's Details Starts**************")
        for (i=0;i<this.Bill.length;i++){
            if (this.Bill[i]<50){
                this.tip[i]=0.2*this.Bill[i]
                this.Total[i]=CalculateTotal(this.Bill[i],this.tip[i])                
            }
            else if (this.Bill[i]>=50 || this.Bill[i]<=200){
                this.tip[i]=0.15*this.Bill[i]
                this.Total[i]=CalculateTotal(this.Bill[i],this.tip[i])
            }
            else if (this.Bill[i]>200){
                this.tip[i]=0.1*this.Bill[i]
                this.Total[i]=CalculateTotal(this.Bill[i],this.tip[i])
            }
        }
        console.log('Bill of 5 Restaurants : - '+this.Bill)
        console.log('Tip for the Bills : - '+this.tip)
        console.log('Total Amount : - '+this.Total)
        tiptotal=0
        for (i=0;i<this.Bill.length;i++){
            tiptotal=tiptotal+this.tip[i]
        }
        tipavgJ=tiptotal/this.Bill.length
        console.log(tipavgJ+' is the average of Tip given by John')
        console.log("***********John's Details Ends**************")
    }
}


var Mark = {
    Bill : [77,375,110,45],
    tip : [],
    Total : [],
    calTip : function(Bill){
        console.log("***********Mark's Details Starts**************")
        for (i=0;i<this.Bill.length;i++){
            if (this.Bill[i]<100){

                this.tip[i]=0.2*this.Bill[i]
                this.Total[i]=CalculateTotal(this.Bill[i],this.tip[i])                
            }
            else if (this.Bill[i]>=100 && this.Bill[i]<=300){
                console.log(this.Bill[i])
                this.tip[i]=0.10*this.Bill[i]
                this.Total[i]=CalculateTotal(this.Bill[i],this.tip[i])
            }
            else if (this.Bill[i]>300){
                this.tip[i]=0.25*this.Bill[i]
                this.Total[i]=CalculateTotal(this.Bill[i],this.tip[i])
            }
        }
        console.log('Bill of 5 Restaurants : - '+this.Bill)
        console.log('Tip for the Bills : - '+this.tip)
        console.log('Total Amount : - '+this.Total)
        tiptotal=0
        for (i=0;i<this.Bill.length;i++){
            tiptotal=tiptotal+this.tip[i]
        }
        tipavgM=0
        tipavgM=tiptotal/this.Bill.length
        console.log(tipavgM+' is the average of Tip given by Mark')
        console.log(tiptotal)
        console.log("***********Mark's Details Starts**************")
        
    }
}

John.calTip()
Mark.calTip()

function CalculateTotal(Bills,Tips){
    var Totals;
    Totals=Tips+Bills
    return Totals
}
if (tipavgJ>tipavgM){
    console.log('John pays more tip')
}
else console.log('Mark pays more tip')



var classes = 'Tenth';
var classes = 'Ninety ninety eight'

if (classes===window.classes){
    console.log('True')
}
else console.log('False')


















































































































































































































































