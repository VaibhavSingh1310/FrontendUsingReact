export default function ToDo(){
    function handleSubmit(e){
        e.preventDefault()
        const input = e.target.value;
        const taskValue = input.trim();
        if(taskValue===""){
            alert("Cannot add empty task")
            return
        }
        const li = document.createElement("li")
        li.innerHTML=`<span>${taskValue}</span>
        <button class="deleBtn">Delete</button>`

        document.getElementById("taskList").appendChild(li);
    }
    function handleListClick(e){
        if(e.target.className==="deleBtn"){
            e.target.parentElement.remove()
        }
    }
    return (
        <>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}> 
            <input type="text" name="task" placeholder="Enter Task" />
            <button type="submit">Add Task</button>
        </form>
        <ul id="tasklist" onClick={handleListClick}></ul>
        </>
    )
}