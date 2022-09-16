const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-give");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noofnotes=document.querySelectorAll(".no-of-notes")

const availableNotes=[2000,500,100,20,10,5,1];
checkButton.addEventListener("click",function validateBillAmountAndCashAmount(){
       hidemessage();
    if(billAmount.value > 0)
    {
         if(cashGiven.value>=billAmount.value){
                const amountToBeReturned=cashGiven.value-billAmount.value;
                calculateChange(amountToBeReturned);
         }
         else{ 
             showMessage("the cash provided should be atleast equal to bill amount");
         }
    }
    else
     {
        showMessage("Invalid Bill Amount ,enter in number");
     }
});
function calculateChange(amountToBeReturned)          
{
    for(let i=0;i<availableNotes.length;i++)
     {
        const numberofnotes=Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noofnotes[i].innerText=numberofnotes;
     }

}
 function hidemessage(){
    message.style.display="none";
 }
function showMessage(msg){
    // console.log("here");
    message.style.display="block";
    message.innerText=msg;
}