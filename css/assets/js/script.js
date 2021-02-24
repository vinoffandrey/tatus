/*=====================================Меню-бургер==============================*/
$(document).ready(function () {
	$('.menu__burger').click(function (event) {
		$('.menu__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});
$(document).ready(function () {
	$('.header__link').click(function (event) {
		$('.menu__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
});

/*======================================Попапы==============================*/
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener("click", function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
/*======================================Прокрутка==============================*/
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 700, 'linear');
});

/*=====================================Слайдер о нас==============================*/
$(document).ready(function () {
	$('.about__slider').slick({
		adapriveHeight: true,
	});
});
/*=====================================Слайдер тату пирсинг==============================*/
$(document).ready(function () {
	$('.tatu__slider, .pirsing__slider').slick({
		adaptiveHeight: true,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 910,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
});
/*=====================================Слайдер комментарии==============================*/
$(document).ready(function () {
	$('.coments__slider').slick({
		adaptiveHeight: true,
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
});
/*=====================================Табы FAQ==============================*/
$(document).ready(function () {
	$('.faq__item-title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

/*=====================================Новости==============================*/
$(document).ready(function () {
	$('.news__button').click(function (event) {
		$('.news__close, .news__button').toggleClass('active');
	});
});
/*=====================================Выпадающие списки в попап==============================*/
$(document).ready(function () {
	$('.drop__button').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
/*=====================================Настройка попапов==============================*/
$(".popup__item").click(function () {
	$(".popup__item").removeClass('active');
	$(this).addClass('active');
});
$(".popup__item1").click(function () {
	$(".link__button").removeClass('active');
	$('.popup__button1').addClass('active');
});
$(".popup__item2").click(function () {
	$(".link__button").removeClass('active');
	$('.popup__button2').addClass('active');
});
$(".popup__item3").click(function () {
	$(".link__button").removeClass('active');
	$('.popup__button3').addClass('active');
});
