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
            let textvalue=textArea.value;
            if(textvalue!=""){
                AllTaskInArray.push(textvalue);
                createTask(textvalue,'done');
                textArea.value="";
                textArea.style.display='none';
            }
        }
    })

})




completed.addEventListener('click',()=>{
    completed.style.color='white';
    TaskList.style.color='gray';
    RemoveAll();
    console.log(CompleteArray);
    for(let j=0;j<CompleteArray.length;j++){
        
        if(CompleteArray[j]!=undefined){
            createTask(CompleteArray[j],'');
            // let main1=document.createElement('div');
            // main1.setAttribute('class','task')
            // main1.innerHTML=`
            //             <span class="material-symbols-outlined done"> </span>
            //             <p class="text">${CompleteArray[j]}*******</p>
            //             <span class="material-symbols-outlined delete"> delete</span>
            //         `
            // AllTask.appendChild(main1);
        }
        console.log("Hiiii");
    }
    let DeleteBtn=document.querySelectorAll('.delete');
    for(let i=0;i<DeleteBtn.length;i++ ){
        let deletTask=DeleteBtn[i];
        deletTask.addEventListener('click',()=>{
            CompleteArray.splice(i,i);
            deletTask.parentElement.remove();
        })
    }
})

TaskList.addEventListener('click',()=>{
    completed.style.color='gray';
    TaskList.style.color='white';
    RemoveAll()
    // =document.querySelectorAll('.task');
    // console.log(removeAll);
    // console.log(AllTaskInArray);
    // for(let i=0;i<removeAll.length;i++ ){
    //     let deletTask=removeAll[i];
    //     // deletTask.addEventListener('click',()=>{
    //         deletTask.remove();
    //     // })
    //     console.log(i+"......");
    //     console.log(removeAll.length-1);
    //     if(i===removeAll.length-1){
            
    //         // break;
    //         console.log(AllTaskInArray);
    //     }
        
    // }
    for(let j=0;j<AllTaskInArray.length;j++){
        // if(AllTaskInArray[j]!=undefined||AllTaskInArray[j]!=''){
        //     let main1=document.createElement('div');
        //     main1.setAttribute('class','task')
        //     main1.innerHTML=`
        //                 <span class="material-symbols-outlined done"> done</span>
        //                 <p class="text">++${AllTaskInArray[j]}**</p>
        //                 <span class="material-symbols-outlined delete"> delete</span>
        //             `
        //     AllTask.appendChild(main1);
        // }
        // console.log("Hiiii");
        createTask(AllTaskInArray[j],'done');
    }
    DeleteBtn();
    
    
})



//****************Done function ******************/
function DoneBTN(){
    let DoneBtn=document.querySelectorAll('.done');
    for(let i=0;i<DoneBtn.length;i++ ){
        let CompleteTask=DoneBtn[i];
        CompleteTask.addEventListener('click',()=>{
            CompleteArray.push(AllTaskInArray[i]);
            AllTaskInArray.splice(i,i);
            console.log(CompleteArray+" ************");
            console.log(AllTaskInArray);
            CompleteTask.parentElement.style.display='none';
            CompleteTask.parentElement.remove();
        })
    }
}


//*****************Delete function************* */
function DeleteBtn(){
    let DeleteBtn=document.querySelectorAll('.delete');
    for(let i=0;i<DeleteBtn.length;i++ ){
        let deletTask=DeleteBtn[i];
        deletTask.addEventListener('click',()=>{
            AllTaskInArray.splice(i,i);
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
    let main1=document.createElement('div');
    main1.setAttribute('class','task')
    main1.innerHTML=`
                    <span class="material-symbols-outlined done">${done}</span>
                    <p class="text">${textvalue}</p>
                    <span class="material-symbols-outlined delete"> delete</span>
                `
    AllTask.appendChild(main1);
    // let DeleteBtn=document.querySelectorAll('.delete');
    // for(let i=0;i<DeleteBtn.length;i++ ){
    //     let deletTask=DeleteBtn[i];
    //     deletTask.addEventListener('click',()=>{
    //         deletTask.parentElement.remove();
    //     })
    // }
    DeleteBtn()
    DoneBTN()
    
}







