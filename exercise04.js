var cat = {
    tiredness: 70,
    hunger: 65,
    loneliness: 35,
    happiness: 50,
    sleep: function(nap) {
        console.log("Going to bed");
        if(nap == "Hour"){
            this.tiredness = this.tiredness - 15;
        } else {
            this.tiredness = this.tiredness - 10;
        }
    },
    feed: function(food) {
        console.log("Eating all the yumminess");
        if (food == "Whiskers") {
            this.hunger = this.hunger - 10;
        } else {
            this.hunger = this.hunger + 10;
        }
    },
    pet: function() {
        console.log("Yay! Being petted!");
        // TODO: Clean this up, because it does not look good
        this.happiness = this.happiness + Math.round(Math.random() * (20 - (-20)) + (-20));
    },
    cuddle: function() {
        console.log("I love being cuddled!");
        this.happiness = this.happiness + 10;
    },
    laserPointer: function() {
        console.log("This is fun!");
        this.tiredness = this.tiredness + 20;
        this.hunger = this.hunger + 10;
        this.happiness = this.happiness + 15;
    },

    catStatus: function() {
        console.log("This is the cat's tiredness status: " + this.tiredness);
        console.log("This is the cat's hunger status: " + this.hunger);
        console.log("This is the cat's loneliness status: " + this.loneliness);
        console.log("This is the cat's happiness status: " + this.happiness);
    }
};


console.log(cat.sleep("Hour"));
console.log(cat.feed("Whiskers"));
console.log(cat.pet());
console.log(cat.cuddle());
console.log(cat.laserPointer());
console.log(cat.catStatus());