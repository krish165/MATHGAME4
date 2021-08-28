function Login()
{
    P1N=document.getElementById("player_1").value;
    P2N=document.getElementById("player_2").value;
    localStorage.setItem("player1",P1N);
    localStorage.setItem("player2",P2N);
    window.location="main_page.html";
}