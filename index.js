function attachEventListener() {
    let count = 0
    document.getElementById('clickme').addEventListener('click', function xyz() {
    console.log('Button Clicked', ++count)
    })
}
attachEventListener()

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM has loaded')
});
