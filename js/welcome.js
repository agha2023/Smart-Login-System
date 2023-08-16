let agha=[]

if(localStorage.getItem('test') != null){
  agha = JSON.parse(localStorage.getItem('test'))
 
}

let welcome = document.getElementById('welcome')


welcome.innerHTML='welcome   ' + agha[0].Name