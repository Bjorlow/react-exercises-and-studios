import styles from './Description.module.css';
import React from 'react';

const recipeTitle = "Jambalaya";
const recipeShortDesc = "Hands-down the best jambalaya recipe! It is surprisingly easy to make, customizable with your favorite proteins (I used chicken, shrimp and Andouille sausage), and full of bold, zesty, Cajun jambalaya flavors that everyone will love.";

function RecipeAuthor() {
const authorLink = "https://www.gimmesomeoven.com/jambalaya-recipe/";
const authorPhoto = "https://www.gimmesomeoven.com/images/about-new-round.jpg";
const authorName = "Ali";
return (
    <div className = {styles.recipeAuthorBlock}>
       <img 
       src={authorPhoto}
       alt ={authorName} 
       className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Give me some Oven</a> 
       </div>
    </div>
 );

};

class RecipeDescription extends React.Component {
  render() {
    return (
  <div> 
    <div>
       <h1>{recipeTitle}</h1>
       <p>{recipeShortDesc}</p>
    </div>
    <RecipeAuthor />
 </div> 
    );
}
  
}

export default RecipeDescription;
