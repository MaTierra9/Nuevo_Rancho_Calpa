var config = {    
    style: 'mapbox://styles/adnoticias/cmae63g66004101s884694lay',
    accessToken: 'pk.eyJ1IjoiYWRub3RpY2lhcyIsImEiOiJjbWFlNm9vYjAwNDhlMm1wdjI0czdmZHQ0In0.Tqcwo67uQ-pwBK9Xaph8Cg',
    theme: 'adnoticias',
    backgroundImage: 'images/cover page1.png',
    toptitle: 'Publicado el 7 de mayo de 2025',
    title: 'Rancho Palma: Un agujero negro de la Operación Bastión',
    byline: 'Investigación y visualización: Ivan Ortiz',
    description: 'Dos ranchos asegurados en la operación Bastión, en contra de la Familia Michoacana, ya habían sido cateados años atrás; pero se presentaron como recientes. Autoridades mexiquenses y federales no brindaron explicaciones al respecto.',
    footer: '<br> Esta visualización fue creada usando <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a>',
    videoURL: '',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'assets/AD N Logo.svg',
            description: 'A finales de marzo de 2025 autoridades estatales y federales realizaron la Operación Bastión, una serie de cateos en 21 inmuebles presuntamente utilizados por la Nueva Familia Michoacana en el Estado de México. Sin embargo, dos de de estos ranchos, Calpa y Las Piñuelas, fueron asegurados en 2020 y 2022. Así lo revelan informes albergados los Guacamaya Leaks localizados por AD Noticias. Ni la Fiscalía ni el Gobierno Mexiquense ni el Ejército ',
            location: {
                center: [-99.68780, 19.33646],
                zoom: 4.8,
                pitch: 31.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'MunicipiosEdomex',
                //     opacity: 1
                // },
                // {
                //     layer: 'FMMunicipios2020',
                //     opacity: 0
                // },
                // {
                //     layer: 'FMMunicipios2024',
                //     opacity: 0
                // },
                // {
                //     layer: 'ranchos-opb',
                //     opacity: 0
                // },
                // {
                //     layer: 'bases-halconeo-2020',
                //     opacity: 0
                // },
                // {
                //     layer: 'rancho-las-piuelas-p',
                //     opacity: 0
                // },
                // {
                //     layer: 'rancho-calpa-p',
                //     opacity: 0
                // },
                // {
                //     layer: 'ataque-sep-2020',
                //     opacity:0
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'MunicipiosEdomex',
                //     opacity: 1
                // },
                // {
                //     layer: 'FMMunicipios2020',
                //     opacity: 0
                // },
                // {
                //     layer: 'FMMunicipios2024',
                //     opacity: 1
                // },
                // {
                //     layer: 'ranchos-opb',
                //     opacity: 0
                // },
                // {
                //     layer: 'bases-halconeo-2020',
                //     opacity: 0
                // },
                // {
                //     layer: 'rancho-las-piuelas-p',
                //     opacity: 0
                // },
                // {
                //     layer: 'rancho-calpa-p',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'bike_mapping',
            alignment: 'full',
            title: 'DISTRIBUTION OF BIKES EACH BLOCK',
            image: 'images/bike_mapping.png',
            imageCredit: 'Data from NYC Opendata, Census',
            description: 'Subsequently, I employed a similar method to analyze citibikes. In this visualization, I noticed evident gaps in the blocks covered by citibikes within a single day. This suggests that in certain areas, shared bicycles are not as prevalent, indicating potential disparities in access to this mode of transport.',
            location: {
                center: [-74.00619, 40.73926],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                // layer: 'bike_mapping',
                // opacity: 0.8},
            ],
            onChapterExit: [
            //     {
            //     layer: 'bike_mapping',
            //     opacity: 0
            // },
        ]
        },
        
        {
            id: 'subway_mapping',
            alignment: 'full',
            title: 'DISTRIBUTION OF SUBWAY ENTRANCES EACH BLOCK',
            image: 'images/subway_mapping1.png',
            imageCredit: 'Data from NYC Opendata, Census',
            description: 'In contrast to bicycles and taxis, subway exits are fixed in location. Consequently, I adapted my visualization approach to analyze blocks proximate to subway exits. I then compared the number of subway exits contained within each block across different subway lines, providing insights into the distribution and accessibility of these transit points.',
            location: {
                center: [-74.01121, 40.72660],
                zoom: 11,
                pitch: 38,
                bearing: -18
            },
            onChapterEnter: [
                // {
                // layer: 'subway_mapping',
                // opacity: 1.0},
            ],
            onChapterExit: [
            //     {
            //     layer: 'subway_mapping',
            //     opacity: 0
            // },
        ]
        },
        {
            id: 'hex_binning',
            alignment: 'full',
            title: 'STREET VIEW OF UNEQUAL PARTS',
            image: 'images/bus_mapping.png',
            imageCredit: 'subway entrances in NYC',
            description: 'The right-hand visualization employs hex-binning to analyze the number of subway exits within each equi-area hexagonal block on Manhattan grid. This approach provides a more granulated perspective on the distribution of subway access points across the borough.',
            location: {
                center: [-74.02110, 40.75685],
                zoom: 12,
                pitch: 38,
                bearing: -18
            },
            onChapterEnter: [
                // {
                // layer: 'hex_binning',
                // opacity: 1.0},
            ],
            onChapterExit: [
            //     {
            //     layer: 'hex_binning',
            //     opacity: 0
            // },
        ]
        },
        
        {
            id: 'MN_105_Mobility1',
            alignment: 'full',
            title: 'MN_105_MOBILITY FROM SUBWAY',
            image: 'images/MN_105_walkingability1.png',
            imageCredit: '<a href="https://www.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page">NYC PLANNING</a>',
            description: 'The second phase of my data analysis focus on two Manhattan neighborhoods that perhaps epitomize equity and disparity respectively: MN_105 and MN_109. In the right-hand visualization focusing on MN_105, I delved into the mobility linked to subway entrances based on a 10-minute walking life circle. Additionally, the median income of each NYC block is overlaid as a reference. The buildings visualization presented above was manipulated in Rhino and Grasshopper to display the proximity of three-dimensional structures to subway entrances. A deeper shade indicates a higher concentration of nearby subways.',
            location: {
                center: [-73.98769, 40.75736],
                zoom: 15,
                pitch: 47,
                bearing: 29
            },
            onChapterEnter: [
                // {
                //     layer: 'medianIncome',
                //     opacity: 0.8
                // },
                // {
                //     layer: 'MN_105_mobility1',
                //     opacity: 1.0
                // },
                // {
                //     layer: 'Subway_Entrances',
                //     opacity: 1.0
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'MN_105_mobility1',
                //     opacity: 0
                // },
                // {
                //     layer: 'medianIncome',
                //     opacity: 0.0
                // },
            ]
        },
        {
            id: 'MN_105_Mobility_2',
            alignment: 'full',
            title: 'MN_105_O-D ANALYSIS:PLAZAS TO SUBWAY LINE1',
            image: 'images/MN_105_O-D of POI.png',
            imageCredit: '<a href="https://www.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page">NYC PLANNING</a>',
            description: 'More Specifically, I endeavored to associate specific types of Points of Interest (POIs) within this block with particular subway lines to assess the mobility from these designated spaces to that specific subway line. In this project, I opted for plazas as the chosen POI category and Line 1 as the specific subway line for analysis. This approach offers insights into how easily accessible these plazas are from the Line 1 subway stations, potentially informing urban planning and transportation strategies.The visualization depicted in the above figure represents the number of different subway line varieties within a 10-minute walking destination of each building. This provides a quantifiable measure of how interconnected a building is in terms of subway accessibility, offering insights into the transportation convenience for its occupants.',
            location: {
                center: [-73.98769, 40.75736],
                zoom: 15,
                pitch: 47,
                bearing: 29
            },
            onChapterEnter: [
                // {
                //     layer: 'medianIncome',
                //     opacity: 0.8
                // },
                // {
                //     layer: 'MN_105_mobility2',
                //     opacity: 1.0
                // },
                // {
                //     layer: 'MN_105_POI',
                //     opacity: 1.0
                // },
            ],
            onChapterExit: [
                // {
                //     layer: 'medianIncome',
                //     opacity: 0.0
                // },
                // {
                //     layer: 'MN_105_mobility2',
                //     opacity: 0
                // },
                // {
                //     layer: 'MN_105_POI',
                //     opacity: 0
                // },
            ]
        },
        {
            id: 'MN_109_Mobility1',
            alignment: 'full',
            title: 'MN_109_MOBILITY FROM SUBWAY',
            image: 'images/MN_109_Walkingability1.png',
            imageCredit: '<a href="https://www.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page">MAP PLUTO</a>',
            description: "Subsequently, the previous two distinct analyses were adapted to the MN_109 block. In the visualization process, I endeavored to maintain a consistent visual appearance with the previous block. However, this necessitated a scale-down of the data. For instance, buildings in the MN_105 block that are within a 10-minute walk of 20 subway exits correspond to just 5 exits in the MN_109 block. This stark difference underscores the inequity in subway line distribution between these two regions.",
            location: {
                center: [-73.96166, 40.81531],
                zoom: 15,
                pitch: 53,
                bearing: 28
            },
            onChapterEnter: [
                // {
                //     layer: 'medianIncome',
                //     opacity: 0.8
                // },
                // {
                //     layer: 'MN_109_mobility1',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'medianIncome',
                //     opacity: 0.0
                // },
                // {
                //     layer: 'MN_109_mobility1',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'MN_109_Mobility2',
            alignment: 'full',
            title: 'MN_109_O-D ANALYSIS:PLAZAS TO SUBWAY LINE1',
            image: 'images/MN_109_O-D_POI.png',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: "The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.",
            location: {
                center: [-73.96166, 40.81531],
                zoom: 15,
                pitch: 53,
                bearing: 28
            },
            onChapterEnter: [
                // {
                //     layer: 'medianIncome',
                //     opacity: 0.8
                // },
                // {
                //     layer: 'MN_109_mobility2',
                //     opacity: 1
                // },
                // {
                //     layer: 'MN_109_POI',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'medianIncome',
                //     opacity: 0.0
                // },
                // {
                //     layer: 'MN_109_mobility2',
                //     opacity: 0
                // },
                // {
                //     layer: 'MN_109_POI',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'bus_mapping',
            alignment: 'full',
            title: 'STREET VIEW BASED ON VISUALIZATION',
            image: 'images/street_view_photos.png',
            imageCredit: 'Street Static View From Google',
            description: 'I hope that the analyses presented above will provide valuable insights and experiences for my future endeavors in designing and enhancing urban design. For instance, by extracting street view images from areas with distinct colors from the bus stop shelters heatmap, I aim to discern whether there exist any commonalities or differences between them. Do these disparities symbolize inequality? How can design be employed to ameliorate such issues? Exploring these questions will be the focal point of my future interests.',
            location: {
                center: [-74.00619, 40.73926],
                zoom: 10.55,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                // layer: 'bus_mapping',
                // opacity: 1.0},
            ],
            onChapterExit: [
            //     {
            //     layer: 'bus_mapping',
            //     opacity: 0
            // },
        ]
        },

    ]
};