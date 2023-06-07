<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    <!-- Styles -->
    <link href="{{ asset("deps/sb-admin-2.css") }}" rel="stylesheet">

    @viteReactRefresh
    @vite('resources/js/app.js')
    @vite('resources/css/app.css')

    
</head>
<body id="page-top">

    <!-- Page Wrapper -->
    <div id="root"></div>
    <!-- End of Page Wrapper -->


    <!-- Bootstrap core JavaScript-->
    <script src="{{ asset("deps/jquery/jquery.min.js")}}"></script>
    <script src="{{ asset("deps/bootstrap/js/bootstrap.bundle.min.js")}}"></script>

    <!-- Core plugin JavaScript-->
    <script src="{{ asset("deps/jquery-easing/jquery.easing.min.js")}}"></script>

    <!-- Custom scripts for all pages-->
    <script src="{{ asset("deps/js/sb-admin-2.min.js")}}"></script>



</body>
</html>
