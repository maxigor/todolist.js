var adiciona = document.getElementById('add');
var texto = document.getElementById('texto');
var tabela = document.getElementById('tabela');


adiciona.addEventListener('click', function(){
      tabela.appendChild('<tr><td>'+ texto.value +'<a class="button is-danger is-outlined"><i class="fa fa-times"></i>Delete</a></td></tr>')
      texto.value = '';
}, false);
