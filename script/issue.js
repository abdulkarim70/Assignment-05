
async function loadpage() {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data= await res.json();
    loadIssue(data.data);
}
// .................
const loadIssue= (issues)=>{
const cardParent=document.getElementById('card-parent')
cardParent.innerHTML="";
issues.forEach(issue=>{
   const newCard=document.createElement('div')
   newCard.innerHTML=`<div class="w-full h-full  mb-[12px] border-t-4 border-green-500 rounded-t-xl p-5 shadow-sm bg-white rounded-xl">

  
  <div class="flex justify-between items-center mb-4">
    
    <div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
      <img src="./assets/Open-Status.png" alt="">
    </div>

    <span class="bg-red-100 text-red-500 text-xs font-semibold px-4 py-1 rounded-full">
      ${issue.priority}
    </span>

  </div>

  
  <h2 class="text-[#1F2937] text-[14px] font-semibold  mb-2">
     ${issue.title}
  </h2>

  
  <p class="text-[#64748B] text-[12px]  text-sm mb-4">
    ${issue.description}
  </p>

  
  <div class="flex gap-2 mb-4">
    <span class="text-red-500 bg-red-100 text-[9px] px-3 py-1 rounded-full items-center flex gap-1">
      <img src="./assets/BugDroid.png" alt=""> ${issue.labels[0]}
    </span>

    <span class="text-yellow-600 bg-yellow-100 text-[9px] flex-wrap px-3 py-1 items-center flex gap-1 rounded-full">
      <img src="./assets/Lifebuoy.png" alt=""> ${issue.labels[1]?issue.labels[1]: "" }
    </span>
  </div>

  
  <div class="border-t-[2px] border-t-gray-200 pt-1 text-sm text-[#64748B]">
    <p>${issue.author}</p>
    <p>${issue.createdAt}</p>
  </div>

</div>
   `
   
   cardParent.append(newCard)


})

}
loadpage()