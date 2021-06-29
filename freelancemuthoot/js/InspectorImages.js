
$(document).ready(function () {
    $(document).on('click', '#SaveContact', function (event) {

        var msg = $('#msg').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var name = $('#name').val();
        if (name === "" || name === null) {
            $("#NameSpan").text("Please enter name");
            $("#NameSpan").focus();
            $("#EmailSpan").text("");
            $("#PhoneSpan").text("");
            $("#MsgSpan").text("");
            return false;
        }
        else {
            $("#NameSpan").text("");
        }
        if (email === "" || email === null) {
            $("#EmailSpan").text("Please enter email");
            $("#EmailSpan").focus();
            $("#NameSpan").text();
            $("#PhoneSpan").text("");
            $("#MsgSpan").text("");
            return false;
        }
        else {
            $("#EmailSpan").text("");
        }
        if (phone === null || phone === "") {
            $("#PhoneSpan").text("Please enter phone number");
            $("#PhoneSpan").focus("");
            $("#NameSpan").text();
            $("#EmailSpan").text("");
            $("#MsgSpan").text("");
            return false;
        }
        else {
            $("#PhoneSpan").text("");
        } 

        var data = {
            Name: $("#name").val(),
            Email: $("#email").val(),
            Phone: $("#phone").val(),
            Msg: $("#msg").val()
        };

        $.ajax({
            type: "POST",
            url: "/Home/SaveContact",
            //data: { Name: name, Email: email, Phone: phone, Msg: msg },
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            //dataType: "json",  
            success: function (data) {
                 alert(data);
                //parent.$("#saveddata").append(data);
                //$('#name').val("");
                //$("#email").val("");
                //$("#phone").val("");
                //$("#msg").val("");
                //$('#myModal').modal('hide');
                //$('#saveddata').html("");
                //$("#saveddata").append(data);
                // alert("Image Added Sucessfully");
                $loader.hide();
            },
            error: function () {
                alert("error");
                // TODO: Show error
            }
        });

    });
});
function ModelpopUp(event) {
    alert("Calling...");
    alert(event);
    var Vehicle_ID = event;
    //var data = {
    //    Vehicle_ID: event
        
    //};
    alert(data);
    $.ajax({
        type: "GET",
        url: "/Home/_VehicleDetails",
        // data: JSON.stringify(data),
        data: { Vehicle_ID: Vehicle_ID },
        //data: JSON.stringify({ Vehicle_ID: Vehicle_ID }),
        contentType: 'application/json; charset=utf-8',
        //dataType: "json",  
        success: function (data) {
            alert(data);
            $loader.hide();
        },
        error: function () {
            alert("error");
            // TODO: Show error
        }
    });
}
