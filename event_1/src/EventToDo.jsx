export default function EventToDo(){
    function handleClick(){
        alert("you just pressed a button")
    }
     function handleInfo(){
        prompt("This is the Info button message");
    }
    return(
        <div>
            <h1>Event Handling</h1>
            <button onClick={handleClick}>Click</button>
            <button onClick={handleInfo}>Info</button>
        </div>
    )
}