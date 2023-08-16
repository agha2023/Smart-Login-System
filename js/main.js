let agha = []
let email = document.getElementById('useEmail')//signin
let passIn = document.getElementById('passIn')//signin
let login = document.getElementById('login')
let error = document.getElementById('error')
let right = document.getElementById('right')
let myArray =[]
if(localStorage.getItem('set') != null){
  myArray = JSON.parse(localStorage.getItem('set'))
}
login.addEventListener('click',log)
function log(){
 for(let i =0 ; i<myArray.length ; i++){
  if(email.value == myArray[i].Email && passIn.value == myArray[i].Pass){
    window.open(href="welcome.html")
    agha.push(myArray[i])
    localStorage.setItem('test',JSON.stringify(agha))
  }else{
    error.style.display='flex'
  }
 }
}
let showIcon = document.getElementById('show')
let hideIcon = document.getElementById('hide')
// ==========>showpass<=========
showIcon.addEventListener('click', showPassIn)
function showPassIn() {
  if (passIn.type === 'password' && passIn.value) {
    passIn.type = 'text'
    showIcon.style.display = 'none'
    hideIcon.style.display = 'flex'
  } 
}
// ==========>hidepass<=========
hideIcon.addEventListener('click', hidePassIn)
function hidePassIn() {
  if (passIn.type === 'text') {
    passIn.type = 'password'
    showIcon.style.display = 'flex'
    hideIcon.style.display = 'none'
  } 
}