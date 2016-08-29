/**
 * Created by amanda on 22/08/16.
 */
$(function() {
    $("#fullPage").click(function() {
        $("#rightWrapper").toggleClass("full-page");
        $("#header").toggleClass("full-page");
    });
})

$(function() {
    $("#listView li").click(function () {
        if ( $("#listView li").hasClass("list-item-active") ) {
            $("#listView li").removeClass("list-item-active");
        }
        $(this).addClass("list-item-active");
    });
});
________________________

startList = function() {
    if (document.all&&document.getElementById) {
        navRoot = document.getElementById("nav");
        for (i=0; i<navRoot.childNodes.length; i++) {
            node = navRoot.childNodes[i];
            if (node.nodeName=="LI") {
                node.onmouseover=function() {
                    this.className+=" over";
                }
                node.onmouseout=function() {
                    this.className=this.className.replace
                    (" over", "");
                }
            }
        }
    }
}
window.onload=startList;