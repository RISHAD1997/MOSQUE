$('button').click(function() {
    if($("h6").text() === $("input").val()){
        window.location.href = 'index.html';
        return false;
    }
    else{
        alert("error")
    }
   
});