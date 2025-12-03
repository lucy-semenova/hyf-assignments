let userName = "";

let todoList = [];

function getReply(command = "") {
    if (command.indexOf("Hello my name is") != -1) {
        userName = command.split(" ").slice(-1);
        return (`Nice to meet you ${userName} `);
    }
    if ((command.indexOf("todo") != -1) &&
        (command.indexOf("Add") != -1)) {
        todoList.push(command.substring(4, command.length-11));
        return command.substring(4, command.length - 11)+ " added to your todo"
    }
         
     if ((command.indexOf("todo") != -1) &&
         (command.indexOf("Remove") != -1)) {
        if (todoList.indexOf(command.substring(7, command.length - 13)) != -1) {
            return "Removed "  + todoList.splice(todoList.indexOf(command.substring(7, command.length - 13)), 1) + " from your todo"
        } else { 
            return "There is no such activity in todo."+ (todoList.indexOf(command.substring(7, command.length - 13)))
            
        }
    }  
    if ((command.indexOf("todo") != -1) &&
        (command.indexOf("Add") != -1)) {
        todoList.push(command.substring(4, command.length-11));
        return command.substring(4, command.length - 11)+ " added to your todo"
    }

    if ((command.indexOf("+") != -1) ||
        (command.indexOf("-") != -1) ||
        (command.indexOf("*") != -1) ||
        (command.indexOf("/") != -1)) {
        mathExpression = command.split(" ");
        switch (mathExpression) {
            case "+":
                return Number(Number(mathExpression[0]) + Number(mathExpression[2]));
                break;
            case "-":
                return Number(Number(mathExpression[0]) - Number(mathExpression[2]));
                break;
            case "*":
                return Number(mathExpression[0]) * Number(mathExpression[2]);
                break;
            case "/":
                return Number(mathExpression[0]) / Number(mathExpression[2]);
                break;
        };
    };

        
       
    switch (command) {
        case "What is my name?":
            if (userName != "") {
                return (`Your name is ${userName}`)
            } else { 
                return ("Please, introduce yourself")
            };
            break;
        
        case "What is on my todo?":
            return todoList;
            break;
        case "What day is it today?":
        //respond with the date in a human readable format. ;
            const date = new Date();
            return date.getDate()+ " of " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();
            break;
        default:
            return ("Sorry, command is not recognized.");
    }
}
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add shopping to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Remove singing in the shower from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply());
console.log(getReply("3+3"));
