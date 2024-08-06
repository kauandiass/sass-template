function compileSCSS() {
    var sass = new Sass('cdn_modules/sass.js@0.11.1/sass.worker.min.js');
    $('link[rel="scss"]').each(function() {
        var href = $(this).attr('href');
        $.ajax({
            url: href,
            dataType: 'text'
        }).then(function(data) {
            sass.compile(data, function(result) {
            $('#css').html(result.text || '');
            console.log(result)
            });
        });
    });
}

compileSCSS()