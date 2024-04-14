import './style.css'

function transformTest() {
  function translateBox(box: HTMLElement) {
    box.style.transform = "translateX(100%)"
  }
  
  function runBoxAnimation(box: HTMLElement) {
    box.style.animationPlayState = "running";
  }

  const box1 = document.getElementById('box1')!;
  const box2 = document.getElementById('box2')!;
  const box3 = document.getElementById('box3')!;
  const box4 = document.getElementById('box4')!;

  box1.addEventListener('click', () => translateBox(box1));
  box2.addEventListener('click', () => translateBox(box2));
  box3.addEventListener('click', () => runBoxAnimation(box3));
  box4.addEventListener('click', () => runBoxAnimation(box4));
}

function leftTest() {
  function toLeftBox(box: HTMLElement) {
    box.style.left = "400px"
  }
  
  function runBoxAnimation(box: HTMLElement) {
    box.style.animationPlayState = "running";
  }

  const box5 = document.getElementById('box5')!;
  const box6 = document.getElementById('box6')!;
  const box7 = document.getElementById('box7')!;
  const box8 = document.getElementById('box8')!;

  box5.addEventListener('click', () => toLeftBox(box5));
  box6.addEventListener('click', () => toLeftBox(box6));
  box7.addEventListener('click', () => runBoxAnimation(box7));
  box8.addEventListener('click', () => runBoxAnimation(box8));
}

transformTest();
leftTest();