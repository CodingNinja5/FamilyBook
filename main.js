var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vGIWtD6xshqfgieHivki0bVJRd28M_4QWKCmlFmtImxrqA5v&usqp=CAc","https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX22962119.jpg","https://i.pinimg.com/originals/c1/a9/b2/c1a9b2512b29182b99fa3052c5f37e85.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzvnVFSISuWIzmIatD9LwZ8nKf-lRWl8Mtg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMc8s9JqtSfQLDZWDjfA4VqECaYTFzhiQU3w&usqp=CAU"];
var names = ["Family Book","Vishu", "Mona", "Mahi", "Ron"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
