const employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Task 1",
            "task_description": "Complete the report analysis.",
            "task_date": "2025-03-21",
            "category": "Reporting",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Task 2",
            "task_description": "Attend the team meeting.",
            "task_date": "2025-03-22",
            "category": "Meeting",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Task 3",
            "task_description": "Prepare financial presentation.",
            "task_date": "2025-03-23",
            "category": "Finance",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Task 1",
            "task_description": "Prepare the marketing plan.",
            "task_date": "2025-03-21",
            "category": "Marketing",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Task 2",
            "task_description": "Update website content.",
            "task_date": "2025-03-22",
            "category": "Web Development",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Task 1",
            "task_description": "Complete the employee onboarding process.",
            "task_date": "2025-03-21",
            "category": "HR",
            "active": true,
            "new_task": true,
            "completed": true,
            "failed": false
          },
          {
            "task_title": "Task 2",
            "task_description": "Conduct employee training session.",
            "task_date": "2025-03-22",
            "category": "HR",
            "active": false,
            "new_task": false,
            "completed": false,
            "failed": true
          },
          {
            "task_title": "Task 3",
            "task_description": "Update employee records.",
            "task_date": "2025-03-23",
            "category": "HR",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Task 1",
            "task_description": "Complete the client project presentation.",
            "task_date": "2025-03-21",
            "category": "Client Relations",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Task 2",
            "task_description": "Research market trends.",
            "task_date": "2025-03-22",
            "category": "Market Research",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "task_title": "Task 3",
            "task_description": "Prepare project budget.",
            "task_date": "2025-03-23",
            "category": "Finance",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Task 1",
            "task_description": "Design new logo for the brand.",
            "task_date": "2025-03-21",
            "category": "Design",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Task 2",
            "task_description": "Update social media posts.",
            "task_date": "2025-03-22",
            "category": "Marketing",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Task 3",
            "task_description": "Complete brand guideline document.",
            "task_date": "2025-03-23",
            "category": "Design",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          }
        ]
      }
]
const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStrorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))


}
export const getLocalStrorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}
  