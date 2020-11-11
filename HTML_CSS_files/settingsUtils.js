export function saveAvailability(availability) {
    let saveData = {
        zone: document.getElementById('timezone').value,
        avail: availability,
    };
    window.localStorage.setItem('availabilityState', JSON.stringify(saveData));
    console.log(JSON.stringify(saveData));
}

export function saveAccountInfo() {
    let saveData = {
        name: document.getElementById('name').value,
        emailAddress: document.getElementById('email').value,
        phoneNum: document.getElementById('phone').value,
        savePassword: document.getElementById('password').value
    };
    window.localStorage.setItem('accountState', JSON.stringify(saveData));
    console.log(JSON.stringify(saveData));
}

export function restoreAccountInfo() {

    let restoredData = JSON.parse(window.localStorage.getItem("accountState"));

    if (restoredData) {
        document.getElementById('name').value = restoredData['name'];
        document.getElementById('email').value = restoredData['emailAddress'];
        document.getElementById('phone').value = restoredData['phoneNum'];
        document.getElementById('password').value = restoredData['savePassword'];
    }
}

export function restoreAvailability() {
    let restoredData = JSON.parse(window.localStorage.getItem("availabilityState"));
    if (restoredData) {
        document.getElementById('timezone').value = restoredData['zone'];
        if (restoredData['avail'] !== {}) {
            return restoredData['avail'];
        } else {
            let availability = {};
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

            return availability;
        }
    } else {
        let availability = {};
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

        return availability;
    }
}

export function clearState() {

    // delete the saved state
    window.localStorage.removeItem('availabilityState');
    document.getElementById('timezone').value = '';

    let availability = {};
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

    return availability;
}
