// 手写深拷贝

function deepclone(obj) {
	// 不是对象或数组直接返回
	if (typeof obj !== 'object' || obj === null) {
		return obj
	}

	// 初始化返回结果
	let result
	if (obj instanceof Array) {
		result = []
	} else {
		result = {}
	}

	for(let key in obj) {
		if (obj.hasOwnProperty(key)) {
			result[key] = deepclone(obj[key])
		}
	}

	return result 
}