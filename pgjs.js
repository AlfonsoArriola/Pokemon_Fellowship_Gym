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
        get(pokemonName, secParent, trainerName) {
            
            let self = this;
             {
                $.ajax({
                    method: "GET",
                    url: "https://pokeapi.co/api/v2/pokemon/" + pokemonName,
                    success: function(data) {
                        self.pokemons[pokemonName] = data;
                        $(`section#${secParent} > div.card > div.card-body > h3#poke-name`).html(data.name);
                        $(`section#${secParent} > div.card > div.card-body > table > tbody > tr > td#poke-hp`).html(data.stats[5].base_stat);
                        $(`section#${secParent} > div.card > div.card-body > table > tbody > tr > td#poke-attack`).html(data.stats[4].base_stat);
                        $(`section#${secParent} > div.card > div.card-body > table > tbody > tr > td#poke-defense`).html(data.stats[3].base_stat);

                        let abilities = [];
                        for (var i = 0; i < data.abilities.length; i++) {
                            abilities.push(data.abilities[i].ability.name + " ");
                        }
                        $(`section#${secParent} > div.card > div.card-body > table > tbody > tr > td#poke-abilities`).html(abilities);
                    }
                });
            }


        }

        }


    let myTrainer = new Trainer;


    $("#poke-trainer").html(myTrainer.trainername);

    function onPokemonClicked(clickEvent) {
        
        let secParent = $(clickEvent.target).parents();
        myTrainer.get(clickEvent.target.id, secParent[2].id);
    }

    $('.pokemon-button').click(onPokemonClicked);

    $('#myModal').modal();

}); //JQuery
  