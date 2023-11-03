
$(document).ready(function () {
    // Make the potato parts draggable
    $(".part").draggable({ containment: "#cont" });
    

    $("#dragButton").click(function () {
       
        $(".part").draggable("enable");
    });

    $("#dropButton").click(function () {
        $(".part").draggable("disable");
    });


    $("#saveButton").click(function () {

        //temporarily hides buttons while taking picture 
        $("#dragButton").hide();
        $("#dropButton").hide();
        $("#saveButton").hide();


        html2canvas(document.querySelector("#cont")).then(canvas => {
            document.body.appendChild(canvas)
            var imgData = canvas.toDataURL('image/png');
            var a = document.createElement('a');
            a.href = imgData;
            a.download = 'potato_head.png';
            a.click();

            //gets rid of picture in canvas and brings back buttons
            document.body.removeChild(canvas);
            $("#dragButton").show();
            $("#dropButton").show();
            $("#saveButton").show();


        });
    
    });

    $("#revertButton").click(function () {

        $("#body").animate({ top: 100, left: 75})
        $("#eyes").animate({ top: 120, left: 600})
        $("#nose").animate({ top: 220, left: 600})
        $("#mouth").animate({ top: 360, left: 600})
        $("#ears").animate({ top: 500, left: 550})
        $("#eyebrows").animate({ top: 65, left: 635})
        $("#hat").animate({ top: -40, left: 600})










    })

});

