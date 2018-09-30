const plantNeedsWater = (day)=> {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
/*Let's refactor plantNeedsWater() to be a concise body. Notice that we've already converted the if/else statement to a ternary operator to make the code fit on one line.*/
const plantNeedsWater = day => 
  day === 'Wednesday' ? true : false;
