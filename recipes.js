const NUM_RECIPES = 1

const firstNames = ['']

const lastNames = ['']

// generate a random number between min and max
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`

// generate Ingredient
const generateIngredient = () => ``

// generate Instructions
const generateInstruction = () => ``

// create a person
const createRecipe = () => ({name: generateName(), ingredient: generateIngredient(), instruction: generateInstruction()})

// compare two Recipe for alphabetizing
export const compareNames = (recipe1, recipe2) => recipe1.name > recipe2.name

// add keys to based on index
const addKeys = (val, key) => ({key, ...val})

// create an array of length NUM_Recipe and add keys
export default Array.from({length: NUM_RECIPES}, createRecipe).map(addKeys)
