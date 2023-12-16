document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('reset');
  const drawingArea = document.getElementById('drawingArea');
  const text = document.getElementById('text');
  drawingArea.appendChild(button);
  drawingArea.appendChild(text);
  let isDrawing = false;

  const emojis = [
    '😸',
    '🎀',
    '🚗',
    '🌸',
    '🐳',
    '🏰',
    '📚',
    '🌼',
    '🎉',
    '🍇',
    '🍓',
    '🚀',
    '🎨',
    '🏖️',
    '🍔',
    '🌈',
    '🏞️',
    '🍦',
    '🎢',
    '🍟',
    '🎁',
    '🚴‍♀️',
    '🏄‍♂️',
    '🐬',
    '🍕',
    '🍭',
    '🚁',
    '🍩',
    '📷',
    '🚴‍♂️',
    '🐼',
    '🌟',
    '🎭',
    '🍉',
    '🎸',
    '🍍',
    '🏓',
    '🐵',
    '🍎',
    '📱',
    '🎂',
    '🚤',
    '🚴‍♀️',
    '🍒',
    '🏀',
    '🍑',
    '🌺',
    '🎸',
    '🚂',
    '🎻',
    '🐘',
    '🌍',
    '🎧',
    '🎹',
    '🏆',
    '🌊',
    '🍈',
    '🌯',
    '🎬',
    '🍨',
    '🚗',
    '🏰',
    '📡',
    '🚀',
    '🍜',
    '🏰',
    '🎩',
    '🍟',
    '🎳',
    '🌲',
    '🍬',
    '🌓',
    '🍏',
    '🏇',
    '🌞',
    '🍲',
    '🍣',
    '🎭',
    '🚴‍♂️',
    '🍤',
    '🍡',
    '🎳',
    '🏄‍♀️',
    '🎺',
    '🐄',
    '🎨',
    '🍳',
    '🌄',
    '🍖',
    '🎵',
    '🍏',
    '🌃',
    '🎊',
    '🐢',
    '🏰',
    '📚',
    '🍜',
    '🚚',
    '🚤',
    '🌍',
    '🏓',
    '🍋',
    '🌠',
    '🎓',
    '🚑',
    '🎵',
    '🌲',
    '🍛',
    '🍠',
    '🍩',
    '🚁',
    '🏕️',
    '🍯',
    '📸',
    '🎹',
    '🌑',
    '🌄',
    '🏇',
    '🚴‍♀️',
    '🏞️',
    '🍇',
    '🏀',
    '🚴‍♂️',
    '🎻',
    '🍆',
    '🚢',
    '📱',
    '🌑',
    '🎃',
    '🍍',
    '🍭',
    '🍁',
    '🍏',
    '🌅',
    '🏆',
    '🎈',
    '🏖️',
    '🍚',
    '🌲',
    '🚀',
    '🍇',
    '🚂',
    '🍄',
    '🌹',
    '🎻',
    '🏞️',
    '🍔',
    '🎬',
    '🌓',
    '🐶',
    '🚴‍♀️',
    '📷',
    '🍀',
    '🚦',
    '🎉',
    '🍂',
    '🌟',
    '🍊',
    '🎼',
    '🏰',
    '🎺',
    '🎢',
    '🚚',
    '📚',
    '🚁',
    '🍑',
    '🍒',
    '🍛',
    '🚴‍♂️',
    '🍌',
    '📚',
    '🌊',
    '🏆',
    '🍨',
    '🍇',
    '🚁',
    '🏇',
    '🍠',
    '🌈',
    '🎸',
    '🌲',
    '🍆',
    '🍃',
    '🚁',
    '🍖',
    '🎩',
    '🍕',
    '🏓',
    '🎳',
    '🚤',
    '🎶',
    '🍙',
    '🚗',
    '🎭',
    '🍲',
    '🎂',
    '🌄',
    '🌺',
    '🍴',
    '🚦',
    '🏀',
    '🌋',
    '🎹',
    '🏕️',
    '🏆',
    '🎡',
    '🍦',
    '🚁',
    '🍋',
    '🏞️',
    '🌈',
    '🍬',
    '🚢',
    '🎨',
    '🍉',
    '🏄‍♂️',
    '🎵',
    '🚲',
    '🚴‍♀️',
    '🍄',
    '🏕️',
    '🌸',
    '🚴‍♂️',
    '🌠',
    '🚤',
    '🏞️',
    '🎸',
    '🍯',
    '🌑',
    '🚲',
    '🌲',
    '🌟',
    '🎬',
    '🏄‍♀️',
    '🌑',
    '🌄',
    '🎓',
    '🍉',
    '🌠',
    '🏰',
    '🚗',
    '🍊',
    '🎨',
    '🎢',
    '🍌',
    '🚀',
    '🎻',
    '🎹',
    '🌸',
    '🚚',
    '🎭',
    '🚴‍♀️',
    '📷',
    '🚁',
    '🍎',
    '🌺',
    '📸',
    '🍩',
    '🍍',
    '🚁',
    '🍓',
    '🚀',
    '🏓',
    '🌓',
    '🏖️',
    '🚁',
    '🍘',
    '🍆',
    '🏞️',
    '🚲',
    '🚴‍♂️',
    '🌲',
    '🚤',
    '🍜',
    '🏰',
    '🍨',
    '🏆',
    '🎹',
    '🍧',
    '🏇',
    '🌋',
    '🌺',
    '🚁',
    '🍀',
    '🍲',
    '🎶',
    '🎼',
    '🚲',
    '🚴‍♀️',
    '🍏',
    '🎡',
    '🎸',
    '🌏',
    '🎺',
    '🍍',
    '🍨',
    '🌳',
    '🚴‍♂️',
    '🏄‍♂️',
    '🌅',
    '🍕',
    '🏓',
    '🚢',
    '🎯',
    '🌇',
    '🚲',
    '🚴‍♀️',
    '🏖️',
    '🍂',
    '🏰',
    '🎼',
    '🍤',
    '🍑',
    '🏞️',
    '🌞',
    '🌍',
    '🍣',
    '🚁',
    '🏇',
    '🎬',
    '🍳',
    '🍦',
    '🚁',
    '🍖',
    '🍙',
    '🚤',
    '🚴‍♀️',
    '🌈',
    '🍉',
    '🏄‍♀️',
    '🍖',
    '🎺',
    '🍑',
    '🚁',
    '🌻',
    '🎻',
    '🏰',
    '🎶',
    '🎵',
    '🎭',
    '🍜',
    '🚗',
    '🍄',
    '🚀',
    '🏆',
    '🚁',
    '🍍',
    '🍂',
    '🍬',
    '🎢',
    '🌑',
    '🏓',
    '🍏',
    '🏄‍♀️',
    '🍋',
    '🏀',
    '🎳',
    '🍄',
    '🎹',
    '🍓',
    '🍩',
    '🎭',
    '🎸',
    '🏞️',
    '🍨',
    '🍅',
    '🏰',
    '🎻',
    '🎺',
    '🍠',
    '🎧',
    '🚁',
    '🚀',
    '🌟',
    '🎡',
    '🍦',
    '🍬',
    '🎢',
    '🚤',
    '🍈',
    '🌻',
    '🎨',
    '🌊',
    '🏆',
    '🏀',
    '🍚',
    '🚁',
    '🏓',
    '🍧',
    '🚲',
    '🍤',
    '🚴‍♂️',
    '🌓',
    '🎹',
    '🍁',
    '🏰',
    '📸',
    '🌌',
    '🎬',
    '🚚',
    '🍴',
    '🚴‍♀️',
    '🚀',
    '🍌',
    '🍆',
    '🌠',
    '🌃',
    '🌅',
    '🌺',
    '🚴‍♂️',
    '🎻',
    '🍖',
    '🏓',
    '🚤',
    '🎧',
    '🍏',
    '🍠',
    '🏖️',
    '🌊',
    '🍦',
    '🍄',
    '🎭',
    '🎸',
    '🍎',
    '🍯',
    '🌋',
    '🎯',
    '🏀',
    '🍇',
    '🌟',
    '🏞️',
    '🚁',
    '🍉',
    '🍓',
    '🚴‍♀️',
    '🍇',
    '🚗',
    '🍑',
    '🎵',
    '🏰',
    '📚',
    '🌌',
    '🍋',
    '🍊',
    '🚲',
    '🎉',
    '🍍',
    '🌠',
    '🍠',
    '🎊',
    '🚴‍♂️',
    '🍩',
    '🍘',
    '🏰',
    '🍓',
    '🍦',
    '🎸',
    '🌑',
    '🍆',
    '🍍',
    '🌳',
    '🎬',
    '🍏',
    '🎻',
    '🎺',
    '🎭',
    '🌍',
    '🚗',
    '🚲',
    '🚀',
    '🍨',
    '🎵',
    '🍜',
    '🚁',
    '🎢',
    '🏀',
    '🏓',
    '🎼',
    '🍯',
    '🍕',
    '🍒',
    '🍋',
    '🍍',
    '🎻',
    '🚲',
    '🎺',
    '🍈',
    '🍌',
    '🎧',
    '🚤',
    '🎳',
    '🌇',
    '🌋',
    '🍦',
    '🚴‍♀️',
    '🍏',
    '🚴‍♂️',
    '🍂',
    '🚴‍♀️',
    '🎹',
    '🍁',
    '🍆',
    '🍣',
    '🍟',
    '🍖',
    '🌓',
    '🎩',
    '🚁',
    '🌺',
    '🍠',
    '🎤',
    '🍴',
    '🍔',
    '🚢',
    '🍀',
    '🚗',
    '🍇',
    '🎂',
    '🍙',
    '🌻',
    '🎉',
    '🏆',
    '🎸',
    '🚴‍♀️',
    '🚀',
    '🎵',
    '🏖️',
    '🍈',
    '🎧',
    '🌋',
    '🍩',
    '🌄',
    '🎓',
    '🍭',
    '🍉',
    '🌈',
    '🎹',
    '🍍',
    '🍄',
    '🏰',
    '🏞️',
    '🍲',
    '🏰',
    '🎬',
    '🍇',
    '🚗',
    '🍤',
    '🍍',
    '🚤',
    '🎺',
    '🍀',
    '🎻',
    '🚁',
    '🎢',
    '🍓',
  ];

  // Event listeners for mouse down, up, and move events
  drawingArea.addEventListener('mousedown', startDrawing);
  drawingArea.addEventListener('mouseup', stopDrawing);
  drawingArea.addEventListener('mousemove', drawEmoji);
  drawingArea.addEventListener('touchstart', startDrawing);
  drawingArea.addEventListener('touchend', stopDrawing);
  drawingArea.addEventListener('touchmove', drawMobileEmoji);
  drawingArea.addEventListener('click', drawSingleEmoji);

  function startDrawing() {
    isDrawing = true;
  }

  function stopDrawing() {
    isDrawing = false;
  }

  // Draw on browser
  function drawEmoji(e) {
    if (!isDrawing) return;

    text.classList.add('hidden');
    const emoji = getRandomEmoji();

    // Create an emoji element
    const emojiElement = document.createElement('div');
    emojiElement.textContent = emoji;
    emojiElement.style.position = 'absolute';

    const emojiSize = 24;
    emojiElement.style.left = e.clientX - emojiSize / 2 + 'px';
    emojiElement.style.top = e.clientY - emojiSize / 2 + 'px';
    emojiElement.style.fontSize = '24px';

    // Append the emoji element to the drawing area
    drawingArea.appendChild(emojiElement);
  }

  // Draw on mobile
  function drawMobileEmoji(e) {
    if (!isDrawing) return;

    text.classList.add('hidden');
    const emoji = getRandomEmoji();

    // Create an emoji element
    const emojiElement = document.createElement('div');
    emojiElement.textContent = emoji;
    emojiElement.style.position = 'absolute';

    const emojiSize = 24;
    emojiElement.style.left = e.touches[0].clientX - emojiSize / 2 + 'px';
    emojiElement.style.top = e.touches[0].clientY - emojiSize / 2 + 'px';
    emojiElement.style.fontSize = '18px';

    // Append the emoji element to the drawing area
    drawingArea.appendChild(emojiElement);
  }

  function drawSingleEmoji(e) {
    text.classList.add('hidden');
    const emoji = getRandomEmoji();

    // Create an emoji element
    const emojiElement = document.createElement('div');
    emojiElement.textContent = emoji;
    emojiElement.style.position = 'absolute';

    const emojiSize = 24;
    emojiElement.style.left = e.clientX - emojiSize / 2 + 'px';
    emojiElement.style.top = e.clientY - emojiSize / 2 + 'px';
    emojiElement.style.fontSize = '24px';

    // Append the emoji element to the drawing area
    drawingArea.appendChild(emojiElement);
  }

  function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
});
