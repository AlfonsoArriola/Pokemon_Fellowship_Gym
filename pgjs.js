$(document).ready(function() {

    class Trainer {
        constructor(trainerName, trainerNum, pokemonArr) {
            this.trainerName = trainerName;
            this.pokemons = pokemonArr;
            this.trainerNum = trainerNum;
        }
        get(pokemonName) {
            let self = this;
        }
    }

    function getData(trainer, trainerNum, pokemon) {
            let pokemonName = pokemon;
            $.ajax({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemonName,
            success: function(data) {
                $("#poke-name-" + trainerNum).html(data.name); 
                $("#poke-hp-" + trainerNum).html(data.stats[5].base_stat); // $('#' + trainerName + ' .hp').html('...)
                $("#poke-attack-" + trainerNum).html(data.stats[4].base_stat);
                $("#poke-defense-" + trainerNum).html(data.stats[3].base_stat);
                let abilities = [];
                for (var i = 0; i < data.abilities.length; i++) {
                    abilities.push(data.abilities[i].ability.name + " ");
                }
                $("#poke-abilities-" + trainerNum).html(abilities);

                    }
                });
    }

    let silverdragonia = new Trainer('Silverdragonia', 1, [1, 4, 7]);
    let spawnhellraiser = new Trainer('SpawnHellraiser', 2, [246, 37, 150]);
    let juanito = new Trainer('Juanito', 3, [1, 4, 7]);
    let cash_money = new Trainer('Cash_Money', 4, [696, 725, 538]);

    $('#bulbasaur0').click(function(){
        getData('silverdragonia',1,'bulbasaur')
    });
    $('#charmander0').click(function(){
        getData('silverdragonia',1,'charmander')
    });
    $('#squirtle0').click(function(){
        getData('silverdragonia',1,'squirtle')
    });

    $('#larvitar').click(function(){
        getData('spawnhellraiser',2,'larvitar')
    });
    $('#vulpix').click(function(){
        getData('spawnhellraiser',2,'vulpix')
    });
    $('#mewtwo').click(function(){
        getData('spawnhellraiser',2,'mewtwo')
    });

    $('#bulbasaur1').click(function(){
        getData('juanito',3,'bulbasaur')
    });
    $('#charmander1').click(function(){
        getData('juanito',3,'charmander')
    });
    $('#squirtle1').click(function(){
        getData('juanito',3,'squirtle')
    });

    $('#litten').click(function(){
        getData('cash_money',4,'litten')
    });
    $('#tyrunt').click(function(){
        getData('cash_money',4,'tyrunt')
    });
    $('#throh').click(function(){
        getData('cash_money',4,'throh')
    });


}); //JQuery
