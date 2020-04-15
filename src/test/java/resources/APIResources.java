package resources;

public enum APIResources {

    GetPokemonName("api/v2/pokemon/{name}");
    private String resource;

    APIResources(String resource){
        this.resource = resource;
    }

    public String getResource(){return resource;}
}
