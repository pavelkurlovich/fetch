'use strict';

async function getTasks(){
    let result=await fetch('https://test-todoist.herokuapp.com/api/tasks')
    .then(response=>response.json());
    result.forEach(element=>{
        console.log(`${element.description}`);
    });
}
console.log(getTasks());

async function getUsers(name){ 
  let result = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>response.json()) 
  console.log(result); 
for (let i in result) {
  if (name == result[i].name) {
          let parent = document.querySelector('#myList');
          let div = document.createElement('div');
          parent.appendChild(div);
         document.getElementById("myList").innerHTML += result[i].id+' '+result[i].name +';';
  }
 }  
} 
getUsers('MASTER!!!'); 
getUsers('myCCCCCat');

async function gemor(){ 
  let result = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>response.json()) 
  console.log(result); 
for (const j in result) {
      let parent3 = document.querySelector('#newList ');
      let div = document.createElement('div');
      parent3.appendChild(div); 
       document.getElementById("newList").innerHTML += 'id:' + result[j].id +  ','   +  'name:' +  result[j].name +';';		
 }  
  result.forEach(element => { 
      console.log(element); 

  }) 
} 
gemor();

async function n3() {
   let result3 = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>response.json()).then(commits => commits);	        let myJSON3 = JSON.stringify(result3);
         document.getElementById("добавить").innerHTML = myJSON3;
}

