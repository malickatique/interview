
// Difficulty Level: 4/10
// Max Time Limit: 5 minutes

// Task: Write code for the "productionManagement" to stop producing cars when demand is met.


// Demand 10 car models
var demand = 0;

// Production wherehouse
const produceCars = (model) => 
{
    console.log(model);
    demand--;
}

// Production technical department
const productionChain = setInterval(()=> 
{
    produceCars(Math.random().toString(36).replace(/[^a-z]+/g, '') );
}, 1000);


// Production management
const productionManagement = () => {
    // Only production management can take notice and stop/start production of cars.
    demand = 10;
    if(demand == 0)
    {
        clearInterval(productionChain);
    }
};

productionManagement();