document.addEventListener("DOMContentLoaded", function() {
    // Create header element
    var header = document.createElement("header");

    // Create navigation element
    var nav = document.createElement("nav");
    
    // Create the logo element
    var logo = document.createElement("img");
    logo.classList.add("logo-image");
    logo.src = "static/images/logo_icon.png";
    logo.alt = "Logo";
    nav.appendChild(logo); // Append logo to the nav bar

    // Create the heading element
    var heading = document.createElement("li");
    heading.classList.add("logo-heading"); // Add class 'logo-heading' to target heading
    heading.textContent = "OMS";
    nav.appendChild(heading); // Append heading to the nav bar

    // Create an unordered list for navigation items
    var ul = document.createElement("ul");

    // Define navigation items
    var navItems = [
        { text: "Home", href: "#" },
        { text: "About", href: "#about" },
        { text: "Contact", href: "#contact" },
        { text: "Login", href: "#" },
        { text: "Signup", href: "#" }
    ];

    // Loop through navigation items and create list elements
    navItems.forEach(function(item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = item.text;
        a.href = item.href;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Append the list to the navigation
    nav.appendChild(ul);

    // Append the navigation to the header
    header.appendChild(nav);

    // Insert the header at the top of the body
    document.body.insertBefore(header, document.body.firstChild);
});
