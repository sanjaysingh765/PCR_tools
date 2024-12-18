document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const fileContent = document.getElementById('inputText');

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0]; // Get the first selected file
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const content = e.target.result;
                fileContent.value = content; // Display the file content in the textarea
            };

            reader.onerror = function() {
                fileContent.value = 'Error reading file';
            };

            reader.readAsText(file); // Read the file as text
        }
    });
});
