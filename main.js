
function conv()
{
    var val = $("#str").val();
    var res="",ex="";
    for (var i=0; i < val.length; i++)
    {
        ex="";
        var x = val.charCodeAt(i);
        var a=0,b=0;
        do{
            a=Math.floor(x/2);
            b=Math.floor(x%2);
            ex+=b;
            x=a;
        }while(a!=0);
        res += ex + " ";
    }
    $("#ans").text(res);
}

$("button").click(conv);
$("input").change(conv);
