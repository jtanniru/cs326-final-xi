import * as utils from "./settingsUtils.js";

let table = document.getElementById("tableID");
let availability = {};
availability = utils.restoreAvailability();
utils.restoreAccountInfo();

if (availability !== {}) {
    if (availability["Mon12am"] > 0) {
        table.rows[1].cells[1].className = "cell";
    }
    if (availability["Mon1am"] > 0) {
        table.rows[2].cells[1].className = "cell";
    }
    if (availability["Mon2am"] > 0) {
        table.rows[3].cells[1].className = "cell";
    }
    if (availability["Mon3am"] > 0) {
        table.rows[4].cells[1].className = "cell";
    }
    if (availability["Mon4am"] > 0) {
        table.rows[5].cells[1].className = "cell";
    }
    if (availability["Mon5am"] > 0) {
        table.rows[6].cells[1].className = "cell";
    }
    if (availability["Mon6am"] > 0) {
        table.rows[7].cells[1].className = "cell";
    }
    if (availability["Mon7am"] > 0) {
        table.rows[8].cells[1].className = "cell";
    }
    if (availability["Mon8am"] > 0) {
        table.rows[9].cells[1].className = "cell";
    }
    if (availability["Mon9am"] > 0) {
        table.rows[10].cells[1].className = "cell";
    }
    if (availability["Mon10am"] > 0) {
        table.rows[11].cells[1].className = "cell";
    }
    if (availability["Mon11am"] > 0) {
        table.rows[12].cells[1].className = "cell";
    }
    if (availability["Mon12pm"] > 0) {
        table.rows[13].cells[1].className = "cell";
    }
    if (availability["Mon1pm"] > 0) {
        table.rows[14].cells[1].className = "cell";
    }
    if (availability["Mon2pm"] > 0) {
        table.rows[15].cells[1].className = "cell";
    }
    if (availability["Mon3pm"] > 0) {
        table.rows[16].cells[1].className = "cell";
    }
    if (availability["Mon4pm"] > 0) {
        table.rows[17].cells[1].className = "cell";
    }
    if (availability["Mon5pm"] > 0) {
        table.rows[18].cells[1].className = "cell";
    }
    if (availability["Mon6pm"] > 0) {
        table.rows[19].cells[1].className = "cell";
    }
    if (availability["Mon7pm"] > 0) {
        table.rows[20].cells[1].className = "cell";
    }
    if (availability["Mon8pm"] > 0) {
        table.rows[21].cells[1].className = "cell";
    }
    if (availability["Mon9pm"] > 0) {
        table.rows[22].cells[1].className = "cell";
    }
    if (availability["Mon10pm"] > 0) {
        table.rows[23].cells[1].className = "cell";
    }
    if (availability["Mon11pm"] > 0) {
        table.rows[24].cells[1].className = "cell";
    }
    if (availability["Tues12am"] > 0) {
        table.rows[1].cells[2].className = "cell";
    }
    if (availability["Tues1am"] > 0) {
        table.rows[2].cells[2].className = "cell";
    }
    if (availability["Tues2am"] > 0) {
        table.rows[3].cells[2].className = "cell";
    }
    if (availability["Tues3am"] > 0) {
        table.rows[4].cells[2].className = "cell";
    }
    if (availability["Tues4am"] > 0) {
        table.rows[5].cells[2].className = "cell";
    }
    if (availability["Tues5am"] > 0) {
        table.rows[6].cells[2].className = "cell";
    }
    if (availability["Tues6am"] > 0) {
        table.rows[7].cells[2].className = "cell";
    }
    if (availability["Tues7am"] > 0) {
        table.rows[8].cells[2].className = "cell";
    }
    if (availability["Tues8am"] > 0) {
        table.rows[9].cells[2].className = "cell";
    }
    if (availability["Tues9am"] > 0) {
        table.rows[10].cells[2].className = "cell";
    }
    if (availability["Tues10am"] > 0) {
        table.rows[11].cells[2].className = "cell";
    }
    if (availability["Tues11am"] > 0) {
        table.rows[12].cells[2].className = "cell";
    }
    if (availability["Tues12pm"] > 0) {
        table.rows[13].cells[2].className = "cell";
    }
    if (availability["Tues1pm"] > 0) {
        table.rows[14].cells[2].className = "cell";
    }
    if (availability["Tues2pm"] > 0) {
        table.rows[15].cells[2].className = "cell";
    }
    if (availability["Tues3pm"] > 0) {
        table.rows[16].cells[2].className = "cell";
    }
    if (availability["Tues4pm"] > 0) {
        table.rows[17].cells[2].className = "cell";
    }
    if (availability["Tues5pm"] > 0) {
        table.rows[18].cells[2].className = "cell";
    }
    if (availability["Tues6pm"] > 0) {
        table.rows[19].cells[2].className = "cell";
    }
    if (availability["Tues7pm"] > 0) {
        table.rows[20].cells[2].className = "cell";
    }
    if (availability["Tues8pm"] > 0) {
        table.rows[21].cells[2].className = "cell";
    }
    if (availability["Tues9pm"] > 0) {
        table.rows[22].cells[2].className = "cell";
    }
    if (availability["Tues10pm"] > 0) {
        table.rows[23].cells[2].className = "cell";
    }
    if (availability["Tues11pm"] > 0) {
        table.rows[24].cells[2].className = "cell";
    }
    if (availability["Wed12am"] > 0) {
        table.rows[1].cells[3].className = "cell";
    }
    if (availability["Wed1am"] > 0) {
        table.rows[2].cells[3].className = "cell";
    }
    if (availability["Wed2am"] > 0) {
        table.rows[3].cells[3].className = "cell";
    }
    if (availability["Wed3am"] > 0) {
        table.rows[4].cells[3].className = "cell";
    }
    if (availability["Wed4am"] > 0) {
        table.rows[5].cells[3].className = "cell";
    }
    if (availability["Wed5am"] > 0) {
        table.rows[6].cells[3].className = "cell";
    }
    if (availability["Wed6am"] > 0) {
        table.rows[7].cells[3].className = "cell";
    }
    if (availability["Wed7am"] > 0) {
        table.rows[8].cells[3].className = "cell";
    }
    if (availability["Wed8am"] > 0) {
        table.rows[9].cells[3].className = "cell";
    }
    if (availability["Wed9am"] > 0) {
        table.rows[10].cells[3].className = "cell";
    }
    if (availability["Wed10am"] > 0) {
        table.rows[11].cells[3].className = "cell";
    }
    if (availability["Wed11am"] > 0) {
        table.rows[12].cells[3].className = "cell";
    }
    if (availability["Wed12pm"] > 0) {
        table.rows[13].cells[3].className = "cell";
    }
    if (availability["Wed1pm"] > 0) {
        table.rows[14].cells[3].className = "cell";
    }
    if (availability["Wed2pm"] > 0) {
        table.rows[15].cells[3].className = "cell";
    }
    if (availability["Wed3pm"] > 0) {
        table.rows[16].cells[3].className = "cell";
    }
    if (availability["Wed4pm"] > 0) {
        table.rows[17].cells[3].className = "cell";
    }
    if (availability["Wed5pm"] > 0) {
        table.rows[18].cells[3].className = "cell";
    }
    if (availability["Wed6pm"] > 0) {
        table.rows[19].cells[3].className = "cell";
    }
    if (availability["Wed7pm"] > 0) {
        table.rows[20].cells[3].className = "cell";
    }
    if (availability["Wed8pm"] > 0) {
        table.rows[21].cells[3].className = "cell";
    }
    if (availability["Wed9pm"] > 0) {
        table.rows[22].cells[3].className = "cell";
    }
    if (availability["Wed10pm"] > 0) {
        table.rows[23].cells[3].className = "cell";
    }
    if (availability["Wed11pm"] > 0) {
        table.rows[24].cells[3].className = "cell";
    }
    if (availability["Thurs12am"] > 0) {
        table.rows[1].cells[4].className = "cell";
    }
    if (availability["Thurs1am"] > 0) {
        table.rows[2].cells[4].className = "cell";
    }
    if (availability["Thurs2am"] > 0) {
        table.rows[3].cells[4].className = "cell";
    }
    if (availability["Thurs3am"] > 0) {
        table.rows[4].cells[4].className = "cell";
    }
    if (availability["Thurs4am"] > 0) {
        table.rows[5].cells[4].className = "cell";
    }
    if (availability["Thurs5am"] > 0) {
        table.rows[6].cells[4].className = "cell";
    }
    if (availability["Thurs6am"] > 0) {
        table.rows[7].cells[4].className = "cell";
    }
    if (availability["Thurs7am"] > 0) {
        table.rows[8].cells[4].className = "cell";
    }
    if (availability["Thurs8am"] > 0) {
        table.rows[9].cells[4].className = "cell";
    }
    if (availability["Thurs9am"] > 0) {
        table.rows[10].cells[4].className = "cell";
    }
    if (availability["Thurs10am"] > 0) {
        table.rows[11].cells[4].className = "cell";
    }
    if (availability["Thurs11am"] > 0) {
        table.rows[12].cells[4].className = "cell";
    }
    if (availability["Thurs12pm"] > 0) {
        table.rows[13].cells[4].className = "cell";
    }
    if (availability["Thurs1pm"] > 0) {
        table.rows[14].cells[4].className = "cell";
    }
    if (availability["Thurs2pm"] > 0) {
        table.rows[15].cells[4].className = "cell";
    }
    if (availability["Thurs3pm"] > 0) {
        table.rows[16].cells[4].className = "cell";
    }
    if (availability["Thurs4pm"] > 0) {
        table.rows[17].cells[4].className = "cell";
    }
    if (availability["Thurs5pm"] > 0) {
        table.rows[18].cells[4].className = "cell";
    }
    if (availability["Thurs6pm"] > 0) {
        table.rows[19].cells[4].className = "cell";
    }
    if (availability["Thurs7pm"] > 0) {
        table.rows[20].cells[4].className = "cell";
    }
    if (availability["Thurs8pm"] > 0) {
        table.rows[21].cells[4].className = "cell";
    }
    if (availability["Thurs9pm"] > 0) {
        table.rows[22].cells[4].className = "cell";
    }
    if (availability["Thurs10pm"] > 0) {
        table.rows[23].cells[4].className = "cell";
    }
    if (availability["Thurs11pm"] > 0) {
        table.rows[24].cells[4].className = "cell";
    }

    if (availability["Fri12am"] > 0) {
        table.rows[1].cells[5].className = "cell";
    }
    if (availability["Fri1am"] > 0) {
        table.rows[2].cells[5].className = "cell";
    }
    if (availability["Fri2am"] > 0) {
        table.rows[3].cells[5].className = "cell";
    }
    if (availability["Fri3am"] > 0) {
        table.rows[4].cells[5].className = "cell";
    }
    if (availability["Fri4am"] > 0) {
        table.rows[5].cells[5].className = "cell";
    }
    if (availability["Fri5am"] > 0) {
        table.rows[6].cells[5].className = "cell";
    }
    if (availability["Fri6am"] > 0) {
        table.rows[7].cells[5].className = "cell";
    }
    if (availability["Fri7am"] > 0) {
        table.rows[8].cells[5].className = "cell";
    }
    if (availability["Fri8am"] > 0) {
        table.rows[9].cells[5].className = "cell";
    }
    if (availability["Fri9am"] > 0) {
        table.rows[10].cells[5].className = "cell";
    }
    if (availability["Fri10am"] > 0) {
        table.rows[11].cells[5].className = "cell";
    }
    if (availability["Fri11am"] > 0) {
        table.rows[12].cells[5].className = "cell";
    }
    if (availability["Fri12pm"] > 0) {
        table.rows[13].cells[5].className = "cell";
    }
    if (availability["Fri1pm"] > 0) {
        table.rows[14].cells[5].className = "cell";
    }
    if (availability["Fri2pm"] > 0) {
        table.rows[15].cells[5].className = "cell";
    }
    if (availability["Fri3pm"] > 0) {
        table.rows[16].cells[5].className = "cell";
    }
    if (availability["Fri4pm"] > 0) {
        table.rows[17].cells[5].className = "cell";
    }
    if (availability["Fri5pm"] > 0) {
        table.rows[18].cells[5].className = "cell";
    }
    if (availability["Fri6pm"] > 0) {
        table.rows[19].cells[5].className = "cell";
    }
    if (availability["Fri7pm"] > 0) {
        table.rows[20].cells[5].className = "cell";
    }
    if (availability["Fri8pm"] > 0) {
        table.rows[21].cells[5].className = "cell";
    }
    if (availability["Fri9pm"] > 0) {
        table.rows[22].cells[5].className = "cell";
    }
    if (availability["Fri10pm"] > 0) {
        table.rows[23].cells[5].className = "cell";
    }
    if (availability["Fri11pm"] > 0) {
        table.rows[24].cells[5].className = "cell";
    }

    if (availability["Sat12am"] > 0) {
        table.rows[1].cells[6].className = "cell";
    }
    if (availability["Sat1am"] > 0) {
        table.rows[2].cells[6].className = "cell";
    }
    if (availability["Sat2am"] > 0) {
        table.rows[3].cells[6].className = "cell";
    }
    if (availability["Sat3am"] > 0) {
        table.rows[4].cells[6].className = "cell";
    }
    if (availability["Sat4am"] > 0) {
        table.rows[5].cells[6].className = "cell";
    }
    if (availability["Sat5am"] > 0) {
        table.rows[6].cells[6].className = "cell";
    }
    if (availability["Sat6am"] > 0) {
        table.rows[7].cells[6].className = "cell";
    }
    if (availability["Sat7am"] > 0) {
        table.rows[8].cells[6].className = "cell";
    }
    if (availability["Sat8am"] > 0) {
        table.rows[9].cells[6].className = "cell";
    }
    if (availability["Sat9am"] > 0) {
        table.rows[10].cells[6].className = "cell";
    }
    if (availability["Sat10am"] > 0) {
        table.rows[11].cells[6].className = "cell";
    }
    if (availability["Sat11am"] > 0) {
        table.rows[12].cells[6].className = "cell";
    }
    if (availability["Sat12pm"] > 0) {
        table.rows[13].cells[6].className = "cell";
    }
    if (availability["Sat1pm"] > 0) {
        table.rows[14].cells[6].className = "cell";
    }
    if (availability["Sat2pm"] > 0) {
        table.rows[15].cells[6].className = "cell";
    }
    if (availability["Sat3pm"] > 0) {
        table.rows[16].cells[6].className = "cell";
    }
    if (availability["Sat4pm"] > 0) {
        table.rows[17].cells[6].className = "cell";
    }
    if (availability["Sat5pm"] > 0) {
        table.rows[18].cells[6].className = "cell";
    }
    if (availability["Sat6pm"] > 0) {
        table.rows[19].cells[6].className = "cell";
    }
    if (availability["Sat7pm"] > 0) {
        table.rows[20].cells[6].className = "cell";
    }
    if (availability["Sat8pm"] > 0) {
        table.rows[21].cells[6].className = "cell";
    }
    if (availability["Sat9pm"] > 0) {
        table.rows[22].cells[6].className = "cell";
    }
    if (availability["Sat10pm"] > 0) {
        table.rows[23].cells[6].className = "cell";
    }
    if (availability["Sat11pm"] > 0) {
        table.rows[24].cells[6].className = "cell";
    }

    if (availability["Sun12am"] > 0) {
        table.rows[1].cells[7].className = "cell";
    }
    if (availability["Sun1am"] > 0) {
        table.rows[2].cells[7].className = "cell";
    }
    if (availability["Sun2am"] > 0) {
        table.rows[3].cells[7].className = "cell";
    }
    if (availability["Sun3am"] > 0) {
        table.rows[4].cells[7].className = "cell";
    }
    if (availability["Sun4am"] > 0) {
        table.rows[5].cells[7].className = "cell";
    }
    if (availability["Sun5am"] > 0) {
        table.rows[6].cells[7].className = "cell";
    }
    if (availability["Sun6am"] > 0) {
        table.rows[7].cells[7].className = "cell";
    }
    if (availability["Sun7am"] > 0) {
        table.rows[8].cells[7].className = "cell";
    }
    if (availability["Sun8am"] > 0) {
        table.rows[9].cells[7].className = "cell";
    }
    if (availability["Sun9am"] > 0) {
        table.rows[10].cells[7].className = "cell";
    }
    if (availability["Sun10am"] > 0) {
        table.rows[11].cells[7].className = "cell";
    }
    if (availability["Sun11am"] > 0) {
        table.rows[12].cells[7].className = "cell";
    }
    if (availability["Sun12pm"] > 0) {
        table.rows[13].cells[7].className = "cell";
    }
    if (availability["Sun1pm"] > 0) {
        table.rows[14].cells[7].className = "cell";
    }
    if (availability["Sun2pm"] > 0) {
        table.rows[15].cells[7].className = "cell";
    }
    if (availability["Sun3pm"] > 0) {
        table.rows[16].cells[7].className = "cell";
    }
    if (availability["Sun4pm"] > 0) {
        table.rows[17].cells[7].className = "cell";
    }
    if (availability["Sun5pm"] > 0) {
        table.rows[18].cells[7].className = "cell";
    }
    if (availability["Sun6pm"] > 0) {
        table.rows[19].cells[7].className = "cell";
    }
    if (availability["Sun7pm"] > 0) {
        table.rows[20].cells[7].className = "cell";
    }
    if (availability["Sun8pm"] > 0) {
        table.rows[21].cells[7].className = "cell";
    }
    if (availability["Sun9pm"] > 0) {
        table.rows[22].cells[7].className = "cell";
    }
    if (availability["Sun10pm"] > 0) {
        table.rows[23].cells[7].className = "cell";
    }
    if (availability["Sun11pm"] > 0) {
        table.rows[24].cells[7].className = "cell";
    }
}


