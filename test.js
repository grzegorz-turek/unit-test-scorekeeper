<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <style>
.inv {
    display: none;
}
    </style>
    <body>
        <select id="target">
            <option value="">Select...</option>
            <option value="content_1">Option 1</option>
            <option value="content_2">Option 2</option>
            <option value="content_3">Option 3</option>
        <select>

        <div id="content_1" class="inv">Content 1</div>
        <div id="content_2" class="inv">Content 2</div>
        <div id="content_3" class="inv">Content 3</div>

        <script>
            document
                .getElementById('target')
                .addEventListener('change', function () {
                    'use strict';
                    var vis = document.querySelector('.vis'),   
                        target = document.getElementById(this.value);
                    if (vis !== null) {
                        vis.className = 'inv';
                    }
                    if (target !== null ) {
                        target.className = 'vis';
                    }
            });
        </script>

<!-- NEXT SCRIPT -->

        <div class="size">
            <a href="">blahblah</a>
            <a href="">blahblah</a>
        </div>

        <script>
            $(document).ready(function() {

                $(".size a").on('click', function() {
                    $('.size a.checked').not(this).removeClass('checked');
                    $(this).toggleClass('checked');
                });

            });
        </script>


<!-- NEXT SCRIPT -->

        <ul id="list">
            <li><a class="a1" href="#">Alabama</a></li>
            <li><a class="a2" href="#">Alaska</a></li>
            <li><a class="a3" href="#">Arizona</a></li>
            <li><a class="a4" href="#">Arkansas</a></li>
            <li><a class="a5" href="#">California</a></li>
        </ul>

        <div id="selection">
            <div class="a1">child 1</div>
            <div class="a2">child 2</div>
            <div class="a3">child 3</div>
            <div class="a4">child 4</div>
            <div class="a5">child 5</div>
        </div>

        <script>
            $(document).ready(function() {
                $('#list a').on('click', function(e) {
                    e.preventDefault();

                    //$('#selection').text($(this).text());
                    //$('#selection').toggle();
                    
                    $('#selection').children().toggle();
                });
            });
        </script>

<!-- NEXT SCRIPT -->

        <style>
            .hid {
                display: none;
            }

            .sho {
                display: block;
            }
        </style>

        <ul id="list_01">
            <li><a href="#">Ala 01</a></li>
            <li><a href="#">Ala 02</a></li>
            <li><a href="#">Ala 03</a></li>
            <li><a href="#">Ala 04</a></li>
            <li><a href="#">Ala 05</a></li>
        </ul>


        <div id="content_01" class="sho cont">Lalala 01</div>
        <div id="content_02" class="hid content">Lalala 02</div>
        <div id="content_03" class="hid content">Lalala 03</div>

        <div id='output'></div>

        <!--
        <script>

            var list_01 = document.getElementById('list_01');
            var output = document.getElementById('output');

            list_01.addEventListener('click', (e) => {
                //console.log('working');
                e.preventDefault(); // don't navigate to <a> tag href
                //if (e.target.tagName === 'A') {
                    //output.textContent = e.target.textContent;
                    output.innerHTML = e.target.textContent;

                //}
            });

        </script>
        -->

        <script>
            document
                .getElementById('list_01')
                .addEventListener('click', function () {
                    'use strict';
                    var vis = document.querySelector('.vis'),   
                        target = document.getElementById(this.value);
                    if (vis !== null) {
                        vis.className = 'inv';
                    }
                    if (target !== null ) {
                        target.className = 'vis';
                    }
            });


            function toggleMenu(visible) {
                document.querySelector('.content').classList.toggle('sho', visible);
            }

            document.querySelector('#list_01').addEventListener('click', function(e) {
                e.preventDefault();
                toggleMenu();
            });

        </script>

    </body>

</html>
