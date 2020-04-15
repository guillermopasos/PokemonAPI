package stepDefinitions;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;
import pojo.GetPokemonName;
import resources.APIResources;
import resources.Utils;
import java.io.IOException;
import static io.restassured.RestAssured.given;
public class stepDefinition extends Utils {

    RequestSpecification req;
    Response response;
    GetPokemonName gp;
    @Given("Pokemon {string} name")
    public void pokemon_name(String pokemonName) throws IOException {
        req = given().spec(buildRequestSpecification(pokemonName));
    }

    @When("User call {string} with a get http request")
    public void user_call_with_a_get_http_request(String request) throws Throwable {
            APIResources resource =  APIResources.valueOf(request);
            response = req.when().get(resource.getResource());
            gp = response.as(GetPokemonName.class);

    }

    @Then("The API call got success status code {int}")
    public void the_API_call_got_success_status_code(int statusCode) {
       Assert.assertEquals(statusCode,response.getStatusCode());
    }

    @And("Verify its {string} is {string}")
    public void verify_its_type_is(String attribute, String type) {
       boolean flag = isTypeCorrect(gp, type);
        Assert.assertEquals(true, flag);
    }
}
