const body = document.querySelector("body");
function makeSnowflake() {
    if (!body) return;
    const snowflake = document.createElement("div");
    const delay = Math.random() * 10;
    const initialOpacity = Math.random();
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = initialOpacity;
    body.appendChild(snowflake);
}
makeSnowflake();
for (let i = 0; i < 50; i++) {
    makeSnowflake();
}
