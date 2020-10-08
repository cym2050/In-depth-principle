// 手写 Ajax
const ajax(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open("GET", url)
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 ) {
					resolve(JSON.parse(xhr.responseText))
				} else {
					reject(new Error(''))
				}
			}
		}
		xhr.send()
	})
}
ajax('url').then(res => console.log(res))