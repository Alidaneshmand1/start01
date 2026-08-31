    const button = document.getElementById('button1')
    button.addEventListener('click' ,function loadDoc (){
        const demo = document.getElementById('demo')

        const xhttp = new XMLHttpRequest()
        xhttp.onload = function() {
        document.getElementById("demo").innerHTML =
        this.responseText;
        }
        xhttp.open("GET" , 'ajax_info.txt')
        xhttp.send()}
)
//         function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     document.getElementById("demo").innerHTML =
//     this.responseText;
//   }
//   xhttp.open("GET", "ajax_info.txt");
//   xhttp.send();
// }	