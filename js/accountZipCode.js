function openZipSearch() {
	new daum.Postcode({
		oncomplete: function(data) {
			$('.additional_table input[name="zipCode"]').val(data.zonecode); // 우편번호 (5자리)
			$('.additional_table input[name="addressCode"]').val(data.address);
            $('.additional_table input[name="addressDetailCode"]').val(data.buildingName).focus();
        },
        
        theme: {
            searchBgColor: "#e20601", //검색창 배경색
            queryTextColor: "#FFFFFF", //검색창 글자색
        },

    }).open();
    
}