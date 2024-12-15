<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
</head>
<body>
    {{-- @include('components.header') --}}
    <div class="main-content">
        @include('components.sidebar')
        <div class="content-containter">
            @yield('content')
        </div>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>