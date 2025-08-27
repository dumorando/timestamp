let closems = -1;

async function onclickCopy() {
    await navigator.clipboard.writeText(Date.now());
    closems = Date.now() + 2000;
}

function update() {
    document.getElementById('timestamp').innerHTML = Date.now();

    //show notification if time is still remaining there
    if (closems >= Date.now()) {
        if (!document.getElementById('notification').classList.contains('active')) document.getElementById('notification').classList.add('active');
        document.getElementById('timer').innerHTML = closems - Date.now();
    } else {
        if (document.getElementById('notification').classList.contains('active')) document.getElementById('notification').classList.remove('active');
    }

    requestAnimationFrame(update);
}

update();
document.getElementById('copy').addEventListener('click', onclickCopy);