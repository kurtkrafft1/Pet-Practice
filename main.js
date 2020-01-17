const pet = {
    'name': 'Sunny',
    'species': 'Dog',
    'breed': 'Labordoodle',
    'nicknames': ['doggo', 'puppers', 'Sunster', 'dog'],
    'age': 7,
    bite: function(){
        alert(`OH SNAP! looks like ${this.name} just bit you!`)
    },
    bark: function(){
        console.log(`WOOF WOOF says ${this.name}`)
    },
    'favoriteToys': [],
    play: function(toy, boo){
        if (boo === true){
            console.log(`Awh, looks like ${this.name} really likes the ${toy} toy!`)
            this.favoriteToys.push(toy);
        }else {
            console.log(`Oh, seems that ${this.name} doesn't like the ${toy} toy.`)
        }
    }
    

}

pet.bite()
pet.bark()
pet.play('bottle-rocket', true)