// table.classList.add("cell");
if (table !== null) {
    for (let i = 1; i < table.rows.length; i++) {
        for (let j = 1; j < table.rows[i].cells.length; j++) {
            // alert (table.rows.length);
            // alert (table.rows[i].cells.length);
            table.rows[i].cells[j].classList.add("cell-selected");
            table.rows[i].cells[j].onclick = function () {
                tableText(this, i, j);
                // alert (i);
            };
        }
    }
}

function tableText(cell, i, j) {
    if (cell.className === "cell") {
        cell.className = "cell-selected";
        if (j === 1) {
            if (i === 1) {
                availability["Mon12am"] = 0;
            } else if (i === 2) {
                availability["Mon1am"] = 0;
            } else if (i === 3) {
                availability["Mon2am"] = 0;
            } else if (i === 4) {
                availability["Mon3am"] = 0;
            } else if (i === 5) {
                availability["Mon4am"] = 0;
            } else if (i === 6) {
                availability["Mon5am"] = 0;
            } else if (i === 7) {
                availability["Mon6am"] = 0;
            } else if (i === 8) {
                availability["Mon7am"] = 0;
            } else if (i === 9) {
                availability["Mon8am"] = 0;
            } else if (i === 10) {
                availability["Mon9am"] = 0;
            } else if (i === 11) {
                availability["Mon10am"] = 0;
            } else if (i === 12) {
                availability["Mon11am"] = 0;
            } else if (i === 13) {
                availability["Mon12pm"] = 0;
            } else if (i === 14) {
                availability["Mon1pm"] = 0;
            } else if (i === 15) {
                availability["Mon2pm"] = 0;
            } else if (i === 16) {
                availability["Mon3pm"] = 0;
            } else if (i === 17) {
                availability["Mon4pm"] = 0;
            } else if (i === 18) {
                availability["Mon5pm"] = 0;
            } else if (i === 19) {
                availability["Mon6pm"] = 0;
            } else if (i === 20) {
                availability["Mon7pm"] = 0;
            } else if (i === 21) {
                availability["Mon8pm"] = 0;
            } else if (i === 22) {
                availability["Mon9pm"] = 0;
            } else if (i === 23) {
                availability["Mon10pm"] = 0;
            } else if (i === 24) {
                availability["Mon11pm"] = 0;
            }
        } else if (j === 2) {
            if (i === 1) {
                availability["Tues12am"] = 0;
            } else if (i === 2) {
                availability["Tues1am"] = 0;
            } else if (i === 3) {
                availability["Tues2am"] = 0;
            } else if (i === 4) {
                availability["Tues3am"] = 0;
            } else if (i === 5) {
                availability["Tues4am"] = 0;
            } else if (i === 6) {
                availability["Tues5am"] = 0;
            } else if (i === 7) {
                availability["Tues6am"] = 0;
            } else if (i === 8) {
                availability["Tues7am"] = 0;
            } else if (i === 9) {
                availability["Tues8am"] = 0;
            } else if (i === 10) {
                availability["Tues9am"] = 0;
            } else if (i === 11) {
                availability["Tues10am"] = 0;
            } else if (i === 12) {
                availability["Tues11am"] = 0;
            } else if (i === 13) {
                availability["Tues12pm"] = 0;
            } else if (i === 14) {
                availability["Tues1pm"] = 0;
            } else if (i === 15) {
                availability["Tues2pm"] = 0;
            } else if (i === 16) {
                availability["Tues3pm"] = 0;
            } else if (i === 17) {
                availability["Tues4pm"] = 0;
            } else if (i === 18) {
                availability["Tues5pm"] = 0;
            } else if (i === 19) {
                availability["Tues6pm"] = 0;
            } else if (i === 20) {
                availability["Tues7pm"] = 0;
            } else if (i === 21) {
                availability["Tues8pm"] = 0;
            } else if (i === 22) {
                availability["Tues9pm"] = 0;
            } else if (i === 23) {
                availability["Tues10pm"] = 0;
            } else if (i === 24) {
                availability["Tues11pm"] = 0;
            }
        } else if (j === 3) {
            if (i === 1) {
                availability["Wed12am"] = 0;
            } else if (i === 2) {
                availability["Wed1am"] = 0;
            } else if (i === 3) {
                availability["Wed2am"] = 0;
            } else if (i === 4) {
                availability["Wed3am"] = 0;
            } else if (i === 5) {
                availability["Wed4am"] = 0;
            } else if (i === 6) {
                availability["Wed5am"] = 0;
            } else if (i === 7) {
                availability["Wed6am"] = 0;
            } else if (i === 8) {
                availability["Wed7am"] = 0;
            } else if (i === 9) {
                availability["Wed8am"] = 0;
            } else if (i === 10) {
                availability["Wed9am"] = 0;
            } else if (i === 11) {
                availability["Wed10am"] = 0;
            } else if (i === 12) {
                availability["Wed11am"] = 0;
            } else if (i === 13) {
                availability["Wed12pm"] = 0;
            } else if (i === 14) {
                availability["Wed1pm"] = 0;
            } else if (i === 15) {
                availability["Wed2pm"] = 0;
            } else if (i === 16) {
                availability["Wed3pm"] = 0;
            } else if (i === 17) {
                availability["Wed4pm"] = 0;
            } else if (i === 18) {
                availability["Wed5pm"] = 0;
            } else if (i === 19) {
                availability["Wed6pm"] = 0;
            } else if (i === 20) {
                availability["Wed7pm"] = 0;
            } else if (i === 21) {
                availability["Wed8pm"] = 0;
            } else if (i === 22) {
                availability["Wed9pm"] = 0;
            } else if (i === 23) {
                availability["Wed10pm"] = 0;
            } else if (i === 24) {
                availability["Wed11pm"] = 0;
            }
        } else if (j === 4) {
            if (i === 1) {
                availability["Thurs12am"] = 0;
            } else if (i === 2) {
                availability["Thurs1am"] = 0;
            } else if (i === 3) {
                availability["Thurs2am"] = 0;
            } else if (i === 4) {
                availability["Thurs3am"] = 0;
            } else if (i === 5) {
                availability["Thurs4am"] = 0;
            } else if (i === 6) {
                availability["Thurs5am"] = 0;
            } else if (i === 7) {
                availability["Thurs6am"] = 0;
            } else if (i === 8) {
                availability["Thurs7am"] = 0;
            } else if (i === 9) {
                availability["Thurs8am"] = 0;
            } else if (i === 10) {
                availability["Thurs9am"] = 0;
            } else if (i === 11) {
                availability["Thurs10am"] = 0;
            } else if (i === 12) {
                availability["Thurs11am"] = 0;
            } else if (i === 13) {
                availability["Thurs12pm"] = 0;
            } else if (i === 14) {
                availability["Thurs1pm"] = 0;
            } else if (i === 15) {
                availability["Thurs2pm"] = 0;
            } else if (i === 16) {
                availability["Thurs3pm"] = 0;
            } else if (i === 17) {
                availability["Thurs4pm"] = 0;
            } else if (i === 18) {
                availability["Thurs5pm"] = 0;
            } else if (i === 19) {
                availability["Thurs6pm"] = 0;
            } else if (i === 20) {
                availability["Thurs7pm"] = 0;
            } else if (i === 21) {
                availability["Thurs8pm"] = 0;
            } else if (i === 22) {
                availability["Thurs9pm"] = 0;
            } else if (i === 23) {
                availability["Thurs10pm"] = 0;
            } else if (i === 24) {
                availability["Thurs11pm"] = 0;
            }
        } else if (j === 5) {
            if (i === 1) {
                availability["Fri12am"] = 0;
            } else if (i === 2) {
                availability["Fri1am"] = 0;
            } else if (i === 3) {
                availability["Fri2am"] = 0;
            } else if (i === 4) {
                availability["Fri3am"] = 0;
            } else if (i === 5) {
                availability["Fri4am"] = 0;
            } else if (i === 6) {
                availability["Fri5am"] = 0;
            } else if (i === 7) {
                availability["Fri6am"] = 0;
            } else if (i === 8) {
                availability["Fri7am"] = 0;
            } else if (i === 9) {
                availability["Fri8am"] = 0;
            } else if (i === 10) {
                availability["Fri9am"] = 0;
            } else if (i === 11) {
                availability["Fri10am"] = 0;
            } else if (i === 12) {
                availability["Fri11am"] = 0;
            } else if (i === 13) {
                availability["Fri12pm"] = 0;
            } else if (i === 14) {
                availability["Fri1pm"] = 0;
            } else if (i === 15) {
                availability["Fri2pm"] = 0;
            } else if (i === 16) {
                availability["Fri3pm"] = 0;
            } else if (i === 17) {
                availability["Fri4pm"] = 0;
            } else if (i === 18) {
                availability["Fri5pm"] = 0;
            } else if (i === 19) {
                availability["Fri6pm"] = 0;
            } else if (i === 20) {
                availability["Fri7pm"] = 0;
            } else if (i === 21) {
                availability["Fri8pm"] = 0;
            } else if (i === 22) {
                availability["Fri9pm"] = 0;
            } else if (i === 23) {
                availability["Fri10pm"] = 0;
            } else if (i === 24) {
                availability["Fri11pm"] = 0;
            }
        } else if (j === 6) {
            if (i === 1) {
                availability["Sat12am"] = 0;
            } else if (i === 2) {
                availability["Sat1am"] = 0;
            } else if (i === 3) {
                availability["Sat2am"] = 0;
            } else if (i === 4) {
                availability["Sat3am"] = 0;
            } else if (i === 5) {
                availability["Sat4am"] = 0;
            } else if (i === 6) {
                availability["Sat5am"] = 0;
            } else if (i === 7) {
                availability["Sat6am"] = 0;
            } else if (i === 8) {
                availability["Sat7am"] = 0;
            } else if (i === 9) {
                availability["Sat8am"] = 0;
            } else if (i === 10) {
                availability["Sat9am"] = 0;
            } else if (i === 11) {
                availability["Sat10am"] = 0;
            } else if (i === 12) {
                availability["Sat11am"] = 0;
            } else if (i === 13) {
                availability["Sat12pm"] = 0;
            } else if (i === 14) {
                availability["Sat1pm"] = 0;
            } else if (i === 15) {
                availability["Sat2pm"] = 0;
            } else if (i === 16) {
                availability["Sat3pm"] = 0;
            } else if (i === 17) {
                availability["Sat4pm"] = 0;
            } else if (i === 18) {
                availability["Sat5pm"] = 0;
            } else if (i === 19) {
                availability["Sat6pm"] = 0;
            } else if (i === 20) {
                availability["Sat7pm"] = 0;
            } else if (i === 21) {
                availability["Sat8pm"] = 0;
            } else if (i === 22) {
                availability["Sat9pm"] = 0;
            } else if (i === 23) {
                availability["Sat10pm"] = 0;
            } else if (i === 24) {
                availability["Sat11pm"] = 0;
            }
        } else if (j === 7) {
            if (i === 1) {
                availability["Sun12am"] = 0;
            } else if (i === 2) {
                availability["Sun1am"] = 0;
            } else if (i === 3) {
                availability["Sun2am"] = 0;
            } else if (i === 4) {
                availability["Sun3am"] = 0;
            } else if (i === 5) {
                availability["Sun4am"] = 0;
            } else if (i === 6) {
                availability["Sun5am"] = 0;
            } else if (i === 7) {
                availability["Sun6am"] = 0;
            } else if (i === 8) {
                availability["Sun7am"] = 0;
            } else if (i === 9) {
                availability["Sun8am"] = 0;
            } else if (i === 10) {
                availability["Sun9am"] = 0;
            } else if (i === 11) {
                availability["Sun10am"] = 0;
            } else if (i === 12) {
                availability["Sun11am"] = 0;
            } else if (i === 13) {
                availability["Sun12pm"] = 0;
            } else if (i === 14) {
                availability["Sun1pm"] = 0;
            } else if (i === 15) {
                availability["Sun2pm"] = 0;
            } else if (i === 16) {
                availability["Sun3pm"] = 0;
            } else if (i === 17) {
                availability["Sun4pm"] = 0;
            } else if (i === 18) {
                availability["Sun5pm"] = 0;
            } else if (i === 19) {
                availability["Sun6pm"] = 0;
            } else if (i === 20) {
                availability["Sun7pm"] = 0;
            } else if (i === 21) {
                availability["Sun8pm"] = 0;
            } else if (i === 22) {
                availability["Sun9pm"] = 0;
            } else if (i === 23) {
                availability["Sun10pm"] = 0;
            } else if (i === 24) {
                availability["Sun11pm"] = 0;
            }
        }
    } else if (cell.className === "cell-selected") {
        cell.className = "cell";
        //alert("wasnt selected, but now is!");
        if (j === 1) {
            if (i === 1) {
                availability["Mon12am"] = 1;
            } else if (i === 2) {
                availability["Mon1am"] = 1;
            } else if (i === 3) {
                availability["Mon2am"] = 1;
            } else if (i === 4) {
                availability["Mon3am"] = 1;
            } else if (i === 5) {
                availability["Mon4am"] = 1;
            } else if (i === 6) {
                availability["Mon5am"] = 1;
            } else if (i === 7) {
                availability["Mon6am"] = 1;
            } else if (i === 8) {
                availability["Mon7am"] = 1;
            } else if (i === 9) {
                availability["Mon8am"] = 1;
            } else if (i === 10) {
                availability["Mon9am"] = 1;
            } else if (i === 11) {
                availability["Mon10am"] = 1;
            } else if (i === 12) {
                availability["Mon11am"] = 1;
            } else if (i === 13) {
                availability["Mon12pm"] = 1;
            } else if (i === 14) {
                availability["Mon1pm"] = 1;
            } else if (i === 15) {
                availability["Mon2pm"] = 1;
            } else if (i === 16) {
                availability["Mon3pm"] = 1;
            } else if (i === 17) {
                availability["Mon4pm"] = 1;
            } else if (i === 18) {
                availability["Mon5pm"] = 1;
            } else if (i === 19) {
                availability["Mon6pm"] = 1;
            } else if (i === 20) {
                availability["Mon7pm"] = 1;
            } else if (i === 21) {
                availability["Mon8pm"] = 1;
            } else if (i === 22) {
                availability["Mon9pm"] = 1;
            } else if (i === 23) {
                availability["Mon10pm"] = 1;
            } else if (i === 24) {
                availability["Mon11pm"] = 1;
            }
        } else if (j === 2) {
            if (i === 1) {
                availability["Tues12am"] = 1;
            } else if (i === 2) {
                availability["Tues1am"] = 1;
            } else if (i === 3) {
                availability["Tues2am"] = 1;
            } else if (i === 4) {
                availability["Tues3am"] = 1;
            } else if (i === 5) {
                availability["Tues4am"] = 1;
            } else if (i === 6) {
                availability["Tues5am"] = 1;
            } else if (i === 7) {
                availability["Tues6am"] = 1;
            } else if (i === 8) {
                availability["Tues7am"] = 1;
            } else if (i === 9) {
                availability["Tues8am"] = 1;
            } else if (i === 10) {
                availability["Tues9am"] = 1;
            } else if (i === 11) {
                availability["Tues10am"] = 1;
            } else if (i === 12) {
                availability["Tues11am"] = 1;
            } else if (i === 13) {
                availability["Tues12pm"] = 1;
            } else if (i === 14) {
                availability["Tues1pm"] = 1;
            } else if (i === 15) {
                availability["Tues2pm"] = 1;
            } else if (i === 16) {
                availability["Tues3pm"] = 1;
            } else if (i === 17) {
                availability["Tues4pm"] = 1;
            } else if (i === 18) {
                availability["Tues5pm"] = 1;
            } else if (i === 19) {
                availability["Tues6pm"] = 1;
            } else if (i === 20) {
                availability["Tues7pm"] = 1;
            } else if (i === 21) {
                availability["Tues8pm"] = 1;
            } else if (i === 22) {
                availability["Tues9pm"] = 1;
            } else if (i === 23) {
                availability["Tues10pm"] = 1;
            } else if (i === 24) {
                availability["Tues11pm"] = 1;
            }
        } else if (j === 3) {
            if (i === 1) {
                availability["Wed12am"] = 1;
            } else if (i === 2) {
                availability["Wed1am"] = 1;
            } else if (i === 3) {
                availability["Wed2am"] = 1;
            } else if (i === 4) {
                availability["Wed3am"] = 1;
            } else if (i === 5) {
                availability["Wed4am"] = 1;
            } else if (i === 6) {
                availability["Wed5am"] = 1;
            } else if (i === 7) {
                availability["Wed6am"] = 1;
            } else if (i === 8) {
                availability["Wed7am"] = 1;
            } else if (i === 9) {
                availability["Wed8am"] = 1;
            } else if (i === 10) {
                availability["Wed9am"] = 1;
            } else if (i === 11) {
                availability["Wed10am"] = 1;
            } else if (i === 12) {
                availability["Wed11am"] = 1;
            } else if (i === 13) {
                availability["Wed12pm"] = 1;
            } else if (i === 14) {
                availability["Wed1pm"] = 1;
            } else if (i === 15) {
                availability["Wed2pm"] = 1;
            } else if (i === 16) {
                availability["Wed3pm"] = 1;
            } else if (i === 17) {
                availability["Wed4pm"] = 1;
            } else if (i === 18) {
                availability["Wed5pm"] = 1;
            } else if (i === 19) {
                availability["Wed6pm"] = 1;
            } else if (i === 20) {
                availability["Wed7pm"] = 1;
            } else if (i === 21) {
                availability["Wed8pm"] = 1;
            } else if (i === 22) {
                availability["Wed9pm"] = 1;
            } else if (i === 23) {
                availability["Wed10pm"] = 1;
            } else if (i === 24) {
                availability["Wed11pm"] = 1;
            }
        } else if (j === 4) {
            if (i === 1) {
                availability["Thurs12am"] = 1;
            } else if (i === 2) {
                availability["Thurs1am"] = 1;
            } else if (i === 3) {
                availability["Thurs2am"] = 1;
            } else if (i === 4) {
                availability["Thurs3am"] = 1;
            } else if (i === 5) {
                availability["Thurs4am"] = 1;
            } else if (i === 6) {
                availability["Thurs5am"] = 1;
            } else if (i === 7) {
                availability["Thurs6am"] = 1;
            } else if (i === 8) {
                availability["Thurs7am"] = 1;
            } else if (i === 9) {
                availability["Thurs8am"] = 1;
            } else if (i === 10) {
                availability["Thurs9am"] = 1;
            } else if (i === 11) {
                availability["Thurs10am"] = 1;
            } else if (i === 12) {
                availability["Thurs11am"] = 1;
            } else if (i === 13) {
                availability["Thurs12pm"] = 1;
            } else if (i === 14) {
                availability["Thurs1pm"] = 1;
            } else if (i === 15) {
                availability["Thurs2pm"] = 1;
            } else if (i === 16) {
                availability["Thurs3pm"] = 1;
            } else if (i === 17) {
                availability["Thurs4pm"] = 1;
            } else if (i === 18) {
                availability["Thurs5pm"] = 1;
            } else if (i === 19) {
                availability["Thurs6pm"] = 1;
            } else if (i === 20) {
                availability["Thurs7pm"] = 1;
            } else if (i === 21) {
                availability["Thurs8pm"] = 1;
            } else if (i === 22) {
                availability["Thurs9pm"] = 1;
            } else if (i === 23) {
                availability["Thurs10pm"] = 1;
            } else if (i === 24) {
                availability["Thurs11pm"] = 1;
            }
        } else if (j === 5) {
            if (i === 1) {
                availability["Fri12am"] = 1;
            } else if (i === 2) {
                availability["Fri1am"] = 1;
            } else if (i === 3) {
                availability["Fri2am"] = 1;
            } else if (i === 4) {
                availability["Fri3am"] = 1;
            } else if (i === 5) {
                availability["Fri4am"] = 1;
            } else if (i === 6) {
                availability["Fri5am"] = 1;
            } else if (i === 7) {
                availability["Fri6am"] = 1;
            } else if (i === 8) {
                availability["Fri7am"] = 1;
            } else if (i === 9) {
                availability["Fri8am"] = 1;
            } else if (i === 10) {
                availability["Fri9am"] = 1;
            } else if (i === 11) {
                availability["Fri10am"] = 1;
            } else if (i === 12) {
                availability["Fri11am"] = 1;
            } else if (i === 13) {
                availability["Fri12pm"] = 1;
            } else if (i === 14) {
                availability["Fri1pm"] = 1;
            } else if (i === 15) {
                availability["Fri2pm"] = 1;
            } else if (i === 16) {
                availability["Fri3pm"] = 1;
            } else if (i === 17) {
                availability["Fri4pm"] = 1;
            } else if (i === 18) {
                availability["Fri5pm"] = 1;
            } else if (i === 19) {
                availability["Fri6pm"] = 1;
            } else if (i === 20) {
                availability["Fri7pm"] = 1;
            } else if (i === 21) {
                availability["Fri8pm"] = 1;
            } else if (i === 22) {
                availability["Fri9pm"] = 1;
            } else if (i === 23) {
                availability["Fri10pm"] = 1;
            } else if (i === 24) {
                availability["Fri11pm"] = 1;
            }
        } else if (j === 6) {
            if (i === 1) {
                availability["Sat12am"] = 1;
            } else if (i === 2) {
                availability["Sat1am"] = 1;
            } else if (i === 3) {
                availability["Sat2am"] = 1;
            } else if (i === 4) {
                availability["Sat3am"] = 1;
            } else if (i === 5) {
                availability["Sat4am"] = 1;
            } else if (i === 6) {
                availability["Sat5am"] = 1;
            } else if (i === 7) {
                availability["Sat6am"] = 1;
            } else if (i === 8) {
                availability["Sat7am"] = 1;
            } else if (i === 9) {
                availability["Sat8am"] = 1;
            } else if (i === 10) {
                availability["Sat9am"] = 1;
            } else if (i === 11) {
                availability["Sat10am"] = 1;
            } else if (i === 12) {
                availability["Sat11am"] = 1;
            } else if (i === 13) {
                availability["Sat12pm"] = 1;
            } else if (i === 14) {
                availability["Sat1pm"] = 1;
            } else if (i === 15) {
                availability["Sat2pm"] = 1;
            } else if (i === 16) {
                availability["Sat3pm"] = 1;
            } else if (i === 17) {
                availability["Sat4pm"] = 1;
            } else if (i === 18) {
                availability["Sat5pm"] = 1;
            } else if (i === 19) {
                availability["Sat6pm"] = 1;
            } else if (i === 20) {
                availability["Sat7pm"] = 1;
            } else if (i === 21) {
                availability["Sat8pm"] = 1;
            } else if (i === 22) {
                availability["Sat9pm"] = 1;
            } else if (i === 23) {
                availability["Sat10pm"] = 1;
            } else if (i === 24) {
                availability["Sat11pm"] = 1;
            }
        } else if (j === 7) {
            if (i === 1) {
                availability["Sun12am"] = 1;
            } else if (i === 2) {
                availability["Sun1am"] = 1;
            } else if (i === 3) {
                availability["Sun2am"] = 1;
            } else if (i === 4) {
                availability["Sun3am"] = 1;
            } else if (i === 5) {
                availability["Sun4am"] = 1;
            } else if (i === 6) {
                availability["Sun5am"] = 1;
            } else if (i === 7) {
                availability["Sun6am"] = 1;
            } else if (i === 8) {
                availability["Sun7am"] = 1;
            } else if (i === 9) {
                availability["Sun8am"] = 1;
            } else if (i === 10) {
                availability["Sun9am"] = 1;
            } else if (i === 11) {
                availability["Sun10am"] = 1;
            } else if (i === 12) {
                availability["Sun11am"] = 1;
            } else if (i === 13) {
                availability["Sun12pm"] = 1;
            } else if (i === 14) {
                availability["Sun1pm"] = 1;
            } else if (i === 15) {
                availability["Sun2pm"] = 1;
            } else if (i === 16) {
                availability["Sun3pm"] = 1;
            } else if (i === 17) {
                availability["Sun4pm"] = 1;
            } else if (i === 18) {
                availability["Sun5pm"] = 1;
            } else if (i === 19) {
                availability["Sun6pm"] = 1;
            } else if (i === 20) {
                availability["Sun7pm"] = 1;
            } else if (i === 21) {
                availability["Sun8pm"] = 1;
            } else if (i === 22) {
                availability["Sun9pm"] = 1;
            } else if (i === 23) {
                availability["Sun10pm"] = 1;
            } else if (i === 24) {
                availability["Sun11pm"] = 1;
            }
        }
    }
}

document.getElementById('submit').addEventListener('click', () => {
    utils.saveAvailability(availability);
});

document.getElementById('updateAcc').addEventListener('click', () => {
    // alert('try to sign');
    if (document.getElementById('name').value === '' || document.getElementById('email').value === '' || document.getElementById('password').value === '') {
        alert('Required sign in information is missing.');
    } else {
        utils.saveAccountInfo();
    }
});

document.getElementById('clear').addEventListener('click', () => {
    availability = utils.clearState();
    for (let i = 1; i < table.rows.length - 1; i++) {
        for (let j = 1; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].classList.add("cell-selected");
            table.rows[i].cells[j].classList.remove("cell");
        }
    }
});