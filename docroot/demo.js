var request = new XMLHttpRequest();
request.open("GET", '/map-types/rivm-nl-municipalities.example.csv', false);
request.send(null);

var dataset = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
    $data = jsonObject[i].split(',');
    dataset.push([$data[0], parseFloat($data[1])]);
}

console.log(dataset);


Highcharts.mapChart('container', {
    chart: {
        map: 'rivm-nl-municipalities'
    },

    title: {
        text: 'test map'
    },

    subtitle: {
        text: 'test subtitle'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: dataset,
        joinBy: ['gemnr', 'hc-key'],
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
