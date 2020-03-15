const countrySelect = document.getElementById("country-select");
const cas = document.getElementById("cas")
const mort = document.getElementById("mort")
const gueris = document.getElementById("gueris")
var ctx = document.getElementById('myChart').getContext('2d');
const chart = Chart.Line(ctx, {
    // The type of chart we want to create
    type: 'line',
    data: {
        labels: [],
        datasets: []
    },

    // Configuration options go here
    options: {}
});

function addDataset(label, datas) {
    chart.data.datasets.push(
        {
            label: `Nombre de ${label}`,
            borderColor: 'rgb(255, 99, 132)',
            data: datas,
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    }]
                }
            }
        }
    )
}

function addData(dates, datas, selectedCountry, selectedProvince) {

    chart.data.labels = dates;
    console.log("datas", datas)
    addDataset("confirmed", datas.confirmed)
    addDataset("death", datas.death)
    addDataset("recovered", datas.recovered)
    chart.update();
}

function removeData() {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}



document.addEventListener("DOMContentLoaded", function () {
    generateChart()
    updateData()

});
function changedCountry() {
    const selected = countrySelect.value.split(";")
    updateData(selected[0], selected[1])
}

function getAll(datas) {
    console.log("all", datas)
    const confirmedHistory = Object.keys(datas.confirmed.locations[0].history)
    const totalConfirmed = confirmedHistory.map(currentHistory => {
        console.log("history", currentHistory)
        return datas.confirmed.locations.reduce((tempsTotal, currentLocation) => {
            return parseInt(tempsTotal) + parseInt(currentLocation.history[currentHistory])
        }, 0)
    })
    const deathHistory = Object.keys(datas.confirmed.locations[0].history)
    const totalDeath = deathHistory.map(currentHistory => {
        console.log("history", currentHistory)
        return datas.deaths.locations.reduce((tempsTotal, currentLocation) => {
            return parseInt(tempsTotal) + parseInt(currentLocation.history[currentHistory])
        }, 0)
    })

    const RecoveredHistory = Object.keys(datas.confirmed.locations[0].history)
    const totalRecovered = RecoveredHistory.map(currentHistory => {
        console.log("history", currentHistory)
        return datas.recovered.locations.reduce((tempsTotal, currentLocation) => {
            return parseInt(tempsTotal) + parseInt(currentLocation.history[currentHistory])
        }, 0)
    })
    console.log("total", totalConfirmed)
    console.log("total", totalDeath)
    console.log("total", totalRecovered)
    return {
        confirmed: totalConfirmed,
        death: totalDeath,
        recovered: totalRecovered

    }
}

function getByCountry(datas, selectedCountry, selectedProvince) {
    console.log("all", datas)
    const confirmedLocation = datas.confirmed.locations.find(currentLocation => {
        return currentLocation.country === selectedCountry && currentLocation.province === selectedProvince
    })
    console.log("confirmedLocation", confirmedLocation)
    const confirmedHistory = Object.keys(confirmedLocation.history)

    const totalConfirmed = confirmedHistory.map(currentHistory => {
        return parseInt(confirmedLocation.history[currentHistory])
    })

    const deathLocation = datas.deaths.locations.find(currentLocation => {
        return currentLocation.country === selectedCountry && currentLocation.province === selectedProvince
    })
    const deathHistory = Object.keys(deathLocation.history)

    const totalDeath = deathHistory.map(currentHistory => {
        return parseInt(deathLocation.history[currentHistory])
    })


    const recoverdLocation = datas.recovered.locations.find(currentLocation => {
        return currentLocation.country === selectedCountry && currentLocation.province === selectedProvince
    })
    const recoveredHistory = Object.keys(recoverdLocation.history)

    const totalRecovered = recoveredHistory.map(currentHistory => {
        return parseInt(recoverdLocation.history[currentHistory])
    })

    console.log("total", totalConfirmed)
    console.log("total", totalDeath)
    console.log("total", totalRecovered)
    return {
        confirmed: totalConfirmed,
        death: totalDeath,
        recovered: totalRecovered
    }
}

function updateData(selectedCountry = "", selectedProvince = "") {
    cas.innerHTML = "..."
    mort.innerHTML = "..."
    gueris.innerHTML = "..."
    axios.get('https://coronavirus-tracker-api.herokuapp.com/all')
        .then(function (response) {
            response.data.confirmed.locations.forEach(location => {
                var option = document.createElement("option");
                option.text = location.country + " - " + location.province;
                option.value = location.country + ";" + location.province;
                countrySelect.add(option);
            });
            const dates = Object.keys(response.data.confirmed.locations[0].history)

            const gotdatas = selectedCountry == "" && selectedProvince == "" ? getAll(response.data) : getByCountry(response.data, selectedCountry, selectedProvince)

            removeData()
            addData(dates, gotdatas, selectedCountry, selectedProvince)
            anime({
                targets: cas,
                innerHTML: [0, gotdatas.confirmed.reduce((total, current) => total + current)],
                round: 1,
                easing: 'easeInSine',
                duration: 2000
            });
            anime({
                targets: mort,
                innerHTML: [0, gotdatas.death.reduce((total, current) => total + current)],
                round: 1,
                easing: 'easeInSine',
                duration: 2000

            });
            anime({
                targets: gueris,
                innerHTML: [0, gotdatas.recovered.reduce((total, current) => total + current)],
                round: 1,
                easing: 'easeInSine',
                duration: 2000
            });
        })
}


function generateChart() {

}