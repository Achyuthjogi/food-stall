<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stole Menu - Chips & Toppings</title>
    <link rel="stylesheet" href="style.css">
    <!-- Clean, modern, and warm font stack: Oswald, Lora, and Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Lora:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>

    <div class="menu-header">
        <h1>THE STOLE MENU</h1>
        <p class="tagline">Chips & Custom Toppings</p>
    </div>

    <div class="container">

        <section class="menu-section" id="chips-items">
            <h2>🍟 Chips Selection</h2>
            <div class="menu-item" data-price="30">
                <div class="item-details">
                    <span class="item-name">LAYS AMERICAN STYLE</span>
                    <span class="item-description">Classic salted flavor for a true potato chip experience.</span>
                </div>
                <span class="item-price">₹30</span>
            </div>
            <div class="menu-item" data-price="30">
                <div class="item-details">
                    <span class="item-name">PARLE PERI PERI</span>
                    <span class="item-description">Spicy, tangy, and addictive peri peri seasoning.</span>
                </div>
                <span class="item-price">₹30</span>
            </div>
            <div class="menu-item" data-price="30">
                <div class="item-details">
                    <span class="item-name">KUR KURE MASALA</span>
                    <span class="item-description">Crunchy corn puffs with a rich Indian masala blend.</span>
                </div>
                <span class="item-price">₹30</span>
            </div>
            <div class="menu-item" data-price="30">
                <div class="item-details">
                    <span class="item-name">CHILL CHATKA</span>
                    <span class="item-description">A zesty, spicy flavor profile that delivers a kick.</span>
                </div>
                <span class="item-price">₹30</span>
            </div>
        </section>

        <section class="menu-section" id="toppings">
            <h2>🧀 Premium Toppings</h2>
            <div class="menu-item" data-price="35">
                <div class="item-details">
                    <span class="item-name">CHEESE CHUNCH</span>
                    <span class="item-description">Crispy cheese bits for an ultimate textural experience.</span>
                </div>
                <span class="item-price">₹35</span>
            </div>
            <div class="menu-item" data-price="39">
                <div class="item-details">
                    <span class="item-name">CREAMY MAYO FUSION</span>
                    <span class="item-description">Rich mayonnaise blended with herbs and spices.</span>
                </div>
                <span class="item-price">₹39</span>
            </div>
            <div class="menu-item" data-price="49">
                <div class="item-details">
                    <span class="item-name">CORN AND CHEESY DELIGHT</span>
                    <span class="item-description">Sweet, tender corn kernels mixed with melted cheese sauce.</span>
                </div>
                <span class="item-price">₹49</span>
            </div>
            <div class="menu-item" data-price="39">
                <div class="item-details">
                    <span class="item-name">CHATPAT MIX</span>
                    <span class="item-description">Our house blend of tangy spices and crunchy Indian sev.</span>
                </div>
                <span class="item-price">₹39</span>
            </div>
            <div class="menu-item" data-price="69">
                <div class="item-details">
                    <span class="item-name">MEXICAN NACHO</span>
                    <span class="item-description">Jalapeños, salsa spices, and savory cheese dust.</span>
                </div>
                <span class="item-price">₹69</span>
            </div>
        </section>
        
        <section class="menu-section" id="drinks">
            <h2>🥤 Refreshments</h2>
            <div class="menu-item" data-price="15">
                <div class="item-details">
                    <span class="item-name">LEMON JUICE</span>
                    <span class="item-description">Freshly squeezed, chilled, and sweetened to perfection.</span>
                </div>
                <span class="item-price">₹15</span>
            </div>
        </section>

        <footer class="menu-footer">
            <p>Thank you for stopping by! All prices are inclusive of taxes.</p>
        </footer>

    </div>

    <!-- Custom Message Box for interactive feedback -->
    <div id="message-box" class="message-box"></div>
    
    <script src="script.js"></script>
</body>
</html>
