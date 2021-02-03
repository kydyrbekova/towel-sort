module.exports = function towelSort (matrix) {
  if(matrix==undefined || matrix.length==0){
    return [];
  }
  var sorted_array = [];
  for(var i=0; i<matrix.length; i++){
    if(i%2==0){
      for(var j=0; j<matrix[i].length;j++){
        sorted_array.push(matrix[i][j]);
      }
    } else {
      for(var j=matrix[i].length-1; j>=0;j--){
        sorted_array.push(matrix[i][j]);
      }
    }
  }
  return sorted_array;
}
