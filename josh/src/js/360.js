$(document).ready(function(){
    var viewer = PhotoSphereViewer({
        container: 'vrview',
        panorama: 'images/360/hotelroom.jpg',
        time_anim:false,
        size:{width: 700, height: 500},
        default_fov:179,
        markers:[
            {
                id:'marker-for-canyon',
                circle:40,
                x:100,
                y:600,
                tooltip: {
                    content: 'Click to change image',
                    position: 'right bottom'
                }
            },
            {
                id:'Bonjour',
                html: '<b>bonjour</b>',
                anchor: 'bottom right',
                style: {
                    color: 'black',
                    fontSize: '20px',
                    fontFamily: 'Helvetica, sans-serif',
                    textAlign: 'center'
                },
                latitude: -3,
                longitude: 0.5
            },
            {
                id: 'Swan Hotel',
                longitude: 8.99810,
                latitude: 0.09770,
                image:  'img/swanhotel.png',
                width: 255,
                height: 64,
                anchor: 'bottom center',
            },
            {
                id: 'Jagged Edge',
                longitude: 9.99810,
                latitude: 0.09770,
                image:  'img/jaggededge.png',
                width: 290,
                height: 43,
                anchor: 'bottom center',
            },
            {
                id: 'Price List',
                longitude: 6.99810,
                latitude: -0.05770,
                image:  'img/pricelist.jpeg',
                width: 75,
                height: 100,
                anchor: 'bottom center',
                tooltip: 'Price list... <b>Click me!</b>'
            }
        ],
        navbar: [
            'zoom',
            'markers',
            {
                id: 'my-button',
                title: 'Hello world',
                className: 'custom-button',
                content: 'Marker',
                onClick: function() {
                    viewer.gotoMarker('marker-for-canyon',1000)
                }
            },

            'caption',
            'fullscreen'
        ]
    });

    viewer.on('select-marker', function(marker, dblclick) {
        if(marker.id == 'marker-for-canyon'){
            viewer.setPanorama('img/canyon.jpg')
        }
    });
})
