//第一层for循环控制循环层数
//第二层for循环控制每一层的数量
//现在在控制台可以输出菱形，并且偶数或负数时不执行
function getDiamond( num ){
    let str = '';
    if(num % 2 === 0 || num < 0){
        return null
    }else{
        for(let i = 1;i <= num;i ++){
            let flag = 2 * i - 1;
            if(flag <= num){
                for(let j = 1;j <= (num - flag) / 2 ;j ++){
                    str += ' '
                }
                for(let j = 1;j <= flag;j ++){
                    str += '*'
                }
            }else{
                for(let j = 1;j <= (flag - num) / 2 ;j ++){
                    str += ' '
                }
                for(let k = 1;k <= 2 * num - flag;k ++){
                    str += '*'
                }
            }
            str += '\n'
        }
        console.log(str)
        return str;
    }
}
