/**
 * Created by adminpc on 4/15/14.
 */
function getLetterFreq(text){
    var textArray ={};
   for (var i = 0 ; i < text.length; i++){
       if(textArray[text.charAt(i)]){
           textArray[text.charAt(i)] += 1;
          // console.log(textArray[text.charAt(i)]);
       } else{
           textArray[text.charAt(i)] = 1;
          // console.log(textArray[text.charAt(i)]);
       }
   }
    for(var g in textArray){
        var value = textArray[g];
    console.log("end item : "+ g+ ":" + textArray[g] );
    }
    return textArray;
}