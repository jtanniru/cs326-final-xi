'use strict';

export function renderTable() {
  window.addEventListener("load", async () => {

    let table = document.getElementById("availabilityTable");
    let availability = {};

    const emailResponse = await fetch('/availability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        email: searchEmail,
      })
    });
    if (!emailResponse.ok) {
      console.error("Error.");
    } else {
      console.log("It worked.");
    }

    if (responseViewData.length !== 0) {
      if (responseViewData[0].availability !== null) {
        availability = responseViewData[0].availability;
      } else {
        availability["Mon12am"] = 0;
        availability["Mon1am"] = 0;
        availability["Mon2am"] = 0;
        availability["Mon3am"] = 0;
        availability["Mon4am"] = 0;
        availability["Mon5am"] = 0;
        availability["Mon6am"] = 0;
        availability["Mon7am"] = 0;
        availability["Mon8am"] = 0;
        availability["Mon9am"] = 0;
        availability["Mon10am"] = 0;
        availability["Mon11am"] = 0;
        availability["Mon12pm"] = 0;
        availability["Mon1pm"] = 0;
        availability["Mon2pm"] = 0;
        availability["Mon3pm"] = 0;
        availability["Mon4pm"] = 0;
        availability["Mon5pm"] = 0;
        availability["Mon6pm"] = 0;
        availability["Mon7pm"] = 0;
        availability["Mon8pm"] = 0;
        availability["Mon9pm"] = 0;
        availability["Mon10pm"] = 0;
        availability["Mon11pm"] = 0;

        availability["Tues12am"] = 0;
        availability["Tues1am"] = 0;
        availability["Tues2am"] = 0;
        availability["Tues3am"] = 0;
        availability["Tues4am"] = 0;
        availability["Tues5am"] = 0;
        availability["Tues6am"] = 0;
        availability["Tues7am"] = 0;
        availability["Tues8am"] = 0;
        availability["Tues9am"] = 0;
        availability["Tues10am"] = 0;
        availability["Tues11am"] = 0;
        availability["Tues12pm"] = 0;
        availability["Tues1pm"] = 0;
        availability["Tues2pm"] = 0;
        availability["Tues3pm"] = 0;
        availability["Tues4pm"] = 0;
        availability["Tues5pm"] = 0;
        availability["Tues6pm"] = 0;
        availability["Tues7pm"] = 0;
        availability["Tues8pm"] = 0;
        availability["Tues9pm"] = 0;
        availability["Tues10pm"] = 0;
        availability["Tues11pm"] = 0;

        availability["Wed12am"] = 0;
        availability["Wed1am"] = 0;
        availability["Wed2am"] = 0;
        availability["Wed3am"] = 0;
        availability["Wed4am"] = 0;
        availability["Wed5am"] = 0;
        availability["Wed6am"] = 0;
        availability["Wed7am"] = 0;
        availability["Wed8am"] = 0;
        availability["Wed9am"] = 0;
        availability["Wed10am"] = 0;
        availability["Wed11am"] = 0;
        availability["Wed12pm"] = 0;
        availability["Wed1pm"] = 0;
        availability["Wed2pm"] = 0;
        availability["Wed3pm"] = 0;
        availability["Wed4pm"] = 0;
        availability["Wed5pm"] = 0;
        availability["Wed6pm"] = 0;
        availability["Wed7pm"] = 0;
        availability["Wed8pm"] = 0;
        availability["Wed9pm"] = 0;
        availability["Wed10pm"] = 0;
        availability["Wed11pm"] = 0;

        availability["Thurs12am"] = 0;
        availability["Thurs1am"] = 0;
        availability["Thurs2am"] = 0;
        availability["Thurs3am"] = 0;
        availability["Thurs4am"] = 0;
        availability["Thurs5am"] = 0;
        availability["Thurs6am"] = 0;
        availability["Thurs7am"] = 0;
        availability["Thurs8am"] = 0;
        availability["Thurs9am"] = 0;
        availability["Thurs10am"] = 0;
        availability["Thurs11am"] = 0;
        availability["Thurs12pm"] = 0;
        availability["Thurs1pm"] = 0;
        availability["Thurs2pm"] = 0;
        availability["Thurs3pm"] = 0;
        availability["Thurs4pm"] = 0;
        availability["Thurs5pm"] = 0;
        availability["Thurs6pm"] = 0;
        availability["Thurs7pm"] = 0;
        availability["Thurs8pm"] = 0;
        availability["Thurs9pm"] = 0;
        availability["Thurs10pm"] = 0;
        availability["Thurs11pm"] = 0;

        availability["Fri12am"] = 0;
        availability["Fri1am"] = 0;
        availability["Fri2am"] = 0;
        availability["Fri3am"] = 0;
        availability["Fri4am"] = 0;
        availability["Fri5am"] = 0;
        availability["Fri6am"] = 0;
        availability["Fri7am"] = 0;
        availability["Fri8am"] = 0;
        availability["Fri9am"] = 0;
        availability["Fri10am"] = 0;
        availability["Fri11am"] = 0;
        availability["Fri12pm"] = 0;
        availability["Fri1pm"] = 0;
        availability["Fri2pm"] = 0;
        availability["Fri3pm"] = 0;
        availability["Fri4pm"] = 0;
        availability["Fri5pm"] = 0;
        availability["Fri6pm"] = 0;
        availability["Fri7pm"] = 0;
        availability["Fri8pm"] = 0;
        availability["Fri9pm"] = 0;
        availability["Fri10pm"] = 0;
        availability["Fri11pm"] = 0;

        availability["Sat12am"] = 0;
        availability["Sat1am"] = 0;
        availability["Sat2am"] = 0;
        availability["Sat3am"] = 0;
        availability["Sat4am"] = 0;
        availability["Sat5am"] = 0;
        availability["Sat6am"] = 0;
        availability["Sat7am"] = 0;
        availability["Sat8am"] = 0;
        availability["Sat9am"] = 0;
        availability["Sat10am"] = 0;
        availability["Sat11am"] = 0;
        availability["Sat12pm"] = 0;
        availability["Sat1pm"] = 0;
        availability["Sat2pm"] = 0;
        availability["Sat3pm"] = 0;
        availability["Sat4pm"] = 0;
        availability["Sat5pm"] = 0;
        availability["Sat6pm"] = 0;
        availability["Sat7pm"] = 0;
        availability["Sat8pm"] = 0;
        availability["Sat9pm"] = 0;
        availability["Sat10pm"] = 0;
        availability["Sat11pm"] = 0;

        availability["Sun12am"] = 0;
        availability["Sun1am"] = 0;
        availability["Sun2am"] = 0;
        availability["Sun3am"] = 0;
        availability["Sun4am"] = 0;
        availability["Sun5am"] = 0;
        availability["Sun6am"] = 0;
        availability["Sun7am"] = 0;
        availability["Sun8am"] = 0;
        availability["Sun9am"] = 0;
        availability["Sun10am"] = 0;
        availability["Sun11am"] = 0;
        availability["Sun12pm"] = 0;
        availability["Sun1pm"] = 0;
        availability["Sun2pm"] = 0;
        availability["Sun3pm"] = 0;
        availability["Sun4pm"] = 0;
        availability["Sun5pm"] = 0;
        availability["Sun6pm"] = 0;
        availability["Sun7pm"] = 0;
        availability["Sun8pm"] = 0;
        availability["Sun9pm"] = 0;
        availability["Sun10pm"] = 0;
        availability["Sun11pm"] = 0;
      }
    } else {
      availability["Mon12am"] = 0;
      availability["Mon1am"] = 0;
      availability["Mon2am"] = 0;
      availability["Mon3am"] = 0;
      availability["Mon4am"] = 0;
      availability["Mon5am"] = 0;
      availability["Mon6am"] = 0;
      availability["Mon7am"] = 0;
      availability["Mon8am"] = 0;
      availability["Mon9am"] = 0;
      availability["Mon10am"] = 0;
      availability["Mon11am"] = 0;
      availability["Mon12pm"] = 0;
      availability["Mon1pm"] = 0;
      availability["Mon2pm"] = 0;
      availability["Mon3pm"] = 0;
      availability["Mon4pm"] = 0;
      availability["Mon5pm"] = 0;
      availability["Mon6pm"] = 0;
      availability["Mon7pm"] = 0;
      availability["Mon8pm"] = 0;
      availability["Mon9pm"] = 0;
      availability["Mon10pm"] = 0;
      availability["Mon11pm"] = 0;

      availability["Tues12am"] = 0;
      availability["Tues1am"] = 0;
      availability["Tues2am"] = 0;
      availability["Tues3am"] = 0;
      availability["Tues4am"] = 0;
      availability["Tues5am"] = 0;
      availability["Tues6am"] = 0;
      availability["Tues7am"] = 0;
      availability["Tues8am"] = 0;
      availability["Tues9am"] = 0;
      availability["Tues10am"] = 0;
      availability["Tues11am"] = 0;
      availability["Tues12pm"] = 0;
      availability["Tues1pm"] = 0;
      availability["Tues2pm"] = 0;
      availability["Tues3pm"] = 0;
      availability["Tues4pm"] = 0;
      availability["Tues5pm"] = 0;
      availability["Tues6pm"] = 0;
      availability["Tues7pm"] = 0;
      availability["Tues8pm"] = 0;
      availability["Tues9pm"] = 0;
      availability["Tues10pm"] = 0;
      availability["Tues11pm"] = 0;

      availability["Wed12am"] = 0;
      availability["Wed1am"] = 0;
      availability["Wed2am"] = 0;
      availability["Wed3am"] = 0;
      availability["Wed4am"] = 0;
      availability["Wed5am"] = 0;
      availability["Wed6am"] = 0;
      availability["Wed7am"] = 0;
      availability["Wed8am"] = 0;
      availability["Wed9am"] = 0;
      availability["Wed10am"] = 0;
      availability["Wed11am"] = 0;
      availability["Wed12pm"] = 0;
      availability["Wed1pm"] = 0;
      availability["Wed2pm"] = 0;
      availability["Wed3pm"] = 0;
      availability["Wed4pm"] = 0;
      availability["Wed5pm"] = 0;
      availability["Wed6pm"] = 0;
      availability["Wed7pm"] = 0;
      availability["Wed8pm"] = 0;
      availability["Wed9pm"] = 0;
      availability["Wed10pm"] = 0;
      availability["Wed11pm"] = 0;

      availability["Thurs12am"] = 0;
      availability["Thurs1am"] = 0;
      availability["Thurs2am"] = 0;
      availability["Thurs3am"] = 0;
      availability["Thurs4am"] = 0;
      availability["Thurs5am"] = 0;
      availability["Thurs6am"] = 0;
      availability["Thurs7am"] = 0;
      availability["Thurs8am"] = 0;
      availability["Thurs9am"] = 0;
      availability["Thurs10am"] = 0;
      availability["Thurs11am"] = 0;
      availability["Thurs12pm"] = 0;
      availability["Thurs1pm"] = 0;
      availability["Thurs2pm"] = 0;
      availability["Thurs3pm"] = 0;
      availability["Thurs4pm"] = 0;
      availability["Thurs5pm"] = 0;
      availability["Thurs6pm"] = 0;
      availability["Thurs7pm"] = 0;
      availability["Thurs8pm"] = 0;
      availability["Thurs9pm"] = 0;
      availability["Thurs10pm"] = 0;
      availability["Thurs11pm"] = 0;

      availability["Fri12am"] = 0;
      availability["Fri1am"] = 0;
      availability["Fri2am"] = 0;
      availability["Fri3am"] = 0;
      availability["Fri4am"] = 0;
      availability["Fri5am"] = 0;
      availability["Fri6am"] = 0;
      availability["Fri7am"] = 0;
      availability["Fri8am"] = 0;
      availability["Fri9am"] = 0;
      availability["Fri10am"] = 0;
      availability["Fri11am"] = 0;
      availability["Fri12pm"] = 0;
      availability["Fri1pm"] = 0;
      availability["Fri2pm"] = 0;
      availability["Fri3pm"] = 0;
      availability["Fri4pm"] = 0;
      availability["Fri5pm"] = 0;
      availability["Fri6pm"] = 0;
      availability["Fri7pm"] = 0;
      availability["Fri8pm"] = 0;
      availability["Fri9pm"] = 0;
      availability["Fri10pm"] = 0;
      availability["Fri11pm"] = 0;

      availability["Sat12am"] = 0;
      availability["Sat1am"] = 0;
      availability["Sat2am"] = 0;
      availability["Sat3am"] = 0;
      availability["Sat4am"] = 0;
      availability["Sat5am"] = 0;
      availability["Sat6am"] = 0;
      availability["Sat7am"] = 0;
      availability["Sat8am"] = 0;
      availability["Sat9am"] = 0;
      availability["Sat10am"] = 0;
      availability["Sat11am"] = 0;
      availability["Sat12pm"] = 0;
      availability["Sat1pm"] = 0;
      availability["Sat2pm"] = 0;
      availability["Sat3pm"] = 0;
      availability["Sat4pm"] = 0;
      availability["Sat5pm"] = 0;
      availability["Sat6pm"] = 0;
      availability["Sat7pm"] = 0;
      availability["Sat8pm"] = 0;
      availability["Sat9pm"] = 0;
      availability["Sat10pm"] = 0;
      availability["Sat11pm"] = 0;

      availability["Sun12am"] = 0;
      availability["Sun1am"] = 0;
      availability["Sun2am"] = 0;
      availability["Sun3am"] = 0;
      availability["Sun4am"] = 0;
      availability["Sun5am"] = 0;
      availability["Sun6am"] = 0;
      availability["Sun7am"] = 0;
      availability["Sun8am"] = 0;
      availability["Sun9am"] = 0;
      availability["Sun10am"] = 0;
      availability["Sun11am"] = 0;
      availability["Sun12pm"] = 0;
      availability["Sun1pm"] = 0;
      availability["Sun2pm"] = 0;
      availability["Sun3pm"] = 0;
      availability["Sun4pm"] = 0;
      availability["Sun5pm"] = 0;
      availability["Sun6pm"] = 0;
      availability["Sun7pm"] = 0;
      availability["Sun8pm"] = 0;
      availability["Sun9pm"] = 0;
      availability["Sun10pm"] = 0;
      availability["Sun11pm"] = 0;
    }

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
  });
}
