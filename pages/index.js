<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <script src="script.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="styles.css" rel="stylesheet">
        <link rel="icon" href="logo.jpg">
        <title>
            Homepage
        </title>
    </head>
    <body class="home">
        <header>
            <nav class="navbar" style="background-color: #e8e8e8;">
                <div class="container-fluid">
                  <a class="navbar-brand" href="index.html#" style="font-size: 28px;">
                    <img src="logo.jpg" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
                    Oli Welbourn - Home
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="snow.html#">Snow</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="rock.html#">Rock</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="air.html#">Air</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        </header>
        <div class="topBanner" style="background-image: url(homepage.JPG)"></div>
        <div class="bio">
          <section class="container">
            <div class="column">
              <h1 id="title">
                Who I Am
              </h1>
              <br>
              <h2>
                My name is Oli, I am just a simple man from Yorkshire. I studied engineering
                at Sheffield University and went on to start a brief career in Mechanical Design.
                I say brief as I've since realised that spending my life locked in an office waiting
                for retirement is no way to live!
              </h2>
              <h2>
                And so..... I decided to make a change. I'm now studying computer science and aim
                to work remotely for the rest of my life. With this I will be able to pursue the activities
                I love: Snowboarding, climbing, and seeing the world! All whilst earning good money, supporting my family, and
                using my brain for something more than pouring pints.
              </h2>
              <h2>
                This webiste will show off the times I've had!
              </h2>
            </div>
            <div class="column">
              <img src="Oli1.jpg" alt="Oli1" class="textImage">
            </div>
          </section>
        </div>
        <footer>
          <div id='footerLogo'>
            <img src="logo.jpg" alt="Logo" width="100" height="100">
          </div>
          <button type="button" class="button" id="home">Home</button>
          <button type="button" class="button" id="snow">Snow</button>
          <button type="button" class="button" id="rock">Rock</button>
          <button type="button" class="button" id="air">Air</button>
        </footer>
    </body>
</html>
