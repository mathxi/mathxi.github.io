document.addEventListener("DOMContentLoaded", function () {
    updateData()

});

function updateData() {
    const cas = document.getElementById("cas")
    const mort = document.getElementById("mort")
    const gueris = document.getElementById("gueris")
    axios.get('https://coronavirus-tracker-api.herokuapp.com/all')
        .then(function (response) {
            const france = response.data.confirmed.locations.find(currentLocation => currentLocation.country == 'France')

            const datesOld = Object.keys(france.history)


            const nbCas = Object.values(france.history)

            const dates = datesOld.map(currentDate => {
                return moment(currentDate, 'MM/DD/YY').format('YYYY-MM-DD')
            })
            const objValues = dates.map((currentDate, i) => {
                return {
                    date: currentDate,
                    cas: nbCas[i]
                }
            })
            const sortedDates = objValues.sort((a, b) => new Date(a.date) - new Date(b.date))
            dateSortedmauvaisFormat = []

            casSorted = []
            sortedDates.forEach(currentDate => {
                dateSortedmauvaisFormat.push(currentDate.date)
                casSorted.push(currentDate.cas)
            })
            const dateSorted = dateSortedmauvaisFormat.map(currentDate=>{
                return moment(currentDate, 'YYYY-MM-DD').format('DD MMM YY')
            })
            generateChart(dateSorted, casSorted)
            anime({
                targets: cas,
                innerHTML: [0, response.data.latest.confirmed],
                round: 1,
                easing: 'easeInSine',
                duration: 2000
            });
            anime({
                targets: mort,
                innerHTML: [0, response.data.latest.deaths],
                round: 1,
                easing: 'easeInSine',
                duration: 2000

            });
            anime({
                targets: gueris,
                innerHTML: [0, response.data.latest.recovered],
                round: 1,
                easing: 'easeInSine',
                duration: 2000
            });
        })
}


function generateChart(dates, nbCas) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dates,
            datasets: [{
                label: 'Nombre de cas en France',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: nbCas,
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
            }]
        },

        // Configuration options go here
        options: {}
    });
}