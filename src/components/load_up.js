// Function to animate the load_up_img and main_container
function animateImage() {
    const load_up_img = document.getElementById("load_up_img");
    const main_container = document.getElementsByClassName("main_container");

    // Animation for the load_up_img (appear and zoom out)
    load_up_img.style.animation = "appearAndZoomOut 2s forwards";
    
    setTimeout(function () {
        // Hide the load_up_img
        load_up_img.style.display = "none";
        
        document.documentElement.style.setProperty("--display-main", "block")
    }, 2000); // Adjust the delay as needed
}

// Run the animation when the page loads
window.onload = animateImage;