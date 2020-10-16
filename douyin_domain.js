const cp = require('child_process');
const fs = require('fs');

const zimu = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z");

const result = []
var app = {
	data:{
		result:[]
	},
	onPing(_url) {
    console.log(`正在执行${_url}... `);
    return new Promise((resolve, reject) => {
      const execNow = cp.exec(`ping ${_url}`, {cwd: 'c:/'}, (error) => {
        if (error) {
          console.log(`地址不存在${_url}`);
          resolve({type:"error", url: _url});
          return;
        }
        console.log(`成功执行${_url}`);
        resolve({type:"success", url: _url});
      });
    });
  },
  async init(){
  	const urlArr = [];
  	/* 生成数据 */
  	// for (var i = 0; i < zimu.length; i++) {
	  // 	for (var j = 0; j < 100; j++) {
	  // 		urlArr.push(`v${j}-dy.ixigua.com`)
	  // 	}
  	// }
  	for (var j = 0; j < 100; j++) {
  		urlArr.push(`v${j}-dy.ixigua.com`)
  	}
  	
  	for (var i = 0; i < urlArr.length; i++) {
  		let res = await app.onPing(urlArr[i]);
  		result.push(res);
  	}

  	console.log('这是结果====')
  	console.log(result);
		fs.writeFile("./douyin_domain2.json", JSON.stringify(result, null, 4), function(err) {
		    console.log("生成文件成功");
		});
  }
}

app.init();

// 生成出来的文件过滤error的
// const newArr = arr.filter((item) => {
// 	return item.type === "error"
// });

// // 最后的结果
// console.log(newArr);
