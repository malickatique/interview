
// Difficulty Level: 6/10
// Max Time Limit: 3 minutes

// Task: What will be the output of the following code and why?

class Thunderstorm
{
    notAVariable = "construct";

    constructor()
    {
        this.notAVariable = "Illuminate";
    }
    
    static letsTry()
    {
        console.log(this.notAVariable);
    }
}

Thunderstorm.letsTry();

// Solution:
