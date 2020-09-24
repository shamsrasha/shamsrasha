mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbXNyYXNoYSIsImEiOiJja2FwaGdyOXoxMDV4MndxdDVxYXE4enRpIn0.k-_GRKXgbo28HuuCqlMDYg';


//add USA assets as inline geojson
var usa = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      //edit
      coordinates: [38.6189067, 33.5061516]
    },
    properties: {
      title: 'Al Tanf Outpost',
      description: 'A small garrison outpost for US forces and their Syrian / Kurdish allies. Setup in 2016 by the U.S. initially to train allies in countering ISIS forces, but has since pivoted to subverting Iran’s transportation of materiel into Syria and Lebanon. The area is administered by a 55km deconflicion zone due to its proximity to Iranian-backed bases.',
      image: '<img src="Images/Al Tanf Garrison Outpost.png", width="100%" >'
    },
  }]
};

//add iran assets as inline geojson
var iran = {
  type: 'FeatureCollection',
  features: [
  { //1
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [36.50716, 33.40516]
    },
    properties: {
      title: '"The Glass House"',
      description: 'Known as the Glass House, this structure was originally built as a hotel to serve Damascus International Airport, which sits next to it. But in 2014, it began operating as HQ for Iranian forces in Syria. Israeli airstrikes leveled the main building and Iranian forces are said to have moved their major operational center to the T-4 / Altyas military airport location.',
      image: '<img src="Images/The Glass House.png", width="100%" >'
    },
  },
  { //2
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [37.3747, 34.3121]
    },
    properties: {
      title: 'T-4 / Altyas Airport Base',
      description: 'Also known as Althias Airport, this location is said to be the HQ of Iranian military for operations inside Syria after the targetting  by Israeli airforce of old HQ at “The Glass House” near Damascus International Airport.',
      image: '<img src="Images/T4 Althius Base.png", width="100%" >'
    },
  },
  { //3
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [37.174722, 36.059278]
    },
    properties: {
      title: 'Mount Azzan Base',
      description: 'The main Iranian miltiary base in Aleppo province since 2015, shortly after it was recaptured by Assad forces from Syrian rebels. IRGC forces oversea operations of Iranian-backed militia in the region, including: Lebanese Hizbollah, Iraqi Nujaba Movement, the Afghan Fatimiyoun Brigade and the Palestinian Jeruslam Brigade.',
      image: '<img src="Images/Mount Azzan Base.png", width="100%" >'
    },
  },
  { //4
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [40.5033594, 34.2407697]
    },
    properties: {
      title: 'Imam Ali Military Base',
      description: 'Possibly the first major underground Iranian military base to be constructed from scratch inside Syria, this base was built in 2015 and continues to be fortified despite periodic aistrikes by Israel. It is operated by Quds Forces and connected by road to the Iranian-run T4 / Altyas Airport base in the western parts of Syria, making it a vital transportation point for personnel and materiel from Iran, Iraq and other mercenary recruitment centers like in Afghanistan.',
      image: '<img src="Images/Imam Ali Base by ISI.png", width="100%" >'
    },
  },
  { //5
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [37.221929, 33.690518]
    },
    properties: {
      title: 'Al Seen Military Airport',
      description: 'This base is suspected of overseeing Iranian-backed militia known to operate in Syria’s southern provinces. These militia include: Iranian Jaafari Forces, Lebanese Hizbollah, Syrian Baqer militia, Afghan Fatimid Brigade as well as Iraqi militias of Sayed al Shuhada, Abu Fadel Abbas and Abdal Movement.',
      image: '<img src="Images/Al Seen Military Airport.png", width="100%" >'
    },
    
  },
  { //6
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [36.235388, 33.384943]
    },
    properties: {
      title: 'Kiswah Military Base',
      description: 'Considered a major operational center for Iranian militia in Syria’s southern provinces. Includes underground bunkers.',
      image: '<img src="Images/Kiswa 1.png", width="100%" >'
    },

  },
  { //7
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [36.57277, 34.56888]
    },
    properties: {
      title: 'Al Qusair Military Base',
      description: 'Situated near the Lebanese border, this Hizbollah miltiary base serves as an operational center for Hizbollah forces inside Syria as well as a liaison point with Iranian forces throughout Syria.',
      image: '<img src="Images/Qusair Military Base.png", width="100%" >'
    },
    
  },
  { //8
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [36.89805, 34.50115]
      },
      properties: {
        title: 'Shayrat Base',
        description: 'Serves as a forward operating base for Iranian materiel and personnel in support of Iranian-backed militia in Syria’s central provinces.',
        image: '<img src="Images/Shayrat Airport Base.png", width="100%" >'
      },

  },
  { //9
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [36.7662128, 35.2019402]
      },
      properties: {
        title: 'Jabal Zein al Abidin Base',
        description: 'An Iranian military and communications outpost. It sits next to a Shia shrine 600 meters above sea level, and is said to house a joint-operational room between Syrian forces and the IRGC.',
        image: '<img src="Images/jabal zein al din Iranian outpost.png", width="100%" >'
      },
      
  },  
  { //10
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [36.7744344, 35.040541]
    },
    properties: {
      title: 'Mount Maerin Military Base',
      description: 'An Iranian miltiary base that is said to be almost entirely underground.',
      image: '<img src="Images/jabal meirin.png", width="100%" >'
    },
  }
]
};

//add Russian assets as inline geojson
var russia = {
  type: 'FeatureCollection',
  features: [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [35.9454589, 35.4086437]
    },
    properties: {
      title: 'Hmeimim Air Base',
      description: 'A Russian military outpost also known as Khmeimim Air Base.',
      image: '<img src="Images/Hmeimem.png", width="100%" >'
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [35.8866517, 34.8959276]
    },
    properties: {
      title: 'Tartus',
      description: 'The only Russian Navy base in the Mediterranean.',
      image: '<img src="Images/Tartous Russia Navy.png", width="100%" >'
    },
  }]
};



//Next Add the map and set the location of the zoom
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shamsrasha/ckcawuvxl3j591iqv7w9zirpg',
    zoom: 6.1,
    center: [38.997, 34.853],
    scrollZoom: false,
    doubleclickZoom: false,
    boxZoom: false,
    dragPan: false,
});


// add USA markers to map
usa.features.forEach(function(_marker_usa) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker_usa';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(_marker_usa.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({}) // add popups
    .setHTML('<h3>' + _marker_usa.properties.title + '</h3><p>' + _marker_usa.properties.description + '</p>'+ '<img>' + _marker_usa.properties.image + '</img>'))
    .addTo(map);
});


//Repeat the code for adding other markers  

// add Iran markers to map
iran.features.forEach(function(_marker_iran) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker_iran';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(_marker_iran.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({}) // add popups
    .setHTML('<h3>' + _marker_iran.properties.title + '</h3><p>' + _marker_iran.properties.description + '</p>'+ '<img>' + _marker_iran.properties.image + '</img>'))
    .addTo(map);
});

// add Russia markers to map
russia.features.forEach(function(_marker_russia) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker_russia';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(_marker_russia.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({}) // add popups
    .setHTML('<h3>' + _marker_russia.properties.title + '</h3><p>' + _marker_russia.properties.description + '</p>'+ '<img>' + _marker_russia.properties.image + '</img>'))
    .addTo(map);
});





  