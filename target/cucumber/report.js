$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/getCharacterName.feature");
formatter.feature({
  "name": "Validating Pokemon API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if character information is displaying correctly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Pokemon \"\u003cname\u003e\" name",
  "keyword": "Given "
});
formatter.step({
  "name": "User call \"GetPokemonName\" with a get http request",
  "keyword": "When "
});
formatter.step({
  "name": "The API call got success status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify its \"type\" is \"\u003ctype\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "type"
      ]
    },
    {
      "cells": [
        "pikachu",
        "electric"
      ]
    },
    {
      "cells": [
        "squirtle",
        "water"
      ]
    },
    {
      "cells": [
        "bulbasaur",
        "grass"
      ]
    },
    {
      "cells": [
        "charmeleon",
        "fire"
      ]
    },
    {
      "cells": [
        "mewtwo",
        "psychic"
      ]
    },
    {
      "cells": [
        "dragonite",
        "dragon"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if character information is displaying correctly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Pokemon \"pikachu\" name",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.pokemon_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User call \"GetPokemonName\" with a get http request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_call_with_a_get_http_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call got success status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.the_API_call_got_success_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify its \"type\" is \"electric\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.verify_its_type_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if character information is displaying correctly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Pokemon \"squirtle\" name",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.pokemon_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User call \"GetPokemonName\" with a get http request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_call_with_a_get_http_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call got success status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.the_API_call_got_success_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify its \"type\" is \"water\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.verify_its_type_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if character information is displaying correctly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Pokemon \"bulbasaur\" name",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.pokemon_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User call \"GetPokemonName\" with a get http request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_call_with_a_get_http_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call got success status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.the_API_call_got_success_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify its \"type\" is \"grass\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.verify_its_type_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if character information is displaying correctly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Pokemon \"charmeleon\" name",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.pokemon_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User call \"GetPokemonName\" with a get http request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_call_with_a_get_http_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call got success status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.the_API_call_got_success_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify its \"type\" is \"fire\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.verify_its_type_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if character information is displaying correctly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Pokemon \"mewtwo\" name",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.pokemon_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User call \"GetPokemonName\" with a get http request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_call_with_a_get_http_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call got success status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.the_API_call_got_success_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify its \"type\" is \"psychic\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.verify_its_type_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if character information is displaying correctly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Pokemon \"dragonite\" name",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.pokemon_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User call \"GetPokemonName\" with a get http request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_call_with_a_get_http_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call got success status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.the_API_call_got_success_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify its \"type\" is \"dragon\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.verify_its_type_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});