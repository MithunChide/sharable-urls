function updateLink(){
    let url_element = "https://localhost:8080/";
    let name_element = document.getElementById("name").value;
    let year_element = document.getElementById("year").value;
     
     var new_url;
    if(name_element === "" ){

         new_url = url_element + "?" + "year=" +year_element;
    }
    else if(year_element ===""){
         new_url = url_element + "?" + "name=" +name_element;

    }else{
         new_url = url_element + "?name=" + name_element + "&year=" +year_element;

    }
     document.getElementById("url").innerHTML=new_url;

    
}