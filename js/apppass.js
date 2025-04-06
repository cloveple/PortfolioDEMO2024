
var password = prompt("請輸入你的購買序號","")
if (password=="12-34")
{
alert('已通過，歡迎試用')
location.href='#'
}
else
{
if (password=="null")
{
alert('序號錯誤，請重新輸入');
alert('Welcome!')
location.href='../LD.html'
}
else
if (password!="123")
{
alert('序號錯誤，請重新輸入');
location.href='../LD.html'
}
} 