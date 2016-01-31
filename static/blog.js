var html = "";
for (var i = 0; i < t_c_blogs.length; i++) {
    var div = "<div class='t_c_blog'>";
    div += "<img src='https://api.tumblr.com/v2/blog/" + t_c_blogs[i] + ".tumblr.com/avatar/128'>";
    div += "<a class='t_c_blog_link' href='http://" + t_c_blogs[i] + ".tumblr.com' target='_blank'>" + t_c_blogs[i] + "</a>"
    div +="</div>";
    html += div;
}
document.getElementById("t_c_blog_list").innerHTML = html;
