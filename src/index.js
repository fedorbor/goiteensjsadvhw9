let count = 0;
        const intervalId = setInterval(() => {
            count++;
            console.log(`Повідомлення ${count}`);
            if (count === 5) {
                clearInterval(intervalId);
            }
        }, 1000);
        let score = 0;

        function updateScore() {
            document.getElementById("score").textContent = score;
        }

        function getRandomPosition(max) {
            return Math.floor(Math.random() * max);
        }

        function createClickableSquare() {
            const square = document.createElement("div");
            square.style.width = "50px";
            square.style.height = "50px";
            square.style.backgroundColor = "blue";
            square.style.position = "absolute";
            square.style.top = `${getRandomPosition(400)}px`;
            square.style.left = `${getRandomPosition(400)}px`;
            square.addEventListener("click", () => {
                score++;
                updateScore();
                square.remove();
            });
            document.body.appendChild(square);
        }

        const gameInterval = setInterval(() => {
            createClickableSquare();
        }, 1000);

        // Гра триватиме 20 секунд
        setTimeout(() => {
            clearInterval(gameInterval);
            alert(`Час вийшов! Ваш результат: ${score} очків.`);
        }, 20000);
        function startTimer() {
            const timeInput = document.getElementById("timeInput");
            const timeInSeconds = parseInt(timeInput.value, 10);

            if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
                alert("Будь ласка, введіть додатне число!");
                return;
            }

            setTimeout(() => {
                alert(`Таймер завершено після ${timeInSeconds} секунд!`);
            }, timeInSeconds * 1000);
        }