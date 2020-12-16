// Loads external data.
var request = new XMLHttpRequest();
request.open("GET", 'https://raw.githubusercontent.com/batigolix/dummy-content/main/corona-patienten.csv', false);
request.send(null);

// Prepares 2 data arrays.
var new_data = new Array();
var old_data = new Array();

// Converts CSV text to array.
var jsonObject = request.responseText.split(/\r?\n|\r/);

// Removes first row from array.
jsonObject.shift();

// Assigns CSV array values to data arrays.
for (var i = 0; i < jsonObject.length; i++) {
    $data = jsonObject[i].split(';');
    new_data.push([$data[0], parseFloat($data[1])]);
    old_data.push([$data[0], parseFloat($data[2])]);
}

// console.log(new_data);
// console.log(old_data);

Highcharts.setOptions({
    colors: ['#FFB612', '#42145F'],
});

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'GGD Meldinqen positief geteste personen per dag'
    },
    subtitle: {
        text: 'Bron: RIVM'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -90,
        },
        title: {
            text: 'GGD-meldingsdatum',
        },
        tickInterval: 10,
        plotBands: [{
            color: '#FCFFC5',
            from: 200,
            to: 300
        }]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Aantal'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
        enabled: false,
    },
    series: [
        {
            name: 'Nieuw',
            data: new_data,
        },
        {
        name: 'Tot en met vorige week',
        data: old_data,
    },
    ],
});0




// Highcharts.chart('container', {
//
//     chart: {
//         type: 'areaspline',
//     },
//     title: {
//         text: 'July temperatures'
//     },
//
//     xAxis: {
//         type: 'datetime',
//         accessibility: {
//             rangeDescription: 'Range: Jul 1st 2009 to Jul 31st 2009.'
//         },
//         plotBands: [{ // visualize the weekend
//             from: 1248739200000,
//             to: 2248739200000,
//             color: 'rgba(68, 170, 213, .2)'
//         }]
//     },
//
//     yAxis: {
//         title: {
//             text: null
//         }
//     },
//
//     tooltip: {
//         crosshairs: true,
//         shared: true,
//         valueSuffix: '°C'
//     },
//     plotOptions: {
//         areaspline: {
//             fillOpacity: 0.5
//         }
//     },
//
//     series: [{
//         name: 'Temperature',
//         data: averages,
//         zIndex: 1,
//         marker: {
//             fillColor: 'white',
//             lineWidth: 2,
//             lineColor: Highcharts.getOptions().colors[0]
//         }
//     }, {
//         name: 'Range',
//         data: ranges,
//         type: 'arearange',
//         lineWidth: 0,
//         linkedTo: ':previous',
//         color: Highcharts.getOptions().colors[0],
//         fillOpacity: 0.3,
//         zIndex: 0,
//         marker: {
//             enabled: false
//         }
//     }]
// });