let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {

  function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>;
  }

  const isValidNum = props.rating > 0 && props.rating < 6;
  
  return isValidNum ? <GiveRating />: null;
  
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
