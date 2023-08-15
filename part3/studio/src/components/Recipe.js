const RecipeAuthor = () => {
   let authorLink = "https://www.gimmesomeoven.com/jambalaya-recipe/";
   let authorPhoto = "https://www.gimmesomeoven.com/images/about-new-round.jpg";
   let authorName = "Ali";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      'Celery',
      'Onion',
      'Bell pepper',
      'Jalapeno',
      'Garlic',
      'Chicken',
      'Shrimp',
      'Andouille',
      'Crushed Tomatoes',
      'Rice',
      'Okra',
      'Salt',
      'Black pepper',
   ];

   let ingredientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
   });
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
         {ingredientListItems}
         </ul>
      </div>
   );
};

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Jambalya</h1>
            <p>Hands-down the best jambalaya recipe! It is surprisingly easy 
               to make, customizable with your favorite proteins and full of bold, zesty,
                Cajun jambalaya flavors that everyone will love.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32-1100x1650.jpg"
       alt=""
      className="imageUpdates"
      height="450px"
      />
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}