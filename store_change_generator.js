function changeGenerator(price, cash, cid) {
    let cashInDrawer = 0
    for (let i = 0; i < cid.length; i++) {
        cashInDrawer = cashInDrawer + cid[i][1]
    }
    
    let change = cash - price;
    let changeDueTemplate = [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0],  
      ["TEN", 0],
      ["FIVE", 0],
      ["ONE", 0],
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0],  
      ["PENNY", 0],
    ]
    
    console.log(cid)
    console.log(change)

    let denomination = [
      0.01,   //index0
      0.05,   //index1
      0.1,    //index2
      0.25, //index3
      1,    //index4
      5,    //index5
      10,   //index6
      20,   //index7
      100   //index8
    ]

    // cid[0][2] = 0.01
    // cid[1][2] = 0.05
    // cid[2][2] = 0.1
    // cid[3][2] = 0.25
    // cid[4][2] = 1
    // cid[5][2] = 5
    // cid[6][2] = 10
    // cid[7][2] = 20
    // cid[8][2] = 100

    
    //console.log(change)
         // return value NEEDS TO BE JAVASCRIPT OBJECT CREATED WITH NEW...
         
  
         let changeRemaining = 0  
  const returnValue = {
        status: "",
        change: []
        }
      if (change > cashInDrawer) {
          returnValue['status'] = "INSUFFICIENT_FUNDS";
          //console.log(returnValue)
          return returnValue    
      }
      else if (change === cashInDrawer) {
        returnValue['status'] = "CLOSED";
        returnValue['change'] = cid;
        console.log(returnValue)
        return returnValue
      }
      else {
        while (change > 100 && cashInDrawer > change && cid[8][1] >= 100) {
          change = change - 100
          cid[8][1] = cid[8][1] - 100
          changeDueTemplate[0][1] = changeDueTemplate[0][1] + 100
        }
        while (change > 20 && cashInDrawer > change && cid[7][1] >= 20) {
          change = change - 20
          cid[7][1] = cid[7][1] - 20
          changeDueTemplate[1][1] = changeDueTemplate[1][1] + 20
        }
        while (change > 10 && cashInDrawer > change && cid[6][1] >= 10) {
          change = change - 10
          cid[6][1] = cid[6][1] - 10
          changeDueTemplate[2][1] = changeDueTemplate[2][1] + 10
        }
        while (change > 5 && cashInDrawer > change && cid[5][1] >= 5) {
          change = change - 5
          cid[5][1] = cid[5][1] - 5
          changeDueTemplate[3][1] = changeDueTemplate[3][1] + 5
        }
        while (change > 1 && cashInDrawer > change && cid[4][1] >= 1) {
          change = change - 1
          cid[4][1] = cid[4][1] - 1
          changeDueTemplate[4][1] = changeDueTemplate[4][1] + 1
        }
        while (change >= 0.25 && cashInDrawer > change && cid[3][1] >= 0.25) {
          change = change - 0.25
          cid[3][1] = cid[3][1] - 0.25
          changeDueTemplate[5][1] = changeDueTemplate[5][1] + 0.25
        }
        while (change > 0.1 && cashInDrawer > change && cid[2][1] >= 0.1) {
          change = change - 0.1
          cid[2][1] = cid[2][1] - 0.1
          changeDueTemplate[6][1] = changeDueTemplate[6][1] + 0.1
        }
        while (change > 0.05 && cashInDrawer > change && cid[1][1] >= 0.05) {
          change = change - 0.05
          cid[1][1] = cid[1][1] - 0.05
          changeDueTemplate[7][1] = changeDueTemplate[7][1] + 0.05
        }
        while (change > 0.00 && cashInDrawer > change && cid[0][1] >= 0.01) {
          change = change - 0.01
          cid[0][1] = cid[0][1] - 0.01
          changeDueTemplate[8][1] = changeDueTemplate[8][1] + 0.01
        }
        for (let i = 0; i < changeDueTemplate.length; i++) {
          if (changeDueTemplate[i][1] === 0 ) {
            changeDueTemplate.splice([i], 1)
          }
        }
        for (let i = 0; i < changeDueTemplate.length; i++) {
          if (changeDueTemplate[i][1] <= 0 ) {
            changeDueTemplate.splice([i], 1)
          }
        }
        for (let i = 0; i < changeDueTemplate.length; i++) {
          if (changeDueTemplate[i][1] === 0 ) {
            changeDueTemplate.splice([i], 1)
          }
        }

      }
      returnValue['status'] = "OPEN";
      returnValue['change'] = changeDueTemplate

      let sumChangeDue = 0
    for (let i = 0; i < changeDueTemplate.length; i++) {
        sumChangeDue = sumChangeDue + changeDueTemplate[i][1]
    }

    if (sumChangeDue < change) {
      returnValue['status'] = "INSUFFICIENT_FUNDS";
      returnValue['change'] = []
    }

      console.log(returnValue)

      return returnValue
    
    //  console.log(cid)
      //console.log(change)
    //console.log(cashInDrawer)
   
  }

  
  //changeGenerator(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  //changeGenerator(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  
  changeGenerator(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  //sufficient funds with multiple coins and bills
  // for this scenario we compare total change versus each denomination starting from
  //100 and going down

  
  //changeGenerator(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  //insufficient funds scenario

  //changeGenerator(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  //closed scenario
  
  //Return {status: "INSUFFICIENT_FUNDS", change: []} 
  //Return {status: "CLOSED", change: [...]}
  //return {status: "OPEN", change: [...]}