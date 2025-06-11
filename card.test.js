function loadImage(event) {
    const image = document.getElementById("oc-image");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = "block";
}

function downloadCard() {
    const cardContainer = document.getElementById("card-container");
    
    // Convert all textareas into divs before capturing
    document.querySelectorAll("textarea").forEach(textarea => {
        const tempDiv = document.createElement("div");
        tempDiv.textContent = textarea.value;
        tempDiv.style.cssText = `
            width: ${textarea.clientWidth}px;
            height: ${textarea.clientHeight}px;
            font-size: ${window.getComputedStyle(textarea).fontSize};
            font-family: ${window.getComputedStyle(textarea).fontFamily};
            color: ${window.getComputedStyle(textarea).color};
            background: ${window.getComputedStyle(textarea).background};
            border: ${window.getComputedStyle(textarea).border};
            padding: ${window.getComputedStyle(textarea).padding};
            white-space: pre-wrap;
            overflow-wrap: break-word;
            line-height: ${window.getComputedStyle(textarea).lineHeight};
            text-align: ${window.getComputedStyle(textarea).textAlign};
            position: absolute;
            top: ${textarea.offsetTop}px;
            left: ${textarea.offsetLeft}px;
        `;
        tempDiv.className = "temp-text";
        textarea.style.visibility = "hidden"; // Hide textarea
        textarea.parentNode.insertBefore(tempDiv, textarea.nextSibling);
    });

    html2canvas(cardContainer, { useCORS: true }).then(canvas => {
        const link = document.createElement("a");
        link.download = "character-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        
        // Remove temporary divs and restore textareas
        document.querySelectorAll(".temp-text").forEach(div => div.remove());
        document.querySelectorAll("textarea").forEach(textarea => {
            textarea.style.visibility = "visible";
        });
    });
}