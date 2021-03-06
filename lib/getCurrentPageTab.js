var getCurrentPageTab = function(){
	return(
		new Promise(
			function(resolve,reject){
				if(browserType.match(/Firefox/i)){
					browser.tabs.query({currentWindow: true, active: true}).then(
						function(tabs){resolve(tabs[0])},
						function(error){reject("${error}")}
					)
				}
				else if(browserType.match(/Chrome/i)){
					browser.tabs.query(
						{currentWindow: true, active: true},function(tabs){
							resolve(tabs[0])
						}
					)
				}
				else{
					reject("未知的瀏覽器:"+browserType)
				}
			}
		)
	)
}