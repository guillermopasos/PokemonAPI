Feature: Validating Pokemon API
  Scenario Outline: Verify if character information is displaying correctly
    Given Pokemon "<name>" name
    When User call "GetPokemonName" with a get http request
    Then The API call got success status code 200
    And Verify its "type" is "<type>"

    Examples:
        |name   |type    |
        |pikachu|electric|
        |squirtle|water|
        |bulbasaur|grass|
        |charmeleon|fire|
        |mewtwo|psychic|
        |dragonite|dragon|