// 手写 Bind

Function.prototype.myBind = function() {
	// 将参数拆解为数组
	const args = Array.prototype.slice.call(arguments)
	// 获取 this
	const t = args.shift()
	// fn.bind(...) 中的 fn
	const self = this
	// 返回一个函数
	return function() {
		return self.apply(t, args)  
	}
}

function fn1(a, b, c) {
	console.log('this', this)
	console.log(a, b, c)
	return 'this is fn1'
}

const fn2 = fn1.myBind({ name: 'xialuo'}, 10, 20, 30)
const a = fn2()

