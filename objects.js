//Literal syntax
var mealsL = { breakfast:"oatmeal" }

//Object Constructor
var mealsC = new Object({
  breakfast: 'oatmeal'
});


var playList = new Object({
  Eminem: 'lose yourself',
  Tupac: 'ghetto gospel'
});

function updatePlaylist(obj, key, val){
  return Object.assign({}, obj, {[key]:val});
}

function removeFromPlaylist(obj, key){
  return delete obj.key; 
}