$(document).ready(function() {
	Notification.requestPermission().then(function(permission) {
		if (permission === 'granted') {
			console.log('allowed Notification');
		} else if (permission === 'denied') {
			console.log('denied Notification');
		}
	});
//				let notification = new Notification('状态更新提醒', {
//				body : '你的朋友圈有3条新状态，快去查看吧',
//				tag : 'linxin',
//				icon : 'http://blog.gdfengshuo.com/images/avatar.jpg',
//				requireInteraction : true
//			});
	
	$(".main_body_contents_div:nth-child(1)").removeClass("d-none");
	function hashChanged(hashObj) {
		var newhash = hashObj.newURL.split('#')[1];
		var oldhash = hashObj.oldURL.split('#')[1];
		
		if (newhash == 'Question_List') {
			$(".main_body_contents_div").addClass("d-none");
			$(".main_body_contents_div:nth-child(1)").removeClass("d-none");
		} else if (newhash == 'Question') {
			$(".main_body_contents_div").addClass("d-none");
			$(".main_body_contents_div:nth-child(2)").removeClass("d-none");
		} else if (newhash == 'Album') {
			$(".main_body_contents_div").addClass("d-none");
			$(".main_body_contents_div:nth-child(3)").removeClass("d-none");
		} else if (newhash == 'Zone') {
			$(".main_body_contents_div").addClass("d-none");
			$(".main_body_contents_div:nth-child(4)").removeClass("d-none");
		} else {
			// Invalid Request
		}

	}
	window.onhashchange = hashChanged;

	$('#main_body_tabs a').click(function() {
		console.log(arguments)
		$('#main_body_tabs a').removeClass("active");
		$(this).addClass("active");
	});

	function submitAjax(params, type, async) {
		$ajax({
			'url' : '',
			'type' : 'post'
		});
	}
});