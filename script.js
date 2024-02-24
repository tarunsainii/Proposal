const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const qMark = document.querySelector('#question-mark');
const heart = document.querySelector('#heart');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    qMark.style.display = 'none';
    heart.style.display = 'block';
    question.innerHTML = 'Ma pani timilai maya garchu :)';
});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});