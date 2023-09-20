window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form")
  const input = document.querySelector("#new-task-input")
  const list_el = document.querySelector("#tasks")


  form.addEventListener("submit", (e) => {
    
    e.preventDefault()
    const task = input.value

    if (!task) {
      alert("Please fill out the task")
      return
    }

    /** 
     * c'est la CRUD = créer une tache
     * 
     * ajouter une div avec la classe task
     * à l'interieur, on crée une autre div avec la classe content
     * à l'interieur de content, on crée un input avec la classe text
     * dans cette input on ajoute l'attribut readonly
     * 
     * en bas de la div task, on crée une div avec la classe actions
     * à l'interieur de cette div, on crée deux boutons edit et delete
     * 
     *  
    */

    const task_el = document.createElement("div")
    task_el.classList.add("task")

    const task_content_el = document.createElement("div")
    task_content_el.classList.add("content")

    task_el.appendChild(task_content_el)

    const task_input_el = document.createElement("input")
    task_input_el.classList.add("text")
    task_input_el.type = "text"
    task_input_el.value = task
    task_input_el.setAttribute("readonly", "readonly")

    task_content_el.appendChild(task_input_el)

    const task_actions_el = document.createElement("div")
    task_actions_el.classList.add("actions")
    
    const task_edit_el = document.createElement("button")
    task_edit_el.classList.add("edit")
    task_edit_el.innerHTML = "Edit"

    const task_delete_el = document.createElement("button")
    task_delete_el.classList.add("delete")
    task_delete_el.innerHTML = "Delete"

    task_actions_el.appendChild(task_edit_el)
    task_actions_el.appendChild(task_delete_el)

    task_el.appendChild(task_actions_el)

    list_el.appendChild(task_el)

    input.value = ""

    // c'est la CRUD - editer une tache
    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerHTML == "Edit") {
        task_edit_el.innerHTML = "Save"
        task_input_el.removeAttribute("readonly")
        task_input_el.focus()
      }else {
        console.log('enregistré!')
        task_input_el.setAttribute("readonly", "readonly")
        task_edit_el.innerText = Edit

      }

    })

    // c'est la CRUD - effacer une tache
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el)
    })


  })

})