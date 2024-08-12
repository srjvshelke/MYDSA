//PALINDROME STRING
//method 1
var isPalindrome = function(s) {
    if(s==""){
        return true ;
    }
    
    let newstring = s.replace(/\s/g, "").replace(/[^0-9a-z]/gi, '').toLowerCase();
    console.log("normal string => "+newstring);
    
      let reversestr = "";
    for (let index = newstring.length - 1; index >= 0; index--) {
        reversestr += newstring[index];
    }    
    console.log("reverse string => "+reversestr);

    if(newstring==reversestr){
        return true ;
    }else{
        return false ;
    }
};


///method 2
// var isPalindrome2 = function(s) {
//     return filterAlphaNumeric(s) == filterAlphaNumeric(s).split('').reverse().join('')
// };

// const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]','gi')) => s
//     .toLowerCase()   
//     .replace(nonAlphaNumeric, '')     


let check = isPalindrome("A man, a plan, a canal: Panama");
if(check){
    console.log("it is palindrome");
    
}else{
    console.log("it is not palindrome");
    
}

///