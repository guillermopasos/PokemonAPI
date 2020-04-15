package resources;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.parsing.Parser;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import pojo.GetPokemonName;

import java.io.*;
import java.util.Properties;

public class Utils {

    RequestSpecification baseRequest;
   public RequestSpecification buildRequestSpecification(String pokemonName) throws IOException {

       PrintStream log = new PrintStream(new FileOutputStream("logging.txt"));
       baseRequest = new RequestSpecBuilder().setBaseUri(getGlobalVariables("baseUrl"))
               .addPathParam("name",pokemonName)
               .addFilter(RequestLoggingFilter.logRequestTo(log))
               .addFilter(ResponseLoggingFilter.logResponseTo(log))
               .setContentType(ContentType.JSON).build();

       return baseRequest;

   }

   public String getGlobalVariables(String variable) throws IOException {

       Properties prop = new Properties();
       FileInputStream fis = new FileInputStream("C:\\Users\\memop\\StarWarsAPI\\src\\test\\java\\resources\\global.properties");
       prop.load(fis);

       return prop.getProperty(variable);

    }

    public boolean isTypeCorrect(GetPokemonName gp, String type){
        boolean flag = false;
        for(int i = 0; i < gp.getTypes().size();i++){
            if (gp.getTypes().get(i).getType().getName().equalsIgnoreCase(type)){
                flag = true;
                break;
            }
        }
       return flag;
    }

    public String getJsonPathValue(Response response, String attribute){
       String pokemonType = null;
       String result = response.asString();
        JsonPath js = new JsonPath(result);
        if (attribute.equalsIgnoreCase("type")){
        pokemonType = js.getString("types.type.name[0]");
        }
        return pokemonType;
    }

}
