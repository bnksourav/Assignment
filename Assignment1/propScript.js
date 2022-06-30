let AddBtn=document.querySelector('.Add-btn');
let inputArea=document.querySelector('.input-area');
let mainDiv=document.querySelector('.main');
let addProperty=document.querySelector('.add-input');
let AllPropertyDetailDiv=document.querySelector('.All-Property-Detail')
let FilterDiv=document.querySelector(".Div-filter")
let DisplaySortingBtn=document.querySelector('.soting-All-Div');
let IncreasingBtn=document.querySelector('.increasing')
let DecreasingBtn=document.querySelector('.decreasing')
let FilterDivDisplay=false;
let inputDiv=true;
let AllPropertyDetail=[
    // {
    //     name:'name1',
    //     size:5,
    //     dec:'decr'
    // },
    // {
    //     name:'name2',
    //     size:23,
    //     dec:'decr'
    // },
    // {
    //     name:'name3',
    //     size:3,
    //     dec:'decr'
    // }
];
AddBtn.addEventListener('click',()=>{
    if(inputDiv){
        inputArea.style.display='flex';
        mainDiv.style.opacity='.3';
        AddBtn.style.opacity='1';
    }else{
        inputArea.style.display='none';
        mainDiv.style.opacity='1';
      
    }
    inputDiv=!inputDiv;
})
FilterDiv.addEventListener("click",()=>{
    if(FilterDivDisplay){
        DisplaySortingBtn.style.display="none";
    }else{
        DisplaySortingBtn.style.display="flex";
    }
    FilterDivDisplay=!FilterDivDisplay;
    SortingArray();
    console.log(AllPropertyDetail);
})
IncreasingBtn.addEventListener('click',()=>{
    SortingArray();
    console.log(AllPropertyDetail);
    // createDetail(name,size,decr,indx,btn)
});
DecreasingBtn.addEventListener('click',()=>{
    // createDetail(name,size,decr,indx,btn)
})

addProperty.addEventListener("click",()=>{
    let name1=inputArea.querySelector('.name').value;
    
    let size1=inputArea.querySelector('.size').value;
    inputArea.querySelector('.size').value="";
    let decr1=inputArea.querySelector('.descreption').value;
    // inputArea.querySelector('.descreption').value="";
    console.log(name1);
    if(name1!=="" &&size1!=="" && decr1!==""){
        // 
        inputArea.querySelector('.name').value="";
        inputArea.querySelector('.size').value="";
        inputArea.querySelector('.descreption').value="";
        console.log(AllPropertyDetail);
        createDetail(name1,size1,decr1,AllPropertyDetail.length,true)   ;
        inputArea.style.display='none';
        mainDiv.style.opacity='1';
        inputDiv=!inputDiv;
        
    }else{
        alert("Fill all detail");
    }
    

})
function createDetail(name,size,decr,indx,btn){
    let NewProperty=document.createElement('div');
    NewProperty.setAttribute('class','property-item')
    NewProperty.innerHTML=`<img class="house-image" src="./house1.jpeg" alt="">
                                <div class="house-Detail">
                                    <h4><i><b>Name</b></i>  : ${name}</h4>
                                    <h4><i><b>Size</b></i> : ${size} sq ft</h4>
                                    <h4><i><b>Description</b></i> : ${decr}</h4>
                                </div>
                            <button class="delete">Delete</button>` 
    AllPropertyDetailDiv.appendChild(NewProperty);
    
    let obj={
        id:gentId(),
        name:name,
        size:size,
        dec:decr
    }
    if(btn){
        AllPropertyDetail.push(obj);
    }
    let Delete=NewProperty.querySelector('.delete');
    
    Delete.addEventListener("click",()=>{
        console.log(Delete);
        AllPropertyDetail.splice(indx,1);
        Delete.parentElement.remove()
        console.log(AllPropertyDetail);
    })
}
function SortingArray(){
    for (let i = 1; i < AllPropertyDetail.length; i++)
    { 
        for (let j = i; j >0 && AllPropertyDetail[j-1].size<AllPropertyDetail[j].size; j--) {
            let tamp=AllPropertyDetail[j];
            AllPropertyDetail[j]=AllPropertyDetail[j-1];
            AllPropertyDetail[j-1]=tamp;
        }
    } 
} 
function gentId(){
    return Math.floor(new Date().getTime() * Math.random() * .0000001)
}