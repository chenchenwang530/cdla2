var config = {
    style: 'mapbox://styles/chenchenw/clsl3w5ny00af01pycs71dneu',
    accessToken: 'pk.eyJ1IjoiY2hlbmNoZW53IiwiYSI6ImNsczE3dDAyaTA5bnkya3Bhamo0Y2o4dDIifQ.CnXVMzvTNS18aclLuPzuqg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Stadiums in Singapore',
    subtitle: 'Accessbility to Neighbourhood Stadiums',
    byline: 'by Chenchen',
    footer: 'Source: data.gov.sg, Realis, HDB, SportSG. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Active living is becoming a trend',
            image: 'images/Singapore active living.png',
            description: 'Singapore neighborhood sports stadiums promote active living by offering accessible spaces for sports, fitness activities, and community events. These hubs encourage residents to lead healthy lifestyles and foster social connections within their local communities. A total of 15 neighourhood stadiums are identified (excluding national scale stadium and stadiums within education institutes and military camp).',
            
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'stadiums-4zq5s5',
                     opacity: 1,
                     duration: 5000
                 },
                 {
                    layer: 'settlement-subdivision-label',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'buffer-ring-46077r',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'hdb-8nlbtl',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'private-6mf4vn',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'data-driven-circles',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'mrt-0k1k2g',
                    opacity: 0,
                    duration: 5000
                }
            ],
            onChapterExit: [
                 {
                     layer: 'stadiums-4z5s5',
                     opacity: 0
                 },
                 {
                    layer: 'settlement-subdivision-label',
                    opacity: 0
                },
                {
                    layer: 'buffer-ring-46077r',
                    opacity: 0
                },
                {
                    layer: 'hdb-8nlbtl',
                    opacity: 0
                },
                {
                    layer: 'private-6mf4vn',
                    opacity: 0
                },
                {
                    layer: 'data-driven-circles',
                    opacity: 0
                },
                {
                    layer: 'mrt-0k1k2g',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Housing near Stadiums',
            image: 'images/10mins buffer.png',
            description: 'SportSG aims for sports facilities to be accessible within 10 minutes of walking (approx 800 meters). Both public (blue) and private (purple) housings surrounding the stadiums are captured for every 200 meters. Neighbourhood stadiums are generally located near to MRT stations (black)  and public housings. ',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'stadiums-4zq5s5',
                    opacity: 1,
                    duration: 5000
                },
                {
                   layer: 'settlement-subdivision-label',
                   opacity: 1,
                   duration: 5000
               },
               {
                   layer: 'buffer-ring-46077r',
                   opacity: 1,
                   duration: 5000
               },
               {
                   layer: 'hdb-8nlbtl',
                   opacity: 1,
                   duration: 5000
               },
               {
                   layer: 'private-6mf4vn',
                   opacity: 1,
                   duration: 5000
               },
               {
                   layer: 'data-driven-circles',
                   opacity: 0,
                   duration: 5000
               },
               {
                   layer: 'mrt-0k1k2g',
                   opacity: 1,
                   duration: 5000
               }
            ],
            onChapterExit: [
                {
                    layer: 'stadiums-4z5s5',
                    opacity: 0
                },
                {
                   layer: 'settlement-subdivision-label',
                   opacity: 0
               },
               {
                   layer: 'buffer-ring-46077r',
                   opacity: 0
               },
               {
                   layer: 'hdb-8nlbtl',
                   opacity: 0
               },
               {
                   layer: 'private-6mf4vn',
                   opacity: 0
               },
               {
                   layer: 'data-driven-circles',
                   opacity: 0
               },
               {
                   layer: 'mrt-0k1k2g',
                   opacity: 0
               }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Housing Price near Stadiums',
            image: 'images/Singapore house price heatmap.png',
            description: 'HDB resale prices near stadiums conform with the overall public housing prices distribution in Singapore, where it is the highest in the Central area. The disparity in housing prices mainly attributed by its locations, rather than the accessibility to stadiums as amenities.',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'stadiums-4zq5s5',
                    opacity: 1,
                    duration: 5000
                },
                {
                   layer: 'settlement-subdivision-label',
                   opacity: 1,
                   duration: 5000
               },
               {
                   layer: 'buffer-ring-46077r',
                   opacity: 0,
                   duration: 5000
               },
               {
                   layer: 'hdb-8nlbtl',
                   opacity: 0,
                   duration: 5000
               },
               {
                   layer: 'private-6mf4vn',
                   opacity: 0,
                   duration: 5000
               },
               {
                   layer: 'data-driven-circles',
                   opacity: 1,
                   duration: 5000
               },
               {
                   layer: 'mrt-0k1k2g',
                   opacity: 1,
                   duration: 5000
               }
            ],
            onChapterExit: [
                {
                    layer: 'stadiums-4z5s5',
                    opacity: 0
                },
                {
                   layer: 'settlement-subdivision-label',
                   opacity: 0
               },
               {
                   layer: 'buffer-ring-46077r',
                   opacity: 0
               },
               {
                   layer: 'hdb-8nlbtl',
                   opacity: 0
               },
               {
                   layer: 'private-6mf4vn',
                   opacity: 0
               },
               {
                   layer: 'data-driven-circles',
                   opacity: 0
               },
               {
                   layer: 'mrt-0k1k2g',
                   opacity: 0
               }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Stadiums near My House',
            image: 'images/woodlands-stadium-activesg-188924.jpeg',
            description: 'Woodlands being the second largest region and most densed residential towns in Singapore, it is equipped with large-scale amenities to serve the local community. It could be observed that most of the housing near stadiums are public housing, and easily accessible by MRT station (within 800 meter buffer).',
            location: {
                center: [103.78079, 1.43470],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                             {
                     layer: 'stadiums-4zq5s5',
                     opacity: 1,
                     duration: 5000
                 },
                 {
                    layer: 'settlement-subdivision-label',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'buffer-ring-46077r',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'hdb-8nlbtl',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'private-6mf4vn',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'data-driven-circles',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'mrt-0k1k2g',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'stadiums-4z5s5',
                    opacity: 0
                },
                {
                   layer: 'settlement-subdivision-label',
                   opacity: 0
               },
               {
                   layer: 'buffer-ring-46077r',
                   opacity: 0
               },
               {
                   layer: 'hdb-8nlbtl',
                   opacity: 0
               },
               {
                   layer: 'private-6mf4vn',
                   opacity: 0
               },
               {
                   layer: 'data-driven-circles',
                   opacity: 0
               },
               {
                   layer: 'mrt-0k1k2g',
                   opacity: 0
               }
            ]
        }
    ]
};
