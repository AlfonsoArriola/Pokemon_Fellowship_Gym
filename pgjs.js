$(document).ready(function() {


    class Trainer {
        constructor() {
            this.trainername = 'Juanito Perez';
            this.pokemons = {
                bulbasaur: undefined,
                charmander: undefined,
                squirtle: undefined,
            };

        }
        get(pokemonName) {
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
                        $("#poke-hp").html(data.stats[5].base_stat);
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


        all(myUrl) {

            $.ajax({
                method: "GET",
                url: "https://pokeapi.co/api/v2/pokemon/1",
                success: function(data) {
                    $("#poke-img1").attr("src", data.sprites.front_default);
                }
            });

            $.ajax({
                method: "GET",
                url: "https://pokeapi.co/api/v2/pokemon/2",
                success: function(data) {
                    $("#poke-img2").attr("src", data.sprites.front_default);

                }
            });

            $.ajax({
                method: "GET",
                url: "https://pokeapi.co/api/v2/pokemon/3",
                success: function(data) {
                    $("#poke-img3").attr("src", data.sprites.front_default);

                }
            });

        }


    }

    let myTrainer = new Trainer;


    $("#poke-trainer").html(myTrainer.trainername);

    function onPokemonClicked(clickEvent) {
        myTrainer.get(event.target.id);
    }

    $('.pokemon-button').click(onPokemonClicked);

    $('#myModal').modal();

}); //JQuery
