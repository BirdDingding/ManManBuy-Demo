$(function () {
    // 数据渲染
    $.ajax({
        url: "http://localhost:9090/api/getbrandtitle",
        success: function (res) {
            var html = template('brandlistTpl',res);
            $('.brand-name').html(html);           
        }
    });

})