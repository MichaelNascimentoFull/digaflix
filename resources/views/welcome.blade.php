<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="{{ url('assets/camera_video_icon.icon') }}">
    
    <title>Digaflix</title>
    
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <app-component></app-component>
    </div>
    
    <script src="/js/app.js"></script>
</body>

</html>