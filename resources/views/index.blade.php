<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    {{-- <meta name="viewport" content="width=device-width, initial-scale=1"> --}}
    {{-- <meta name="viewport" content="minimum-scale=1"> --}}
    <meta name="viewport" content="width=device-width, minimum-scale=1">
    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>
    <div class="header">

    </div>
    <h2>Hey check out my new post!</h2>
    <h3 class="title">{{ $data["post_title"] }}</h3>
    <div class="content">
        <img class="image" src="{{ $data['post_image'] }}" />
    </div>
    <div class="summary-container">
        <p class="summary yellow">{{ $data["post_summary"] }}</p>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>