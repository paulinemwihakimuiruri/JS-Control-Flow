//use switch case to print out delivery schedule on each day

function deliveryType(deliveries){
    deliveries.forEach(delivery =>{
        switch(delivery){
            case "Mon":
                console.log("Do gumboot delivery");
                break;
                case "Tue":
                    console.log("Do toughees delivery");
                    break;
                    case "Wed":
                        console.log("Do sandals delivery");
                        break;
                        case "Thur":
                            console.log("Do sneakers delivery");
                            break;  
                    case "Fri":
                        console.log("Do canvas delivery");
                        break;
                        default:
                            console.log("No delivery done");
                            break;       
        }
    });
};
const deliveries =["Mon", "Tue", "Wed", "Thur", "Fri"];
deliveryType(deliveries);

//loop through an array of books and print a book's status

function bookStatus(books){
    for(let i=0; i<books.length;i++){
        if(books[i] === "available"){
            console.log("Ready lend");
            
        }else if(books[i] === "borrowed"){
            console.log("Checked out");
            
        }
    }
}
const books=["available", "borrowed", "available", "available", "borrowed"];
bookStatus(books);

//check ages in an array of customer ages
 function customerAges(ages){
    ages.forEach(age =>{
        if(age>=18){
            console.log("Adult");   
        }
        else{
            console.log("Minor");
            
        }
    });
 };

 const ages =[21,9,30,16,20,18];
 customerAges(ages);

 //use while loop to simulate a countdown of lives in a game

 function gameCountdown(){
    let i=5;
    while(i>=0){
        console.log(`You have ${i} lives left`);
        i--;
        
    }
 }
 gameCountdown();

 //use do...while to loop through an array of user feedback and print each item

 function userFeedback(comments){
    let comment=0;
    do{
        console.log(`The comment is ${comments[comment]}`);
        comment++;
        
    }
    while(comment<comments.length);
 }
 const comments =["wow", "yay", "hurray", "awesome", "good"];
 userFeedback(comments);

 //function to loop through an array of user log in status and prints feedback

 function loginStatus(state){
    for (let i=0; i<state.length;i++){
        if(state[i] ==="logged in"){
            console.log("Welcome back!");
            
        }else{
            console.log("Please log in");
            
        }
    }
 }
const state = ["logged in", "not logged in", "logged in","not logged in"];
loginStatus(state);

//use switch case to process an array of support ticket priorities and print how 
//quickly each should be addressed

function supportTicketPriority(priorities){
    priorities.forEach(priority => {
        switch(priority){
            case "low":
                console.log("Address as last");
                break;
                case "medium":
                    console.log("Address as second");
                    break;
                    case "high":
                        console.log("Address as first");
                        break;
                        default:
                        console.log("No priority needed");
                        break;      
        }

    });
};
const priorities = ["high", "high", "low", "medium"];
supportTicketPriority(priorities);

//while loop to simulate countdown from 10s

function quizCountdown(){
    let i=10;
    while(i>=0){
    console.log(`The count is ${i}`);
    i--;
    }
}
quizCountdown();