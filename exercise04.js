var cat = {
    tiredness: 20,
    hunger: 80,
    loneliness: 35,
    happiness: 50,
    sleep: function() {
        console.log("Going to bed");
        this.tiredness = this.tiredness + 10;
    },
    feed: function() {
        console.log("Eating all the yuminess");
        this.hunger = this.hunger + 10;
    },
    pet: function() {
        console.log("Yay! Being petted!");
        this.pet = this.pet + 10;
    },
    cuddle: function() {
        console.log("I love being cuddled!");
        this.happiness = this.happiness + 10;
    }
};

console.log(cat.sleep());
console.log(cat.feed());
console.log(cat.pet());
console.log(cat.cuddle());