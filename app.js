$(".add-task").on("keyup", function(e){
    // 13 means enter button
    if(e.keyCode == 13 && $(".add-task").val() != ""){
        let task = $("<div class='task'></div>").text($('.add-task').val());

        let delBtn = $("<i class='fas fa-trash-alt'></i>").click(function(){
            let p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            })
        });

        let checkBtn = $("<i class='fas fa-check'></i>").click(function(){
            let p = $(this).parent();
            p.fadeOut(function(){
                $('.completed').append(p);
                p.fadeIn();
            });
            $(this).remove();
        });

        task.append(delBtn,checkBtn);
        $('.not-completed').append(task);
        // clear the text
        $('.add-task').val("");
    } 
})