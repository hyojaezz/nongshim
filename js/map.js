$(window).ready(function() {
    var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.360741, 126.953145),
            level: 3
		};
		var map = new kakao.maps.Map(container, options);

        var markerPosition  = new kakao.maps.LatLng(37.360771, 126.953961); 

        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);
});