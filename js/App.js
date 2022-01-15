const manager = new MovementManager();
const view = new View(manager);
const form = document.forms["formid"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  manager.addItem(
    form["type"].value,
    form["description"].value,
    form["value"].value
  );
  form["description"].value = "";
  form["value"].value = "";
  app();
});

const assignEvents = () => {
  document.querySelectorAll(".elemento_eliminar").forEach((element) => {
    element.addEventListener(
      "click",
      (e) => {
        manager.deleteItem(e.target.id);
        app();
      },
      true
    );
  });
};

const app = () => {
  view.render();
  assignEvents();
};

app();
