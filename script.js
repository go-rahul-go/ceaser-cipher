function rot13(text) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    text = text.toUpperCase();
    var result="";
    for (let i = 0; i < text.length; i++) 
    {
        if(text[i].charCodeAt()>=65 && text[i].charCodeAt()<=90)
        {
            var index=((letters.indexOf(text[i])-13)%26);
            if(index<0)
                result=result+letters[26+index];
            else
                result=result+letters[index];   
           
        }
        else
            result=result+text[i];
        
    }
    return result;
    

}

var result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
console.log(`Decrypted Message is -> "${result}"`);