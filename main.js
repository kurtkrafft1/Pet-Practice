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
    play: function(){
        console.log(`Looks like ${this.name} is trying to play with you!`)
    }
}

pet.bite()
pet.bark()
pet.play()