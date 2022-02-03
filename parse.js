

let json;
json = [{
    "Header": [{
        "sub_link": "/api/get/week/sum/",
        "sub_params": {
            "ctx": "ctx",
            "startDate": "weekStart",
            "endDate": "weekEnd"
        },
        "type-row": "toggle-row",
        "default-hidden-row": true,
        "name": "date",
        "title": "Date",
        "subtotal": "week",
        "type": "date"
    }, {
        "name": "total_net",
        "title": "Net",
        "type": "money",
        "total": "sum"
    }, {
        "name": "gross",
        "title": "Gross",
        "type": "money",
        "total": "sum"
    }, {
        "name": "total_volume",
        "title": "Volume",
        "type": "integer",
        "total": "sum"
    }, {
        "name": "fees",
        "title": "Fees",
        "type": "money",
        "total": "sum"
    }, {
        "name": "hi_max",
        "title": "High",
        "type": "money",
        "total": "max"
    }, {
        "total": "min",
        "name": "low_min",
        "title": "Low",
        "type": "money"
    }, {
        "title": "Unrealized",
        "type": "object",
        "total": "sum",
        "link": "/open-positions",
        "params": {
            "startDate": "date",
            "endDate": "date",
            "accounts": "accounts"
        },
        "handle": "open",
        "name": "unrealized"
    }]
    ,
    "Settings": {}
    ,
    "Data": [[1635724800, -98.98999999999998, 78.29, 200, 177.28, 320.995, -518.33, {
        "title": -3673.23,
        "params": {
            "startDate": 1635724800,
            "endDate": 1635724800,
            "accounts": [34506107]
        }
    }]
    , [1635811200, -328.3, -327, 20, 1.2999999999999998, 25.5, -394.51, {
        "title": -3711.33,
        "params": {
            "startDate": 1635724800,
            "endDate": 1635724800,
            "accounts": [34506107]
        }
    }]
    , [1635897600, -42.480000000000004, -40, 200, 2.48, 260.62, -17.8, {
        "title": -3536.53,
        "params": {
            "startDate": 1635724800,
            "endDate": 1635724800,
            "accounts": [34506107]
        }
    }]
    , [1635984000, -0.96, 0, null, 0.96, 227.497, 0, {
        "title": -3513.33,
        "params": {
            "startDate": 1635724800,
            "endDate": 1635724800,
            "accounts": [34506107]
        }
    }]
    , [1636070400, 127.8, 130.25, 200, 2.45, 228.923, -32, {
        "title": -3559.1800000000003,
        "params": {
            "startDate": 1635724800,
            "endDate": 1635724800,
            "accounts": [34506107]
        }
    }]
    , [1636156800, -0.98, 0, null, 0.98, null, null, {
        "title": null,
        "params": {
            "endDate": 1635724800,
            "accounts": [34506107],
            "startDate": 1635724800
        }
    }]
    , [1636243200, -0.98, 0, null, 0.98, null, null, {
        "params": {
            "startDate": 1635724800,
            "endDate": 1635724800,
            "accounts": [34506107]
        },
        "title": null
    }]
    , {
        "values": [{
            "type": "week-totals",
            "values": [1635724800, 1636070400],
            "title": "[2021-11-01 - 2021-11-05]"
        }, -344.89, -158.45999999999998, 620, 186.42999999999998, 320.995, -518.33, null],
        "title": "week totals",
        "handle": "click",
        "link": "/api/get/week/sum/",
        "params": {
            "endDate": 1636070400,
            "ctx": "report/total_by_day",
            "startDate": 1635724800
        },
        "type": "toggle-row",
        "defaultHidden": true
    }
    , [1636329600, 478.68, 481.53, 450, 2.8499999999999996, 1249.3, -26.94, {
        "title": -3664.9,
        "params": {
            "startDate": 1635724800,
            "endDate": 1635724800,
            "accounts": [34506107]
        }
    }]
    , [1636416000, 199.82000000000002, 201, 50, 1.1800000000000002, 294.1, -5.4, {
        "title": -3535.7000000000003,
        "params": {
            "startDate": 1635724800,
            "endDate": 1635724800,
            "accounts": [34506107]
        }
    }]
    , [1636502400, -0.77, 0, null, 0.77, 58.383, -224.98, {
        "title": -3738.6,
        "params": {
            "startDate": 1635724800,
            "endDate": 1635724800,
            "accounts": [34506107]
        }
    }]
    ],
    "Total": [677.73, 682.53, 500, 4.799999999999999, 1249.3, -224.98, null]
}];

let header;
let data;
let totals;
let titles;
let sum_totals;



function drawTable (json) {
    console.log("123")
    
    header = json[0].Header;
    data = json[0].Data;
    totals = header.map(el => el.total);
    console.log(totals);
    sum_totals = totals.map(el => el=undefined);
    console.log(sum_totals);
    // drawTitles ();
    document.querySelector(".content").innerHTML = `<table class="tableData"><tr id="header"></tr><thead class="tableHead"></thead><tbody class="tableBody"></tbody></table>`
}

function drawTitles () {
    // let header = json[0].Header;
    console.log("TITLES");
    titles = header.map(el => el.title); 
    let body = document.querySelector(".tableHead");
    let tr = document.createElement("tr");
    console.log(tr);
    console.log(body);
    let head = document.createElement("tr")
    
    for (key in titles) {
    var thead = document.createElement("td")
    thead.innerHTML = `<td>${titles[key]}</td>`

    tr.appendChild(thead);
    console.log(tr);
    console.log(body);
    body.appendChild(tr);
    }
}



let cell;

