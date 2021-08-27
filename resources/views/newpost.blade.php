<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <!-- {{-- <meta name="viewport" content="width=device-width, initial-scale=1"> --}} -->
    <!-- {{-- <meta name="viewport" content="minimum-scale=1"> --}} -->
    <meta name="viewport" content="width=device-width, minimum-scale=1">
    <title>New Post</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <!-- <link href="/public/css/styles.css" rel="stylesheet"> -->
    <!-- <link rel="stylesheet" href="{{ asset('css/styles.css') }}"> -->
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap" rel="stylesheet">

    <!-- <link rel="stylesheet" href="{{ mix('/css/app.css') }}" > -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap');

        .header {
            background-color: #2385d3;
            height: 100px;
            width: 100%;
        }
        .title {
            text-align: center;
            font-family: Mulish, sans-serif;
        }
        .content {
            position: relative;
            justify-content:center;
            border:1px solid red;
        }
        .image {
            object-fit: cover;
            max-width: 400px;
            height: 300px;
            top:0;
            position: absolute;
            left:50%;
            transform: translateX(-50%);
        }
        .summary-container {
            max-width: 400px;
        }
        .read-more-button {
            background-color:#d28e4a;
            color:#fff;
            padding:20px;
            border:none;
        }
        .button-container {
            display: flex;
            justify-content:center;
        }
    </style>

</head>

<body>
    <div class="header">
        <p>Hitching Horizons</p>
    </div>
    <h2 style="text-align: center;">Hey check out my new post!</h2>
    <h3 class="title">{{ $data["post_title"] }}</h3>
    <div class="content">
        <img class="image" src="{{ $data['post_image'] }}" />
    </div>
    <div class="summary-container">
        <p class="summary">{{ $data["post_summary"] }}</p>
    </div>
    <div class="button-container"><button class="read-more-button">Read More</button></div>
</body>

</html>