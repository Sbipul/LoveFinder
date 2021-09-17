const seeResult = () => {
    let name1 = document.getElementById('name1');
    let name1name = name1.value
    let name2 = document.getElementById('name2');
    let name2name = name2.value;

    if (name1.value.trim() == '' || name2.value.trim() == '') {
        name1.style.border = '1px solid red';
        name2.style.border = '1px solid red';
        alert('Please fii input field first')
        document.getElementById('result').textContent = '';
    } else {
        name1.style.border = '1px solid green';
        name2.style.border = '1px solid green';
        const parentDiv = document.getElementById('result');
        document.getElementById('result').textContent = '';
        const div = document.createElement('div');
        div.classList.add('congrats')
        let lovePerc = parseInt(Math.random() * 100);
        div.innerHTML = `
        <h5 class="text-light">Your name is : <span>${name1name}</span></h5>
        <h5 class="text-light">Your dear's name is : <span>${name2name}</span></h5>
        <h4 class="text-light">Your dear's loves you : <span class="fs-3 text-light">${lovePerc}</span>%</h4>
        <h6 class="text-light">Advice : <span id="advc" class=""></span></h6>
        `
        parentDiv.appendChild(div);
        if (lovePerc < 50) {
            document.querySelector('.congrats').style.backgroundImage = "none";
            document.getElementById('advc').classList.add('text-danger');
            document.getElementById('advc').innerHTML = "Its better to let your dear's go.";
        } else {
            document.getElementById('advc').innerHTML = "Its quite good";
            document.getElementById('advc').classList.add('text-success');
            document.querySelector('.congrats').style.backgroundImage = "url('../img/congrats.gif')"
        }
        name1.value = ''
        name2.value = ''
    }
}


