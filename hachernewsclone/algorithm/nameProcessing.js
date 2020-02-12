let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjo n:Tornbull;Raphael:Corwill;Alfred:Corwill";

function nameProcessing(str){
//  实现大写
    let uppperStr = s.toUpperCase();
//  根据;截取
    let arr = uppperStr.split(';')
//  获取首字母编码值并比较大小
    for(let i = 0;i < arr.length - 1; i ++){
        for(let j = 0; j < arr.length - 1; j ++){
            if(arr[j].split(":")[1].charCodeAt(0) > arr[j + 1].split(":")[1].charCodeAt(0)){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }else if(arr[j].split(":")[1].charCodeAt(0) === arr[j + 1].split(":")[1].charCodeAt(0)){
                if(arr[j].split(":")[0].charCodeAt(0) > arr[j + 1].split(":")[0].charCodeAt(0)){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    // console.log(arr)
//  交换姓名位置并用括号分割
    let str1 = '';
    for(let i = 0;i < arr.length - 1;i ++){
        str1 +=('(' + arr[i].split(':')[1] + ',' + arr[i].split(':')[0] + ')')
    }
    console.log(str1)
}
nameProcessing();
