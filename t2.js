function fadeIn(){
    return new Promise((resolve) => {
        //create audio
        var audio = new Audio('./PleaseTellMeWhy.mp3');
        audio.load();


        var text = $('.content').text().replace(/^\s+|\s+$/g,'');
        var length = text.length;
        var i = 0;
        var txt;
        var html = [];
        var sp = 4;
        for(;i<length;i+=sp) {
            txt = text.substring(i,i+sp);
            var classes = i === 0 ? 'c animated first-word' : 'c animated';
            html.push('<span class="' + classes + '">' + txt + '</span>');
        }
        $('.content').removeClass('c').html(html.join(''));

        var totalDuration = 0;
        for(i = 0,length = html.length;i<length;i++) {
            !function(i){
                setTimeout(function(){
                    $('.content').find('.animated').eq(i).addClass('fadeIn');
                    $('html, body').animate({
                        scrollTop: $('.content').find('.animated').eq(i).offset().top-100
                    }, 200);
                },i*480);
                totalDuration = i*480;
            }(i);
        }

        audio.play();
        // Resolve the Promise after the fadeIn animation is finished
        setTimeout(() => {
            $('.mask').css('display', 'none');
            resolve();
        }, totalDuration + 480);
    });
   
};



document.querySelector(".content").onclick=  ()=>{
    document.querySelector("#heart").hidden=false
    document.querySelector("body").style.backgroundColor="#542246"
    document.querySelector("#heart").hidden=false
    $('.mask').css('display','block')
     fadeIn()
     
}