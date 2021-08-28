player1N=localStorage.getItem("player1");
player2N=localStorage.getItem("player2");

P2S=0;
P1S=0;

console.log(player1N);
console.log(player2N);
console.log(P2S);
console.log(P1S);

correct="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF22yw0sskURe7ugp1mXHYMxKc6RQTdvbl6A&usqp=CAU"
incorrect="https://coolbackgrounds.io/images/backgrounds/red/red-trianglify-3c51d9e2.jpg"

document.getElementById("P1Number").innerHTML=player1N+" : ";
document.getElementById("P2Number").innerHTML=player2N+" : ";

document.getElementById("P1S").innerHTML=P1S;
document.getElementById("P2S").innerHTML=P2S;

function send()
{
    number1=document.getElementById("no_1").value;
    number2=document.getElementById("no_2").value;

    Answer=parseInt(number1)*parseInt(number2);
    console.log(Answer);


 Question_numb_html="<h4 id='number_1'style='font-size: 25px; font-family: cursive; color: rgb(255, 0, 0);'>"+number1+"✖️"+number2+"</h4>";
 answer_html="Answer:<input type='text' style='font-size: 25px; font-family: cursive; color: rgb(255,0,0);' placeholder='Enter answer' class='form-control' id='inp-check'>";
 Check_btn_html="<button class='btn btn-info'style='font-size: 25px; font-family: cursive; color: rgb(255, 255, 255);' onclick='check()'>Check</button>";
 html_data=Question_numb_html+answer_html+Check_btn_html;

 document.getElementById("output").innerHTML=html_data;

 document.getElementById("no_1").value="";
 document.getElementById("no_2").value="";

}
question_turn="player1";
answer_turn="player2";


function check()
{
   get_answer=document.getElementById("inp-check").value;

   if(get_answer==Answer)
   {


        if(answer_turn=="player1")
        {
            P1S=P1S+1;
            console.log("Score of" +player1N+"is"+P1S);
            console.log("score of "+player2N+"is"+P2S);
            document.getElementById("P1S").innerHTML=P1S;
            window.alert(player1N+"  is correct");
        }
        else
        {
           P2S=P2S+1;
           console.log("Score of" +player1N+"is"+P1S);
           console.log("score of "+player2N+"is"+P2S);
           document.getElementById("P2S").innerHTML=P2S;
           window.alert(player2N+" is correct");
        }

   }

 if(question_turn=="player1")
 {
     question_turn="player2";
     document.getElementById("questioner").innerHTML="Question turn : "+player2N;
 }
 else
 {
    question_turn="player1";
    document.getElementById("questioner").innerHTML="Question turn : "+ player1N;
 }

 if(answer_turn=="player1")
 {
     answer_turn="player2";
     document.getElementById("answerer").innerHTML="Answer turn : "+player2N;
 }
 else
 {
    answer_turn="player1";
    document.getElementById("answerer").innerHTML="Answer turn : "+player1N;

 }
 document.getElementById("output").innerHTML="";

}