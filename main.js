let Width = 400;
let Height = 400;

var canvas = new fabric.Canvas('c', {
  width: Width,
  height: Height
});

fabric.Image.fromURL('img/1962.750x0.png', (img) => {
  canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
    scaleX: canvas.width / img.width,
    scaleY: canvas.height / img.height
 });
});

// function ClickCh(img) {
//   const canvCenter = canvas.getCenter();
//   fabric.Image.fromURL('img/pocket.png', img => {
//     canvas.add(img)
//     img.set({
//       scaleX: (canvas.width / img.width) * 0.25,
//       scaleY: (canvas.height / img.height) * 0.25,
//       originX: 'center',
//       originY: 'center',
//       left: canvCenter.left,
//       top: canvCenter.top
//     })
//     canvas.requestRenderAll()
//   })
// }

const dragAndDrop = () => {
  const card = document.querySelector('.accessories');
  const cell = document.querySelector('.container');

  const dragStart = function () {
    setTimeout(() => {
      this.classList.add('hide');
    }, 0)
  };
  const dragEnd = function () {
    this.classList.remove('hide');
  };
  const dragOver = function (evt) {
    evt.preventDefault();
  };
  const dragEnter = function () {
    evt.preventDefault();
    this.classList.add('hovered');
  };
  const dragLeave = function () {
    this.classList.remove('hovered');
  };
  const dragDrop = function () {
    this.classList.remove('hovered');

    const canvCenter = canvas.getCenter();
    fabric.Image.fromURL('img/pocket.png', img => {
      canvas.add(img)
      img.set({
        scaleX: (canvas.width / img.width) * 0.25,
        scaleY: (canvas.height / img.height) * 0.25,
        originX: 'center',
        originY: 'center',
        left: canvCenter.left,
        top: canvCenter.top
      })
      canvas.requestRenderAll()
    })
  };
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);

  cell.addEventListener('dragover', dragOver);
  cell.addEventListener('dragenter', dragEnter);
  cell.addEventListener('dragleave', dragLeave);
  cell.addEventListener('drop', dragDrop);
};

dragAndDrop();