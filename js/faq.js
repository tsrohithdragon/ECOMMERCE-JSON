'use strict'
$('.box').on('click',function()
{
    console.log('good');
    $(this).children('.addData').toggleClass('hide');
    $(this).children('.dataBox').children('.btnMore').toggleClass('iconHidder');
    $(this).children('.dataBox').children('.btnMore2').toggleClass('iconHidder');
});
// flag buttons//

var flags=document.querySelector('.flag');
$('#india').click(function()
{
    $('.flag').attr("src","source/india.png");
    $('#dropdownMenuButton1').html("india");
});
$('#russia').click(function()
{
    $('.flag').attr("src","source/russia.png");
    $('#dropdownMenuButton1').html("Russia");
});
$('#japan').click(function()
{
    $('.flag').attr("src","source/japan.png");
    $('#dropdownMenuButton1').html("Japan");
});
$('#usa').click(function()
{
    $('.flag').attr("src","source/usa.png");
    $('#dropdownMenuButton1').html("Usa");
});


