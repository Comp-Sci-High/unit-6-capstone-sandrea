const form = document.querySelector(".form")

form.addEventListener("submit", async (e)=>{
    e.preventDefault()

    const assignmentData = new moreData(form)
    const reqBody = Object.fromEntries(assignmentData)
    const response = await fetch("/add", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(reqBody)
    })
    const data = await response.json()
    console.log(data)
})