function drawData () {
    let body = document.querySelector(".tableBody");
    for (key in data) {
        let tr = document.createElement("tr");
        let row = data[key];

        for (index in row) {
            let td = document.createElement("td");
            var cell = row[index];
         
            let tdTEXT = "";
            if (cell === null || cell === undefined) {
                tdTEXT = ``;

            } else if (typeof(cell) === "object") {
                if (cell.title !== undefined && cell.title !== null) {
                    tdTEXT = `${cell.title}`;
                    cell = cell.title;
                } else {
                    cell = null;
                }
            } else {
                console.log(typeof(cell));
                tdTEXT = `${cell}`
            }
            td.innerHTML = tdTEXT; 
            tr.appendChild(td);
            tbody.appendChild(tr)
            body.appendChild(tbody);
        }
    }
}

function drawTotals () {
    totals = header.map(el => el.total);
    sum_totals = totals.map(el => el=undefined);
    console.log(totals);
    for (key in totals) {
        if (cell !== undefined && cell !== null && typeof(cell) === "number") {

            if (totals[index] === "sum") {
                console.log(`${index}=${cell}`);
                if (sum_totals[index] === undefined) {
                    sum_totals[index] = cell;
                } else if (cell > 0 || cell < 0) {
                    sum_totals[index] = sum_totals[index] + cell
                }
            }
    
            if (totals[index] === "max") {
                if (sum_totals[index] === undefined) {
                    sum_totals[index] = cell;
                } else if (cell > sum_totals[index]) {
                    sum_totals[index] = cell;
                }
            }
    
            if (totals[index] === "min") {
                if (sum_totals[index] === undefined) {
                    sum_totals[index] = cell;
                } else if (cell < sum_totals[index]) {
                    sum_totals[index] = cell;
                }
            }
        }
    }
   
    // calcResult ();
    // let body = document.querySelector(".tableBody");
    // let tr = document.createElement("tr");
    // for (key in sum_totals) {
    //     var tfoot = document.createElement("td")
    //     if (sum_totals[key] !== undefined) {
    //         tfoot.innerHTML = `<td>${sum_totals[key]}</td>`
    //     } else {
    //         tfoot.innerHTML = "foot"
    //     }  

    //     tr.appendChild(tfoot);
    //     body.appendChild(tr);

    // }
}


function calcSum () {
    console.log(`${index}=${cell}`);
    if (sum_totals[index] === undefined) {
        sum_totals[index] = cell;
    } else if (cell > 0 || cell < 0) {
        sum_totals[index] = sum_totals[index] + cell
    }
}

function calcMax () {
    if (sum_totals[index] === undefined) {
        sum_totals[index] = cell;
    } else if (cell > sum_totals[index]) {
        sum_totals[index] = cell;
    }
}

function calcMin () {
    if (sum_totals[index] === undefined) {
        sum_totals[index] = cell;
    } else if (cell < sum_totals[index]) {
        sum_totals[index] = cell;
    }
}

function calcResult () {
    if (totals[index] === "sum") {
        calcSum ();
    } else if (totals[index] === "max") {
        calcMax ();
    } else if (totals[index] === "min") {
        calcMin ();
    }
}


drawTable(json);
drawTitles(json);
drawData(json);
drawTotals(json);







header = json[0].Header;
totals = header.map(el => el.total);
sum_totals = totals.map(el => el=undefined);
let body = document.querySelector(".tableBody");


data = json[0].Data;
 totals = header.map(el => el.total);

 function drawData () {
    let body = document.querySelector(".tableBody");
    for (key in data ) {
        let tr = document.createElement("tr");
        let row = data[key];
        
        for (index in row ) {
            let td = document.createElement("td");
              cell = row[index];
         
            let tdTEXT = "";
            if (cell === null || cell === undefined) {
                tdTEXT = ``;

            } else if (typeof(cell) === "object") {
                if (cell.title !== undefined && cell.title !== null) {
                    tdTEXT = `${cell.title}`;
                    cell = cell.title;
                } else {
                    cell = null;
                }
            } else {
                console.log(typeof(cell));
                tdTEXT = `${cell}`
            }
            

        
            td.innerHTML = tdTEXT; 
            tr.appendChild(td);

            if (cell !== undefined && cell !== null && typeof(cell) === "number") {

            if (totals[index] === "sum") {
                console.log(`${index}=${cell}`);
                if (sum_totals[index] === undefined) {
                    sum_totals[index] = cell;
                } else if (cell > 0 || cell < 0) {
                    sum_totals[index] = sum_totals[index] + cell
                }
            }
    
            if (totals[index] === "max") {
                if (sum_totals[index] === undefined) {
                    sum_totals[index] = cell;
                } else if (cell > sum_totals[index]) {
                    sum_totals[index] = cell;
                }
            }

            if (totals[index] === "min") {
                if (sum_totals[index] === undefined) {
                    sum_totals[index] = cell;
                } else if (cell < sum_totals[index]) {
                    sum_totals[index] = cell;
                }
            }
        }
            body.appendChild(tr);
            console.log(tr);
            console.log(body);
    
        } // END for on row

    } // END PERFORMS DATA
    
    tr = document.createElement("tr");
        for (key in sum_totals) {
            var tfoot = document.createElement("td");
            console.log(sum_totals);
            console.log(sum_totals[1]);
            
            if (sum_totals[key] !== undefined) {
                tfoot.innerHTML = `<td>${sum_totals[key]}</td>`
            } else {
                tfoot.innerHTML = "foot"
            }  

            tr.appendChild(tfoot)

        }
      
        body.appendChild(tr);
        console.log(body);
  
    }
