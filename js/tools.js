/*Load Main view*/
$enterButton = $("#pageEnterButton");
$enterButton.on('click', function(){
    $elementHidden = $(".elementHidden");
    $header = $("header");
    $footer = $('footer');
    $enterButton.addClass("elementHidden");
    $header.animate({height:'12vh'},1000);
    $elementHidden.removeClass("elementHidden");
    $footer.animate({height: '5vh'},1000);
});

 /*Load sidebar*/

$(function(){
    $('#switcher a').click(function(e){
        e.parentDefoult();
        var rel = $(this).data('rel');
        $('#tabs div').hide();
        $('#tabs div').each(function(){
            var actualTab = $(this).data('tab');
            if (actualTab == rel){
                $(this).show();
            }
        });
    });
});

function myFunction(event) { 
    var x = event.target;
    document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
}


$dreamListBtn = $("#dreamListBtn");
$dreamListBtn.on('click', function(){
	$dreamList = $('.dreamList');
	$dreamList.toggleClass("hidePanel");
	resizePanel();
})

$taskListBtn = $("#taskListBtn");
$taskListBtn.on('click', function(){
	$taskList = $('.taskList');
	$taskList.toggleClass("hidePanel");
	resizePanel();
})

$todayTasksBtn = $("#todayTasksBtn");
$todayTasksBtn.on('click', function(){
	$todayTasks = $('.todayTasks');
	$todayTasks.toggleClass("hidePanel");
	resizePanel();
})

$importantBtn = $("#importantBtn");
$importantBtn.on('click', function(){
	$importantDates = $('.importantDates');
	$importantDates.toggleClass("hidePanel");
	console.log("done!")
	resizePanel();
})

/*Change panel size*/

function resizePanel(){
	var hiddenPanels = $(".hidePanel");
	console.log(hiddenPanels.length)
	$myBoard = $("#myBoard");
	if (hiddenPanels.length === 3){
		$myBoard.removeClass().addClass("panel col-md-10");
	} else if (hiddenPanels.length === 2) {
		$myBoard.removeClass().addClass("panel col-md-8");
	} else if (hiddenPanels.length === 1){
		$myBoard.removeClass().addClass("panel col-md-6");
	} else if (hiddenPanels.length === 0){
		$myBoard.removeClass().addClass("panel col-md-4");
	} else {
		$myBoard.removeClass().addClass("panel col-md-12")
	};
	};
