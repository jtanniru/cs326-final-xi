'use strict';

window.addEventListener("load", async function () {
    let table = document.getElementById("tableID");
    let availability = {};

    // availability = 1; //set availability equal to the saved data

    if (table !== null) {
        for (let i = 1; i < table.rows.length; i++) {
            for (let j = 1; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].classList.add("cell-selected");
                table.rows[i].cells[j].onclick = function () {
                    //tableText(this, i, j);
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
                };
            }
        }
    }

    document.getElementById('updateAcc').addEventListener('click', async () => {
        const userName = document.getElementById('name').value;
        const userEmail = document.getElementById('email').value;
        const userPhone = document.getElementById('phone').value;
        const userPassword = document.getElementById('password').value;

        if (userName === '' || userEmail === '' || userPassword === '') {
            alert('Required sign in information is missing.');
        } else {
            const response = await fetch('/user/update', {
                method: 'POST',
                body: JSON.stringify({
                    email: userEmail,
                    password: userPassword,
                    name: userName,
                    user_phone: userPhone,
                })
            });
            if (!response.ok) {
                console.error("Could not save the user to the server.");
            } else {
                console.log("User information updated.");
            }
        }
    }); //end of updateAcc

    document.getElementById('submit').addEventListener('click', async () => {
        const zone = document.getElementById('timezone').value;

        const response = await fetch('/avail/update', {
            method: 'POST',
            body: JSON.stringify({
                user_timezone = zone,
                user_avail = availability
            })
        });
        if (!response.ok) {
            console.error("Could not save availability to the server.");
        } else {
            console.log("User availability updated.");
        }
    }); //end of submit

} //end of load












    // action for submit course button
    const coursesSubmitButton = document.getElementById('coursesSubmit');
coursesSubmitButton.addEventListener('click', async () => {
    console.log("clicked button");
    const courseNameValue = document.getElementById('inputCourseName').value;
    const professorValue = document.getElementById('inputProfessor').value;

    let weekdayArray = []; // the Boolean[] added to the sql table for course days column

    if (courseNameValue === '' || professorValue === '') {
        alert('Required sign in information is missing.');
    }

    // for checkbox in courseDays div, if a checkbox is checked, add its ID (the weekday) to the array
    let weekDaysCheckboxes = document.getElementsByClassName('weekday');
    for (let i = 0; i < weekDaysCheckboxes.length; i++) {
        if (weekDaysCheckboxes[i].checked === true) {
            weekdayArray.push(true);
        }
        else {
            weekdayArray.push(false);
        }
    }

    // TODO: add header
    // POST to courseInfo table
    const response = await fetch('/avail/update', {
        method: 'POST',
        body: JSON.stringify({
            course_name: courseNameValue,
            professor: professorValue,
            course_days: weekdayArray, // TODO: make sure to include the comma , when you add email in
            //email: // TODO: request.user 
            // email: request.users.email,

        })
    });

    if (!response.ok) {
        console.error("Could not save the turn score to the server.");
    }

});

const coursesDeleteSelection = document.getElementById('coursesDeleteSelection');
coursesDeleteSelection.addEventListener('load', async () => {
    // Views courses for user, fills out delete options and current courses table
    const response = await fetch('/course/view');
    const responseData = response.ok ? await response.json() : [];

    for (const course of responseData) {
        const newOption = document.createElement('option');
        newOption.value = course.course_name;
        coursesDeleteSelection.appendChild(newOption);

        const tr = document.createElement('tr');
        const name = document.createElement('td');
        const professor = document.createElement('td');
        const days = document.createElement('td');
        name.innerText = course.course_name;
        professor.innerText = course.professor;
        days.innerHTML = course.course_days;

        tr.appendChild(name);
        tr.appendChild(professor);
        tr.appendChild(days);

        document.getElementById('coursesTable').appendChild(tr);
    }
});

const courseToDelete = document.getElementById('coursesDeleteSelection').value;
const coursesDeleteButton = document.getElementById('coursesDelete');
coursesDeleteButton.addEventListener('click', async () => {

    // remove row from HTML table and delete selector options
    const response = await fetch('/course/view');
    const responseData = response.ok ? await response.json() : [];

    let index = 0;
    for (const course of responseData) {
        if (course.course_name === courseToDelete) {
            document.getElementById("coursesTable").deleteRow(index);
            const deleteOption = document.getElementById("coursesDeleteSelection");
            deleteOption.remove(deleteOption.selectedIndex);
            break;
        }
        index++;
    }

    // go into the database, remove this course from the user's course listings
    const response = await fetch('/course/delete', {
        method: 'POST',
        body: JSON.stringify({
            course_name: courseNameValue,
            professor: professorValue,
            course_days: weekdayArray // TODO: make sure to include the comma , when you add email in
            //email: // TODO: request.user 
        })
    });

    if (!response.ok) {
        console.error("Could not save the turn score to the server.");
    }
});
});





// //database: insert an object with the user availability to save
// document.getElementById('submit').addEventListener('click', () => {
//     utils.saveAvailability(availability);
// });

// //database: insert an object with the user account information ({name: name, emailAddress: email, phoneNum: phone, savePassword: password})
// document.getElementById('updateAcc').addEventListener('click', () => {
//     if (document.getElementById('name').value === '' || document.getElementById('email').value === '' || document.getElementById('password').value === '') {
//         alert('Required sign in information is missing.');
//     } else {
//         utils.saveAccountInfo();
//     }
// });

// //database: remove saved availability information
// document.getElementById('clear').addEventListener('click', () => {
//     availability = utils.clearState();
//     for (let i = 1; i < table.rows.length - 1; i++) {
//         for (let j = 1; j < table.rows[i].cells.length; j++) {
//             table.rows[i].cells[j].classList.add("cell-selected");
//             table.rows[i].cells[j].classList.remove("cell");
//         }
//     }
// });

document.getElementById('submit').addEventListener('click', async () => {
    //     utils.saveAvailability(availability);

    //     let saveData = {
    //         name: document.getElementById('name').value,
    //         emailAddress: document.getElementById('email').value,
    //         phoneNum: document.getElementById('phone').value,
    //         savePassword: document.getElementById('password').value
    //     };
    //     window.localStorage.setItem('accountState', JSON.stringify(saveData));
    //     console.log(JSON.stringify(saveData));
    // }

    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userPhone = document.getElementById('phone').value;
    const userPassword = document.getElementById('password').value;

    if (userName === '' || userEmail === '' || userPassword === '') {
        alert('Required sign in information is missing.');
    }

    const response = await fetch('/course/new', {
        method: 'POST',
        body: JSON.stringify({
            course_name: courseNameValue,
            professor: professorValue,
            course_days: weekdayArray, // TODO: make sure to include the comma , when you add email in
            //email: // TODO: request.user 
            // email: request.users.email,

        })
    });

});


document.getElementById('submit').addEventListener('click', async () => {
    const courseNameValue = document.getElementById('inputCourseName').value;
    const professorValue = document.getElementById('inputProfessor').value;

    let weekdayArray = []; // the Boolean[] added to the sql table for course days column

    if (courseNameValue === '' || professorValue === '') {
        alert('Required sign in information is missing.');
    }

    // for checkbox in courseDays div, if a checkbox is checked, add its ID (the weekday) to the array
    let weekDaysCheckboxes = document.getElementsByClassName('weekday');
    for (let i = 0; i < weekDaysCheckboxes.length; i++) {
        if (weekDaysCheckboxes[i].checked === true) {
            weekdayArray.push(true);
        }
        else {
            weekdayArray.push(false);
        }
    }

});
