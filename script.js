document.addEventListener('DOMContentLoaded', () => {
    console.log('Menu website loaded successfully! Interactivity is live.');

    const messageBox = document.getElementById('message-box');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // --- Message Box Function (Replaces alert()) ---
    const showMessage = (text) => {
        messageBox.textContent = text;
        messageBox.classList.add('visible');

        // Hide the message after 3 seconds
        setTimeout(() => {
            messageBox.classList.remove('visible');
        }, 3000);
    };

    // 1. --- Item Selection & Feedback ---
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('.item-name').textContent;
            
            // Show a stylish, non-blocking message at the bottom of the screen
            showMessage(`"${itemName}" selected! Please order at the counter.`);

            // Subtle feedback effect 
            item.style.boxShadow = '0 0 15px rgba(93, 64, 55, 0.6)'; // Highlight with the primary brown color
            
            // Remove highlight after a short time
            setTimeout(() => {
                // Revert to the original section shadow
                item.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.08)'; 
            }, 400);
        });
    });


    // 2. --- Back to Top button functionality ---
    const backToTopButton = document.createElement('button');
    backToTopButton.setAttribute('id', 'back-to-top');
    backToTopButton.textContent = '↑';
    document.body.appendChild(backToTopButton);

    // Show button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. --- Optional: Smooth Scrolling for internal links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
