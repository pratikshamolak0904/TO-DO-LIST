var listContent = document.querySelector('#listContent')
var actionButton = document.querySelector('#actionButton')
var list=document.querySelector('#list')

actionButton.addEventListener('click',()=>{
    if(listContent.value===''){
        alert('Enter Your Task !!')
        return
    }
    let newItem=document.createElement("li")

    let newIcon=document.createElement("i")
    let newParagraph=document.createElement("p")
    let newButton=document.createElement("button")

    newIcon.classList.add("fa-solid")
    newIcon.classList.add("fa-circle")
    newIcon.setAttribute("title","Mark done")

    newParagraph.innerHTML=listContent.value
    
    newButton.setAttribute("title","Remove from list")
    newButton.innerHTML="<i class= 'fa-solid fa-circle-minus'></i>"

    newItem.append(newIcon)
    newItem.append(newParagraph)
    newItem.append(newButton)

    newIcon.addEventListener('click',()=>{
        if(newIcon.classList.contains("fa-circle")){
            newIcon.classList.remove('fa-circle')
            newIcon.classList.add("fa-circle-check")
            newItem.classList.add('done')
        }
        else{
            newIcon.classList.remove('fa-circle-check')
            newIcon.classList.add("fa-circle")
            newItem.classList.remove('done')
        }
       
    })
 newButton.addEventListener('click',()=>{
    newItem.remove()
})

    list.append(newItem)
    listContent.value=''
})