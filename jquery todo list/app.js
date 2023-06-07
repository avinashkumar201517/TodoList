

$('#inp').keypress(function(e){
    if(e.which===13){
        const listItems=$(this).val();
        $('#list').append(`<li><span><i class="fa-solid fa-trash"></i></span>${listItems}</li>`);
      $(this).val('');
    }

})
$('#list').on('click','li',function(){
    $(this).toggleClass('connected')
})
$('#list').on('click','span',function(e){

    $(this).parent().fadeOut(600,function(){
        $(this).remove();
       
    })
    e.stopProagation()
})
$('#plus').click(function(){
    $('#inp').fadeToggle()
})
