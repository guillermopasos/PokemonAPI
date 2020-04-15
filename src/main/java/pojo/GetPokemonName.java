package pojo;

import java.util.ArrayList;

public class GetPokemonName {
    ArrayList<Object> abilities = new ArrayList<Object>();
    private float base_experience;
    ArrayList<Object> forms = new ArrayList<Object>();
    ArrayList<Object> game_indices = new ArrayList<Object>();
    private float height;
    ArrayList<Object> held_items = new ArrayList<Object>();
    private float id;
    private boolean is_default;
    private String location_area_encounters;
    ArrayList<Object> moves = new ArrayList<Object>();
    private String name;
    private float order;
    Species SpeciesObject;
    Sprites SpritesObject;
    ArrayList<Object> stats = new ArrayList<Object>();
    ArrayList<Types> types = new ArrayList<Types>();
    private float weight;


    // Getter Methods

    public ArrayList<Types> getTypes(){
        return types;
    }

    public ArrayList<Object> getStats(){
        return stats;
    }

    public ArrayList<Object> getMoves(){
        return moves;
    }

    public ArrayList<Object> getHeld_items(){
        return held_items;
    }

    public ArrayList<Object> getGame_indices(){
        return game_indices;
    }
    public ArrayList<Object> getForms(){
        return forms;
    }
    public ArrayList<Object> getAbilities(){
        return abilities;
    }

    public float getBase_experience() {
        return base_experience;
    }

    public float getHeight() {
        return height;
    }

    public float getId() {
        return id;
    }
    public boolean getIs_default() {
        return is_default;
    }
    public String getLocation_area_encounters() {
        return location_area_encounters;
    }
    public String getName() {
        return name;
    }
    public float getOrder() {
        return order;
    }
    public Species getSpecies() {
        return SpeciesObject;
    }

    public Sprites getSprites() { return SpritesObject; }

    public float getWeight() {
        return weight;
    }

    // Setter Methods
    public ArrayList<Types> setTypes(){
        return types;
    }
    public ArrayList<Object> setStats(){
        return stats;
    }
    public ArrayList<Object> setMoves(){
        return moves;
    }
    public ArrayList<Object> setHeld_items(){
        return held_items;
    }
    public ArrayList<Object> setGame_indices(){
        return game_indices;
    }
    public ArrayList<Object> setForms(){
        return forms;
    }
    public ArrayList<Object> setAbilities(){
        return abilities;
    }
    public void setBase_experience(float base_experience) {
        this.base_experience = base_experience;
    }
    public void setHeight(float height) {
        this.height = height;
    }
    public void setId(float id) {
        this.id = id;
    }
    public void setIs_default(boolean is_default) {
        this.is_default = is_default;
    }
    public void setLocation_area_encounters(String location_area_encounters) {
        this.location_area_encounters = location_area_encounters;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setOrder(float order) {
        this.order = order;
    }
    public void setSpecies(Species speciesObject) {
        this.SpeciesObject = speciesObject;
    }
    public void setSprites(Sprites spritesObject) {
        this.SpritesObject = spritesObject;
    }
    public void setWeight(float weight) {
        this.weight = weight;
    }
}