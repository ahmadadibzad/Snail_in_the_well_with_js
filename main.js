function main() {
    var depth = 42; // Change this
    
    var day = 0;
    var sum = 0;
    
    while(sum < depth) {
        day++;
        
        sum = result + 7;
        
        if(sum >= depth){
            break;
        }
        
        sum -= 2;
    }
    
    return day;
}

main();
