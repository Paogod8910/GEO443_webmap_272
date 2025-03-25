var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_popAirportlaillink_1 = new ol.format.GeoJSON();
var features_popAirportlaillink_1 = format_popAirportlaillink_1.readFeatures(json_popAirportlaillink_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_popAirportlaillink_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_popAirportlaillink_1.addFeatures(features_popAirportlaillink_1);
var lyr_popAirportlaillink_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_popAirportlaillink_1, 
                style: style_popAirportlaillink_1,
                popuplayertitle: 'popAirportlaillink',
                interactive: true,
                title: '<img src="styles/legend/popAirportlaillink_1.png" /> popAirportlaillink'
            });

lyr_Positron_0.setVisible(true);lyr_popAirportlaillink_1.setVisible(true);
var layersList = [lyr_Positron_0,lyr_popAirportlaillink_1];
lyr_popAirportlaillink_1.set('fieldAliases', {'_id': '_id', 'No.': 'No.', 'Type': 'Type', 'Line': 'Line', 'Station_Code': 'Station_Code', 'Station_Name': 'Station_Name', 'Passenger_Arrival': 'Passenger_Arrival', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'field_10': 'field_10', });
lyr_popAirportlaillink_1.set('fieldImages', {'_id': 'Range', 'No.': 'Range', 'Type': 'TextEdit', 'Line': 'TextEdit', 'Station_Code': 'TextEdit', 'Station_Name': 'TextEdit', 'Passenger_Arrival': 'Range', 'XCOORD': 'TextEdit', 'YCOORD': 'TextEdit', 'field_10': 'TextEdit', });
lyr_popAirportlaillink_1.set('fieldLabels', {'_id': 'no label', 'No.': 'no label', 'Type': 'no label', 'Line': 'no label', 'Station_Code': 'no label', 'Station_Name': 'no label', 'Passenger_Arrival': 'no label', 'XCOORD': 'no label', 'YCOORD': 'no label', 'field_10': 'no label', });
lyr_popAirportlaillink_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});