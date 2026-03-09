
let allIssues = [];


async function loadPage() {
const loader = document.getElementById("loader")

const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
const data = await res.json()

allIssues = data.data

loadIssue(allIssues)
loader.classList.add("hidden")
}

loadPage()


// create cards
function loadIssue(issues){

const cardParent = document.getElementById("card-parent")
// 
const countUpdate = document.getElementById("count-update")
countUpdate.innerText = issues.length + " Issues"
cardParent.innerHTML = ""

issues.forEach(issue => {

const borderColor = issue.status === "open" 
? "border-green-500" 
: "border-purple-500"

const newCard = document.createElement("div")

newCard.innerHTML = `

<div class="w-full h-full border-t-4 ${borderColor} rounded-t-xl p-5 shadow-sm bg-white rounded-xl">

<div class="flex justify-between items-center mb-4">

<div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
<img src="./assets/Open-Status.png">
</div>

<span class="bg-red-100 text-red-500 text-xs font-semibold px-4 py-1 rounded-full">
${issue.priority}
</span>

</div>

<h2 class="text-[#1F2937] text-[14px] font-semibold mb-2">
${issue.title}
</h2>

<p class="text-[#64748B] text-[12px] mb-4">
${issue.description}
</p>
<div class="flex gap-2 mb-4">
  
  <span class="text-xs px-3 py-1 rounded-full flex items-center gap-1
${issue.labels[0] === "bug" ? "text-red-500 bg-red-100" : "text-[#00A96E] bg-[#BBF7D0]"}">

${issue.labels[0] === "bug" ? `
<img class="w-4 h-4" src="./assets/BugDroid.png" alt="">
` : ""}

${issue.labels[0]}

</span>


${issue.labels[0] === "bug" ? `
<span class="text-yellow-600 bg-yellow-100 text-[9px] px-3 py-1 rounded-full flex items-center gap-1">
<img class="w-4 h-4" src="./assets/Lifebuoy.png" alt="">
${issue.labels[1]?issue.labels[1]:""}
</span>
` : ""}
</div>
<div class="border-t-[2px] border-t-gray-200 pt-2 text-sm text-[#64748B]">
<p>${issue.author}</p>
<p>${issue.createdAt}</p>
</div>

</div>
`

cardParent.append(newCard)
// 
newCard.addEventListener("click", () => {
openModal(issue)
})

})

}

// buttons
const btnAll = document.getElementById("btn-all")
const btnOpen = document.getElementById("btn-open")
const btnClose = document.getElementById("btn-close")

// active btn
document.querySelectorAll(".btn-three").forEach(btn => {

    btn.addEventListener("click", function(){

        document.querySelectorAll(".btn-three").forEach(b=>{
            b.classList.remove("btn-primary")
            
        })

        this.classList.add("btn-primary")         
    })

})
// 


btnAll.addEventListener("click", () => {
loadIssue(allIssues)
})

btnOpen.addEventListener("click", () => {

const openIssues = allIssues.filter(issue => issue.status === "open")

loadIssue(openIssues)

})

btnClose.addEventListener("click", () => {

const closeIssues = allIssues.filter(issue => issue.status === "closed")

loadIssue(closeIssues)

})



const searchBtn=document.getElementById('search-btn')
const searchInput=document.getElementById('search-input')
searchBtn.addEventListener('click',function(){
    const searchValue=searchInput.value.toLowerCase()
    const filtered= allIssues.filter(issue=> issue.title.toLowerCase().includes(searchValue))
    loadIssue(filtered)
})
// Modal
function openModal(issue){
const modal = document.getElementById("modal")
modal.classList.remove("hidden")
modal.classList.add("flex")

document.getElementById("modal-title").innerText = issue.title
document.getElementById("modal-description").innerText = issue.description
document.getElementById("modal-author").innerText = "Opened by " + issue.author
document.getElementById("modal-assignee").innerText = issue.author

document.getElementById("modal-priority").innerText = issue.priority
document.getElementById("modal-priority2").innerText = issue.priority
const createdAt=document.getElementById('creat-at').innerText=issue.createdAt
const statusElement = document.getElementById("modal-status")

statusElement.innerText = issue.status

if(issue.status === "open"){
statusElement.className = "bg-green-100 text-green-700 px-3 py-1 rounded-full"
}else{
statusElement.className = "bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
}

}
function closeModal(){
modal.classList.add("hidden")
modal.classList.remove("flex")
}