if (document.getElementById('chat_overview')) {
    (function () {

        var delay = 1500,
            $messages = document.getElementsByClassName('chat_message'),
            $inner = document.getElementsByClassName('inner')[0],
            messagesHeight = 0;

        for (var l = 0; l < $messages.length; l++) {
            messagesHeight += $messages[l].offsetHeight;
        }

        $inner.style.bottom = ($inner.offsetHeight - messagesHeight) / 2 + "px";

        function set_chat_message_bottom(i) {
            setTimeout(function () {
                var $moment = document.getElementsByClassName('show'),
                    $parent = document.getElementsByClassName('inner')[0];

                for (var k = 0; k < $moment.length; k++) {
                    $moment[k].classList.remove('active');
                }

                $messages[i].classList.add('active');

                for (var j = 0; j < $moment.length; j++) {
                    var bottom = $parent.offsetHeight - $moment[j].offsetTop - $moment[j].offsetHeight;

                    $moment[j].style.bottom = bottom + $messages[i].offsetHeight + "px";
                }

                $messages[i].classList.add('show');

            }, delay * (i));
        }

        for (var i = 0; i < $messages.length; i++) {
            set_chat_message_bottom(i);
        }
    }());
}