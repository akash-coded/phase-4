function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You disagreed.");
}

function ask(question, yes, no) {
  // Function declaration
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

export { showOk, showCancel, ask };
