//write first method
function sleep_in(weekday,holiday) {
    if (weekday == true && holiday == true){
        return true;
    }
    if (weekday == true && holiday == false ){
        return false;
    }
    if (weekday == false && holiday == true){
        return true;
    }
    if (weekday == false && holiday == false){
        return true;
    }
}

function monkey_trouble (a_smile, b_smile){
    if (a_smile == true && b_smile == true){
        return true;
    }
    if (a_smile == true && b_smile == false){
        return false;
    }
    if (a_smile == false &&b_smile == true){
        return false;
    }
    if (a_smile == false && b_smile == false){
        return true;
    }
}

function string_times (str,int){
    var x="";
    for (var i=1; i<= int; i++){
        x+=str;
    }
    return x;
}

function front_times(front, n){
    var answer = "";
    var str = front.substring (0,3);
    for (var i=1; i <= n; i++){
        answer += str;
    }
    return answer;
}

function string_bits(word) {
    var answer = "";
    for (var i = 0; i < word.length; i=i+2){
        answer = answer+word[i];
    }
    return answer;
}

function caughtSpeeding(speed,birthday){
    if (speed <= 60 && birthday == true){
        return 0;
    }
    if (speed <= 60 && birthday == false){
        return 0;
    }
    if (65 <= speed >= 61 && birthday == true){
        return 0;
    }else{
        return 1;
    }
    if (80 <= speed >= 66 && birthday == true){
        return 1;
    }
    if (80 <= speed >= 66 && birthday == false){
        return 1;
    }
    if (81 <= speed && birthday == true){
        return 2;
    }
    if (81 <= speed && birthday == false) {
        return 2;
    }
}

function fizzBuzz(number){
    if (number % 3 == 0 && number % 5 == 0){
        return "FizzBuzz!";
    }
    if (number %3 == 0) {
        return "Fizz!";
    }
    if (number % 5 == 0){
        return "Buzz!";
    }else{
        return number + "!";
    }
}

function teaParty(candy,tea){
    if (candy < 5 || tea <5){
        return 0;
    }
    if (candy >= 2*tea || tea >= 2*candy){
        return 2;
    }
    if (candy >= 5 && tea >= 5){
        return 1;
    }
}

function blackjack (x,y){
    x>0;
    y>0;
    if (x>21 && y>21){
        return 0;
    }
    if (x>y && x<=21){
        return x;
    }
    if (y>x && y<=21){
        return y;
    }
    if (y>21){
        return x;
    }
    if (x>21){
        return y;
    }
}

function loneSum (a,b,c){
    if (a == b && b == C){
        return0;
    }
    if (a == b) {
        return c;
    }
    if (a == c){
        return b;
    }
    if (c == b){
        return a;
    }else{
        return a + b +c;
    }
}

function tester() {

    document.getElementById("output").innerHTML = sleep_in(false, false);
    document.getElementById("output1").innerHTML = monkey_trouble(false, false);
    document.getElementById("output2").innerHTML = string_times('a', 19);
    document.getElementById("output3").innerHTML = front_times('Candy', 19);
    document.getElementById("output4").innerHTML = string_bits('chajnhdjy');
    document.getElementById("output5").innerHTML = caughtSpeeding(19, false);
    document.getElementById("output6").innerHTML = fizzBuzz(19);
    document.getElementById("output7").innerHTML = teaParty(19,19);
    document.getElementById("output8").innerHTML = blackjack(3,4);
    document.getElementById("output9").innerHTML = loneSum(20,19,18);

}