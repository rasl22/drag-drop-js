const item = document.querySelector(".item"),
  placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

placeholders.forEach((item) => {
  item.addEventListener("dragover", dragover);
  item.addEventListener("dragenter", dragenter);
  item.addEventListener("dragleave", dragleave);
  item.addEventListener("drop", dragdrop);
});

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  event.target.className = "item";
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}

// const item = document.querySelector(".item"),
//   placeholders = document.querySelectorAll(".placeholder");

// item.addEventListener("dragstart", dragStart);
// item.addEventListener("dragend", dragEnd);

// function dragStart(event) {
//   event.target.classList.add("hold");
//   setTimeout(() => {
//     event.target.classList.add("hide");
//   }, 0);
// }

// function dragEnd(event) {
//   event.target.className = "item";
// }

// placeholders.forEach((placeholder) => {
//   item.addEventListener("dragover", dragover);
//   item.addEventListener("dragenter", dragenter);
//   item.addEventListener("dragleave", dragleave);
//   item.addEventListener("dragdrop", dragdrop);
// });

// function dragover(event) {
//   event.preventDefault();
// }

// function dragenter(event) {
//   event.target.classList.add("hovered");
// }

// function dragleave(event) {
//   event.target.classList.remove("hovered");
// }

// function dragdrop(event) {
//   event.target.classList.remove("hovered");
//   event.target.append(item);
// }
