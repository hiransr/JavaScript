const obj=
{
      "aceInhibitors": 
        {
          "name": "lisinopril",
          "strength": "10 mg Tab",
          "dose": "1 tab",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
      ,
      "antianginal": 
        {
          "name": "nitroglycerin",
          "strength": "0.4 mg Sublingual Tab",
          "dose": "1 tab",
          "route": "SL",
          "sig": "q15min PRN",
          "pillCount": "#30",
          "refills": "Refill 1"
        }
      ,
      "anticoagulants": 
        {
          "name": "warfarin sodium",
          "strength": "3 mg Tab",
          "dose": "2 tab",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
      ,
      "betaBlocker": 
        {
          "name": "metoprolol tartrate",
          "strength": "25 mg Tab",
          "dose": "1 tab",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
      ,
      "diuretic": 
        {
          "name": "furosemide",
          "strength": "40 mg Tab",
          "dose": "2 tab",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
      ,
      "mineral": 
        {
          "name": "potassium chloride ER",
          "strength": "10 mEq Tab",
          "dose": "1 tab",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
}
let x = "refills";
for(let i in obj){       // i for main heading
    for(let j in obj[i]){  //sub head
        if(x=="dose" && j=="dose"){
            const arr = obj[i][j].split(" ");
            console.log(`Name: ${i}\tCount: ${arr[0]}\tUnit: ${arr[1]}`);
        }
        else if(x=='strength' && j=='strength'){
            const arr2 = obj[i][j].split(" ");
            console.log(`Name:c${i}\tCount: ${arr2[0]}\tPower: ${arr2[1]}\tUnit: ${arr2[2]}`);
        }
        else if(x=='pillCount' && j=='pillCount'){
            console.log(`Name:c${i}\tCount: ${obj[i][j]}`);
        }
        else if(x=='refills' && j=='refills'){
            const arr2 = obj[i][j].split(" ");
            console.log(`Name:c${i}\tCount: ${arr2[1]}`);
        }
    }
}