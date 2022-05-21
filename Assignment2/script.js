let  AddBtn=document.querySelector(".Add-btn");
let textArea=document.querySelector('.text-area');
let AllTaskArea=document.querySelector('.All-task');
let main=document.querySelector('.main');
let AllTask=document.querySelector('.All-task');
let displayTaskBar=false;
let CompleteArray=[];
let AllTaskInArray=[];
let completed=document.querySelector('.Completed');
let TaskList=document.querySelector('.Task-list');

AddBtn.addEventListener("click",()=>{
        
    if(displayTaskBar){
        textArea.style.display='none';
    }else{
        textArea.style.display='block';
    }
    displayTaskBar=!displayTaskBar;
   
})


textArea.addEventListener('click',()=>{
   
    textArea.addEventListener('keydown',(e)=>{
        let key=e.key;
        if(key=='Enter'){
            let textvalue=[];
            textvalue.push(textArea.value);
            if(textArea.value!=""){
                AllTaskInArray.push(textArea.value);
                createTask( textvalue,'done');
                textArea.value="";
                textArea.style.display='none';
                DeleteBtn('done')
                DoneBTN()
                SwitchTab()
            }
        }
    })

})




completed.addEventListener('click',()=>{
    completed.style.color='white';
    TaskList.style.color='gray';
    if(CompleteArray.length===0){
        return;
    }else{
        RemoveAll();
        console.log(CompleteArray);
        createTask(CompleteArray,'');
        DeleteBtn('');
        DoneBTN()
    }
    
    
})

TaskList.addEventListener('click',()=>{
    SwitchTab()  
})



//****************Done function ******************/
function DoneBTN(){
    let DoneBtn=document.querySelectorAll('.done');
    for(let i=0;i<DoneBtn.length;i++ ){
        let CompleteTask=DoneBtn[i];
        CompleteTask.addEventListener('click',()=>{
            CompleteArray.push(AllTaskInArray[i]);
            AllTaskInArray= AllTaskInArray.filter((item,index)=>{
                if(i!=index){
                    return item;
                }
            });
            CompleteTask.parentElement.remove();
        })
    }
}


//*****************Delete function************* */
function DeleteBtn(btn){
    let DeleteBtn=document.querySelectorAll('.delete');
    for(let i=0;i<DeleteBtn.length;i++ ){
        let deletTask=DeleteBtn[i];
        deletTask.addEventListener('click',()=>{
            if(btn==='done'){
                AllTaskInArray=DeleteValue(AllTaskInArray,i)
            }else{
                CompleteArray=DeleteValue(CompleteArray,i)
            }
            deletTask.parentElement.remove();
        })
    }
}

/*********************Remove Function  */
function RemoveAll(){
    let removeAll=document.querySelectorAll('.task');
    for(let i=0;i<removeAll.length;i++ ){
        let deletTask=removeAll[i];
        deletTask.remove();
    }
}

/**************Create Task******** */

function createTask(textvalue,done){
    for(let i=0;i<textvalue.length;i++){
        if(textvalue[i]!=undefined){
            let main1=document.createElement('div');
            main1.setAttribute('class','task')
            main1.innerHTML=`
                            <span class="material-symbols-outlined done">${done}</span>
                            <p class="text">${textvalue[i]}</p>
                            <span class="material-symbols-outlined delete"> delete</span>
                        `
            AllTask.appendChild(main1);
        }
    }
    
}

function SwitchTab(){
    completed.style.color='gray';
    TaskList.style.color='white';
    RemoveAll()
    createTask(AllTaskInArray,'done');
    DeleteBtn('done');
    DoneBTN()
}

function DeleteValue(a,idx){
    a= a.filter((item,index)=>{
        if(idx!=index){
            return item;
        }
    });
}



