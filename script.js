document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('task-list');
  const form = document.getElementById('task-form');

  function loadTasks() {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(tasks => {
        taskList.innerHTML = '';
        tasks.forEach(addTaskToDOM);
      });
  }

  function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('data-id', task.id);
    checkbox.className = 'form-check-input me-2';

    // Task Text
    const span = document.createElement('span');
    span.innerHTML = `${task.title} ${task.dueDate ? `<small class="text-muted"> - ${task.dueDate}</small>` : ''}`;
    if (task.completed) {
      span.classList.add('text-decoration-line-through', 'text-muted');
    }

    // Delete Button
    const btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm';
    btn.innerHTML = '🗑️';
    btn.setAttribute('data-id', task.id);

    // Wrap checkbox and task text in a div
    const leftDiv = document.createElement('div');
    leftDiv.className = 'd-flex align-items-center';
    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(btn);

    taskList.appendChild(li);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const dueDate = document.getElementById('dueDate').value;
    if (!title) return; // simple validation

    fetch('/api/tasks', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ title, dueDate })
    }).then(() => {
      form.reset();
      loadTasks();
    });
  });

  taskList.addEventListener('click', e => {
    if (e.target.matches('button')) {
      // Delete task
      const id = e.target.getAttribute('data-id');
      fetch(`/api/tasks/${id}`, { method: 'DELETE' }).then(loadTasks);
    }

    if (e.target.matches('input[type="checkbox"]')) {
      // Toggle complete
      const id = e.target.getAttribute('data-id');
      fetch(`/api/tasks/${id}`, { method: 'PUT' }).then(loadTasks);
    }
  });

  loadTasks();
});
