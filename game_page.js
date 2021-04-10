player1_name = localstorage.getitem("player1_name");
player2_name = localstorage.getitem("player1_name");

player1_score = 0;
player2_score = 0;

document.getElementsById("player1_name").innerHML = player1_name + " : ";
document.getElementsById("player2_name").innerHML = player2_name + " : ";

document.getElementsById("player1_name").innerHTML = player1_score;
document.getElementsById("player2_name").innerHTML = player2_score;

document.getElementsById("player1_name").innerHML = "Question Turn - " + player1_name ;
document.getElementsById("player1_name").innerHML = "Answer Turn - " + player2_name ;


function send(){

get_word =document.getElementsById("word").value;
word =get_word.tolowerCase();
console.log("word in lowercase = " + word);

 charAt1 =word.charAt(1);
 console.log(charAt1);

 length_minus_1 =word.length - 1;
 charAt3 = word.charAt(length_minus_1);
 console.log(charAt3);

 question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>"
 input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button";
 row = question_word + input_box + check_button ;
document.getElementsById("output").innerHTML = row;
document.getElementsById("word").value = "";
}































