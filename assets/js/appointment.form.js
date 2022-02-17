
(function($) {
    'use strict';
    // Get the form.
    var form = $('#appointment-form');

    // Get the messages div.
    var formMessages = $('#appointment-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        console.log(grecaptcha.getResponse())
        if(grecaptcha.getResponse() == "")
        {
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');
            $(formMessages).text("You can\'t leave Captcha Code empty");
            return false;
        }

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#appointment_name, #appointment_email, #appointment_phone, #appointment_message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

})(jQuery);
