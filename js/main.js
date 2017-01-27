$(document).ready(function() {
    var trainingLinks = ["https://www.youtube.com/embed/zjoE-KibMnc",
        "https://www.youtube.com/embed/VPE8P3we2hE",
        "https://www.youtube.com/embed/93nQVtZeXwk",
        "https://www.youtube.com/embed/iiIGerCU5Rg",
        "https://www.youtube.com/embed/Tt4XAZzg0pw",
        "https://www.youtube.com/embed/LoJvqUAmvck",
        "https://www.youtube.com/embed/KGbQfiprj5I",
        "https://www.youtube.com/embed/goHVRvXJbOA",
        "https://www.youtube.com/embed/v3CriQBWZPo",
        "https://www.youtube.com/embed/RWRgZMSNYM0"
    ];

    $('.thumbnail').each(function() {
        $(this).click(function() {
            var idVal = parseInt($(this).attr("id")) - 1;
            $("#youtubeVideo").attr("src", trainingLinks[idVal]);
            $(".hidden").toggleClass("hidden");
            $("#youtubeVideo").contentWindow.focus();
        }); // end click
    }); // end each
}); // end ready
