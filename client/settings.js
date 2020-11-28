'use strict';

window.addEventListener("load", async function () {
    let table = document.getElementById("tableID");
    let availability = [];
    const responseViewSettings = await fetch('/settings/view');
    const responseViewData = responseViewSettings.ok ? await responseViewSettings.json() : [];

    if (responseViewData.length !== 0) {
        document.getElementById('timezone').value = responseViewData[0].timezone;
        document.getElementById('phone').value = responseViewData[0].phone;

        if (responseViewData[0].availability !== null) {
            availability = responseViewData[0].availability;
        } else {
            availability = [
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ];
        }
    } else {
        availability = [
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        ];
    }

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 24; j++) {
            if (availability[i][j] === true) {
                table.rows[j + 1].cells[i + 1].className = "cell";
            }
        }
    }

    if (table !== null) {
        for (let i = 1; i < table.rows.length; i++) {
            for (let j = 1; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].classList.add("cell-selected");
                table.rows[i].cells[j].onclick = function () {
                    if ((this.className === "cell") || (this.className === "cell cell-selected")) {
                        this.classList.remove("cell");
                        this.className = "cell-selected";
                        availability[j - 1][i - 1] = false;

                    } else if (this.className === "cell-selected") {
                        this.className = "cell";
                        this.classList.remove("cell-selected");
                        availability[j - 1][i - 1] = true;
                    }
                };
            }
        }
    }

    document.getElementById('submit').addEventListener('click', async () => {
        const zone = document.getElementById('timezone').value;
        const userPhone = document.getElementById('phone').value;

        const settingsResponse = await fetch('/settings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                timezone: zone,
                availability: availability,
                phone: userPhone
            })
        });

        if (!settingsResponse.ok) {
            console.error("Could not save availability to the server.");
        } else {
            console.log("User availability updated.");
        }

    }); //end of submit

    document.getElementById('clear').addEventListener('click', () => {
        document.getElementById('timezone').value = '';
        document.getElementById('phone').value = '';

        availability = [
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        ];

        for (let i = 1; i < table.rows.length - 1; i++) {
            for (let j = 1; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].classList.remove("cell");
                table.rows[i].cells[j].className = ("cell-selected");
            }
        }
    });

});

