// store all issues
let allIssues = [];

// load issues from API
async function loadPage() {

const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
const data = await res.json()

allIssues = data.data

loadIssue(allIssues)

}

loadPage()


// create cards
function loadIssue(issues){

const cardParent = document.getElementById("card-parent")

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

<div class="border-t-[2px] border-t-gray-200 pt-2 text-sm text-[#64748B]">
<p>${issue.author}</p>
<p>${issue.createdAt}</p>
</div>

</div>
`

cardParent.append(newCard)

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


// search
// const searchInput = document.getElementById("search-input")

// if(searchInput){

// searchInput.addEventListener("keyup", function(){

// const inputValue = this.value.toLowerCase()

// const filtered = allIssues.filter(issue =>
// issue.title.toLowerCase().includes(inputValue)
// )

// loadIssue(filtered)

// })

// }
// by btn
const searchBtn=document.getElementById('search-btn')
const searchInput=document.getElementById('search-input')
searchBtn.addEventListener('click',function(){
    const searchValue=searchInput.value.toLowerCase()
    const filtered= allIssues.filter(issue=> issue.title.toLowerCase().includes(searchValue))
    loadIssue(filtered)
})
