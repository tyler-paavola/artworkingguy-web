$(document).ready(function () {

    // process the form
    $('form').submit(function (event) {

        $('.form-group').removeClass('has-error'); // remove the error class
        $('.help-block').remove(); // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=phone]').val(),
            'methodOfContact': $("input[name='methodOfContact']:checked").val(),
            'typeOfService':$('#inputTypeOfService').find(":selected").text(),
            'description': $('#inputDescription').val()
        };

        // process the form
        $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url: '/scripts/process-form.php', // the url where we want to POST
                data: formData, // our data object
                dataType: 'json', // what type of data do we expect back from the server
                encode: true
            })
            // using the done promise callback
            .done(function (data) {

                // log data to the console so we can see
                console.log(data);

                $('#contact-submit').html(data.message);
                $('#contact-submit').attr('disabled', true);
                $('#contact-submit').addClass('complete');

            })

            // using the fail promise callback
            .fail(function (data) {

                // show any errors
                // best to remove for production
                console.log(data);
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
