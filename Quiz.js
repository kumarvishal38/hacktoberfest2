<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML CSS JavaScript Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        h1 {
            color: #333;
        }

        button {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>HTML CSS JavaScript Example</h1>
    <p>Click the button to change the text color.</p>
    <button id="changeColorButton">Change Text Color</button>

    <script>
        const button = document.getElementById('changeColorButton');
        const h1 = document.querySelector('h1');
        let isColorChanged = false;

        button.addEventListener('click', () => {
            if (isColorChanged) {
                h1.style.color = '#333';
                isColorChanged = false;
            } else {
                h1.style.color = 'red';
                isColorChanged = true;
            }
        });
    </script>
</body>
</html>
