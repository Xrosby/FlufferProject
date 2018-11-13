$(document).ready(function () {
    console.log("Works")

    $('#send-button').on('click', function () {


        let name = $('#input-name').val();
        let number = $('#input-number').val();
        let streetname = $('#input-street-name').val();

        let message = name + ' vil gerne gøres hård. Ring til ham på ' + number + ', eller kom til ' + streetname;

        let url = 'https://platform.clickatell.com/messages/http/send?apiKey=Me8n5IHUSh6Az66fjifvhg==&to=4551949609&content=' + message;

        $.ajax({
            url: url,
            success: function () {
                alert('Beskeden blev sendt. Lasse kontakter dig hurtigst muligt!');
            }
        });

    })



})
