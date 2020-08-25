var word = [
   {
	   Area: 'TW', City: [
		  { CName: '臺北市', EName: 'Taipei' },
	      { CName: '宜蘭縣', EName: 'Yilan' },
		  { CName: '嘉義縣', EName: 'Chiayi' },
		  { CName: '臺東縣', EName: 'Taitung' },
		  { CName: '臺中市', EName: 'Taichung' },
		  { CName: '花蓮縣', EName: 'Taichung' },
		  { CName: '澎湖縣', EName: 'Taichung' },
		  { CName: '金門縣', EName: 'Taichung' },
		  { CName: '連江縣', EName: 'Taichung' },
		  { CName: '新北市', EName: 'Taichung' },
		  { CName: '桃園市', EName: 'Taichung' },
		  { CName: '臺南市', EName: 'Taichung' },
		  { CName: '高雄市', EName: 'Taichung' },
		  { CName: '基隆市', EName: 'Taichung' },
		  { CName: '新竹縣', EName: 'Taichung' },
		  { CName: '新竹市', EName: 'Taichung' },
		  { CName: '苗栗縣', EName: 'Taichung' },
		  { CName: '彰化縣', EName: 'Taichung' },
		  { CName: '南投縣', EName: 'Taichung' },
		  { CName: '雲林縣', EName: 'Taichung' },
		  { CName: '嘉義縣', EName: 'Taichung' },
		  { CName: '屏東縣', EName: 'Taichung' },

	   ]
   }
];
var WeekForcastUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?';

var WeekChinese={
	"Mon":"一",
	"Tue":"二",
	"Wed":"三",
	"Thu":"四",
	"Fri":"五",
	"Sat":"六",
	"Sun":"日"
}


var weather_con = {
	"01":["https://ucarecdn.com/15a2b873-a703-4a62-b150-b195ee26b6a6/","晴天"],
	"02":["https://ucarecdn.com/15a2b873-a703-4a62-b150-b195ee26b6a6/","晴天"],
	"03":["https://ucarecdn.com/84290631-e5c5-44c4-a4aa-00949deece0c/","多雲"],
	"04":["https://ucarecdn.com/84290631-e5c5-44c4-a4aa-00949deece0c/","多雲"],
	"05":["https://ucarecdn.com/84290631-e5c5-44c4-a4aa-00949deece0c/","多雲"],
	"06":["https://ucarecdn.com/84290631-e5c5-44c4-a4aa-00949deece0c/","多雲"],
	"06":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"07":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"08":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"09":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"10":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"11":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"12":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"13":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"14":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"15":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"16":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"17":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"],
	"18":["https://ucarecdn.com/6771b2c0-6550-49c4-8d66-4afbb7cecc6c/","雨天"]
}