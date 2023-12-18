function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:')
    if (question === null) {
        document.getElementById('response-text').innerText = 'Looks like you did not enter a question, please ask a question.';
        document.getElementById('response-text').classList = 'display text-danger';
        document.getElementById('response-image').src = 'bad image';
        return;
    }
    if (!question.trim()) {
        alert('Please enter a valid question!');
        return;
    }
    const randomNumber = Math.floor(Math.random()*8)
    let answer, image, color;

    switch(randomNumber){
        case 0:
            answer = "Yes";
            image = "yes-image.jpg";
            color = "text-success";
            break;
        case 1:
            answer = 'It is decidedly so';
            image = "yes-image.jpg";
            color = "text-success";
            break;
        case 2:
            answer = 'Reply hazy try again';
            image = "idk-meaning.jpg";
            color = "text-danger";
            break;
        case 3:
            answer = 'Cannot predict now';
            image = "idk-meaning.jpg";
            color = "text-danger";
            break;
        case 4:
            answer = 'Do not count on it';
            image = "no-image.jpg";
            color = "text-danger";
            break;
        case 5:
            answer = 'My sources say no';
            image = "no-image.jpg";
            color = "text-danger";
            break;
        case 6:
            answer = 'Outlook not so good';
            image = "no-image.jpg";
            color = "text-danger";
            break;
        case 7:
            answer = 'Signs point to yes';
            image = "yes-image.jpg";
            color = "text-success";
            break;
        default:
            break;
    }
    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classlist = `display-4 $(color)`;
    document.getElementById('response-image').src = `img/${image}`
}