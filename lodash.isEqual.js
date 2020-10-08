// 手写深度比较

// 判断是不是对象
function isObject(obj) {
	return typeof obj === 'object' && obj !== null
}

// 深度比较
function isEqual(obj1, obj2) {
	// 不是对象直接返回
	if (!isObject(obj1) | !isObject(obj2)) {
		return obj1 === obj2
	}
	// 如果两个对象完全相等
	if (obj1 === obj2) return true
	// 两个都是对象或数组，而且不相等
	//1. 比较属性个数
  const obj1keys = Object.keys(obj1)
  const obj2keys = Object.keys(obj2)
  if (obj1keys.length !== obj2keys.length) return false
  //2. 递归比较
  for (let key in obj1keys) {
  	if (isEqual(obj1[key] !== obj2[key])) {
  		return false
  	}
  }
  return true
}

// 测试

const xialuo = {
	a: 'hello',
	b: {
		c: 'javascript',
		d: 'vue'
	}
}

const dongmei = {
	a: 'hello',
	b: {
		c: 'javascript',
		d: 'vue'
	},
	e: 'yuanhua'
}

console.log(isEqual(xialuo, dongmei))