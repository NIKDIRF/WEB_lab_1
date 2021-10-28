document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    let x;
    let y;
    let r;


    let reset = 1;
    let ready = 1;
    $(function () {

        if (ready === 1) {
            $.ajax({
                url: 'php/script.php',
                method: 'POST',
                dataType: 'html',
                data: {
                    'isReady': 1,
                },
                success: function (data) {
                    document.getElementById('res-table').innerHTML = document.getElementById('res-table').innerHTML + data;
                    ready = 0;
                }
            });
        }

        $('#reset_button').click(function () {
            $('#xval').removeClass("text-error")
            $('#yval').removeClass("text-error")
            $('#rval').removeClass("text-error")
            $('.y_button').removeClass("error")
            $('y.y_button_1').removeClass('pressed-button')
            $('y.y_button_2').removeClass('pressed-button')
            $('y.y_button_3').removeClass('pressed-button')
            $('y.y_button_4').removeClass('pressed-button')
            $('y.y_button_5').removeClass('pressed-button')
            $('y.y_button_6').removeClass('pressed-button')
            $('y.y_button_7').removeClass('pressed-button')
            $('y.y_button_8').removeClass('pressed-button')
            $('y.y_button_9').removeClass('pressed-button')
            $('.r_button').removeClass("error")
            $('#r_button_1').removeClass('pressed-button')
            $('#r_button_2').removeClass('pressed-button')
            $('#r_button_3').removeClass('pressed-button')
            $('#r_button_4').removeClass('pressed-button')
            $('#r_button_5').removeClass('pressed-button')
            x = undefined;
            y = undefined;
            r = undefined;

            $.ajax({
                url: 'php/script.php',
                method: 'POST',
                dataType: 'html',
                data: {
                    'reset': 1,
                },
                success: function (data) {
                    document.getElementById("res-table").innerHTML = data;
                }
            });

            window.location.reload();

        })


        $('#submit_button').click(function () {
            let isValidX = validateX(getX());
            let isValidY = validateY(getY());
            let isValidR = validateR(getR());
            if (isValidX && isValidY && isValidR) {

                $.ajax({
                    url: 'php/script.php',
                    type: 'POST',
                    dataType: "html",
                    data: {
                        "x": x,
                        "y": y,
                        "r": r,
                        "time": new Date().getTimezoneOffset()
                    },
                    success: function (data) {
                        document.getElementById("res-table").innerHTML = document.getElementById("res-table").innerHTML + data;
                        ''
                    }
                })

            }
            ;
        })

        $('#y_button_1').click(function () {
            y = -2
            $('#y_button_1').addClass('pressed-button')
            $('#y_button_2').removeClass('pressed-button')
            $('#y_button_3').removeClass('pressed-button')
            $('#y_button_4').removeClass('pressed-button')
            $('#y_button_5').removeClass('pressed-button')
            $('#y_button_6').removeClass('pressed-button')
            $('#y_button_7').removeClass('pressed-button')
            $('#y_button_8').removeClass('pressed-button')
            $('#y_button_9').removeClass('pressed-button')
        })

        $('#y_button_2').click(function () {
            y = -1.5
            $('#y_button_2').addClass('pressed-button')
            $('#y_button_1').removeClass('pressed-button')
            $('#y_button_3').removeClass('pressed-button')
            $('#y_button_4').removeClass('pressed-button')
            $('#y_button_5').removeClass('pressed-button')
            $('#y_button_6').removeClass('pressed-button')
            $('#y_button_7').removeClass('pressed-button')
            $('#y_button_8').removeClass('pressed-button')
            $('#y_button_9').removeClass('pressed-button')
        })

        $('#y_button_3').click(function () {
            y = -1
            $('#y_button_3').addClass('pressed-button')
            $('#y_button_2').removeClass('pressed-button')
            $('#y_button_1').removeClass('pressed-button')
            $('#y_button_4').removeClass('pressed-button')
            $('#y_button_5').removeClass('pressed-button')
            $('#y_button_6').removeClass('pressed-button')
            $('#y_button_7').removeClass('pressed-button')
            $('#y_button_8').removeClass('pressed-button')
            $('#y_button_9').removeClass('pressed-button')
        })

        $('#y_button_4').click(function () {
            y = -0.5
            $('#y_button_4').addClass('pressed-button')
            $('#y_button_2').removeClass('pressed-button')
            $('#y_button_3').removeClass('pressed-button')
            $('#y_button_1').removeClass('pressed-button')
            $('#y_button_5').removeClass('pressed-button')
            $('#y_button_6').removeClass('pressed-button')
            $('#y_button_7').removeClass('pressed-button')
            $('#y_button_8').removeClass('pressed-button')
            $('#y_button_9').removeClass('pressed-button')
        })

        $('#y_button_5').click(function () {
            y = 0
            $('#y_button_5').addClass('pressed-button')
            $('#y_button_2').removeClass('pressed-button')
            $('#y_button_3').removeClass('pressed-button')
            $('#y_button_4').removeClass('pressed-button')
            $('#y_button_1').removeClass('pressed-button')
            $('#y_button_6').removeClass('pressed-button')
            $('#y_button_7').removeClass('pressed-button')
            $('#y_button_8').removeClass('pressed-button')
            $('#y_button_9').removeClass('pressed-button')
        })

        $('#y_button_6').click(function () {
            y = 0.5
            $('#y_button_6').addClass('pressed-button')
            $('#y_button_2').removeClass('pressed-button')
            $('#y_button_3').removeClass('pressed-button')
            $('#y_button_4').removeClass('pressed-button')
            $('#y_button_5').removeClass('pressed-button')
            $('#y_button_1').removeClass('pressed-button')
            $('#y_button_7').removeClass('pressed-button')
            $('#y_button_8').removeClass('pressed-button')
            $('#y_button_9').removeClass('pressed-button')
        })

        $('#y_button_7').click(function () {
            y = 1
            $('#y_button_7').addClass('pressed-button')
            $('#y_button_2').removeClass('pressed-button')
            $('#y_button_3').removeClass('pressed-button')
            $('#y_button_4').removeClass('pressed-button')
            $('#y_button_5').removeClass('pressed-button')
            $('#y_button_6').removeClass('pressed-button')
            $('#y_button_1').removeClass('pressed-button')
            $('#y_button_8').removeClass('pressed-button')
            $('#y_button_9').removeClass('pressed-button')
        })

        $('#y_button_8').click(function () {
            y = 1.5
            $('#y_button_8').addClass('pressed-button')
            $('#y_button_2').removeClass('pressed-button')
            $('#y_button_3').removeClass('pressed-button')
            $('#y_button_4').removeClass('pressed-button')
            $('#y_button_5').removeClass('pressed-button')
            $('#y_button_6').removeClass('pressed-button')
            $('#y_button_7').removeClass('pressed-button')
            $('#y_button_1').removeClass('pressed-button')
            $('#y_button_9').removeClass('pressed-button')
        })

        $('#y_button_9').click(function () {
            y = 2
            $('#y_button_9').addClass('pressed-button')
            $('#y_button_2').removeClass('pressed-button')
            $('#y_button_3').removeClass('pressed-button')
            $('#y_button_4').removeClass('pressed-button')
            $('#y_button_5').removeClass('pressed-button')
            $('#y_button_6').removeClass('pressed-button')
            $('#y_button_7').removeClass('pressed-button')
            $('#y_button_8').removeClass('pressed-button')
            $('#y_button_1').removeClass('pressed-button')
        })

        $('#r_button_1').click(function () {
            r = 1;
            $('#r_button_1').addClass('pressed-button')
            $('#r_button_2').removeClass('pressed-button')
            $('#r_button_3').removeClass('pressed-button')
            $('#r_button_4').removeClass('pressed-button')
            $('#r_button_5').removeClass('pressed-button')
        })

        $('#r_button_2').click(function () {
            r = 2;
            $('#r_button_2').addClass('pressed-button')
            $('#r_button_1').removeClass('pressed-button')
            $('#r_button_3').removeClass('pressed-button')
            $('#r_button_4').removeClass('pressed-button')
            $('#r_button_5').removeClass('pressed-button')
        })

        $('#r_button_3').click(function () {
            r = 3;
            $('#r_button_3').addClass('pressed-button')
            $('#r_button_2').removeClass('pressed-button')
            $('#r_button_1').removeClass('pressed-button')
            $('#r_button_4').removeClass('pressed-button')
            $('#r_button_5').removeClass('pressed-button')
        })

        $('#r_button_4').click(function () {
            r = 4;
            $('#r_button_4').addClass('pressed-button')
            $('#r_button_2').removeClass('pressed-button')
            $('#r_button_3').removeClass('pressed-button')
            $('#r_button_1').removeClass('pressed-button')
            $('#r_button_5').removeClass('pressed-button')
        })

        $('#r_button_5').click(function () {
            r = 5;
            $('#r_button_5').addClass('pressed-button')
            $('#r_button_2').removeClass('pressed-button')
            $('#r_button_3').removeClass('pressed-button')
            $('#r_button_4').removeClass('pressed-button')
            $('#r_button_1').removeClass('pressed-button')
        })


        function validateX(x) {
            var ans = true;
            if (x < -5 || x > 3 || isNaN(parseInt(x))) {
                $('#xval').addClass("text-error")
                ans = false;
            } else {
                $('#xval').removeClass("text-error");
            }
            return ans;
        }

        function validateY(y) {
            var ans = true;
            if (!y in [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2] || isNaN(parseInt(y))) {

                $('.y_button').addClass("error")
                ans = false;
            } else {
                $('.y_button').removeClass("error")
            }
            return ans;
        }

        function validateR(r) {
            var ans = true;
            if (!r in [1, 2, 3, 4, 5] || isNaN(parseInt(r))) {
                $('.r_button').addClass("error");
                ans = false;
            } else {
                $('.r_button').removeClass("error")
            }
            return ans;
        }

        function getX() {
            x = document.getElementById("xval").value;
            return x;
        }

        function getY() {
            return y;
        }

        function getR() {
            return r;
        }

    });
});