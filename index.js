// Code your solution here
let findMatching = (array, string) => {
    let updatedArray = array.filter(n => {
        return n.toUpperCase() === string.toUpperCase()
    })
    return updatedArray
}

let fuzzyMatch = (array, string) => {
    let updatedArray = array.filter(n => {
        
        let first_two = n.charAt(0) + n.charAt(1)
        if (string === first_two) {
            return string
        }
    })
    return updatedArray
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

let matchName = (array, string) => {
    let updatedArray = array.filter(n => {
        if (n.name === string){
            return n
        }
    })
    return updatedArray
}

console.log(matchName(drivers, "Bobby"))

