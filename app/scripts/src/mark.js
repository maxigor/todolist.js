var add = document.querySelector("#add");
var remove = document.querySelector("#delete");

add.addEventListener('click', function(){
   var novoTodo = "<tr> " +
                     "<td>" + texto.value +
                        "<a id='delete' class='button is-danger is-outlined'>" +
                           "<i class='remove fa fa-times'></i>"+
                        "</a>"+
                     "</td>" +
                  "</tr>";

   var tabela = document.querySelector("#tabela");
   tabela.innerHTML = tabela.innerHTML + novoTodo;

   texto.value = '';
})
