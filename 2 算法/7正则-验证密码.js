/*
PS:下面看下正则表达式 \w \s \d \b
. 匹配除换行符以外的任意字符
\w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'。
\s 匹配任意的空白符
\d 匹配数字
\b 匹配单词的开始或结束
^ 匹配字符串的开始
$ 匹配字符串的结束
\w能不能匹配汉字要视你的操作系统和你的应用环境而定
*/

/*
!!高级搜索
g	全局搜索。
i	不区分大小写搜索。
m	多行搜索。
s	允许 . 匹配换行符。
u	使用unicode码的模式进行匹配。
y	执行“粘性(sticky)”搜索,匹配从目标字符串的当前位置开始。
*/
// **密码**长度 6-12 位，由数字、小写字符和大写字母,下划线组成，但必须包括数字和英文。
const  test=(txt)=>{
  // write code here
  const reg = new RegExp('(?=.*\\d)(?=.*[a-zA-Z_])^\\w{6,12}$','ig');
  // 注意，使用实例化的方法时，需要将字符串内会被转义的内容特殊处理
  // !!最好还是直接使用 /../g的形式进行书写
  // return /(?=.*\d)(?=.*[a-zA-Z_])^\w{6,12}$/.test(txt);
  return reg.test(txt)
}
const txt='yyy1234567'
// const txt='123456Az'
console.log(test(txt));