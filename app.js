const body = document.querySelector("body");
function makeSnowflake() {
    if (!body) return;
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    body.appendChild(snowflake);
}
makeSnowflake();
for (let i = 0; i < 50; i++) {
    makeSnowflake();
}
