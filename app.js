var submitButton=document.querySelector('input[type=Submit]');
var form=document.querySelector('form');
var inputForm=document.querySelector('input[type=text]');
const list=document.querySelector('#items');
const deleteButton=document.getElementsByClassName('btn-danger');
const theListOfItems=list.children;


  const preventMutationOne=Array.from(theListOfItems);
const theUpdatedVersion1=preventMutationOne.map(x=>x)
const preventMutationTwo=Array.from(deleteButton);
const theUpdatedVersion2=preventMutationTwo.map(y=>y)

const input=(event)=>{ 
const newLi=document.createElement('li');
const remove=document.createElement('button');
const trashIcon=document.createElement('i');


newLi.className='list-group-item';
remove.className='btn btn-danger btn-sm rounded-0'
trashIcon.className='bi bi-trash-fill'
remove.appendChild(trashIcon)



remove.setAttribute('style','position: absolute; left: 92.5%');
    newLi.textContent=inputForm.value;
    newLi.appendChild(remove);


    list.appendChild(newLi,list.children[0]);
    inputForm.value='';
    event.preventDefault();

  remove.addEventListener('click', function(){
    list.removeChild(newLi,'');
  })
}
form.addEventListener('submit',input)

//delete button



console.log(theUpdatedVersion1)
console.log(theUpdatedVersion2)
for(let i=0;i<preventMutationTwo.length;i++){
const deletebutton=preventMutationTwo[i];
const theItems=theUpdatedVersion1[i]
deletebutton.addEventListener('click',function(){
list.removeChild(theItems,'');

});
}


/*inputForm.addEventListener(el'keydown',function(e){
    const newList= e.target.value

const newLi=document.createElement('li');
newLi.className='list-group-item';

if(5<newList.length<20){
newLi.innerText=newList;
    input(newLi)
}  
})*/




form.addEventListener('submit',input)




   

    //list.innerHTML='<li>'+ event.value.target+'</li>'
   //event.preventDefault();













