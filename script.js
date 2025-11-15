class SmoothieMachine {
    constructor(size,ingredients,milk) {
        this.size = size;
        this.ingredients = ingredients;
        this.milk = milk;
}
//a function inside a class is called a method
describe(){
return `
<h3>Your smoothie Order:</h3>
<p>Size: ${this.size}</p>

<p>Ingredients: ${this.ingredients.join(", ")}</p> 
<p>Milk: ${this.milk}</p>
`
}
}        