$(document).ready(function() {

    class Trainer {
        constructor() {
            this.trainername = {

            };
            this.pokemons = {
                bulbasaur: undefined,
                charmander: undefined,
                squirtle: undefined,
                throh: undefined,
                litten: undefined,
                tyrunt: undefined,
                larvitar: undefined,
                vulpix: undefined,
                mewtwo: undefined,
            };

        }
        get(pokemonName, trainerName) {
            let self = this;
            if (this.pokemons[pokemonName] != undefined) {
                $("#poke-name").html(this.pokemons[pokemonName].name);
                $("#poke-hp").html(this.pokemons[pokemonName].stats[5].base_stat);
                $("#poke-attack").html(this.pokemons[pokemonName].stats[4].base_stat);
                $("#poke-defense").html(this.pokemons[pokemonName].stats[3].base_stat);
            } else {
                $.ajax({
                    method: "GET",
                    url: "https://pokeapi.co/api/v2/pokemon/" + pokemonName,
                    success: function(data) {
                        self.pokemons[pokemonName] = data;
                        console.log(data.name);
                        $("#poke-name").html(data.name); 
                        $("#poke-hp").html(data.stats[5].base_stat); // $('#' + trainerName + ' .hp').html('...)
                        $("#poke-attack").html(data.stats[4].base_stat);
                        $("#poke-defense").html(data.stats[3].base_stat);
                        let abilities = [];
                        for (var i = 0; i < data.abilities.length; i++) {
                            abilities.push(data.abilities[i].ability.name + " ");
                        }
                        $("#poke-abilities").html(abilities);

                    }
                });
            }


        }



        }


    let myTrainer = new Trainer;


    $("#poke-trainer").html(myTrainer.trainername);

    function onPokemonClicked(clickEvent) {
        myTrainer.get(clickEvent.target.id, /*...*/);
    }

    $('.pokemon-button').click(onPokemonClicked);

    $('#myModal').modal();

}); //JQuery
