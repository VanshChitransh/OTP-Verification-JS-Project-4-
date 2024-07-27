document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".input-field input");
    const button = document.querySelector("button");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = input.value;
            const nextInput = input.nextElementSibling;
            const prevInput = input.previousElementSibling;

            if (value.length > 1) {
                input.value = value.slice(0, 1);
            }

            if (value && nextInput) {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }

            if (!value && prevInput) {
                input.setAttribute("disabled", "true");
                prevInput.focus();
            }

            button.disabled = !Array.from(inputs).every((input) => input.value);
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !input.value && input.previousElementSibling) {
                input.previousElementSibling.focus();
            }
        });
    });

    inputs[0].focus();
});
