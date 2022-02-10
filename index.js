function cardDistribution(persons) {
    const personsList = [...persons];
    const result = [];
    personsList.forEach((singlePerson, index) => {
        let {district,currentYear, postNo, birthYear, priority} = singlePerson;
        district = district.toString();
        currentYear = currentYear.toString();
        postNo = postNo.toString();
        birthYear = birthYear.toString();
        priority = priority.toString();
        const cardUser = {};
        let cardNumber = `${district.slice(0, 2).toUpperCase()}${currentYear.slice(currentYear.length - 2)}${postNo.slice(0 ,2)}${birthYear}`;
        cardNumber = cardNumber.padEnd(15, 0);        
        cardNumber = `${cardNumber}${index + 1}`;
        cardUser.cardNumber = cardNumber;             
        if(parseInt(cardNumber.slice(cardNumber.length - 1)) % 2 === 0) {
            cardUser.gift = "R";
        }
        else {
            cardUser.gift = "W";
        }
        cardUser.priority = priority;
        result.push(cardUser);
    })

    return result.sort((object1, object2) => object1.priority - object2.priority);
}    

const cardDistributionArray = [
    {
        name: "Mr Rashed",
        birthYear: 1999,
        currentYear: 2022,
        district: "Dhaka",
        postNo: 1200,
        priority: 2,
    },
    {
        name: "Mr Raju",
        birthYear: 1995,
        currentYear: 2022,
        district: "Rajshahi",
        postNo: 1211,
        priority: 1,
    }
    
];

console.log(cardDistribution(cardDistributionArray));


