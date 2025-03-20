document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form[data-static-form-name="contact"]');
    const button = form.querySelector('button[type="submit"]');
    const confirmation = document.getElementById('form-confirmation');
    
    
    
    button.addEventListener("click", async (e) => {
      e.preventDefault();

      confirmation.classList.remove('hidden');
      confirmation.scrollIntoView({ behavior: 'smooth' });
  
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const company = form.querySelector("#company").value.trim();
      const message = form.querySelector("#message").value.trim();
  
      const data = { name, email, company, message };
  
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzHxKBk4uJbhCaN6qHc6TpbRltlu9TQxTmOD1pejgAtYD-i4cJs9DvnmafWt7Efql5X/exec', {
          method: "POST",
          mode: "no-cors", // Required for Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        console.log("Form submitted to Google Sheets!");
        
        form.reset();
        
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    });
  });
