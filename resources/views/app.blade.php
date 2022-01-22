<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{asset('css/app.css')}}" rel="stylesheet"/>
    <title>Bitspace education</title>
</head>
<body>
    <div id="root"></div>
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>