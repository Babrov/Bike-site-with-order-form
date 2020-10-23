$(document).ready(function(){
            //datepicker
    $("#datepicker").datepicker({
        changeMonth:'true',
        changeYear:'true',
    });
    //search autocomplete
    $(function(){
        let freeTags= [
            "Author",
            "Bergamont",
            "Comanche",
            "Cube",
            "Giant",
            "Gt",
            "Ghost",
            "Rainbow",
            "Rock Machine",
            "Trek"
        ];
        $("#tags").autocomplete({
            source:freeTags
        });
    });

    $(".next").on("click",function(){
        let currentImg = $(".active");
        let nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass("active").css("z-index",-10);
            nextImg.addClass("active").css("z-index", 10);

        } else if ($(".img").last()) {
            currentImg.removeClass("active").css("z-index",-10);
            $(".img").eq(0).addClass("active").css("z-index",10);
        }
    });
    $(".prev").on("click",function(){
        let currentImg = $(".active");
        let prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass("active").css("z-index",-10);
            prevImg.addClass("active").css("z-index", 10);
        } else if($(".img").first()) {
            currentImg.removeClass("active").css("z-index",-10);
           $(".img").last().addClass("active").css("z-index",10);
        }
    });
});