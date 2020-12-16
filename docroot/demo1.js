// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['nl-fr', 303],
    ['nl-gr', 219],
    ['nl-fl', 625],
    ['nl-ze', 245],
    ['nl-nh', 260],
    ['nl-zh', 171],
    ['nl-dr', 9],
    ['nl-ge', 39],
    ['nl-li', 6],
    ['nl-ov', 25],
    ['nl-nb', 114],
    ['nl-ut', 16]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/nl/nl-all'
    },

    title: {
        text: 'Windmolens 2019'
    },

    subtitle: {
        text: 'Kaart: <a href="http://code.highcharts.com/mapdata/countries/nl/nl-all.js">Highcharts</a>. Data: CBS'
    },

    credits: {
        text: '(c) Finalist 2020'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    legend: {
        title: {
            text: 'Aantal opgestelde windmolens',
            style: {
                color: 'black'
            }
        },
        align: 'left',
        verticalAlign: 'top',
        floating: true,
        layout: 'vertical',
        valueDecimals: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        symbolRadius: 5,
        symbolHeight: 24,
        symbolWidth: 24,
        itemMarginBottom: 12,
        itemMarginTop: 12
    },

    colorAxis: {
        min: null,
        min: 0,
        minColor: '#E6E7E8',
        maxColor: '#005645',
        dataClasses: [{
            to: 25
        }, {
            from: 25,
            to: 100,
        }, {
            from: 100,
            to: 200
        }, {
            from: 200,
            to: 400
        }, {
            from: 400,
            to: 600
        }, {
            from: 600
        }]
    },

    series: [{
        data: data,
        name: 'Aantal opgestelde windmolens',
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
