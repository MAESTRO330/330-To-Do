const task_title_input = document.getElementById("task__title");
const task_disc_input = document.getElementById("task__disc");
const deadline_input = document.getElementById("deadline");
const add_task_btn = document.getElementById("save__btn");
const task_list = document.getElementById("task__list");

add_task_btn.addEventListener("click", () => {
    const task_title = task_title_input.value;
    const task_disc = task_disc_input.value;
    const deadline = deadline_input.value;
    if (task_title.trim() === "" || deadline === "") {
        alert("Заполните все поля")
    return;
    }

    const selected_date = new Date(deadline);
    const current_date = new Date();

    if (selected_date < current_date) {
        alert("Нельзя выбрать дату раньше, чем сегодня");
        return; 
    }

    const task_item = document.createElement("div");
    task_item.classList.add("main__task");
    task_item.innerHTML = `
        <div class="main__task__text">
            <h3 class="main__task__title">${task_title}</h3>
            <p class="main__task__disc">${task_disc}</p>
            <p class="main__task__deadline">Дата выполнения: ${deadline}</p>
        </div>
        <input type="checkbox" class="main__task__check">
    `;

    task_list.appendChild(task_item);

    task_title_input.value = "";
    task_disc_input.value = "";
    deadline_input.value = "";
});

    task_list.addEventListener("click", (event) => {
    if (event.target.classList.contains("main__task__check")) {
        const task_item = event.target.parentElement;
        task_item.style.backgroundColor = "#f2f2f2";
        event.target.disabled = true;
    }
}); 

