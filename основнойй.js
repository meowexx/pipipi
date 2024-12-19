// Общий JS (common.js)

// Функция для открытия модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Функция для отправки формы
function submitForm(formId, successMessageId) {
    const form = document.getElementById(formId);
    const successMessage = document.getElementById(successMessageId);

    if (form && successMessage) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        });
    }
}

// Функция для показа или скрытия элемента
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

// Пример использования
// Открытие модального окна при клике на кнопку
const openButtons = document.querySelectorAll('[data-open-modal]');
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-open-modal');
        openModal(modalId);
    });
});

// Закрытие модального окна при клике на крестик
const closeButtons = document.querySelectorAll('[data-close-modal]');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-close-modal');
        closeModal(modalId);
    });
});

// Связываем функции с элементами
submitForm('authForm', 'successMessage');

// Функция для отображения сообщения в консоли
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для обновления заголовка H1 из параметров URL
function updateHeaderFromUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const headerElement = document.querySelector('h1');
    if (utmTerm) {
        headerElement.textContent = utmTerm;
    }
}

// Функция для логирования текущего времени
function logCurrentTime() {
    const currentTime = new Date();
    const formattedTime = currentTime.toTimeString().split(' ')[0];
    console.log(formattedTime);
}

// Функция для сброса цвета фона
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Вызовы функций
showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener('DOMContentLoaded', () => {
    resetBackgroundColor();
    changeBackgroundColor("white");
    toggleVisibility('.content');
    updateHeaderFromUtmTerm();
});

// Обработчики событий
const mainHeader = document.querySelector('h1');
mainHeader.addEventListener('click', () => {
    alert("Вы кликнули на заголовок - так держать!");
});

const profilePhoto = document.querySelector('.profile-photo');
const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');
const form = document.querySelector('form');
const messageBox = document.createElement('div');
messageBox.style.display = 'none';
form.appendChild(messageBox);

const enlargePhoto = () => {
    profilePhoto.style.transform = 'scale(1.1)';
    profilePhoto.style.transition = 'transform 0.3s';
};

const resetPhotoSize = () => {
    profilePhoto.style.transform = 'scale(1)';
};

const changePhoto = () => {
    profilePhoto.src = '9.jpg';
    profilePhoto.alt = 'Фотография любимого преподавателя';
};

const showAlert = () => {
    alert('Не налегай, у меня не так много любимых преподавателей');
};

let lastTouchTime = 0;

profilePhoto.addEventListener('mouseover', () => {
    enlargePhoto();
    profilePhoto.style.transform += ' rotate(360deg)';
});

profilePhoto.addEventListener('mouseout', resetPhotoSize);
profilePhoto.addEventListener('click', changePhoto);
profilePhoto.addEventListener('dblclick', showAlert);

profilePhoto.addEventListener('touchstart', (event) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTouchTime;

    if (timeDifference < 300 && timeDifference > 0) {
        showAlert();
    }

    lastTouchTime = currentTime;
    enlargePhoto();

    setTimeout(() => {
        resetPhotoSize();
    }, 500);
});

profilePhoto.addEventListener('touchend', (event) => {
    if (event.touches.length === 0) {
        changePhoto();
    }
});

heading.addEventListener('mouseover', () => {
    heading.style.transform = 'scale(1.2)';
    heading.style.transition = 'transform 0.3s';
});

heading.addEventListener('mouseout', () => {
    heading.style.transform = 'scale(1)';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    messageBox.textContent = 'Форма отправлена!';
    messageBox.style.color = 'green';
    messageBox.style.display = 'block';
    messageBox.style.transition = 'color 0.5s';

    setTimeout(() => {
        messageBox.style.color = 'black';
    }, 1000);
});

paragraph.addEventListener('click', function() {
    this.style.transition = "background-color 1s ease";
    this.style.backgroundColor = "#ffcc00";
});

