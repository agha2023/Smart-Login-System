let myArray =[]
let set = []
let useName = document.getElementById('useName')//signup
let useEmail = document.getElementById('useEmail')//signup
let usePass = document.getElementById('usePass')//signup
// let signUp = document.getElementById('signUp')
let error = document.getElementById('error')
let right = document.getElementById('right')
if(localStorage.getItem('set') != null){
  myArray = JSON.parse(localStorage.getItem('set'))
  console.log(myArray);
}
function logData(){
  let usres ={
    Name:useName.value,
    Email:useEmail.value,
    Pass:usePass.value
  }
  if (checkInp1(useName.value)==true && checkInp2(useEmail.value) == true&& checkInp3(usePass.value) == true){
    myArray.push(usres)
    localStorage.setItem(('set'),JSON.stringify(myArray))
   
    right.style.display='flex'
    clear()
  }else{
    error.style.display='flex'
    clear()
  }
}



let showIcon = document.getElementById('show')
let hideIcon = document.getElementById('hide')



// ==========>showpass<=========
showIcon.addEventListener('click', showPass)
function showPass() {
  if (usePass.type === 'password' && usePass.value) {
    usePass.type = 'text'
    showIcon.style.display = 'none'
    hideIcon.style.display = 'flex'
  } 
}
// ==========>hidepass<=========
hideIcon.addEventListener('click', hidePass)
function hidePass() {
  if (usePass.type === 'text') {
    usePass.type = 'password'
    showIcon.style.display = 'flex'
    hideIcon.style.display = 'none'
  } 
}
// ==========>regxInput<=========

function checkInp1(str){
  var regex =/^[a-zA-Z1-9]{3,10}$/
  return regex.test(str)
}

function checkInp2(str){
  var regex =/^[a-zA-Z1-9]{3,25}@gmail.com$/
  return regex.test(str)
}

function checkInp3(str){
  var regex =/^[a-zA-Z1-9!@#$%&*+.=]{5,30}$/
  return regex.test(str)
}

function clear(){
useName.value='',
useEmail.value='',
usePass.value=''
}
