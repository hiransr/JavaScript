const arr =
  [
    {
      "aceInhibitors": [
        {
          "name": "lisinopril",
          "strength": "10 mg Tab",
          "dose": "1 tab",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
      ],
      "antianginal": [
        {
          "name": "nitroglycerin",
          "strength": "0.4 mg Sublingual Tab",
          "dose": "1 tab",
          "route": "SL",
          "sig": "q15min PRN",
          "pillCount": "#30",
          "refills": "Refill 1"
        }
      ],
      "anticoagulants": [
        {
          "name": "warfarin sodium",
          "strength": "3 mg Tab",
          "dose": "2 tab",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
      ],
      "betaBlocker": [
        {
          "name": "metoprolol tartrate",
          "strength": "25 mg Tab",
          "dose": "1 tab",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
      ],
      "diuretic": [
        {
          "name": "furosemide",
          "strength": "40 mg Tab",
          "dose": "2 tab",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
      ],
      "mineral": [
        {
          "name": "potassium chloride ER",
          "strength": "10 mEq Tab",
          "dose": "tab 1",
          "route": "PO",
          "sig": "daily",
          "pillCount": "#90",
          "refills": "Refill 3"
        }
      ]
    }
  ]
// console.log(arr);
let x = "dose", y,n1,n2;
arr.forEach(el => {
  Object.keys(el).forEach(elm => {
    Object.keys(el[elm]).forEach(val => {
      y = el[elm][val][x].split(" ");
      if(x=='pillcount'){
        el[elm][val][x]={value: y[0]};
      }
      else{
        if(isNaN(y[0])){
          n1=y[1];
          n2=y[0];
        }
        else{
          n1=y[0];
          n2=y[1];
        }
        el[elm][val][x]={value: n1, unit: n2};
      }
    })
  })
})
//console.log(arr[0]) // prints [Object]
console.log( JSON.stringify(arr, null, " ") );
/******************** REFERENCE *******************
arr.forEach(el =>{
  //console.log(el);
  //console.log(Object.keys(el));   // returns heading
  Object.keys(el).forEach(elm => {
    //console.log(el[elm]);         //this returns values of each key & elm reffers to the keys
    Object.keys(el[elm]).forEach(val =>{
      console.log(el[elm][val].dose); //indiviual element
    })
  })
})
**/